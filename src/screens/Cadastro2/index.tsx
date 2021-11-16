import React, { useState } from 'react';
import firebase from 'firebase';
import { View, ScrollView, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker'

import { TopStackParamList } from '../../types';
import authContext from '../../contexts/auth'

import { Botao1 } from '../../components/Botao1'
import { EntradaTexto } from '../../components/EntradaTexto'
import { Dropdown } from '../../components/Picker';

import avatar from '../../assets/avatar.png';

import { styles } from './style';
import { theme } from '../../global/styles/theme'

export type Cadastro2Props = StackScreenProps<TopStackParamList, "Cadastro2">;

export function Cadastro2({ navigation, route }: Cadastro2Props) {
    const { cadastrar } = React.useContext(authContext)

    const [nome, setNome] = useState("");
    const [phone, setPhone] = useState("");
    const [estado, setEstado] = useState("");
    const userCredencials = route.params?.userCredencials as firebase.User;
    const [blobImage, setBlobImage] = React.useState({} as Blob);
    const [selectedImage, setSelectedImage] = React.useState("");
    const [image, setImage] = React.useState<undefined | ImagePicker.ImagePickerResult>(undefined);



    function base64ToBlob(base64: string) {
        const byteCharacters = atob(base64);

        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);

        const blob = new Blob([byteArray]);
        return blob
    }

    async function openImagePicker() {
        var permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("É nescessário a permissão para acessar suas fotos!");
            return;
        }

        var pickerResult = await ImagePicker.launchImageLibraryAsync({ base64: true });


        if (pickerResult.cancelled === true) {
            return;
        }
        setImage(pickerResult);
        setSelectedImage(pickerResult.uri);
        console.log(pickerResult);
        var base = pickerResult.base64 as string
        var bloob = base64ToBlob(base);
        setBlobImage(bloob)

    };


    function handleSignIn() {
        cadastrar(estado, phone, nome, userCredencials.uid, userCredencials.email as string);
        navigation.navigate('LogIn');
    }

    return (
        <View style={styles.container}>

            <ScrollView contentContainerStyle={{ flexGrow: 1 }}
                centerContent={true}>
                <TouchableOpacity style={styles.butomPicker} onPress={openImagePicker}>
                    <Image style={styles.image} source={selectedImage ? { uri: selectedImage } : avatar} />
                </TouchableOpacity>

                <View style={styles.input}>
                    <EntradaTexto style={{
                        borderBottomColor: theme.colors.secundary,
                        minWidth: 300,
                    }}
                        placeholder="Nome de Usuário"
                        labelStyle={{ color: "#000" }}
                        inputStyle={{ color: "#000" }}
                        borderColor={theme.colors.secundary}
                        value={nome}
                        onChangeText={setNome}
                    />

                    <EntradaTexto
                        style={{
                            borderBottomColor: theme.colors.secundary,
                            paddingBottom: 30,
                        }}
                        placeholder="Telefone"
                        labelStyle={{ color: "#000" }}
                        inputStyle={{ color: "#000" }}
                        borderColor={theme.colors.secundary}
                        isNumeric={true}
                        value={phone}
                        onChangeText={setPhone} />
                </View>
                <View style={styles.picker}>
                    <Text style={styles.label}>Estado: </Text>
                    <Dropdown
                        selectedValue={estado}
                        onValueChange={(itemValue, itemIndex) => {
                            setEstado(itemValue)
                        }} />
                </View>
                <View style={styles.butomConfirm}>
                    <Botao1
                        texto="Confirmar"
                        funcao={handleSignIn} />
                </View>
            </ScrollView>
        </View>
    );

}