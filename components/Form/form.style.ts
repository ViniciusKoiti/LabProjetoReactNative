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
        backgroundColor: "#1B264F",
        padding: 14,
    },

    textButtonCalculator: {
        fontSize: 20,
        color: "#ffffff",
    },
    textErrorMessage: {
        color: "red",
    },
    exhibitResultImc: {
        width: "100%",
        height: "50%",
    },
    listEspace: {
        minHeight: '20%',
        maxHeight: '30%',
        width: '90%',
        backgroundColor: '#274690',
        borderRadius: 30,
        padding: 30,
        margin: 15
    }
})

export default style;