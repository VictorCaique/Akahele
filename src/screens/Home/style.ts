import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme'
import styled, { css } from 'styled-components/native';

export const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignContent: "center",
        borderRadius: 15,
    },
    imagem: {
        marginVertical: 10,
        width: "100%",
        height: 200,


    },
    description: {
        fontFamily: theme.fonts.robotoLight,
        fontSize: 20,
    },
    title: {
        fontFamily: theme.fonts.robotoMedium,
        fontSize: 17,
    },
    postBackgroud: {
        borderRadius: 10,
        backgroundColor: "#C4C4FF",

    }
})

export const Post = styled.View`
    margin-top: 30px;
`;

export const PostBackgroud = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const AvatarUser = styled.Image`
    width: 30px;
    height: 30px;
    border-radius: 15px;
`;

export const Name = styled.Text`
    margin-left: 10px;
`;

export const PostImage = styled.Image`
 width: 100%;
`;

export const PostDescription = styled.Text`
    width: 90%;
    padding-left: 20px;
    margin-bottom: 10px;
    text-align: justify;
`;

export const UserDescription = styled.View`
   display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 40%;
    align-items: center;
    padding-top: 5px;
    padding-left: 20px;
`;





