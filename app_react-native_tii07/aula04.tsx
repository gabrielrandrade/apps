/*
Importação dos módulos necessários do React e React Native
React é necessa´rio para criar componentes React
*/
 
 
import React, { Component } from "react";
//Importa o container de navegação que gerencia o estado da navegação
import { NavigationContainer } from "@react-navigation/native";
//Importa o criador de navegação em pilha (stack), que gerencia as telas empilhadas
import { createStackNavigator } from "@react-navigation/stack";
//Importa a tela inicial e a tela de detalhes
import HomeScreen from "./screens/homeScreen";
import DetailScreen from "./screens/detailsScreens";

//Criação do objeto StackNavigator para gerenciar as telas empilhadas
const Stack = createStackNavigator();

//Componente funcional 'App' que configura e exibe as telas e a navegação
const App: React.FC = () => {
    return(
        //NavigationContainer gerencia o estado da navegação em toda a aplicação
        <NavigationContainer>
            {/*o Stack.Navigator define um conjunto de telas empilhadas para navegação */}
            <Stack.Navigator>
                {/*A primeira tela é a de home, associada ao componente HomeScreen */}
                <Stack.Screen name="Home" component={HomeScreen}/>
                {/* a segunda tela é a detalhes, associada ao componente DetailsScreen */}
                <Stack.Screen name="Details" component={DetailScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};

/*Exporta o componente App como exportação padrão deste arquivo isso permite que o componente seja importado sem a necessidade de chaves em outros arquivos */

export default App;