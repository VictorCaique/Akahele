import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import { styles } from './style';

type Props = RectButtonProps & {
    texto: String,
    funcao: VoidFunction,
}

export function BotaoSemBorda(props: Props) {

    return (
        <RectButton style={styles.container} onPress={props.funcao}>
            <Text style={styles.text}>{props.texto}</Text>
        </RectButton>
    );

}