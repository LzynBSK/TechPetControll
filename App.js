import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LoginScreen from './componentes/LoginScreen/LoginScreen';
import CadastroScreen from './componentes/CadastroScreen/CadastroScreen';
import HomeScreen from './componentes/HomeScreen/HomeScreen';
import DrawerContent from './componentes/DrawerContent/DrawerContent';
import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AulaScreen from './componentes/AulaScreen/AulaScreen';

// Inicialize o Parse após importar o AsyncStorage
Parse.initialize('c0LHkbk3waILSqO3K76twbzlSoOtcrcTJvgjJf8m', 'T3MDD7j3GgOKV6haJZKWCYru1gxZujnKv9Mbkzpp');
Parse.serverURL = 'https://parseapi.back4app.com/';
Parse.setAsyncStorage(AsyncStorage);

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const TelasDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Cadastro" component={CadastroScreen} />
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Aula" component={AulaScreen} />
    </Drawer.Navigator>
  );
};

const App = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [key, setKey] = useState(0); // Adicionar uma chave de re-renderização

  useEffect(() => {
    // Verificar o estado de login do usuário usando AsyncStorage
    const checkUserStatus = async () => {
      const isLoggedIn = await AsyncStorage.getItem('userLoggedIn');
      setUserLoggedIn(isLoggedIn === 'true');
    };

    checkUserStatus();
  }, []);

  useEffect(() => {
    // Atualizar a chave para forçar a re-renderização
    setKey(key + 1);
  }, [userLoggedIn]);

  return (
    <NavigationContainer key={key}>
      <TelasDrawer />
    </NavigationContainer>
  );
};

export default App;
