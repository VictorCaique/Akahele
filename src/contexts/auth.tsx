import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as auth from '../services/auth';

interface AuthContextData {
    signed: boolean,
    signIn(): Promise<void>,
    user: object | null,
    signOut(): void,
    loading: boolean,
}


const authContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<object | null>(null);
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

    async function signIn() {
        const response = await auth.singIn();

        setUser(response.user);

        await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user))
        await AsyncStorage.setItem('@RNAuth:token', response.token)
    }

    function signOut() {
        AsyncStorage.clear().then(() => {
            setUser(null)
        })
    }

    return (
        <authContext.Provider value={{ signed: user ? true : false, signIn, user, signOut, loading }}>
            {children}
        </authContext.Provider>
    )
}

export default authContext;