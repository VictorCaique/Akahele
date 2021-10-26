import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'flex-start'
    },
    footer: {
        borderTopColor: "#f4f4f4",
        marginBottom: 15,
        borderTopWidth: 1
    },
    drawerSection: {
        marginVertical: 15,

    },
    label: {
        fontFamily: theme.fonts.robotoLight,
        fontSize: 18
    },
    userInfoSection: {
        marginTop: -40,
        height: 150,
        paddingLeft: 15,
        backgroundColor: '#00C2CB',
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingBottom: 40
    },
    sobreNos: {
        marginTop: 5,
        paddingTop: 30,
        borderTopWidth: 1,
        borderColor: '#A9F98E',
    },
    title: {
        fontFamily: theme.fonts.robotoMedium,
        color: '#FFF',
        paddingLeft: 16,
    }

})