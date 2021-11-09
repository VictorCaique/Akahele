import React from 'react';
import { Hoshi, HoshiProps } from 'react-native-textinput-effects'

import { styles } from './style';

type Props = HoshiProps & {
    isNumeric?: boolean
}

export function EntradaTexto(props: Props) {
    // const [text, onChangeText] = React.useState("");

    return (
        <Hoshi
            label={props.placeholder}
            placeholderTextColor={props.placeholderTextColor !== undefined ? props.placeholderTextColor : "#FFF"}
            borderColor={props.borderColor != undefined ? props.borderColor : "#FFF"}
            inputPadding={16}
            onChangeText={props.onChangeText}
            value={props.value}
            style={props.style != undefined ? props.style : styles.container}
            labelStyle={props.labelStyle != undefined ? props.labelStyle : styles.label}
            inputStyle={props.inputStyle != undefined ? props.inputStyle : styles.label}
            keyboardType={props.isNumeric ? "number-pad" : "default"}
        />
    );






    // if (isNumeric == true) {
    //     return (
    //         <TextInput
    //             style={styles.input}
    //             onChangeText={onChangeText}
    //             value={text}
    //             placeholder={props.placeholder}
    //             keyboardType="numeric"
    //         />
    //     );
    // } else {
    //     return (
    //         <TextInput
    //             style={styles.input}
    //             onChangeText={onChangeText}
    //             value={text}
    //             placeholder={props.placeholder}
    //         />
    //     );
    // }


}