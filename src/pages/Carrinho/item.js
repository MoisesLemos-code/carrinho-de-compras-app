import React, { Component } from 'react'
import {
  View, Text,
  Modal,
  TextInput,
  TouchableHighlight,
  StyleSheet
} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default class Item extends Component {

  state = {
    modalVisible: false,
    item: {
      titulo: this.props.item.titulo,
      valor: this.props.item.valor
    }
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setState({
      modalVisible: false,
      item: {
        titulo: this.props.item.titulo,
        valor: this.props.item.valor
      }
    })
  }

  componentWillUnmount() {
  }

  setModalVisible = (visible) => {
    this.setState({ ...this.state, modalVisible: visible });
  }

  updateTitulo = (titulo) => {
    const { item } = this.state;
    item.titulo = titulo;
    this.setState({ ... this.state, item })
  }

  updateValor = (valor) => {
    const { item } = this.state;
    item.valor = valor;
    this.setState({ ... this.state, item })
  }

  deleteItem = () => {
    console.log(this.state.item)
  }

  salvarItem = () => {
    this.setModalVisible(false);
    this.props.editItem(this.state.item)
  }

  render() {
    const { modalVisible } = this.state;
    return (
      <View style={styles.container} >
        <Text style={styles.titulo}>{this.state.item.titulo}</Text>
        <Text style={styles.valor}>R${this.state.item.valor}</Text>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableHighlight
                style={styles.btnFechar}
                onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}
              >
                <FontAwesome5 name={'times-circle'} size={35} color={'#353434'} />
              </TouchableHighlight>
              <Text style={styles.titulo}>Adicionar Item ao carrinho</Text>
              <Text style={styles.textInputBody}>Título: </Text>
              <TextInput
                autoFocus={true}
                style={styles.input}
                placeholder="Digite o título"
                type={'name'}
                defaultValue={this.state.item.titulo}
                onChangeText={titulo => this.updateTitulo(titulo)}
              />
              <Text style={styles.textInputBody}>Valor: </Text>
              <TextInput
                style={styles.input}
                placeholder="Digite o valor"
                value={(this.state.item.valor && this.state.item.valor.toString())}
                keyboardType={"numeric"}
                onChangeText={valor => this.updateValor(valor)}
              />
              <TouchableHighlight
                style={styles.btnSalvar}
                onPress={() => {
                  this.salvarItem();
                }}
              >
                <Text style={styles.btnText}>Salvar</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <View style={styles.btnGroup}>
          <TouchableHighlight
            style={styles.btnAbrir}
            onPress={() => {
              this.setModalVisible(true);
            }}
          >
            <FontAwesome5 name={'edit'} size={45} color={'#FFFF'} style={styles.btnIcon} />
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.btnDelete}
            onPress={() => {
              this.deleteItem();
            }}
          >
            <FontAwesome5 name={'trash'} size={45} color={'#FFFF'} style={styles.btnIcon} />
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF8066',
    flexDirection: 'column',
    width: '100%',
    elevation: 3,
    marginBottom: 10,
    borderRadius: 10
  },
  titulo: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: "bold",
    fontSize: 20,
  },
  valor: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: "bold",
    fontSize: 20,
  },
  btnIcon: {
    textAlign: 'center',
  },
  tituloEdit: {
    alignSelf: 'center',
    fontSize: 20,
    color: '#6C6F74',
  },
  input: {
    height: 50,
    paddingStart: 5,
    backgroundColor: '#FFFF',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5
  },
  textInputBody: {
    marginTop: 20,
    fontWeight: "bold",
    color: '#6C6F74'
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: "bold",
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    width: '90%',
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  btnGroup: {
    flexDirection: 'row'
  },
  btnDelete: {
    backgroundColor: '#73748E',
    borderBottomRightRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    padding: 10,
    elevation: 2,
    width: '50%'
  },
  btnAbrir: {
    backgroundColor: '#73748E',
    borderBottomLeftRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    padding: 10,
    elevation: 2,
    width: '50%'
  },
  btnFechar: {
    width: 50,
  },
  btnSalvar: {
    backgroundColor: '#73748E',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    padding: 10,
    elevation: 2
  }

});