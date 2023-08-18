// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './componentes/LoginScreen/LoginScreen';
import CadastroScreen from './componentes/CadastroScreen/CadastroScreen';
import HomeScreen from './componentes/HomeScreen/HomeScreen';
import { Parse } from 'parse/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


Parse.setAsyncStorage(AsyncStorage);
Parse.initialize('c0LHkbk3waILSqO3K76twbzlSoOtcrcTJvgjJf8m', 'T3MDD7j3GgOKV6haJZKWCYru1gxZujnKv9Mbkzpp');
Parse.serverURL = 'https://parseapi.back4app.com/';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cadastro">
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
