import React, { useState, useEffect } from 'react';
import {
  View, Text,
  TextInput,
  FlatList,
  StyleSheet
} from 'react-native'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import Adicionar from './adicionarItem'
import Item from './item'


export default function Carrinho({ navigation: { navigate } }) {

  const [carrinho, setCarrinho] = useState({
    valor: 0,
    subTotal: 0
  });

  const [lista, setLista] = useState({
    items: [
      { id: 1, titulo: "Energia", valor: 10 },
      { id: 2, titulo: "Água", valor: 10 },
      { id: 3, titulo: "Internet", valor: 10 }
    ]
  });

  adicionarItem = (item) => {
    const { titulo, valor } = item;
    const obj = {
      id: lista.items.length + 1,
      titulo,
      valor: parseFloat(valor)
    }
    setLista({ items: [...lista.items, obj] })
  }

  editarItem = i => {
    const list = lista.items.map((item, j) => {
      if (j === i.id) {
        return item + 1;
      } else {
        return item;
      }
    });
    console.log(list)

  };

  useEffect(() => {

    let total = lista.items.reduce(
      (contador, obj) => contador + obj.valor,
      0
    )
    total = parseFloat(carrinho.valor) - parseFloat(total)
    setCarrinho({ ...carrinho, subTotal: parseFloat(total.toFixed(2)) })

  }, [lista, carrinho.valor]);



  return (
    <View style={styles.container}>
      <Text style={styles.textInputBody}>Valor (R$):</Text>
      <TextInput
        autoFocus={true}
        style={styles.input}
        placeholder="Digite o valor à ser gasto"
        keyboardType={"numeric"}
        onChangeText={valor => (valor === "" ? setCarrinho({ ...carrinho, valor: 0 }) : setCarrinho({ ...carrinho, valor }))}
      />
      <Adicionar addItem={(item) => adicionarItem(item)} />
      <View style={styles.containerValor}>
        <Text style={styles.textRestante}>Restante</Text>
        <Text
          style={(carrinho.subTotal < 0 ? styles.textValorNegative : styles.textValor)}
        >R${carrinho.subTotal}</Text>
      </View>
      <FlatList
        contentContainerStyle={styles.containerList}
        data={lista.items}
        inverted={true}
        keyExtractor={(item, index) => index.toString()}
        renderItem={
          ({ item }) => <Item
            item={item}
            editItem={(item) => editarItem(item)}
          />
        }
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: '#353434',
    flexDirection: 'column',
    width: '100%',
    flex: 1,
  },
  textInputBody: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#FFFF'
  },
  input: {
    height: 50,
    paddingStart: 5,
    backgroundColor: 'white',
    borderColor: 'black',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  containerValor: {
    marginTop: 30,
  },
  textRestante: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: "bold",
    fontSize: 20,
  },
  textValor: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: "bold",
    fontSize: 50,
  },
  textValorNegative: {
    color: '#FF0000',
    textAlign: 'center',
    fontWeight: "bold",
    fontSize: 50,
  },
  containerList: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#FFF',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
})