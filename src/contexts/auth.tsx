import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as auth from '../services/auth';
import firebase from 'firebase';
import { database, storage } from '../config/firebaseConfig'

import { userCollection } from '../types'

interface AuthContextData {
    signed: boolean,
    cadastrar(estado: string, telefone: string, nome: string, userCredencials: firebase.User, image: string | undefined): Promise<void>,
    userCredencials: firebase.User | null,
    editar(params: userCollection): Promise<void>,
    signOut(): void,
    signIn(email: string, pass: string): Promise<void>,
    loading: boolean,
    user: userCollection | null,
}


const authContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [userCredencials, setUserCredencials] = useState<firebase.User | null>(null);
    const [user, setUser] = useState<userCollection | null>(null);
    const [signed, setSigned] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStorageData(): Promise<void> {
            const storagedUser = await AsyncStorage.getItem('@RNAuth:user')
            const storagedToken = await AsyncStorage.getItem('@RNAuth:token')
            setUserCredencials(JSON.parse(storagedUser as string))
            var pUid = userCredencials?.uid;


            if (storagedUser && pUid !== undefined) {
                console.log("AAAAAAAA" + userCredencials?.uid)
                database.collection("usuarios").where("uid", "==", pUid as string).get().then(snapshot => {
                    console.log("Busca: " + snapshot.docs.length)
                    snapshot.forEach(doc => {
                        var cUser = doc.data();
                        setUser(cUser as userCollection);
                        console.log("UUser" + user);

                        setLoading(false);
                        setSigned(true);
                    })
                });
            } else {
                setLoading(false)
            }
        }

        loadStorageData();
    }, [])

    async function signIn(email: string, pass: string): Promise<any> {
        var userCredencials: firebase.User = {} as firebase.User;
        userCredencials = await auth.singIn(email, pass) as firebase.User;

        setUserCredencials(userCredencials);

        database.collection("usuarios").get().then(snapshot => {
            snapshot.forEach(doc => {
                var cUser = doc.data();
                if ((cUser as userCollection).uid == userCredencials?.uid) {
                    setUser(cUser as userCollection);
                    console.log(user);
                }

            })
        })

        const reponseJ = userCredencials.toJSON();

        const token = await userCredencials.getIdToken();

        await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(reponseJ))
        await AsyncStorage.setItem('@RNAuth:token', token);

        const storagedUser = await AsyncStorage.getItem('@RNAuth:user')
        const storagedToken = await AsyncStorage.getItem('@RNAuth:token')

        if (storagedToken && storagedUser) {
            setSigned(true);
        }
    }

    async function editar(params: userCollection) {
        await database.collection('usuarios').doc(user?.idUser as string).set(params);
    }

    async function cadastrar(estado: string, telefone: string, nome: string, userCredencials: firebase.User, image: string | undefined) {

        const docData = {
            estado: estado,
            email: userCredencials.email as string,
            nome_usuario: nome,
            telefone: telefone,
            uid: userCredencials.uid,
            avatar_image: userCredencials.uid + ".jpeg",
            idUser: ""
        }

        setUser(docData);

        database.collection('usuarios').add(docData).then(docRef => {
            database.collection('usuarios').doc(docRef.id).set({
                estado: estado,
                email: userCredencials.email as string,
                nome_usuario: nome,
                telefone: telefone,
                uid: userCredencials.uid,
                avatar_image: userCredencials.uid + ".jpeg",
                idUser: docRef.id
            });
            console.log("Cadastro Concluido: ")
            console.log(docRef);
        });
        // var imageUp = new File([image as Blob], userCredencials.uid + ".jpeg")
        // var refStorage = storage.ref();
        // var photoRef = refStorage.child('user-avatar/' + imageUp.name);
        // photoRef.put(imageUp, metaData).then(snapshot => {
        //     console.log("Imagem Upload !!!!!" + snapshot.ref)
        // })

        const reponseJ = userCredencials.toJSON();

        const token = await userCredencials.getIdToken();

        await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(reponseJ))
        await AsyncStorage.setItem('@RNAuth:token', token);

        const storagedUser = await AsyncStorage.getItem('@RNAuth:user')
        const storagedToken = await AsyncStorage.getItem('@RNAuth:token')

        if (storagedToken && storagedUser) {
            setSigned(true);
        }
    }

    function signOut() {
        AsyncStorage.clear().then(() => {
            setUserCredencials(null);
            setSigned(false);
        })
    }

    return (
        <authContext.Provider value={{ signed, cadastrar, editar, userCredencials, signOut, signIn, loading, user }}>
            {children}
        </authContext.Provider>
    )
}

export default authContext;