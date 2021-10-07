import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.primary,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'column',
        paddingTop: 30
    },
    row1: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagem: {
        maxWidth: 150,
        maxHeight: 150,
    },
    title: {
        paddingTop: '15%',
        fontFamily: theme.fonts.robotoBlack,
        fontSize: 16,
        color: '#FFF',
    },
    input: {
        paddingVertical: 14,
        width: '70%',
        justifyContent: 'space-between',
    },
    botao: {
        width: 140,
        paddingBottom: '5%'
    },
})