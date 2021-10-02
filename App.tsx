import React from 'react';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading'

import { Roboto_900Black } from '@expo-google-fonts/roboto'
import { useFonts } from 'expo-font'

import { Routes } from './src/routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_900Black
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent />
      <Routes />

    </>
  )
}


