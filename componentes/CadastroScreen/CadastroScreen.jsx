import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from './estilo';
import CustomModal from './CustomModal';
import { v4 as uuidv4 } from 'uuid';
import 'react-native-get-random-values';
import Parse from 'parse/react-native';
import Login from "../LoginScreen/LoginScreen";

const Cadastro = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false); // Adicione o estado isErrorModalVisible

  const [isUsernameErrorVisible, setIsUsernameErrorVisible] = useState(false);
  const [isEmailErrorVisible, setIsEmailErrorVisible] = useState(false);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);

    const handleCadastro = async () => {
      try {
        // Validações

        if (username.length < 3) {
          setIsUsernameErrorVisible(true); // Exibe o modal de erro de nome de usuário curto
          return;
        }
        if (!/^[a-zA-Z0-9]+$/.test(username)) {
          setIsUsernameErrorVisible(true); // Exibe o modal de erro de nome de usuário com caracteres especiais
          return;
        }
        if (
          !/^(?:[a-zA-Z0-9._-]+@(?:gmail|yahoo|outlook|hotmail|icloud|aol|protonmail|zoho|yandex|gmx|mail|tutanota|fastmail)\.com)$/.test(email)
        ) {
          setIsEmailErrorVisible(true); // Exibe o modal de erro de email inválido
          return;
        }
        const user = new Parse.User();
        user.set('username', username);
        user.set('password', password);
        user.set('email', email);

        let userResult = await user.signUp();
        console.log('User signed up', userResult);
        setIsSuccessModalVisible(true);
        navigation.navigate("Login");
      } catch (error) {
        console.error('Erro ao cadastrar:', error);

        // Mostrar a mensagem de erro no modal
        setIsErrorModalVisible(true); // Defina o estado isErrorModalVisible como true
      }
    };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.txtCadastro}>Cadastro de Usuário</Text>
      <TextInput
        style={styles.input1}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize='none'
      />
      <TextInput
        style={styles.input2}
        placeholder="Nome de usuário"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input3}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        autoCapitalize='none'
      />
      <TouchableOpacity style={styles.enterButton} onPress={handleCadastro}>
        <Text>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.linkText}>Já tem uma conta? </Text>
      </TouchableOpacity>

      {/* Modais de Erro Personalizados */
      // ...
      }
      {isErrorModalVisible && (
  <CustomModal
    visible={isErrorModalVisible}
    onClose={() => setIsErrorModalVisible(false)}
    title="Erro"
    message="Ocorreu um erro durante o cadastro."
  />
)}

    </SafeAreaView>
  );
};

export default Cadastro;
