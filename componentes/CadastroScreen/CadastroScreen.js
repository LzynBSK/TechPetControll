import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, SafeAreaView, StyleSheet, View } from 'react-native';
import styles from './estilo';
import CustomModal from './CustomModal';

const CadastroScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Estados para controlar a visibilidade dos modais de erro e sucesso
  const [isUsernameErrorVisible, setIsUsernameErrorVisible] = useState(false);
  const [isEmailErrorVisible, setIsEmailErrorVisible] = useState(false);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false); // Adicionado

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
      
      const userId = uuidv4();
      const user = new Parse.User();
      user.set('username', username);
      user.set('password', password);
      user.set('email', email);
      user.set('userId', userId);

      await user.signUp();
      setIsSuccessModalVisible(true);
    } catch (error) {
      console.error('Erro ao cadastrar:', error);

      // Mostrar a mensagem de erro no modal
      setErrorMessage(error.message);
      setIsErrorModalVisible(true);
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
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkText}>Já tem uma conta? </Text>
      </TouchableOpacity>

      {/* Modais de Erro Personalizados */}
      {isUsernameErrorVisible && (
        <CustomModal
          visible={isUsernameErrorVisible}
          onClose={() => setIsUsernameErrorVisible(false)}
          title="Erro de Nome de Usuário"
          message="Nome de usuário inválido. Ele deve ter pelo menos 3 caracteres e não deve conter caracteres especiais."
        />
      )}

      {isEmailErrorVisible && (
        <CustomModal
          visible={isEmailErrorVisible}
          onClose={() => setIsEmailErrorVisible(false)}
          title="Erro de Email"
          message="Email inválido. O email deve ser válido e pertencer a um dos provedores suportados."
        />
      )}

      {/* Modal de Sucesso */}
      {isSuccessModalVisible && (
        <CustomModal
          visible={isSuccessModalVisible}
          onClose={() => {
            setIsSuccessModalVisible(false);
            navigation.navigate('Login');
          }}
          title="Sucesso"
          message={`Seja bem-vindo, ${username}! Sua conta foi criada com sucesso!`}
        />
      )}
    </SafeAreaView>
  );
};

export default CadastroScreen;
