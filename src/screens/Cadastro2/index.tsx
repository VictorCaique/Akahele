import React, { useState } from 'react';
import firebase from 'firebase';
import { View, ScrollView, Text, Image, TouchableOpacity, LogBox } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import * as ImagePicker from 'expo-image-picker'

import { TopStackParamList } from '../../types';
import authContext from '../../contexts/auth'

import { Botao1 } from '../../components/Botao1'
import { EntradaTexto } from '../../components/EntradaTexto'
import { Dropdown } from '../../components/Picker';

import avatar from '../../assets/avatar.png';

import { styles } from './style';
import { theme } from '../../global/styles/theme'
import { storage } from '../../config/firebaseConfig';

export type Cadastro2Props = StackScreenProps<TopStackParamList, "Cadastro2">;

LogBox.ignoreLogs([`Setting a timer for a long period`, 'Non-serializable values were found in the navigation state']);

export function Cadastro2({ navigation, route }: Cadastro2Props) {
    const { cadastrar } = React.useContext(authContext)

    const [nome, setNome] = useState("");
    const [phone, setPhone] = useState("");
    const [estado, setEstado] = useState("AC");
    const [imageUri, setImageUri] = useState("");
    const userCredencials = route.params?.userCredencials as firebase.User;
    const [selectedImage, setSelectedImage] = React.useState("")



    async function openImagePicker() {
        var permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("É nescessário a permissão para acessar suas fotos!");
            return;
        }

        var pickerResult = await ImagePicker.launchImageLibraryAsync({
            base64: true,
            allowsEditing: true,
            aspect: [4, 3]
        });


        if (pickerResult.cancelled === true) {
            return;
        }
        setSelectedImage(pickerResult.uri);

        const uploadUrl = await uploadImageAsync(pickerResult.uri);
        setImageUri(uploadUrl)

        console.log("AAAAAAAAAAAAAAAAAAAAAAA: ");
        console.log(uploadUrl);





    };

    async function uploadImageAsync(uri: string): Promise<any> {
        // Why are we using XMLHttpRequest? See:
        // https://github.com/expo/expo/issues/2402#issuecomment-443726662
        const blob = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
                resolve(xhr.response);
            };
            xhr.onerror = function (e) {
                console.log(e);
                reject(new TypeError("Network request failed"));
            };
            xhr.responseType = "blob";
            xhr.open("GET", uri, true);
            xhr.send();
        });



        const metaData = {
            contentType: "image/jpeg"
        }

        const fileRef = await storage.ref('user-avatar/' + userCredencials.uid + ".jpeg");


        const response = await fileRef.put((blob as Blob), metaData);
        console.log(response.ref + "REEEEEEEEEEEEF")
        // (blob as any).close();


        // We're done with the blob, close and release it


        return await fileRef.getDownloadURL();
    }


    function handleSignIn() {
        cadastrar(estado, phone, nome, userCredencials, imageUri);

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