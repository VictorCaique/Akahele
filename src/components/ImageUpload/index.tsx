import React from 'react';
import { Image } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import { styles } from './style';

import avatar from '../../assets/avatar.png';

type Props = RectButtonProps & {

}

export function ImageUpload(props: Props) {

    return (
        <RectButton style={styles.container} onPress={props.onPress}>
            <Image source={avatar} />
        </RectButton>
    );

}