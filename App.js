import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LoginScreen from './componentes/LoginScreen/LoginScreen';
import CadastroScreen from './componentes/CadastroScreen/CadastroScreen';
import HomeScreen from './componentes/HomeScreen/HomeScreen';
import DrawerContent from './componentes/DrawerContent/DrawerContent';
import { Parse } from 'parse/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

Parse.setAsyncStorage(AsyncStorage);
Parse.initialize('c0LHkbk3waILSqO3K76twbzlSoOtcrcTJvgjJf8m', 'T3MDD7j3GgOKV6haJZKWCYru1gxZujnKv9Mbkzpp');
Parse.serverURL = 'https://parseapi.back4app.com/';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Cadastro" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Cadastro" component={CadastroScreen} />
      <Stack.Screen name="Login" component={LoginScreen} screenOptions={{ headerShown: false}}/>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};


const App = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    // Verificar o estado de registro e login do usuário usando AsyncStorage
    const checkUserStatus = async () => {
      const isLoggedIn = await AsyncStorage.getItem('userLoggedIn');
      setUserLoggedIn(isLoggedIn === 'true');
    };

    checkUserStatus();
  }, []);

  return (
    <NavigationContainer>
      {userLoggedIn ? (
        <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
          <Drawer.Screen name="Home" component={HomeScreen} />
        </Drawer.Navigator>
      ) : (
        <MainStack />
      )}
    </NavigationContainer>
  );
};

export default App;
