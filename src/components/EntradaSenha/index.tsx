import React, { useState } from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Hoshi, HoshiProps } from 'react-native-textinput-effects';


import { styles } from './style';


export function EntradaSenha(props: HoshiProps, isNumeric: boolean) {

    const [text, setText] = useState("");
    const [hide, setHide] = useState(true);

    return (
        <View style={styles.container}>
            <Hoshi
                label={props.placeholder}
                placeholderTextColor={'#FFF'}
                borderColor={'#FFF'}
                inputPadding={16}
                style={styles.input}
                labelStyle={styles.label}
                inputStyle={styles.hoshi}
                secureTextEntry={hide}
                value={props.value}
                onChangeText={props.onChangeText}
            />
            <TouchableOpacity style={styles.icon} onPress={() => setHide(!hide)}>
                {hide ?
                    <Ionicons name="eye" color="#FFF" size={25} />
                    :
                    <Ionicons name="eye-off" color="#FFF" size={25} />
                }
            </TouchableOpacity>
        </View>
    );

}