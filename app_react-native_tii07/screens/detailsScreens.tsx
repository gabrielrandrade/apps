/*
Importação dos módulos necessários do React e React Native
React é necessa´rio para criar componentes React
View e Text são componentes do React Native para exibir conteúdo em tela
*/
 
 
import React, { Component } from "react";
import { View, Text } from "react-native";
 
//importação do arquivo de estilo
import styles from "../assets/styles/styles_aula03";
/*
Definição da Class DetailScreen que é um componente de classe que herda de component
permitindo que ele tenha recursos do React
*/
 
class DetailScreen extends Component{
    render(){
        return(
            /* View é container que devolve outros elementos na tela Estilo é aplicado á view a partir do arquivo de estilos */
            <View style={styles.container}>
                {/*Componente text exibe o titulo na tela com estilo aplicado */}
                <Text style={styles.title}>Detalhes</Text>
                {/*Texto da pagina de detalhes */}
                <Text style={styles.text}>
                    Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the industry's standard 
                    dummy text ever since the 1500s, when an unknown printer 
                    took a galley of type and scrambled it to make a type specimen bookk.
                </Text>
            </View>
        );
    }
}
 
/*
Exporta o componente HomeScreen como exportação padrão deste arquivo.
Isso permite que o componente seja importado sem a necessidade de chaves em outros arquivos
*/
 
export default DetailScreen;
