import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import { styles } from './style';

type Props = RectButtonProps & {
    texto: String
}

export function BotaoSemBorda(props: Props) {

    return (
        <RectButton style={styles.container} >
            <Text style={styles.text}>{props.texto}</Text>
        </RectButton>
    );

}