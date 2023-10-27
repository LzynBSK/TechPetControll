import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from './componentes/LoginScreen/LoginScreen';
import Cadastro from './componentes/CadastroScreen/CadastroScreen';
import HomeScreen from './componentes/HomeScreen/HomeScreen';
import DrawerContent from './componentes/DrawerContent/DrawerContent';
import { Parse } from 'parse/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Controle from './componentes/Comedouros/Controle/index'
import ComedouroList from './componentes/Comedouros/Lista';

Parse.setAsyncStorage(AsyncStorage);
Parse.initialize('c0LHkbk3waILSqO3K76twbzlSoOtcrcTJvgjJf8m', 'T3MDD7j3GgOKV6haJZKWCYru1gxZujnKv9Mbkzpp');
Parse.serverURL = 'https://parseapi.back4app.com/';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const TelasStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

const TelasDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Cadastro">
        <Drawer.Screen name="Cadastro" component={Cadastro} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Controle" component={Controle} />
        <Drawer.Screen name="Lista" component={ComedouroList} />
      </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <TelasDrawer/>
    </NavigationContainer>
  );
};

export default App;
