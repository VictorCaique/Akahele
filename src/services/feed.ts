import { database, storage } from "../config/firebaseConfig";

import { postCollection } from '../types'

export default async function getFeed() {
    var feed: Array<Object> = [];
    var postList = getPublicacoes();
    console.log("POST LIST: ", postList)
    var i = 0;
    postList.forEach((element) => {
        var DocRef = element as postCollection;
        Object.defineProperty(element, 'user', {
            value: getUsuario(DocRef.usuario),
        });
        Object.defineProperty(element, 'postImage', {
            value: getPostImage(DocRef.post_image),
        })
        feed.push(element);
        console.log("BBBBBBBBBB: ", element)
        i++;
    })

    return feed
}

export function getPublicacoes() {
    var list: Array<Object> = [];
    database.collection('publicacao').get().then(query => {
        query.forEach(doc => {
            list.push({ ...doc.data(), idPost: doc.id });
        })
    })
    return list;
}

export function getUsuario(doc: string) {
    var list: Object = {};
    database.collection('usuarios').doc(doc).get().then(documentSnapshot => {
        list = { ...documentSnapshot.data(), idUser: documentSnapshot.id };
    })

    return list;
}

export function getPostImage(child: string) {
    var storageRef = storage.ref();
    storageRef.child("post-image/" + child)
        .getDownloadURL()
        .then(url => {
            console.log("URL DOWNLOAD: " + url);
            return url
        })
        .catch(e => {
            console.log("Erro: " + e)
        })

}