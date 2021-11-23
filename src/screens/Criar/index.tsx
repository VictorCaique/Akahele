import React, { useState, useContext } from "react";
import {
    View,
    ScrollView,
    TouchableOpacity,
    Image,
} from "react-native";
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import * as ImagePicker from 'expo-image-picker';
import { storage, database } from '../../config/firebaseConfig'

import authContext from '../../contexts/auth'

import { TabParamList } from '../../types'

import { EntradaTexto } from '../../components/EntradaTexto';
import { Botao1 } from '../../components/Botao1';

import { styles } from './style';
import { theme } from '../../global/styles/theme';

import placeholder from '../../assets/placeholder.png';

export interface CriarProps {
    navigation: BottomTabNavigationProp<TabParamList>,
}

export function Criar({ navigation }: CriarProps) {
    const { user } = useContext(authContext)

    const [desc, setDesc] = useState("");
    const [imageUri, setImageUri] = useState("");
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




    };
    function makeid(length: number) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    const postImId = makeid(5)

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

        const fileRef = await storage.ref('post-image/' + user?.uid + "_" + postImId + ".jpeg");

        const response = await fileRef.put((blob as Blob), metaData);
        console.log(response.ref + "REEEEEEEEEEEEF")

        return await fileRef.getDownloadURL();
    }

    async function handlePost() {

        const postData = {
            avatar_image: user?.avatar_image,
            nome_usuario: user?.nome_usuario,
            post_image: user?.uid + "_" + postImId + ".jpeg",
            texto_publicacao: desc,
            usuario: user?.uid
        }

        database.collection("publicacao").add(postData).then(ev => {
            console.log("Post publicado")
        })

        const uploadUrl = await uploadImageAsync(selectedImage);
        setImageUri(uploadUrl)
        navigation.navigate("Home");
    }

    return (
        <View style={styles.container}>

            <ScrollView contentContainerStyle={{ flexGrow: 1 }}
                centerContent={true}>
                <TouchableOpacity style={styles.butomPicker} onPress={openImagePicker}>
                    <Image style={styles.image} source={selectedImage ? { uri: selectedImage } : placeholder} />
                </TouchableOpacity>

                <View style={styles.input}>
                    <EntradaTexto style={{
                        borderBottomColor: theme.colors.secundary,
                        minWidth: 300,
                    }}
                        placeholder="Escreva sobre isso"
                        labelStyle={{ color: "#000" }}
                        inputStyle={{ color: "#000" }}
                        borderColor={theme.colors.secundary}
                        value={desc}
                        onChangeText={setDesc}


                    />

                </View>
                <View style={styles.butomConfirm}>
                    <Botao1
                        texto="Confirmar"
                        funcao={handlePost} />
                </View>
            </ScrollView>
        </View>
    )
}