import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:20,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop:20,
    },
    header:{
        width: width * 0.9,
        marginBottom: 20,
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    body:{
        width: width * 0.9,
        marginBottom:200,
    },
    input:{
        height: 60,
        borderColor: '#ccc',
        borderWidth: 2,
        borderRadius: 10,
        paddingLeft: 10,
        paddingBottom: 20,
        paddingTop:20,
        width: width * 0.9,
    },
    button:{
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 20,
        marginTop: 20,
        width: width * 0.9,
    },
    addButton:{
        backgroundColor: '#4caf50',
    },
    saveButton:{
        backgroundColor: '#2196f3',
    },
    buttonText:{
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    list:{
        width: width * 0.9,
        marginBottom: 20,
    },
    //Css referente a lista de itens
    itemContainer:{
        padding:10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
    },
    checkIcon:{
        marginRight:10,
    },
    strikethroung:{
        textDecorationLine: 'line-through',
        color:'#888',
    },
    itemText:{
        fontSize: 18,
        flex:1,
    },
    separador:{
        height:1,
        backgroundColor:'#4caf50',
    },
    footer:{
        width: width * 0.9,
        alignItems: 'center',
    },
    footerText:{
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default styles;