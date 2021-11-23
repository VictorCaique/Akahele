import React from 'react';
import { Image, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { getHeaderTitle, Header } from '@react-navigation/elements';
import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
// import { } from '@react-navigation/elements';
import { Ionicons } from '@expo/vector-icons';

import { DrawerList, AppList } from '../types';

import { Home } from '../screens/Home';
import { Busca } from '../screens/Busca';
import { Usuario } from '../screens/Usuario';
import { Criar } from '../screens/Criar';
import { Suport } from '../screens/Suport';
import { Comunidades } from '../screens/Comunidades';
import { CustomDrawerContent, DrawerContentInterface } from '../screens/DrawerContent';

// import { DrawerButton } from '../components/DrawerButton'

import logoImage from '../assets/logoImage.png'
import { theme } from '../global/styles/theme';
import { SobreNos } from '../screens/SobreNos';
import { DrawerButton } from '../components/DrawerButton';


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
                    height: 55,
                },
                headerShown: false,

            }

            }>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons name="home" size={size + 10} color={color} style={{
                            marginTop: 15,
                        }} />
                    ),
                    title: "",
                }}
            />
            <Tab.Screen name="Comunidades" component={Comunidades}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons name="people" size={size + 10} color={color} style={{
                            marginTop: 15,
                        }} />
                    ),
                    title: "",
                }} />
            <Tab.Screen name="Busca" component={Busca}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons name="search" size={size + 10} color={color} style={{
                            marginTop: 15,
                        }} />
                    ),
                    title: "",
                }} />
            <Tab.Screen name="Criar" component={Criar}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons name="add" size={size + 10} color={color} style={{
                            marginTop: 15,
                        }} />
                    ),
                    title: "",
                }} />
        </Tab.Navigator>
    )
}

// Começando o Drawer navigator

const Drawer = createDrawerNavigator<DrawerList>();



export function DrawerRoutes() {


    return (
        <Drawer.Navigator

            screenOptions={{
                headerStyle: {
                    backgroundColor: theme.colors.primary,
                },
                headerRight: props => <View>
                    <Image source={logoImage} style={{ width: 55, height: 55, marginRight: 30 }} />
                </View>,
                headerTitle: " ",
                headerTintColor: '#FFF',
                // headerLeft: () => <DrawerButton />,

            }}
            drawerContent={(props: any) => <CustomDrawerContent navigation={props.navigation} />}


        >
            <Drawer.Screen name="Home" component={TabRoutes} options={{ headerShown: true }} />
            <Drawer.Screen name="Busca" component={Busca} options={{ headerShown: false }} />
            <Drawer.Screen name="Comunidades" component={Comunidades} options={{ headerShown: true }} />
            <Drawer.Screen name="Suport" component={Suport} options={{ headerShown: true }} />
            <Drawer.Screen name="SobreNos" component={SobreNos} options={{ headerShown: true }} />
            <Drawer.Screen name="Usuario" component={Usuario} options={{ headerShown: true }} />
        </Drawer.Navigator>
    )
}

const Stack = createStackNavigator<AppList>();

export function AppRoutes() {
    return (
        <Stack.Navigator headerMode="none" initialRouteName="DrawerRoutes">
            <Stack.Screen name="TabRoutes" component={TabRoutes} />
            <Stack.Screen name="DrawerRoutes" component={DrawerRoutes} />
        </Stack.Navigator>
    )
}