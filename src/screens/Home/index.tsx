import React, { useState, useEffect } from 'react';
import { FlatList, Text, View } from 'react-native'

import getFeed from '../../services/feed'

import { userCollection, postCollection } from '../../types'

import { database, storage } from '../../config/firebaseConfig';
// import { getImage } from '../../controllers/storageController';

import {
    Post,
    PostBackgroud,
    PostImage,
    AvatarUser,
    Name,
    PostDescription,
    UserDescription,
    styles
} from './style';

export function Home() {
    const initialArr: Array<Object> = []
    const [feed, setFeed] = useState(initialArr);
    // const [user, setUser] = useState(initialArr);

    useEffect(() => {
        async function loadFeed() {
            var storageRef = storage.ref()
            database.collection('publicacao').get().then(querySnapshot => {
                var list: Array<Object> = []
                querySnapshot.forEach(doc => {
                    var docData = doc.data() as postCollection;
                    storageRef.child("post-image/" + docData.post_image).getDownloadURL().then(url => {
                        // console.log("UURL: ", url);
                        list.push({ ...doc.data(), idPost: doc.id, uriImage: url });
                        console.log("SACO: ", list)
                        setFeed(list);
                    }).catch(e => {
                        console.log("ERROR: " + e);
                    })


                })

            })
        }
        loadFeed();
        // console.log("*******************************");
        console.log("FEED: ", feed);
    }, [])

    return (
        <View>
            <FlatList
                data={feed}
                keyExtractor={(item, index) => String(index)}
                renderItem={({ item }: any) => (
                    <Post style={styles.container}>
                        <PostBackgroud style={styles.postBackgroud}>
                            <PostImage style={styles.imagem} source={{ uri: item.uriImage }} />
                            <PostDescription>
                                {item.texto_publicacao}
                            </PostDescription>
                        </PostBackgroud>
                        <UserDescription>
                            <AvatarUser source={{ uri: item.avatar_image }} />
                            <Name>{item.nome_usuario}</Name>
                        </UserDescription>
                    </Post>
                )} />


        </View >
    )
}

