import React, { useContext } from 'react';
import { SafeAreaView, Image, Text, ScrollView, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { TopStackParamList } from '../../types'

import authContext from '../../contexts/auth'

import { EntradaTexto } from '../../components/EntradaTexto';
import { EntradaSenha } from '../../components/EntradaSenha';
import { Botao } from '../../components/Botao';

import { styles } from './style';
import logoImage from '../../assets/logoImage.png';

export interface CadastroProps {
    navigation: StackNavigationProp<TopStackParamList, 'Cadastro'>;
}

export function Cadastro({ navigation }: CadastroProps) {
    const [email, setEmail] = React.useState("");
    const [senha, setSenha] = React.useState("");
    const [confirm, setConfirm] = React.useState("");

    const { cadastrar } = useContext(authContext);

    function handleSiginIn() {
        cadastrar(email, senha, confirm);
        navigation.navigate("Cadastro2");
    }

    return (

        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.scrollView}>
                    <Image source={logoImage}
                        style={styles.imagem} />
                    <View style={styles.content}>

                        <Text style={styles.title}>Insira suas informações: </Text>

                        <EntradaTexto
                            placeholder="Email"
                            value={email}
                            onChangeText={setEmail}
                        />
                        <View style={styles.input}>
                            <EntradaSenha
                                placeholder="Senha"
                                style={styles.input}
                                secureTextEntry={true}
                                value={senha}
                                onChangeText={setSenha}
                            />
                        </View>
                        <View style={styles.input}>
                            <EntradaSenha
                                placeholder="Confirmar Senha"
                                style={styles.input}
                                secureTextEntry={true}
                                value={confirm}
                                onChangeText={setConfirm}
                            />
                        </View>
                        <View style={styles.Botao}>
                            <Botao
                                texto="Cadastrar"
                                funcao={handleSiginIn}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

