import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",

    },
    containerBusca: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 40,
        paddingHorizontal: 50,
        width: '100%',

    },
    containerIcon: {
        marginTop: 10,
        width: "20%",
        borderWidth: 1,
        borderColor: "#0B6E73",
        padding: 10,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    }
})