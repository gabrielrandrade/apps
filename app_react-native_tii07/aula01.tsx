import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

class App extends Component{
  render(){
    return(
      //comentario fora de bloco
      /*Comentario fora de bloco*/
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.header}>Cabeçalho</Text>
        </View>
        <View style={styles.main}>
          <Text style={styles.main}>Corpo</Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footer}>Rodape</Text>
        </View>
      </View>
    );
  }
}

//Construção de css
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'space-between',
    //alignItems: 'center',
    backgroundColor: '#f00',
    
  },
  header:{
    backgroundColor: '#4caf50',
    padding: 20,
    alignItems: 'center',
    fontSize:30,
  },
  main:{
    backgroundColor: '#ffffff',
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    fontSize:30,
  },
  footer:{
    backgroundColor:'#4caf50',
    padding:20,
    alignItems:'center',
    fontSize:30,
  }
})

export default App;
