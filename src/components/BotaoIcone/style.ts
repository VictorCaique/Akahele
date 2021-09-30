import { StyleSheet, PixelRatio } from 'react-native';
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        backgroundColor: "#FFF",
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        flex: 1,
        color: "#000",
        fontFamily: "Roboto",
        fontSize: 15,
        textAlign: 'center',
    },
    iconWrapper: {
        // width: 56,
        // height: 56,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: PixelRatio.getPixelSizeForLayoutSize(25),
        height: PixelRatio.getPixelSizeForLayoutSize(25),
        paddingLeft: PixelRatio.getPixelSizeForLayoutSize(8),
    }
})