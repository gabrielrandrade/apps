//Importe a dependencias do CSS
import { StyleSheet } from "react-native";
//Css para os componentes
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ccc'
    },
    header:{
        padding:20,
        paddingTop:60,
        backgroundColor:'#f8f8f8',
        alignItems:'center'
    },
    body:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    footer:{
        padding:20,
        backgroundColor:'#4682b4',
        alignItems:'center'
    },
    button:{
        backgroundColor: '#007bff',
        padding:10,
        borderRadius:5,
        margin:20
    },
    buttonText:{
        color:'#fff',
        fontSize:16,
        textAlign:'center'
    }

});

export default styles;