import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';

import { Botao1 } from '../../components/Botao1'
import { EntradaTexto } from '../../components/EntradaTexto'

import { styles } from './style';
import { theme } from '../../global/styles/theme'

export function Cadastro2() {
    const [nome, setNome] = useState("");
    const [phone, setPhone] = useState("");

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
                    onChangeText={setNome} />
                <EntradaTexto style={{
                    borderBottomColor: theme.colors.secundary,
                    paddingBottom: '30px',
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