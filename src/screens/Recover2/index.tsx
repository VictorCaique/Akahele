import React, { useState } from 'react'
import { View, Image, Text } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'

import { TopStackParamList } from '../../types'

import { EntradaTexto } from '../../components/EntradaTexto';
import { Botao } from '../../components/Botao';

import logoImage from '../../assets/logoImage.png';
import { styles } from './style'

export interface Recover2Props {
    navigation: StackNavigationProp<TopStackParamList>
}

export function Recover2({ navigation }: Recover2Props) {
    const [texto, setTexto] = useState("");

    return (
        <View style={styles.container}>
            <View style={styles.row1}>
                <Image source={logoImage}
                    style={styles.imagem} />
                <Text style={styles.title}>Digite o código de verificação</Text>
            </View>

            <View style={styles.input}>
                <EntradaTexto
                    value={texto}
                    onChangeText={(text) => setTexto(text)}
                    showSoftInputOnFocus={false} />
            </View>
            <View style={styles.botao}>
                <Botao texto="Avançar"
                    funcao={() => navigation.navigate('NovaSenha')}
                />
            </View>
        </View>
    )
}