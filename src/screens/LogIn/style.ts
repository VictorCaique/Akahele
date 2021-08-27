import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.primary,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        marginTop: -40,
        paddingHorizontal: 50
    },
    imagem: {
        maxWidth: 150,
        maxHeight: 150,
        marginBottom: '25%'
    },
    input: {
        margin: 30
    },
    botao: {
        alignSelf: 'center'
    }
})