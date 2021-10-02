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
        margin: 15,
        paddingTop: 30,
    },
    divBotoes: {
        paddingVertical: 30,
        width: '100%',
        alignItems: 'flex-end',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between'
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
    },
    entrar: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 56,
        width: 90,
        borderRadius: 8,
        backgroundColor: '#FFF',
    },
    title: {
        flex: 1,
        fontSize: 15,
        textAlign: 'center',
    },

})