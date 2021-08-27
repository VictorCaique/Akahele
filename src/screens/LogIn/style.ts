import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        width: "100%",
        height: "100%",
        backgroundColor: theme.colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagem: {
        maxWidth: 150,
        maxHeight: 150,
    }
})