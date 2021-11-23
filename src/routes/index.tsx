import React, { useContext } from 'react';

import authContext from '../contexts/auth';

import { AuthRoutes } from './auth.routes'
import { AppRoutes } from './app.routes'
import AppLoading from 'expo-app-loading';
// import { ActivityIndicator, View } from 'react-native';

export function Routes() {
    const { signed, loading } = useContext(authContext);

    if (loading) {
        return (
            <AppLoading />
        )
    }

    return signed ? <AppRoutes /> : <AuthRoutes />
}