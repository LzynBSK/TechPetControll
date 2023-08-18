// import React, { FC, ReactElement, useState } from "react";
// import { Alert, TouchableOpacity, SafeAreaView, Text, StyleSheet, TextInput } from "react-native";
// import Parse from "parse/react-native";

// export const CadastroScreen = () => {
//   const [email, setEmail] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleCadastro = async function () {
//     // Note that these values come from state variables that we've declared before
//     const emailValue = email;
//     const usernameValue = username;
//     const passwordValue = password;
//     // Since the signUp method returns a Promise, we need to call it using await
//     return await Parse.User.signUp(emailValue, usernameValue, passwordValue)
//       .then((createdUser) => {
//         // Parse.User.signUp returns the already created ParseUser object if successful
//         Alert.alert(
//           "Sucesso!",
//           `O usuário ${createdUser.get("username")} foi criado com sucesso!`
          
//         );
//         navigation.replace('Login');
//         return true;
//       })
//       .catch((error) => {
//         // signUp can fail if any parameter is blank or failed an uniqueness check on the server
//         Alert.alert("Error!", error.message);
//         return false;
//       });
//   };
import React, { useState } from 'react';
import { TextInput, Text, View, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import { Parse } from 'parse/react-native';

const CadastroScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userIdCounter, setUserIdCounter] = useState(1); // Inicializa o contador de IDs únicos

  const handleCadastro = async () => {
    const userId = userIdCounter.toString(); // Usa o valor atual do contador como ID único

    const user = new Parse.User();
    user.set('username', username);
    user.set('password', password);
    user.set('email', email);
    user.set('userId', userId);

    try {
      await user.signUp();
      navigation.replace('Login');
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
    }
  };
  

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.txtCadastro}>Cadastro de Usuário</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome de usuário"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.enterButton} onPress={handleCadastro}>
        <Text>Cadastrar</Text>
      </TouchableOpacity>

      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtCadastro: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    marginLeft: 7,
    marginRight: 7,
    borderWidth: 1,
    borderColor: "#813BF5",
    borderRadius: 10,
    padding: 10,
    width: '90%',
    marginBottom: 10,
  },
  enterButton: {
    height: 35,
    marginTop: 10,
    marginLeft: 7,
    marginRight: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#AB76FA',
    borderRadius: 10,
    width: '90%',
  },
});

export default CadastroScreen;
