import React from 'react';
import { Text, Image, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import logoGoogle from '../../assets/logoGoogle.png';
import { styles } from './style';

type Props = RectButtonProps & {
    texto: string;
}

export function BotaoIcone({ texto, ...rest }: Props) {
    return (
        <RectButton
            style={styles.container}
            {...rest}
        >
            <View style={styles.iconWrapper}>
                <Image source={logoGoogle} style={styles.icon} />
            </View>

            <Text style={styles.title}>
                {texto}
            </Text>
        </RectButton>
    );
}