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
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { DrawerNavigationProp } from '@react-navigation/drawer'

import { DrawerList } from '../../types'
import { styles } from './style';
import logoImage from '../../assets/logoImage.png'
import { View } from 'react-native';

import authContext from '../../contexts/auth';
import { storage } from '../../config/firebaseConfig';

export interface DrawerContentInterface {
    navigation: DrawerNavigationProp<DrawerList, 'DrawerContent'>;
}

export function CustomDrawerContent({ navigation }: DrawerContentInterface) {
    const { signOut, user } = useContext(authContext)
    const [avatarImage, setAvatarImage] = React.useState("");

    async function getAvatar(ref: string): Promise<any> {
        const filRef = storage.ref("user-avatar/" + ref);
        const dowloadUri = await filRef.getDownloadURL()
        setAvatarImage(dowloadUri);
    }
    getAvatar(user?.avatar_image as string)
    function handleSignOut() {
        signOut();
    }


    return (
        <View style={styles.container}>
            <DrawerContentScrollView >
                <View style={styles.userInfoSection}>
                    <Avatar.Image
                        source={{
                            uri: avatarImage
                        }}
                        size={50} />
                    <View>
                        <Title style={styles.title}>{user?.nome_usuario} </Title>
                    </View>
                </View>
                <DrawerItem
                    style={styles.drawerSection}
                    label={() => <Text style={styles.label}>Usuário</Text>}
                    icon={({ size, color }) =>
                        <MaterialCommunityIcons
                            name="account-outline"
                            size={size}
                            color="#D9007A" />}
                    onPress={() => { }} />
                <DrawerItem
                    style={styles.drawerSection}
                    label={() => <Text style={styles.label}>Criar Comunidade</Text>}
                    icon={({ size, color }) =>
                        <MaterialCommunityIcons
                            name="plus"
                            size={size}
                            color="#185cfd" />}
                    onPress={() => { }} />
                <DrawerItem
                    style={styles.drawerSection}
                    label={() => <Text style={styles.label}>Suporte</Text>}
                    icon={({ size, color }) =>
                        <MaterialCommunityIcons
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
                        <MaterialCommunityIcons
                            name="exit-to-app"
                            size={size}
                            color={color} />}
                    onPress={handleSignOut} />

            </Drawer.Section>
        </View>
    );

}