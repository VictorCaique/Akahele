import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 43,
        minWidth: 90,
        maxWidth: 150,
        borderRadius: 50,
        backgroundColor: theme.colors.primary,
    },
    title: {
        flex: 1,
        color: "#FFF",
        fontSize: 15,
        textAlign: 'center',
        // opacity: 0.65,
        fontFamily: theme.fonts.robotoMedium
    },

})