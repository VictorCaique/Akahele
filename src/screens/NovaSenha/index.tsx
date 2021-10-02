import React, { useState } from 'react'
import { View, Image, Text } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'

import { TopStackParamList } from '../../types'

import { EntradaSenha } from '../../components/EntradaSenha';
import { Botao } from '../../components/Botao';

import logoImage from '../../assets/logoImage.png';
import { styles } from './style'

export interface NovaSenhaProps {
    navigation: StackNavigationProp<TopStackParamList, 'LogIn'>;
}

export function NovaSenha({ navigation }: NovaSenhaProps) {
    const [texto, setTexto] = useState("");
    const [textoConfirm, setTextoConfirm] = useState("");

    return (
        <View style={styles.container}>
            <View style={styles.row1}>
                <Image source={logoImage}
                    style={styles.imagem} />
                <Text style={styles.title}>Digite nova senha</Text>
            </View>

            <View style={styles.input}>
                <EntradaSenha
                    placeholder="Senha"
                    value={texto}
                    onChangeText={(text) => setTexto(text)}
                    showSoftInputOnFocus={false} />
                <EntradaSenha
                    placeholder="Confirmar Senha"
                    value={textoConfirm}
                    onChangeText={(text) => setTextoConfirm(text)}
                    showSoftInputOnFocus={false} />
            </View>
            <View style={styles.botao}>
                <Botao texto="Alterar Senha"
                    funcao={() => navigation.navigate('LogIn')}
                />
            </View>
        </View>
    )
}