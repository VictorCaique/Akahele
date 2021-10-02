import React from 'react';
import { Hoshi, HoshiProps } from 'react-native-textinput-effects'

import { styles } from './style';

// type Props = TextInputProps & {

// }

export function EntradaTexto(props: HoshiProps, isNumeric: boolean) {
    // const [text, onChangeText] = React.useState("");

    return (
        <Hoshi
            label={props.placeholder}
            placeholderTextColor={'#FFF'}
            borderColor={'#FFF'}
            inputPadding={16}
            // onChangeText={onChangeText}
            // value={text}
            style={styles.container}
            labelStyle={styles.label}
            inputStyle={styles.input}
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