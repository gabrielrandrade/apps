import { StyleSheet } from "react-native";
 
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        padding:16
    },
    title:{
        fontSize:24,
        fontWeight:'bold'
    },
    button:{
        margin: 20,
        backgroundColor: '#007bff',
        padding:10,
        borderRadius: 7
    },
    buttonText:{
        color: '#fff',
        fontSize: 20
    },
    text:{
        fontSize:18,
        textAlign: 'center'
    }
});
 
export default styles;