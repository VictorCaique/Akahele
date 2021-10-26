import React from 'react';
import { Text } from 'react-native';
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'

import { DrawerList } from '../../types'

import { styles } from './style';

interface DrawerProps {
    funcao?: VoidFunction
}



export function DrawerButton({ funcao }: DrawerProps) {

    return (
        <RectButton style={styles.container} onPress={funcao}>
            <Ionicons name="menu" size={40} color="#FFF" />
        </RectButton>
    );

}