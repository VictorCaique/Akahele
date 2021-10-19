import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Entypo, Feather } from '@expo/vector-icons'

import { TopStackParamList } from '../types'

import { Home } from '../screens/Home';
import { Busca } from '../screens/Busca';
import { Comunidades } from '../screens/Comunidades';
// import { Button } from 'react-native';

import { theme } from '../global/styles/theme';


// Começando o Tab Navigator

const Tab = createBottomTabNavigator();

export function TabRoutes() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    backgroundColor: theme.colors.primary,
                    paddingTop: 5,
                    paddingBottom: 5,
                }
            }
            }>
            <Tab.Screen
                name="Home"
                component={DrawerRoutes}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name="home" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen name="Comunidades" component={Comunidades} />
            <Tab.Screen name="Busca" component={Busca} />
        </Tab.Navigator>
    )
}

// Começando o Drawer navigator

const Drawer = createDrawerNavigator();

export function DrawerRoutes() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
    )
}