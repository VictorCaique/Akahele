import React, { useState, useEffect } from 'react';
import { FlatList, Text, View } from 'react-native'

import { userCollection, postCollection } from '../../types'

import database from '../../config/firebaseConfig';
import { getImage } from '../../controllers/storageController';
import 'firebase/firestore'

import {
    Post,
    PostBackgroud,
    PostImage,
    AvatarUser,
    Name,
    PostDescription,
    UserDescription
} from './style';

export function Home() {
    const initialArr: Array<object> = []
    const [feed, setFeed] = useState(initialArr);
    const [user, setUser] = useState(initialArr);

    useEffect(() => {
        async function loadFeed() {
            database.collection('publicacao').onSnapshot(query => {
                var list: Array<object> = [];
                query.forEach(doc => {
                    list.push({ ...doc.data(), idPost: doc.id })
                    // console.log(list);
                })
                var userList: Array<object> = []
                list.forEach((props): any => {
                    var post: any = props;
                    database.collection('usuarios').onSnapshot(query => {
                        query.forEach(doc => {
                            if (doc.id == post.usuario) {
                                userList.push({ ...doc.data(), idUser: doc.id })
                                // console.log(userList)
                            }
                        })
                    })
                })
                setUser(userList);

                list.forEach((value, index, arr) => {
                    var post = list[index] as postCollection;
                    var usuario = user[index] as userCollection;
                    // console.log(usuario);
                    if (usuario.idUser == post.usuario) {
                        list[index] = { ...post, ...usuario }
                    }
                })
                setFeed(list);
            });
        }
        loadFeed();
        // console.log(feed);
        // console.log("*******************************");
        // console.log(user);
    }, [])

    return (
        <View>
            <FlatList
                data={feed}
                keyExtractor={(item, index) => String(index)}
                renderItem={({ item }: any) => (
                    <Post>
                        <PostBackgroud>
                            <PostImage source={{ uri: getImage(item.postId, "post_image") }} />
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

