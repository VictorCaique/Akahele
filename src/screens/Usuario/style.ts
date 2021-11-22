import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 30,
        width: '100%'
    },
    scrollView: {
        alignItems: "center",
        justifyContent: "center",
    },
    content: {
        // paddingVertical: '25%',
        marginTop: '5%',
        paddingHorizontal: 50,
        width: '100%'
    },
    image: {
        width: 115,
        height: 115,
        borderRadius: 57.5,
    },
    butomPicker: {
        paddingTop: 50,
        height: 120,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    butomConfirm: {
        width: 300,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        marginTop: 30,
    },
    label: {
        fontFamily: theme.fonts.robotoRegular,
        fontSize: 16,
    },
    picker: {
        paddingVertical: 20,
        paddingLeft: 20
    },
    excluirText: {
        color: "#FF0000",
        borderBottomWidth: 1,
        borderBottomColor: "#FF0000",
        paddingTop: 15
    }
})