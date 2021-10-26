import React from 'react';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native'

import { Routes } from './src/routes'

import { AuthProvider } from './src/contexts/auth'

import { Roboto_900Black, Roboto_300Light, Roboto_500Medium } from '@expo-google-fonts/roboto'
import { useFonts } from 'expo-font'


export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_900Black,
    Roboto_300Light,
    Roboto_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  )
}


