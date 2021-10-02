import { NavigatorScreenParams } from '@react-navigation/native'

export type TopStackParamList = {
    LogIn: undefined,
    Recover: {userId?: string} | undefined,
    Recover2: undefined,
    NovaSenha: undefined,
    Cadastro: undefined,
}