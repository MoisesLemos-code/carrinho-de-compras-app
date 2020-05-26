import React, { Component } from 'react'
import {
  View, Text,
  TextInput,
  Modal,
  TouchableHighlight,
  StyleSheet
} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default class Adicionar extends Component {
  state = {
    modalVisible: false,
    item: {
      titulo: '',
      valor: 0
    }
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

  salvarItem = () => {
    this.setModalVisible(false);
    this.props.addItem(this.state.item)
  }

  render() {
    const { modalVisible } = this.state;
    return (
      <View style={styles.container}>
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
                <FontAwesome5 name={'times-circle'} size={25} color={'#353434'} />
              </TouchableHighlight>
              <Text style={styles.titulo}>Adicionar Item ao carrinho</Text>
              <Text style={styles.textInputBody}>Título: </Text>
              <TextInput
                autoFocus={true}
                style={styles.input}
                placeholder="Digite o título"
                type={'name'}
                onChangeText={titulo => this.updateTitulo(titulo)}
              />
              <Text style={styles.textInputBody}>Valor: </Text>
              <TextInput
                style={styles.input}
                placeholder="Digite o valor"
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
        <TouchableHighlight
          style={styles.btnAbrir}
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text style={styles.btnText}>Adicionar Item</Text>
        </TouchableHighlight>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
  },
  titulo: {
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
  btnAbrir: {
    backgroundColor: '#73748E',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    padding: 10,
    elevation: 2
  },
  btnFechar: {
    width: 40
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