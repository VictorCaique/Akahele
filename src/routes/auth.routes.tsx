import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { TopStackParamList } from '../types';

import { LogIn } from '../screens/LogIn'
import { Recover } from '../screens/Recover'
import { Recover2 } from '../screens/Recover2'
import { NovaSenha } from '../screens/NovaSenha'
import { Cadastro } from '../screens/Cadastro'
import { Cadastro2 } from '../screens/Cadastro2'

const Stack = createStackNavigator<TopStackParamList>();

export function AuthRoutes() {
    return (
        <Stack.Navigator headerMode="none"
            initialRouteName="LogIn"
        // headerMode="float"
        // screenOptions={{
        //     headerRight: () => (
        //         <Button
        //             onPress={() => alert('This is a Button!')}
        //             title="Info"
        //             color="#FFF"
        //         />
        //     )
        // }} 
        >
            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen name="Recover" component={Recover} />
            <Stack.Screen name="Recover2" component={Recover2} />
            <Stack.Screen name="NovaSenha" component={NovaSenha} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="Cadastro2" component={Cadastro2} />
        </Stack.Navigator>
    )
}

