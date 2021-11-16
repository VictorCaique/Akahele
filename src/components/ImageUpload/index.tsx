import React from 'react';
import { Image, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import { StackScreenProps } from '@react-navigation/stack'
// import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import { TopStackParamList } from '../../types'

import { styles } from './style';

import avatar from '../../assets/avatar.png';

type Props = TouchableOpacityProps & {
    // route: StackScreenProps<TopStackParamList>
}

const [blobImage, setBlobImage] = React.useState({} as Blob);

export function getBloob() {
    return blobImage;
}

export function ImageUpload(props: Props) {

    const [selectedImage, setSelectedImage] = React.useState({} as any);
    const [image, setImage] = React.useState({} as ImagePicker.ImagePickerResult);



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
        setSelectedImage({ localUri: pickerResult.uri });
        console.log(pickerResult);
        var base = pickerResult.base64 as string
        var bloob = base64ToBlob(base);
        setBlobImage(bloob)

    };

    return (
        <TouchableOpacity style={styles.container} onPress={openImagePicker}>
            <Image style={styles.image} source={selectedImage != null ? image : avatar} />
        </TouchableOpacity>
    );

}