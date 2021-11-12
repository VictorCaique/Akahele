import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { TopStackParamList } from '../../types';

import { Botao1 } from '../../components/Botao1'
import { ImageUpload } from '../../components/ImageUpload'
import { EntradaTexto } from '../../components/EntradaTexto'

import { styles } from './style';
import { theme } from '../../global/styles/theme'

export type Cadastro2Props = StackScreenProps<TopStackParamList, "Cadastro2">;

export function Cadastro2({ navigation, route }: Cadastro2Props) {
    const [nome, setNome] = useState("");
    const [phone, setPhone] = useState("");
    const userCredencials = route.params?.userCredencials;
    console.log("PARAM> ", userCredencials)
    function handleSignIn() {

    }

    return (
        <View style={styles.container}>

            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <EntradaTexto style={{
                    borderBottomColor: theme.colors.secundary,
                    minWidth: 300,
                }}
                    placeholder="Nome de Usuário"
                    labelStyle={{ color: "#000" }}
                    inputStyle={{ color: "#000" }}
                    borderColor={theme.colors.secundary}
                    value={nome}
                    onChangeText={setNome}
                />

                <EntradaTexto
                    style={{
                        borderBottomColor: theme.colors.secundary,
                        paddingBottom: 30,
                    }}
                    placeholder="Telefone"
                    labelStyle={{ color: "#000" }}
                    inputStyle={{ color: "#000" }}
                    borderColor={theme.colors.secundary}
                    isNumeric={true}
                    value={phone}
                    onChangeText={setPhone} />

                <Botao1 texto="Confirmar"
                    funcao={() => { }} />
            </ScrollView>
        </View>
    );

}