import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const cadastro = () => {
    alert(nome);
    alert(email);
    alert(senha);
    // Fazer chamada no back-end para cadastro.
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <ImageBackground style={{ width: '100%', height: '100%' }} source={require('./assets/teladefundo.jpeg')}>
        <View style={styles.overlay}>
          <TextInput placeholder="Seu nome..." style={styles.textInput} onChangeText={text => setNome(text)} />
          <TextInput placeholder="Seu e-mail..." style={styles.textInput} onChangeText={text => setEmail(text)} />
          <TextInput secureTextEntry={true} placeholder="Sua senha..." style={styles.textInput} onChangeText={text => setSenha(text)} />

          <TouchableOpacity style={styles.btnCadastro} onPress={() => cadastro()}>
            <Text style={{ color: 'white', textAlign: 'center' }}>CADASTRAR!</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#27282D',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  textInput: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
  },
  btnCadastro: {
    width: '100%',
    height: 40,
    backgroundColor: '#c9561c',
    borderRadius: 20,
    justifyContent: 'center',
  },
});
