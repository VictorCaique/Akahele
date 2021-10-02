import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.primary,
        alignItems: 'center',
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
        alignSelf: 'center',
    },
    input: {
        margin: 15,
        paddingTop: 30,
    },

    title: {
        paddingTop: '15%',
        fontFamily: theme.fonts.robotoBlack,
        fontSize: 16,
        color: '#FFF',
    },

    Botao: {
        padding: '20%',
        alignSelf: 'center',

    },
    Row: {
        
    }

})