import React from 'react';
import { SafeAreaView, Image, Text, ScrollView, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { TopStackParamList } from '../../types'

import { EntradaTexto } from '../../components/EntradaTexto';
import { EntradaSenha } from '../../components/EntradaSenha';
import { Botao } from '../../components/Botao';

import { styles } from './style';
import logoImage from '../../assets/logoImage.png';

export interface CadastroProps {
    navigation: StackNavigationProp<TopStackParamList, 'Cadastro'>;
}

export function Cadastro({ navigation }: CadastroProps) {
    const [text, onChangeText] = React.useState("");

    return (

        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View >
                    <Image source={logoImage}
                        style={styles.imagem} />
                    <View style={styles.content}>

                        <Text style={styles.title}>Insira suas informações: </Text>

                        <EntradaTexto
                            placeholder="Usuário"
                            style={styles.input}
                            value={text}
                            onChangeText={onChangeText}
                        />
                        <EntradaTexto
                            placeholder="Email"
                            style={styles.input}
                            value={text}
                            onChangeText={onChangeText}
                        />
                        <EntradaSenha
                            placeholder="Senha"
                            style={styles.input}
                            secureTextEntry={true}
                        />
                        <EntradaSenha
                            placeholder="Confirmar Senha"
                            style={styles.input}
                            secureTextEntry={true}
                        />
                        <View style={styles.Botao}>
                            <Botao
                                texto="Cadastrar"
                                funcao={() => null}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

