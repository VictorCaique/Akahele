import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        height: 35,
        maxWidth: 140,
        borderRadius: 10,
        paddingHorizontal: 10,
        //backgroundColor: "#FFF",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
    },
    text: {
        color: '#FFF',
        fontWeight: 'bold'
    }
})