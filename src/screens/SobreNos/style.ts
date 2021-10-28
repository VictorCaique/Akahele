import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    backgroundImage: {
        backgroundColor: theme.colors.primary,
        width: 200,
        height: 200,
        borderRadius: 100,
        marginVertical: 30
    },
    title: {
        fontFamily: theme.fonts.robotoLight,
        fontSize: 18,
        color: "#000",
        paddingHorizontal: 20,
        textAlign: "center",
    }
})