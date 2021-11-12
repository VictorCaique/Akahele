import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as auth from '../services/auth';
import firebase from 'firebase';

interface AuthContextData {
    signed: boolean,
    cadastrar(email: string, pass: string, confirmPass: string): Promise<void>,
    userCredencials: firebase.User | null,
    signOut(): void,
    signIn(email: string, pass: string): Promise<void>,
    loading: boolean,
}


const authContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [userCredencials, setUserCredencials] = useState<firebase.User | null>(null);
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

    async function cadastrar(email: string, pass: string, confirmPass: string) {
        const response = await auth.cadastro(email, pass, confirmPass) as firebase.User;

        setUserCredencials(response as firebase.User);

        // const reponseJ = response.toJSON();

        // const token = await response.getIdToken();

        // await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(reponseJ))
        // await AsyncStorage.setItem('@RNAuth:token', token)
    }

    function signOut() {
        AsyncStorage.clear().then(() => {
            setUserCredencials(null);
            setSigned(false);
        })
    }

    return (
        <authContext.Provider value={{ signed, cadastrar, userCredencials, signOut, signIn, loading }}>
            {children}
        </authContext.Provider>
    )
}

export default authContext;