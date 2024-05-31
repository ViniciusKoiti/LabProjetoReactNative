import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  resultImc: {
    flex: 1,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin:10
  },
  boxShareButton:{
    alignItems: 'center',
    backgroundColor: '#274690',
    width:'100%',
    height:'100%',
    borderTopLeftRadius:30,
    borderTopRightRadius: 30,
    borderRadius:30,
    padding: 0,
  },
  buttonShare: {
    alignItems: 'center',
    justifyContent: 'center',
    width:'50%',
    height: 50,
    borderRadius:30,
    backgroundColor: '#1B264F',
    margin: 10
  },
  textShare: {
    color: '#FFF',
    fontSize: 20,
    
  },
  resultValue: {
    color:'white',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex:1,
    fontSize: 30,
  },
})

export default style;