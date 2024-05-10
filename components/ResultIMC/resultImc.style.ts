import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  resultImc: {
    flex: 1,
    color: 'blue',
    alignItems: 'center',
  },
  boxShareButton:{
    alignItems: 'center',
    backgroundColor: '#ff0043',
    padding: 0,
  },
  buttonShare: {
    alignItems: 'center',
    backgroundColor: 'red',
    borderColor: 'none',
    borderRadius: 10,
    
  },
  textShare: {
    color: '#FFF',
    fontSize: 12,
  
  },
  resultValue: {
    color:'black',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex:1,
    fontSize: 12,
  },
})

export default style;