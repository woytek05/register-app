import { StyleSheet } from "react-native";
import colors from "./Colors";

module.exports = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
    },
    headerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.darkPrimaryColor,
    },
    alignItemsCenter: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    spaceAround: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
    },
    smallHeader: {
        fontSize: 16,
        color: colors.secondaryText,
        fontWeight: "bold",
        textAlign: "center",
    },
    header: {
        fontSize: 36,
        color: colors.white,
    },
    input: {
        height: 40,
        width: 200,
        color: colors.white,
        borderBottomWidth: 1,
        borderBottomColor: colors.white,
    },
    marginTop: {
        marginTop: 20,
    },
    smallMarginTop: {
        marginTop: 10,
    },
    marginBottom: {
        marginBottom: 20,
    },
    flex1: {
        flex: 1,
    },
    flex2: {
        flex: 2,
    },
    flex8: {
        flex: 8,
    },
    row: {
        flexDirection: "row",
    },
    avatar: {
        width: 75,
        height: 75,
    },
    bigAvatar: {
        width: 200,
        height: 200,
    },
    blueText: {
        fontSize: 20,
        color: colors.darkPrimaryColor,
        fontWeight: "bold",
        textAlign: "center",
    },
});
