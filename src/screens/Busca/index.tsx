import React, { useState, useContext, useEffect } from 'react';
import { View, FlatList, LogBox, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { DrawerScreenProps } from '@react-navigation/drawer';

import { storage, database } from '../../config/firebaseConfig'

import { DrawerList, postCollection } from '../../types';
import authContext from '../../contexts/auth';

import { EntradaTexto } from '../../components/EntradaTexto';

import { theme } from '../../global/styles/theme'
import * as st from './style'
import {
    Name,
    Post,
    PostBackgroud,
    AvatarUser,
    UserDescription,
    PostImage,
    PostDescription,
    styles,
    Loading
} from '../Home/style'

export function Busca({ navigation }: DrawerScreenProps<DrawerList>) {
    const [mensagem, setMensagem] = React.useState("");
    LogBox.ignoreLogs(["[Unhandled promise rejection: FirebaseError: Firebase Storage: Object 'user-avatar/undefined' does not exist. (storage/object-not-found)]"])

    const { user } = useContext(authContext)

    const initialArr: Array<Object> = []
    const [feed, setFeed] = useState(initialArr);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [search, setSearch] = useState(user?.nome_usuario as string)
    // const [user, setUser] = useState(initialArr);

    async function loadPage(pageNumber = page, shouldRefresh = false, keyWord = search) {
        setLoading(true)

        async function loadFeed(pageNum = pageNumber, refresh = shouldRefresh, busca = keyWord) {
            var storageRef = storage.ref();
            const startAft = pageNum > 1 ? (pageNum * 5) - 1 : 1
            database.collection('publicacao').limit(5).where("nome_usuario", "==", busca).orderBy('usuario').startAfter(startAft).get().then(querySnapshot => {
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
        <View style={st.styles.container}>
            <View style={st.styles.containerBusca}>
                <EntradaTexto style={{
                    borderBottomColor: "#0B6E73",
                    minWidth: 300,
                }}
                    placeholder="Busque por usuários ou comunidades "
                    labelStyle={{ color: "#0B6E73", fontFamily: theme.fonts.robotoMedium }}
                    inputStyle={{ color: "#000" }}
                    borderColor={"#0B6E73"}
                    value={mensagem}
                    onChangeText={setMensagem}
                    height={60}
                />
            </View>
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
        </View>
    )
}