// src/screens/HomeScreen.js
import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import WifiManager from 'react-native-wifi-reborn';

const HomeScreen = () => {
  const [ssid, setSsid] = useState('');
  const [password, setPassword] = useState('');

  const connectToEsp32 = async () => {
    try {
      const connected = await WifiManager.connectToProtectedSSID(ssid, password, false);
      if (connected) {
        console.log('Conectado ao ESP32 via Wi-Fi');
        // Implementar a lógica para enviar comandos e receber dados para controlar o ESP32
      } else {
        console.log('Falha ao conectar ao ESP32');
      }
    } catch (error) {
      console.error('Erro ao conectar ao ESP32:', error);
    }
  };

  return (
    <View>
      <Text>Controle do ESP32</Text>
      <TextInput
        placeholder="SSID da Rede Wi-Fi"
        onChangeText={text => setSsid(text)}
        value={ssid}
      />
      <TextInput
        placeholder="Senha da Rede Wi-Fi"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Button title="Conectar ao ESP32" onPress={connectToEsp32} />
    </View>
  );
};

export default HomeScreen;
