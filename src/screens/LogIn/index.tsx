import React, { useContext } from 'react';
import { View, Image, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
// import { TouchableOpacity } from 'react-native-gesture-handler';

import { TopStackParamList } from '../../types';

import authContext from '../../contexts/auth';

import { Botao } from '../../components/Botao';
import { EntradaTexto } from '../../components/EntradaTexto';
import { EntradaSenha } from '../../components/EntradaSenha';
import { BotaoSemBorda } from '../../components/BotaoSemBorda';

import { styles } from './style';
import logoImage from '../../assets/logoImage.png';

export interface LogInProps {
    navigation: StackNavigationProp<TopStackParamList, 'LogIn'>;
}

export function LogIn({ navigation }: LogInProps) {
    const { signed, signIn } = useContext(authContext);

    console.log(signed);

    function handleSignIn() {
        signIn(usuario, senha);
    }

    const [usuario, setUsuario] = React.useState("");
    const [senha, setSenha] = React.useState("");

    return (
        <View style={styles.container}>
            <Image source={logoImage}
                style={styles.imagem} />
            <View style={styles.content}>
                <EntradaTexto
                    placeholder="Email"
                    // style={styles.input}
                    value={usuario}
                    onChangeText={setUsuario}
                />
                <EntradaSenha
                    placeholder="Senha"
                    style={styles.input}
                    secureTextEntry={true}
                    value={senha}
                    onChangeText={setSenha}
                />
                <View style={styles.divBotoes}>
                    <BotaoSemBorda style={styles.botaoEsqueci}
                        texto="Esqueci a senha"
                        funcao={() => navigation.navigate('Recover')}
                    />
                    <BotaoSemBorda style={styles.botaoEsqueci}
                        texto="Cadastro"
                        funcao={() => navigation.navigate('Cadastro')}
                    />
                </View>
                <View style={styles.botao2}>
                    <Botao
                        texto="Entrar"
                        funcao={handleSignIn} />
                </View>
            </View>
        </View>

    )
}

