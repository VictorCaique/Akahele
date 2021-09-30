import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 30
    },
    content: {
        marginTop: '5%',
        paddingHorizontal: 50,
        width: '100%'
    },
    imagem: {
        maxWidth: 150,
        maxHeight: 150,
    },
    input: {
        paddingVertical: 40
    },
    botao1: {
        paddingVertical: 5,
        width: '100%',
        alignItems: 'flex-end',
        flexDirection: 'row-reverse',
        // alignContent: "center",
        justifyContent: 'space-around'
    },
    botao2: {
        paddingVertical: 5,
        width: '100%',
        alignItems: 'center',
        // alignContent: "center",
        // justifyContent: "flex-end"
    },
    botaoEsqueci: {
        alignSelf: "flex-end",
    }
})