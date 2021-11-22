import * as React from 'react';
import { View } from 'react-native';
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons'

export const MenuDrop = () => {
    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);

    return (
        <Provider>
            <View
                style={{

                    flexDirection: 'row',
                    justifyContent: 'center',
                }}>
                <Menu

                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={<MaterialCommunityIcons name="more" size={20} onPress={openMenu}></MaterialCommunityIcons>}>
                    <Menu.Item onPress={() => { }} title="Item 1" />
                    <Menu.Item onPress={() => { }} title="Item 2" />
                    <Divider />
                    <Menu.Item onPress={() => { }} title="Item 3" />
                </Menu>
            </View>
        </Provider>
    );
};