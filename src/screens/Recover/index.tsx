import React, { useState } from 'react'
import { View, Image, Text } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'

import { TopStackParamList } from '../../types'

import { EntradaTexto } from '../../components/EntradaTexto';
import { Botao } from '../../components/Botao';

import logoImage from '../../assets/logoImage.png';
import { styles } from './style'

export interface RecoverProps {
    navigation: StackNavigationProp<TopStackParamList>
}

export function Recover({ navigation }: RecoverProps ) {
    const [texto, setTexto] = useState("");

    return (
        <View style={styles.container}>
            <View style={styles.row1}>
                <Image source={logoImage}
                    style={styles.imagem} />
                <Text style={styles.title}>Digite o E-mail cadastrado</Text>
            </View>

            <View style={styles.input}>
                <EntradaTexto
                    value={texto}
                    onChangeText={(text) => setTexto(text)}
                    showSoftInputOnFocus={false} />
            </View>
            <View style={styles.botao}>
                <Botao texto="Avançar"
                    funcao={() => navigation.navigate('Recover2')}
                />
            </View>
        </View>
    )
}