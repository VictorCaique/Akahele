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
        async function loadStorageData() {
            const storagedUser = await AsyncStorage.getItem('@RNAuth:user')
            const storagedToken = await AsyncStorage.getItem('@RNAuth:token')

            if (storagedToken && storagedUser) {
                setUserCredencials(JSON.parse(storagedUser))
                setLoading(false);
                setSigned(true);
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

    async function cadastrar(estado: string, telefone: string, nome: string, userCredencials: firebase.User, image: string | undefined) {

        const docData = {
            estado: estado,
            email: userCredencials.email as string,
            nome_usuario: nome,
            telefone: telefone,
            uid: userCredencials.uid,
            avatar: userCredencials.uid + ".jpeg"
        }

        setUser(docData);

        database.collection('usuarios').add(docData).then(docRef => {
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
        <authContext.Provider value={{ signed, cadastrar, userCredencials, signOut, signIn, loading, user }}>
            {children}
        </authContext.Provider>
    )
}

export default authContext;