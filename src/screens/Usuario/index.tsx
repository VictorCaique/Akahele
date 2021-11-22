import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity, LogBox, Alert, Button } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import * as ImagePicker from 'expo-image-picker'

import { DrawerList, userCollection } from '../../types';
import authContext from '../../contexts/auth'

import { Botao1 } from '../../components/Botao1'
import { EntradaTexto } from '../../components/EntradaTexto'
import { Dropdown } from '../../components/Picker';

import avatar from '../../assets/avatar.png';

import { styles } from './style';
import { theme } from '../../global/styles/theme'
import { storage, database, auth } from '../../config/firebaseConfig';

export type UsuarioProps = DrawerScreenProps<DrawerList, "Usuario">;

LogBox.ignoreLogs([`Setting a timer for a long period`, 'Non-serializable values were found in the navigation state']);

export function Usuario({ navigation }: UsuarioProps) {
    const { user, editar, signOut } = React.useContext(authContext)

    const [nome, setNome] = useState("");
    const [phone, setPhone] = useState("");
    const [imageUri, setImageUri] = useState("");
    const [selectedImage, setSelectedImage] = React.useState("")
    const [estado, setEstado] = useState("AC");

    useEffect(() => {
        setNome(user?.nome_usuario as string);
        setPhone(user?.telefone as string);
        setEstado(user?.estado as string);

        console.log(user)
        async function getAvatarImage() {
            var fileRef = await storage.ref("user-avatar/" + user?.avatar_image).getDownloadURL();
            setImageUri(fileRef);
        }
        getAvatarImage();
    }, [])

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

        const fileRef = await storage.ref('user-avatar/' + user?.uid + ".jpeg");


        const response = await fileRef.put((blob as Blob), metaData);
        console.log(response.ref + "REEEEEEEEEEEEF")
        // (blob as any).close();


        // We're done with the blob, close and release it


        return await fileRef.getDownloadURL();
    }


    async function handleEditar() {
        var data = {
            avatar_image: user?.avatar_image as string,
            email: user?.email as string,
            uid: user?.uid as string,
            estado: estado as string,
            idUser: user?.idUser,
            nome_usuario: nome as string,
            telefone: phone as string,
        } as userCollection
        await editar(data);
        navigation.navigate('Home')

    }

    const deleteAlert = (idUser: string, uid: string) =>
        Alert.alert('Atenção', 'Tem certeza que deseja excluir sua conta?', [
            {
                text: 'Cancelar',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => deletarUser(idUser, uid) },
        ]);

    const deletarUser = (idUser: string, uid: string) => {
        if (uid == user?.uid) {
            const dUser = auth.currentUser;
            dUser?.delete().then(() => {
                console.log("Auth Deletado")
            })
            database.collection("usuarios").doc(idUser).delete().then(e => {
                console.log("User Deletado");
            })
            signOut();
        } else {
            Alert.alert('Atenção', 'Não tem Permissão para exlcuir essa conta');
        }
    }

    return (
        <View style={styles.container}>

            <ScrollView contentContainerStyle={{ flexGrow: 1 }}
                centerContent={true}>
                <TouchableOpacity style={styles.butomPicker} onPress={openImagePicker}>
                    <Image style={styles.image} source={selectedImage ? { uri: selectedImage } : { uri: imageUri }} />
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
                        texto="Editar"
                        funcao={handleEditar} />
                    <TouchableOpacity onPress={() => { deleteAlert(user?.idUser as string, user?.uid as string) }}><Text style={styles.excluirText}> Excluir conta </Text></TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );

}