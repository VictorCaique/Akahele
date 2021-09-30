import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import { styles } from './style';

type Props = RectButtonProps & {
    texto: string;
}

export function Botao(props: Props) {

    return (
        <RectButton style={styles.container}>
            <Text style={styles.title}>{props.texto}</Text>
        </RectButton>
    );

}