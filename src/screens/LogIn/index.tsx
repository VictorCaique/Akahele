import React from 'react';
import { View, Image } from 'react-native';

import { styles } from './style';
import logoImage from '../../assets/logoImage.png'

export function LogIn() {


    return (
        <View style={styles.container}>
            <Image source={logoImage}
                style={styles.imagem} />

        </View>
    )
}

