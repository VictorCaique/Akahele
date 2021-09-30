import React from 'react';
import { View, Image, Text, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import { EntradaTexto } from '../../components/EntradaTexto'
import { Botao } from '../../components/Botao'
import { BotaoSemBorda } from '../../components/BotaoSemBorda'

import { styles } from './style';
import logoImage from '../../assets/logoImage.png';

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
                <View style={styles.botao1}>
                    <BotaoSemBorda style={styles.botaoEsqueci}
                        texto="Esqueci a senha"
                    />
                    <BotaoSemBorda style={styles.botaoEsqueci}
                        texto="Cadastro"
                    />
                </View>
                <View style={styles.botao2}>
                    <Botao texto="Entrar" />
                </View>
            </View>
        </View>

    )
}

