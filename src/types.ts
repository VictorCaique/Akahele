import firebase from 'firebase'
import { NavigatorScreenParams } from '@react-navigation/native'

export type TopStackParamList = {
    LogIn: undefined,
    Recover: { userId?: string } | undefined,
    Recover2: undefined,
    NovaSenha: undefined,
    Cadastro: undefined,
    Home: undefined,
    Cadastro2: undefined | { userCredencials: firebase.User },
}

export type TabParamList = {
    Busca: undefined,
    Comunidades: undefined,
    Criar: undefined,
    Home: undefined,
}

export type DrawerList = {
    Home: undefined,
    Comunidades: undefined,
    SobreNos: undefined,
    Busca: undefined,
    DrawerContent: undefined,
    DrawerButton: undefined,
    Usuario: undefined,
    Suport: undefined
}

export type AppList = {
    DrawerRoutes: undefined,
    TabRoutes: undefined
}

export interface userCollection {
    avatar_image?: string,
    email: string,
    estado: string,
    nome_usuario: string,
    telefone: string,
    idUser: string
    uid: string
}

export interface postCollection {
    data_publicacao: String,
    horario_publicacao: String,
    post_image: string,
    texto_publicacao: String,
    usuario: string,
    idPost: String,
    avatar_image: string,
}