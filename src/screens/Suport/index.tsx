import React from 'react';
import { View, Alert } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';

import { DrawerList } from '../../types';

import { Botao1 } from '../../components/Botao1';
import { EntradaTexto } from '../../components/EntradaTexto';

import { theme } from '../../global/styles/theme'
import { styles } from './style'

export function Suport({ navigation }: DrawerScreenProps<DrawerList>) {
    const [mensagem, setMensagem] = React.useState("");

    return (
        <View style={styles.container}>
            <EntradaTexto style={{
                borderBottomColor: "#000",
                minWidth: 300,
            }}
                placeholder="Envie-nos uma mensagem: "
                labelStyle={{ color: "#000", fontFamily: theme.fonts.robotoMedium }}
                inputStyle={{ color: "#000" }}
                borderColor={"#000"}
                value={mensagem}
                onChangeText={setMensagem}
                height={60}
            />
            <Botao1 texto="Enviar" funcao={() => {
                setMensagem("");
                Alert.alert("Obrigado pelo feedback!", "Sua mensagem foi enviada.");
                navigation.navigate("Home")
            }} />
        </View>
    )
}