import { NavigatorScreenParams } from '@react-navigation/native'

export type TopStackParamList = {
    LogIn: undefined,
    Recover: { userId?: string } | undefined,
    Recover2: undefined,
    NovaSenha: undefined,
    Cadastro: undefined,
    Home: undefined,
}

export type TabParamList = {
    Busca: undefined,
    Comunidades: undefined,

}

export type DrawerList = {
    Home: undefined,
    Comunidades: undefined,
    SobreNos: undefined,
    DrawerContent: undefined,
    DrawerButton: undefined,
}

export type userCollection = {
    avatar_image: String,
    cidade: String,
    data_nascimento: String,
    email: String,
    estado: String,
    nome_usuario: String,
    telefone: number,
    idUser: String
}

export type postCollection = {
    data_publicacao: String,
    horario_publicacao: String,
    post_image: String,
    texto_publicacao: String,
    usuario: String,
    idPost: String,
}