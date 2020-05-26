import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


export default function Main({ navigation: { navigate } }) {
  const [btnDisable, setBtnDisable] = useState({
    adicionar: false,
    produto: true,
    venda: true
  });

  return (
    <View style={styles.container}>
      <View style={styles.containerAdicionar}>
        <TouchableOpacity
          disabled={btnDisable.adicionar}
          style={(btnDisable.adicionar ? { ...styles.btn, ...styles.btnDisabled } : styles.btn)}
          onPress={() => navigate("Carrinho")}
          underlayColor='#fff'>
          <FontAwesome5 name={'plus'} size={45} color={'#FFFF'} style={styles.btnIcon} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#353434',
    flexDirection: 'column',
    width: '100%',
    flex: 1,
  },
  containerAdicionar: {
    marginTop: 10,
    padding: 20,
    borderColor: '#CCC',
    borderWidth: 1,
  },
  input: {
    height: 50,
    paddingStart: 5,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5
  },
  textInputBody: {
    marginTop: 20,
    fontWeight: "bold",
    color: '#353434'
  },
  btn: {
    marginHorizontal: 10,
    padding: 10,
    elevation: 2,
    backgroundColor: '#760a00',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff',
  },
  btnDisabled: {
    backgroundColor: '#CCC',
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: "bold",
    fontSize: 24,
    paddingLeft: 10,
    paddingRight: 10
  },
  btnIcon: {
    textAlign: 'center',
  }
});
