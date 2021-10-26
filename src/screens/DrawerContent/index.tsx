import React, { useContext } from 'react';
import {
    Avatar,
    Paragraph,
    Title,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
} from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { DrawerNavigationProp } from '@react-navigation/drawer'

import { DrawerList } from '../../types'
import { styles } from './style';
import logoImage from '../../assets/logoImage.png'
import { View } from 'react-native';

import authContext from '../../contexts/auth';

export interface DrawerContentInterface {
    navigation: DrawerNavigationProp<DrawerList, 'DrawerContent'>;
}

export function CustomDrawerContent({ navigation }: DrawerContentInterface) {
    const { signOut } = useContext(authContext)

    function handleSignOut() {
        signOut();
    }


    return (
        <View style={styles.container}>
            <DrawerContentScrollView >
                <View style={styles.userInfoSection}>
                    <Avatar.Image
                        source={{
                            uri: 'https://cbsnews1.cbsistatic.com/hub/i/2018/11/06/0c1af1b8-155a-458e-b105-78f1e7344bf4/2018-11-06t054310z-1334124005-rc1be15a8050-rtrmadp-3-people-sexiest-man.jpg'
                        }}
                        size={50} />
                    <View>
                        <Title style={styles.title}>Idris Elba </Title>
                    </View>
                </View>
                <DrawerItem
                    style={styles.drawerSection}
                    label={() => <Text style={styles.label}>Usuário</Text>}
                    icon={({ size, color }) =>
                        <Icon
                            name="account-outline"
                            size={size}
                            color="#D9007A" />}
                    onPress={() => { }} />
                <DrawerItem
                    style={styles.drawerSection}
                    label={() => <Text style={styles.label}>Criar Comunidade</Text>}
                    icon={({ size, color }) =>
                        <Icon
                            name="plus"
                            size={size}
                            color="#185cfd" />}
                    onPress={() => { }} />
                <DrawerItem
                    style={styles.drawerSection}
                    label={() => <Text style={styles.label}>Suporte</Text>}
                    icon={({ size, color }) =>
                        <Icon
                            name="headset"
                            size={size}
                            color="#2D6E31" />}
                    onPress={() => { }} />
                <DrawerItem
                    style={styles.sobreNos}
                    label={() => <Text style={styles.label}>Sobre Nós</Text>}
                    icon={({ size, color }) =>
                        <Avatar.Image
                            size={size}
                            source={logoImage}
                        />}
                    onPress={() => { navigation.navigate('SobreNos') }}
                />

            </DrawerContentScrollView>
            <Drawer.Section style={styles.footer}>
                <DrawerItem
                    label="Sair"
                    icon={({ size, color }) =>
                        <Icon
                            name="exit-to-app"
                            size={size}
                            color={color} />}
                    onPress={handleSignOut} />

            </Drawer.Section>
        </View>
    );

}