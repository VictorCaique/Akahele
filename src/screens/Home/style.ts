import { StyleSheet } from "react-native";
import styled, { css } from 'styled-components/native';

export const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignContent: "center",
        borderRadius: 15,
        marginHorizontal: 30
    },
    imagem: {
        marginHorizontal: 30,
        marginVertical: 10,
        width: "80%",
        height: 200,


    },
    postBackgroud: {
        borderRadius: 10,
        backgroundColor: "#C4C4FF",

    }
})

export const Post = styled.View`
    margin-top: 10px;
`;

export const PostBackgroud = styled.View`
    
`;

export const AvatarUser = styled.Image`
    
`;

export const Name = styled.Text`
    
`;

export const PostImage = styled.Image`
 width: 100%;
`;

export const PostDescription = styled.Text`

`;

export const UserDescription = styled.View`

`;





