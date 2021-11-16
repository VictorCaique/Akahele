import React, { useState } from 'react';

import { styles } from './style'

import { Picker } from '@react-native-picker/picker'
import { theme } from '../../global/styles/theme';

type PickerProps = {
    selectedValue: string
    onValueChange: (itemValue: any, itemIndex: any) => void
}

export function Dropdown(props: PickerProps) {



    return (
        <Picker
            itemStyle={styles.picker}
            dropdownIconColor={theme.colors.secundary}
            style={styles.picker}
            selectedValue={props.selectedValue}
            onValueChange={props.onValueChange}>
            <Picker.Item label="AC" value="AC" />
            <Picker.Item label="AL" value="AL" />
            <Picker.Item label="AP" value="AP" />
            <Picker.Item label="AM" value="AM" />
            <Picker.Item label="BA" value="BA" />
            <Picker.Item label="CE" value="CE" />
            <Picker.Item label="DF" value="DF" />
            <Picker.Item label="ES" value="ES" />
            <Picker.Item label="GO" value="GO" />
            <Picker.Item label="MA" value="MA" />
            <Picker.Item label="MG" value="MG" />
            <Picker.Item label="MS" value="MS" />
            <Picker.Item label="MT" value="MT" />
            <Picker.Item label="PA" value="PA" />
            <Picker.Item label="PB" value="PB" />
            <Picker.Item label="PE" value="PE" />
            <Picker.Item label="PI" value="PI" />
            <Picker.Item label="PR" value="PR" />
            <Picker.Item label="RJ" value="RJ" />
            <Picker.Item label="RO" value="RO" />
            <Picker.Item label="RR" value="RR" />
            <Picker.Item label="RS" value="RS" />
            <Picker.Item label="SC" value="SC" />
            <Picker.Item label="SE" value="SE" />
            <Picker.Item label="SP" value="SP" />
            <Picker.Item label="TO" value="TO" />
        </Picker>
    )
}