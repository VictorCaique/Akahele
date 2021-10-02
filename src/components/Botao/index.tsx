import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import { styles } from './style';

type Props = RectButtonProps & {
    texto: string,
    funcao: VoidFunction,
}

export function Botao(props: Props) {

    return (
        <RectButton style={styles.container} onPress={props.funcao}>
            <Text style={styles.title}>{props.texto}</Text>
        </RectButton>
    );

}