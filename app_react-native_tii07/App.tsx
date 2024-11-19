import React, { Component } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, TextInput, FlatList, Dimensions,
StatusBar } from "react-native";
 
// Instala as fontes de Icones para uso
// npm install react-native-vector-icons
// npx react-native link react-native-vector-icons
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "./assets/styles/styles_aula04";

// Instala  as dependencias de fontes
//expo install expo-font
 
//Remover em caso de erro com fontes
// npm unistall expo-app-loading
// Criar um arquivo com nome ; react-native.config.js
 
import * as Font from 'expo-font';
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
            //variavel para fonte iniciando como falso
            fontLoaded: false,
        };
    }
    /* 
        O metodo 'componentDidMount' é um metodo do ciclo de vida do react, execultado automaticamente logo após o componente ser montado
        (adicionando a tela). Ele é comumente usado para realizar carregamentos assíncronos de recursos,
        como fontes, imagens ou dados de uma API, antes de renderizar o conteúdo do componente
    */
    async componentDidMount(){
        try{
            /* Carrega as fontes personalizadas de forma assíncrona Font. loadAsyn{}
            font.loadAsync() retorna uma promise, por isso p uso de 'await' para garantir que as fontes sejam carregadas
            antes de continuar a execução */
            await Font.loadAsync({
                /* O 'Roboto' é o nome da fonte que será usada no aplicativo. O caminho relativo para o arquivo de fonte é fornecido
                como valor para a chave. Aqui estamos carregando versão regunlar da font 'Roboto' */
                'Roboto': require('.assets/fonts/Roboto/Roboto-Regular.ttf'),
                //Aqui estamos carregando a versão em negrito da fonte'roboto' com nome 'Roboto-Bold'
                'Roboto-Bold': require ('.assets/fonts/Roboto/Roboto-Bold.ttf'),
                //Aqui estamos carregando a versão em negrito da fonte'roboto' com nome 'Roboto-Bold'
                'Roboto-Bold-Italic': require ('.assets/fonts/Roboto/Roboto-BoldItalic.ttf'),
            });
            /*
                Após o carregamento das fontes, o estado 'fontLoaded' é atualizado para 'true'
                isso pode ser usado para garantir que o conteúdo que depende das dontes carregadas
                seja renderizado apenas depois que fontes estiverem disponíveis
            */
           this.setState({ fontLoaded: true });
        }catch (error){
            /*
                Se ocorrer um \erro durante o carregamento das fontes(por exemplo, se o arquivo não for encontrado),
                o erro é capturado aqui e pode ser tratado conforme necessário(exemplo exibir uma mensagem de erro)
            */
           console.error('Erro ao carregar fontes:', error);

        }

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
    renderItem = ({ item, index })=>(
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
    );

    //Metodo responsável por renderizar um separador entre os itens da lista
    renderSeparador = () => {
        //Retorna uma view que serve como separador, com estilo definido
        return<View style={styles.separador}/>;
    };








    render(){
        //Instaciando as constantes das variaveis 'item', 'editingItem' e o array 'shoppingList' para o start da aplicação
        const {item, shoppingList, editingIndex } = this.state;
        return(
            <SafeAreaView style={styles.container}>
                {/* Ajustando a barra de status para não interferir no App */}
                <StatusBar barStyle="dark-content" backgroundColor="#f00"/>
                {/* Cabeçalho */}
                <View style={styles.header}>
                    <Text style={styles.title}> App - Lista de Compras</Text>
                </View>
                {/* Corpo */}
                <View style={styles.body}>
                    <TextInput style={styles.input} 
                    placeholder="Digite o Nome do item!"
                    //Valor atual do campo de entrada, vinculando ao estado 'item'
                    value={item}
                    //Atualizando o estado 'item' sempre que o texte é alterado pelo usuario
                    onChangeText={(text) => this.setState({item:text})}
                    />
                    <TouchableOpacity
                        style={[styles.button,
                        //Aplica o estilo espeficifico baseado em 'editingIndex';
                        //Se 'editingIndex' for '-1', aplica o estilo 'addButton'
                        //Caso contrario, aplica o estilo 'sabeButton'
                        editingIndex === -1 ? styles.addButton : styles.saveButton,
                        ]}
                        /* Define a ação ao pressionar o botão: se 'editingIndex' for '-1', chama a função 'addItem' para adicioinar um novo item
                            Caso contrario , chama a função 'saveEdit' para salvar as edições feitas no item */
                        onPress={editingIndex== -1 ? this.addItem : this.saveEdit}
                    >
                        <Text style={styles.buttonText}>
                            {/* O texto exibido no botão depende do valor de 'editingIndex: se'editingIndex for '-1', seu texto será 'adicionar'
                            caso contrario seu texto será 'salvar edição'*/}
                            {editingIndex === -1 ? 'Adicionar' : 'Salvar Edição'}
                        </Text>
                    </TouchableOpacity>
                    <FlatList 
                        /* 
                        A propriedade 'data'recebe a lista de itens que será exibida no FlatList
                        Nesse caso, é a lista 'shoppingList' 
                        */
                        data={shoppingList}
                       /*
                                A função 'renderItem' é camada para renderizar cada item da lista
                                Ele recebe o objeto de item e deve retornar o componente que será exibido para cada item
                       */
                        renderItem={this.renderItem}
                      /*
                                A função 'keyExtractor' extrai uma chave única para cada item
                                aqui, estamos usando indice do item convertido para string(evita warnings ao usar índice como chave)
                      */
                        keyExtractor={(item, index) => index.toString()}
                     /* 
                                A propriedade 'ItemSeparatorComponent' permite adicionar um componente
                                visual entre os itens da lista
                                Neste caso, 'renderSeparator' é uma função que retorna o separador visual
                                (como uma linha ou um espaço)
                     */
                        ItemSeparatorComponent={this.renderSeparador}
                        style={styles.list}
                    />
                </View>
                {/* Rodapé */}
                <View style={styles.footer}>
                    <Text style={styles.footerText}>App de lista de Compras Tii07</Text>
                </View>
            </SafeAreaView>
        );
    }
}
/*
    Desestruturação da largura da janela(tela) do dispositivo Mobile
    A função 'Dimensions.get', retorna um objeto contendo 
    as dimensões da janela e a destruturação extrai apenas a propriedade
    'widght' de 'window',que representa a largura da janela (tela)
*/
const { width } = Dimensions.get('window');
 
export default App;
