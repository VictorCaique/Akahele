import React, { useState, useEffect, useContext } from 'react';
import { FlatList, Text, View, LogBox, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

import authContext from '../../contexts/auth';
// import { MenuDrop } from "../../components/Menu"

import { userCollection, postCollection } from '../../types'

import { database, storage } from '../../config/firebaseConfig';
// import { getImage } from '../../controllers/storageController';

import {
    Post,
    Loading,
    PostImage,
    AvatarUser,
    Name,
    PostDescription,
    UserDescription,
    styles
} from './style';

export function Home() {
    LogBox.ignoreLogs(["[Unhandled promise rejection: FirebaseError: Firebase Storage: Object 'user-avatar/undefined' does not exist. (storage/object-not-found)]"])

    const { user } = useContext(authContext)

    const initialArr: Array<Object> = []
    const [feed, setFeed] = useState(initialArr);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    // const [user, setUser] = useState(initialArr);

    async function loadPage(pageNumber = page, shouldRefresh = false) {
        setLoading(true)

        async function loadFeed(pageNum = pageNumber, refresh = shouldRefresh) {
            var storageRef = storage.ref();
            database.collection('publicacao').limit(5).orderBy('usuario').startAfter(pageNum > 1 ? (pageNum * 5) - 1 : 1).get().then(querySnapshot => {
                var list: Array<Object> = []
                querySnapshot.forEach(doc => {
                    var docData = doc.data() as postCollection;
                    storageRef.child("post-image/" + docData.post_image).getDownloadURL().then(url => {
                        // console.log("UURL: ", url);
                        storageRef.child("user-avatar/" + docData.avatar_image).getDownloadURL().then(avatarUrl => {
                            list.push({ ...doc.data(), idPost: doc.id, uriImage: url, uriAvatar: avatarUrl });
                            console.log("SACO: ", list)
                            const data = feed

                            setFeed(refresh ? data : [...data, ...list]);
                        })
                    }).catch(e => {
                        console.log("ERROR: " + e);
                    })


                })

            })
        }
        await loadFeed(page);
        setLoading(false);
        setPage(page + 1);
    }

    async function refreshList() {
        setRefreshing(true);

        await loadPage(1, refreshing);

        setRefreshing(false)
    }

    useEffect(() => {
        loadPage();
        // console.log("*******************************");
        // console.log("FEED: ", feed);
    }, [])

    const deletarPost = (idPost: string, usuario: string) => {
        if (usuario == user?.uid) {
            database.collection("publicacao").doc(idPost).delete().then(e => {
                console.log("Deletado")
            })
        } else {
            Alert.alert('Atenção', 'Você não tem permissão para excluir essa publicação.')
        }
    }

    const deleteAlert = (idPost: string, usuario: string) =>
        Alert.alert('Atenção', 'Tem certeza que deseja excluir essa publicação?', [
            {
                text: 'Cancelar',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => deletarPost(idPost, usuario) },
        ]);

    return (
        <View>
            <FlatList
                data={feed}
                keyExtractor={(item, index) => String(index)}
                onEndReached={() => loadPage()}
                refreshing={refreshing}
                onRefresh={refreshList}
                onEndReachedThreshold={0.1}
                ListFooterComponent={loading ? <Loading /> : null}
                renderItem={({ item }: any) => (

                    <Post style={styles.container}>
                        <Ionicons style={{ position: "absolute", right: 40, top: 10 }} name="close" size={20} color={"#FF0000"} onPress={() => { deleteAlert(item.idPost, item.usuario) }} />

                        <UserDescription>
                            <AvatarUser source={{ uri: item.uriAvatar }} />
                            <Name style={styles.title}>{item.nome_usuario}</Name>
                        </UserDescription>

                        <PostImage style={styles.imagem} source={{ uri: item.uriImage }} />
                        <PostDescription style={styles.description}>
                            {item.texto_publicacao}
                        </PostDescription>
                    </Post>
                )} />


        </View >
    )
}

