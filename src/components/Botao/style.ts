import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 56,
        minWidth: 90,
        maxWidth: 150,
        borderRadius: 8,
        backgroundColor: '#FFF',
    },
    title: {
        flex: 1,
        fontSize: 15,
        textAlign: 'center',
    },

})