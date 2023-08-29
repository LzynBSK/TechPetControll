import { v4 as uuidv4 } from 'uuid';
import 'react-native-get-random-values';
import Parse from 'parse/react-native';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, SafeAreaView, StyleSheet, Alert } from 'react-native';
import styles from './estilo';
import { CommonActions } from '@react-navigation/native';
import CustomModal from './CustomModal';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CadastroScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const handleCadastro = async () => {
    try {
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
      console.log('Error message:', error.message);
      console.log('Error code:', error.code);
      console.log('Error details:', error.details);
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
      {isSuccessModalVisible && (
        <CustomModal
          visible={isSuccessModalVisible}
          onClose={() => {
            setIsSuccessModalVisible(false);
            navigation.navigate('Login');
          }}
          username={username}
        />
      )}
    </SafeAreaView>
  );
};



export default CadastroScreen;