import React from "react";
import { View, Text, Image } from "react-native";

import logoImage from '../../assets/logoImage.png';

import { styles } from './style'

export function SobreNos() {
    return (
        <View style={styles.container}>
            <View >
                <Image
                    style={styles.backgroundImage}
                    source={logoImage} />
            </View>
            <Text style={styles.title}>Somos um grupo de estudantes do Centro Paula Souza motivados a contribuir para um mundo melhor. Assim, através dos nossos conhecimentos em tecnologia desenvolvemos essa plataforma para que mais pessoas motivadas pelo mesmo motivo que nós, contribuam para uma sociedade mais sustentável</Text>
        </View>

    )
}