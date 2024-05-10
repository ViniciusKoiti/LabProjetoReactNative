import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    formContext: {
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor: '#ffffff',
        borderTopLeftRadius:30,
        borderTopRightRadius: 30,
        marginTop: 30,
        justifyContent: "space-around",
        alignItems: "center",
        paddingTop:15,
    },
    
    form: {
        width:"100%",
        height:"auto",
        marginTop: 30,
        padding:10
    },

    formLabel: {
        color:"#000000",
        fontSize: 18, 
        paddingLeft: 20,
    },

    input: {
        width:"90%",
        borderRadius:50,
        backgroundColor: "#f6f6f6",
        height: 40,
        color:"black",
        margin: 12,
        paddingLeft: 10,

    },
    buttonCalculator:{
        borderRadius: 50,
        alignItems: "center", 
        justifyContent: "center", 
        width: "90%",
        backgroundColor: "#FF0043",
        padding: 14,
        paddingBottom: 14, 
        marginLeft: 12,
        margin: 30
    },

    textButtonCalculator: {
        fontSize: 20,
        color: "#ffffff",
    },
    textErrorMessage: {
        color: "red",
    }
})

export default style;