import React, { useState } from 'react';

import { Picker } from '@react-native-picker/picker'

export function Dropdown() {
    const [estado, setEstado] = useState("");


    return (
        <Picker
            onValueChange={setEstado}
            selectedValue={estado}
        />
    )
}