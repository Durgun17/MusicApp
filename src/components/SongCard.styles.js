import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: "row",
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 50,
    },
    inner_container: {
        padding:10,
        flex: 1,
        justifyContent: "center",
    },
    title: {
        color: "black",
        fontWeight: "bold",
        fontSize: 25,
    },
    info_container: {
        flexDirection: "row",
        alignItems: "center",
    
    },
    year: {
        fontSize: 13,
        color:"grey",
        paddingLeft: 12,
        fontWeight: "bold",
    },
    body: {
        flexDirection: "row",
        flex: 1,
    },
    tukCont: {
        borderWidth: 1,
        padding: 3,
        borderColor: "red",
        borderRadius: 5,
    },
    tuk: {
        color: "red",
    },


});