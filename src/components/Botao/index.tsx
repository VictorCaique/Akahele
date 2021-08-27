import React from 'react';
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'

import { styles } from './style';



export function Botao() {

    return (
        <RectButton style={styles.container}>
            <Text style={styles.title}>Login</Text>
        </RectButton>
    );

}