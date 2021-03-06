import React from 'react';
import { StatusBar, LogBox } from 'react-native';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native'

import { Routes } from './src/routes'

import { AuthProvider } from './src/contexts/auth'

import { Roboto_900Black, Roboto_300Light, Roboto_500Medium, Roboto_400Regular } from '@expo-google-fonts/roboto'
import { useFonts } from 'expo-font'



export default function App() {

  LogBox.ignoreLogs(["source.uri should not be an empty string"])
  const [fontsLoaded] = useFonts({
    Roboto_900Black,
    Roboto_300Light,
    Roboto_500Medium,
    Roboto_400Regular
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


