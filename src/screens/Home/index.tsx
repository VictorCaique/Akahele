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
                        storageRef.child("user-avatar/" + docData.avatar_image).getDownloadURL().then(avatarUrl => {
                            list.push({ ...doc.data(), idPost: doc.id, uriImage: url, uriAvatar: avatarUrl });
                            console.log("SACO: ", list)
                            setFeed(list);
                        })
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

