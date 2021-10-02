import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 50,
        borderRadius: 5,
        paddingTop:10
    },
    hoshi: {
        color: '#FFF'
    },
    label: {
        color: '#FFF'
    },
    icon: {
        width: '140%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderBottomColor: "#fff",
    },
    input: {
        height: 50,
        width: '85%',
        color: '#FFF',
        borderBottomColor: "#fff",
        paddingHorizontal: 8,
    },
})