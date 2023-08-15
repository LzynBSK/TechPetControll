// // src/screens/LoginScreen.js
// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// const LoginScreen = ({ navigation }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Implementar a lógica de autenticação aqui
//     // Por simplicidade, vamos apenas redirecionar para a tela principal sem autenticação
//     navigation.replace('Home');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>
//       <TextInput
//         placeholder="Nome de usuário"
//         onChangeText={text => setUsername(text)}
//         value={username}
//         style={styles.input}
//       />
//       <TextInput
//         placeholder="Senha"
//         onChangeText={text => setPassword(text)}
//         value={password}
//         secureTextEntry
//         style={styles.input}
//       />
//       <Button title="Entrar" onPress={handleLogin} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 16,
//   },
//   input: {
//     width: '80%',
//     height: 40,
//     borderWidth: 1,
//     marginBottom: 12,
//     paddingLeft: 8,
//   },
// });

// export default LoginScreen;

import React, { useState, useLayoutEffect } from 'react';
import { TextInput, Text, View, Button, SafeAreaView, StyleSheet, onChangeText, TouchableOpacity } from 'react-native';

import estilo from './estilo';

// export default function Home (props) {
//   return (
  export default function LoginScreen (props) {
    const [username, setUsername] = useState('')
    ;
    const [password, setPassword] = useState('');
      

    const handleLogin = () => {
      // lógica de login aqui
    };
    


    return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.txtCadastro}>
      Nome do Usuário
      </Text>
      <TextInput
        style={styles.input1}
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input2}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.enterButton}>
    <Text>Entrar </Text>
</TouchableOpacity>
    </SafeAreaView>


);
};
const styles = StyleSheet.create({
  input1: {
    height: 40,
    marginLeft: 7,
    marginRight: 7,
    borderWidth: 1,
    borderColor: "#813BF5",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
    width: '90%'
  },
  input2: {
    height: 40,
    marginTop: -1,
    marginLeft: 7,
    marginRight: 7,
    borderWidth: 1,
    borderColor: "#813BF5",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
    width: '90%'
  },

  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  txtCadastro:{
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: "center",
    marginBottom: 10
  },
  enterButton:{
    height: 35, 
    marginTop: 5,
    marginLeft: 7,
    marginRight: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#AB76FA',
    borderRadius: 10,
    width: 379,
    width: '90%'
  }
});