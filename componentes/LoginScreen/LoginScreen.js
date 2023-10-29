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

import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, TextInput, Alert } from 'react-native';
import Parse from 'parse/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
 // Importe o AsyncStorage
import ShakingInput from './ShakingInput'; // Importe o componente ShakingInput
import styles from './estilo';
import { UserContext } from "../../App"

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false); // Estado de erro

  const handleLogin = async () => {
    try {
      const user = await Parse.User.logIn(username, password);
      // Atualiza o usuário em App.js
      setUser(user);
    } catch (error) {
      alert("Error!", error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
<Text style={styles.txtCadastro}>Login</Text>
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
      <TouchableOpacity style={styles.enterButton} onPress={handleLogin}>
        <Text>Entrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
