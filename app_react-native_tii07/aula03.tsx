/*Comentario em bloco */
//Comentario em linha 
//Importando as dependencias
import React, { Component } from "react";
import { SafeAreaView, View, Text, Button, TouchableOpacity } from "react-native";
import styles from './assets/styles/styles_aula02';

class App extends Component{
    //Armazena a data
    state = {
        date: '',
    };
    //Método para definir a data de hoje, outra forma de declarar função
    getDate =() => {
        const today = new Date();
        //Formatação da data em pt-br
        const options = {
            day:'2-digit',
            month:'2-digit',
            year:'numeric'
        };
        //Formatação a saída
        const formatDate = today.toLocaleDateString('pt-BR', options);
        //Atualiza o estudo da saída no vetor da propriedade state
        this.setState({date: formatDate});
        //Para força a atualizção do componente
        this.forceUpdate();
    };
    
    render(){
        return(
            <SafeAreaView style={styles.container}>
                {/* Iniciado o cabecalho */}
                <View style={styles.header}>
                    <Text>App Senac 02</Text>
                </View>
                 {/* Iniciado o corpo */}
                 <View style={styles.body}>
                    <Text>Corpo</Text>
                    {/*<Button
                    title='Mostrar data de hj'
                    onPress={this.getDate}      
                    />*/}
                    <TouchableOpacity onPress={this.getDate} style={styles.button}>
                        <Text style={styles.buttonText}>Mostrar data de hoje</Text>
                    </TouchableOpacity>
                    {
                        this.state.date ? (
                        <Text>Data: {this.state.date}</Text>
                        ) : null
                    }
                </View>
                 {/* Iniciado o rodapé */}
                 <View style={styles.footer}>
                    <Text>Rodapé</Text>
                </View>
            </SafeAreaView>
            
        );
    }
}
export default App;