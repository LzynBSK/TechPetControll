// import React, { useState, useEffect } from 'react';
// import { Text, TextInput, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
// import Parse from 'parse/react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage'; // Importe o AsyncStorage

// import styles from './estilo';

// const LoginScreen = ({ navigation }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     try {
//       const user = await Parse.User.logIn(username, password);
//       if (user) {
//         // Atualize o estado de usuário logado usando AsyncStorage
//         await AsyncStorage.setItem('userLoggedIn', 'true');
//         navigation.replace('Home'); // Redirecionar para a tela principal após o login bem-sucedido
//       }
//     } catch (error) {
//       console.error('Erro ao fazer login:', error);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.txtCadastro}>Login</Text>
//       <TextInput
//         style={styles.input1}
//         placeholder="Usuário"
//         value={username}
//         onChangeText={setUsername}
//       />
//       <TextInput
//         style={styles.input2}
//         placeholder="Senha"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry={true}
//       />
//       <TouchableOpacity style={styles.enterButton} onPress={handleLogin}>
//         <Text>Entrar</Text>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, Alert } from 'react-native';
import Parse from 'parse/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ShakingInput from './ShakingInput';
import styles from './estilo';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false); 

  const handleLogin = async () => {
    try {
      const user = await Parse.User.logIn(username, password);
      if (user) {
       
        await AsyncStorage.setItem('userLoggedIn', 'true');
        navigation.replace('Home');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setLoginError(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.txtCadastro}>Login</Text>
      <ShakingInput
        inputStyle={styles.input1}
        style={loginError ? styles.inputError : null} 
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
      />
      <ShakingInput
        inputStyle={styles.input2} 
        style={loginError ? styles.inputError : null} 
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        isError={loginError}
      />
      <TouchableOpacity style={styles.enterButton} onPress={handleLogin}>
        <Text>Entrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;
