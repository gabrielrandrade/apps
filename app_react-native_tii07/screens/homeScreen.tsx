//Importantdo as dependencias do ReactJs e ReactNative
import React, {Component} from "react";
import { View,Text, Button, TouchableOpacity } from "react-native"
import { NavigationProp } from "@react-navigation/native";

//Crie um arquivo na pasta'assets/styles' o arquivo 'styles_aula03.ts'
import styles from "../assets/styles/styles_aula03";

interface Props{
    navigation: NavigationProp<any>;
}

class HomeScreen extends Component<Props>{
    render(){
        return(
            //A View é o container principal da tela, com estilos aplicados
            <View style={styles.container}>
                {/*Componente text exibe o titulo na tela */}
                <Text style={styles.title}>Bem vindo ao App - Senac Tito</Text>
                {/*Botão tradicional do react native, quando for pressionado navega para a tela 'details' */}
                <Button
                    //Titulo do botão
                    title="Ir para os detalhes!"
                    //Navegação para a tela de detalhes 'details'
                    onPress={() => this.props.navigation.navigate('Details')}
                    />
                {/* Componente TouchableOpacity é mais flexivel, usando para definir área clicável Aqio, ele também navega para a tela 'Details', e tem um compartamento de botão */}
                <TouchableOpacity
                    //Aplica um estilo para o botão
                    style={styles.button}
                    //Navegação para a tela de Datalhes 'Details'
                    onPress={() => this.props.navigation.navigate('Details')}
                >
                    {/* Texto dentro do TouchableOpacity, com estilo de formatação de texto */}
                    <Text style={styles.buttonText}>Ir para detalhes</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default HomeScreen;