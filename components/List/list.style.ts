import { StyleSheet } from "react-native";

const style = StyleSheet.create({

    heightView: {
        marginTop: 10,
        color: '#1b1e29',
        maxHeight: 75,
        borderRadius: 20,
    },
    listContainer:{
        display: 'flex',
        width: '100%',

        borderRadius: 30
    },
    listTitleContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        width: "100%",
        color: '#FFF',
        backgroundColor: "#1B264F",
        padding: 14,
    }, 
    titleContainer: {
        fontSize: 24,
    }
    

})

export default style;