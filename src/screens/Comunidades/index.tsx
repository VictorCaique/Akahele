import React from "react";
import { View, Text, Image } from "react-native";

import working from "../../assets/working.png"

import { styles } from './style'

export function Comunidades() {
    return (
        <View style={{ flex: 1, alignContent: "center", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <Text style={styles.container}>Estamos trabalhando nisso</Text>
            <Image source={working} style={{ maxHeight: 600, maxWidth: 600 }} />
        </View >
    )
}