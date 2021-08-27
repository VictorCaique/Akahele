import React from 'react';
import { View, Image } from 'react-native';

import { EntradaTexto } from '../../components/EntradaTexto'
import { Botao } from '../../components/Botao'

import { styles } from './style';
import logoImage from '../../assets/logoImage.png'

export function LogIn() {


    return (
        <View style={styles.container}>
            <Image source={logoImage}
                style={styles.imagem} />
            <View style={styles.content}>
                <EntradaTexto
                    placeholder="Usuário"
                    style={styles.input}
                />
                <EntradaTexto
                    placeholder="Senha"
                    style={styles.input}
                    secureTextEntry={true}
                />
                <Botao />
            </View>
        </View>
    )
}

