import React, { Component } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, TextInput, FlatList, Dimensions,
StatusBar } from "react-native";
 
// Instala as fontes de Icones para uso
// npm install react-native-vector-icons
// npx react-native link react-native-vector-icons
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "./assets/styles/styles_aula02";
// Inicio da class App
class App extends Component{
    // Construtor de classe, é um metodo especial ultilizado para inicializar o estado do componente
    constructor(props){
        // Chama o construtor da classe base (React.Component) para garantir que o 'this' seja tratado corretamente
        super(props);
        //Inicialização do estado do componente
        this.state = {
            // 'Item' armazena o valor de um item no campo de texto ou formulário.
            // Inicialmente, está vazio
            item: '',
            // 'shoppingList' é um array que contém os itens da lista de compras
            // Começa, vazio
            shoppingList:[],
            // 'editingIndex' indica se estamos editando um item especifico da lista de compras
            // Se for '-1', significa que não estamos editando nenhum item no momento
            editingIndex: -1,
        };
    }
   
    // Método responsavel por adicionar um item à lista de compras
    addItem = () => {
        //Desestrutura as variaveis 'item' e o array 'shoppingList' do estad do componente
        const {item,shoppingList} = this.state;
        //Verifica se o campo 'item ' não está vazio (removendo os espaços em branco no inicio e no final)
        if(item.trim()){
            //Atualiza o estado, adicionando um novo item a lista de compras
            this.setState({
                //Adiciona o novo item ao final do array'shoppingList'
                shoppingList: [...shoppingList,{text: item, bought:false}],
                //Limpa o campo 'item'após adicionar o item á lista de compras
                item:'',
            })
        }
    };
    editItem = (index) =>{
        //Desestrutura o array 'shoppingList' do estado  do componente
        const { shoppingList } = this.state;
        //Atualiza o estado para permitir a edição do item selecionado
        this.setState({
            //Define o valor do campo 'item' com o texto do item que está sendo editado
            item: shoppingList[index].text,
            //Define o indice do item que sendo ediatado, agora poder identifica-lo mais tarde
            editingIndex: index,
        });
    };
    //Metodo responsavel por salvar as edições feitas em um 'item' da lista de compra
    saveEdit = () =>{
        //Desestrutura as variaveis 'item', 'editingIndex' e o array 'shoppingList' do estado do componente
        const { item, shoppingList,  editingIndex } = this.state;
        //Verifica se o campo 'item' não está vazio (removendo espaços em branco no inicio e no final)
        if (item.trim()){
            //Cria uma cópia do array 'shoppingList' para garantir que o estado seja imutavel
            const updatedList = [...shoppingList];
            //Atualiza o item na posição do index 'editingIndex' com novo texto
            updatedList[editingIndex].text = item;
            //Atualiza o estado com a lista de compras modificada, limpa o campo 'item' e desmarca o indice de edição
            this.setState({
                //atualiza a lista de compras com item editado
                shoppingList: updatedList,
                //Limpa o campo de entrada 'item'
                item: '',
                //Restaura o valor de 'editingIndex' para '-1', indicando que não há mais item sendo editado
                editingIndex: -1,
            });
        }
    };
    toggleBought = (index) =>{
        //Desestrutura a variavel 'shoppingList' do estado do componente
        const { shoppingList } = this.state;
        //Cria uma cópia do array 'shoppingList' para garantir que o estado seja imutavel
        const updatedList = [...shoppingList];
        //Alterna o valor valor da propriedade 'bought' do item do indice especificado
        updatedList[index].bought =!updatedList[index].bought;
        //Atualiza o estado com a lists de vompras modificada
        this.setState({
            //Atualiza a lista de compras com o novo estado do item
            shoppingList: updatedList,
        });
    };
    //Metodo responsavel  por renderizar o 'item' da lista de compra
    renderItem = ({ item, index })=>{
        //Comprovante: View que contem a estrutura visual do item da lista de compra
        <View style={styles.itemContainer}>
            {/* Botão para alternar o estado "comprado" do item */}
            <TouchableOpacity onPress={() => this.toggleBought(index)}>
                {/* Icone da status de compra: "check-circle" para comprado, "radio-button-unchecked para não comprado" */}
                <Icon name={item.bought ? 'check-circle' : 'radio-button-unchecked'}
                //Tamanho do icone
                size={24}
                // cor do icone: 'verde' - comprado | 'cinza' - se não comprado
                cor={item.bought ? 'green' : 'gray'}
                //Estilo apliado ao icone
                style={styles.checkIcon}
                />
            </TouchableOpacity>
            {/*exibe o texto do item */}
            <Text style={[styles.itemText, item.bought && styles.strikethroung]}>
                {/* Exibe o texto do item */}
                {item.text}
            </Text>
            {/* botão para editar o item */}
            <TouchableOpacity onPress={() => this.editItem(index)}>
                {/* icone de edição */}
                <Icon name="edit" size={24} color="blue" />

            </TouchableOpacity>
        </View>
    };

    //Metodo responsável por renderizar um separador entre os itens da lista
    renderSeparador = () => {
        //Retorna uma view que serve como separador, com estilo definido
        return<View style={styles.separador}/>;
    };








    render(){
        return(
            <SafeAreaView>
                {/* Ajustando a barra de status para não interferir no App */}
                <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
                {/* Cabeçalho */}
                <View>
                    <Text> App - Lista de Compras</Text>
                </View>
                {/* Corpo */}
                <View>
                    <TextInput placeholder="Digite o Nome do item!"/>
                    <TouchableOpacity>
                        <Text>Adicionar</Text>
                    </TouchableOpacity>
                    {/* Para não dar erro vamos deixar comentado ainda o FlatList
                    <FlatList /> */}
                </View>
                {/* Rodapé */}
                <View>
                    <Text>App de lista de Compras Tii07</Text>
                </View>
            </SafeAreaView>
        );
    }
}
 
export default App;
