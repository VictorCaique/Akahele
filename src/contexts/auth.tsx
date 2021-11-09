import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as auth from '../services/auth';
import firebase from 'firebase';

interface AuthContextData {
    signed: boolean,
    cadastrar(email: string, pass: string, confirmPass: string): Promise<void>,
    user: object | null,
    signOut(): void,
    loading: boolean,
}


const authContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<firebase.User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStorageData() {
            const storagedUser = await AsyncStorage.getItem('@RNAuth:user')
            const storagedToken = await AsyncStorage.getItem('@RNAuth:token')

            if (storagedToken && storagedUser) {
                setUser(JSON.parse(storagedUser))
                setLoading(false);
            } else {
                setLoading(false)
            }
        }

        loadStorageData();
    }, [])

    async function cadastrar(email: string, pass: string, confirmPass: string) {
        const response = auth.cadastro(email, pass, confirmPass);

        setUser(response as firebase.User);

        const reponseJ = response.toJSON();

        await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(reponseJ))
        await AsyncStorage.setItem('@RNAuth:token', response.getIdToken())
    }

    function signOut() {
        AsyncStorage.clear().then(() => {
            setUser(null)
        })
    }

    return (
        <authContext.Provider value={{ signed: user ? true : false, cadastrar, user, signOut, loading }}>
            {children}
        </authContext.Provider>
    )
}

export default authContext;