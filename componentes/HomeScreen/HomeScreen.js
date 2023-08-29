import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import WifiManager from 'react-native-wifi-reborn';

const HomeScreen = () => {
  const [ssid, setSsid] = useState('');
  const [password, setPassword] = useState('');

  const connectToEsp32 = async () => {
    try {
      const connected = await WifiManager.connectToProtectedSSID(ssid, password, false);
      if (connected) {
        console.log('Conectado ao ESP32 via Wi-Fi');
      } else {
        console.log('Falha ao conectar ao ESP32');
      }
    } catch (error) {
      console.error('Erro ao conectar ao ESP32:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txtCadastro}>Controle do ESP32</Text>
      <TextInput
        style={styles.input1}
        placeholder="SSID da Rede Wi-Fi"
        onChangeText={text => setSsid(text)}
        value={ssid}
      />
      <TextInput
        style={styles.input2}
        placeholder="Senha da Rede Wi-Fi"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={connectToEsp32}>
        <Text style={styles.buttonText}>Conectar ao ESP32</Text>
      </TouchableOpacity>
      
    </View>
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
    alignSelf: 'center',
    marginBottom: 10,
    color: '#009E67',
  },
  input1: {
    height: 40,
    marginLeft: 7,
    marginRight: 7,
    borderWidth: 1,
    borderColor: '#009E67',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
    width: 330,
    marginBottom: 5,

  },
  input2: {
    height: 40,
    marginTop: -1,
    marginLeft: 7,
    marginRight: 7,
    borderWidth: 1,
    borderColor: '#009E67',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
    width: 330,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#009E67', 
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
