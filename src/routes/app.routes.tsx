import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { LogIn } from '../screens/LogIn'
import { Recover } from '../screens/Recover'

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
    return (
        <Navigator
            initialRouteName="LogIn"
            headerMode="none"
            screenOptions={{
                cardStyle: {
                    backgroundColor: 'transparent'
                }
            }}>
            <Screen name="LogIn" component={LogIn} />
            <Screen name="Recover" component={Recover} />
        </Navigator>
    )
} 