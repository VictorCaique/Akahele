import React, { Component } from 'react';
import { TextInput } from 'react-native';

import { styles } from './style';

export function EntradaTexto(placeholder: String) {
    const [value, onChangeText] = React.useState(placeholder);

    return (
        <TextInput>
    );
}