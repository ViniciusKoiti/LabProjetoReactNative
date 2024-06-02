import { StyleSheet } from "react-native";

const style = StyleSheet.create({

    heightView: {
        color: '#274690',
        maxHeight: 30,
        overflow: 'visible',
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