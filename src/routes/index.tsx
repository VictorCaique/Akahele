import React, { useContext } from 'react';

import authContext from '../contexts/auth';

import { AuthRoutes } from './auth.routes'
import { TabRoutes } from './app.routes'
import AppLoading from 'expo-app-loading';
import { ActivityIndicator, View } from 'react-native';

export function Routes() {
    const { signed, loading } = useContext(authContext);

    if (loading) {
        return (
            <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size="large" color="#999" />
            </View>
        )
    }

    return signed ? <TabRoutes /> : <AuthRoutes />
}