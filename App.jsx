  import React, { useState, useEffect, useContext } from 'react';
  import { NavigationContainer } from '@react-navigation/native';
  import { createStackNavigator } from '@react-navigation/stack';
  import { createDrawerNavigator } from '@react-navigation/drawer';
  import * as SplashScreen from 'expo-splash-screen';
  import Login from './componentes/LoginScreen/LoginScreen';
  import Cadastro from './componentes/CadastroScreen/CadastroScreen';
  import HomeScreen from './componentes/HomeScreen/HomeScreen';
  import DrawerContent from './componentes/DrawerContent/DrawerContent';
  import Parse from 'parse/react-native';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import Controle from './componentes/Comedouros/Controle/index'
  import  AppLoading  from 'expo-app-loading';
  import ComedouroList from './componentes/Comedouros/Lista';
  
  export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [user, setUser] = useState(null);
  const [isUserLoaded, setIsUserLoaded] = useState(false);  // definir uma nova variável de estado aqui

  async function prepareApp() {
    try {
      // Keep the splash screen visible while we fetch resources
      await SplashScreen.preventAutoHideAsync();

      // Preload resources
      const currentUser = await Parse.User.currentAsync();
      setUser(currentUser);
      setIsUserLoaded(true); // definir isUserLoaded como true aqui
    } catch (e) {
      console.warn(e);
    } finally {
      // Tell the application to render
      setAppIsReady(true);
      await SplashScreen.hideAsync();
    }
  }

  useEffect(() => {
    prepareApp();
  }, []);

  if (!appIsReady) {
    return null;
  }

  return (
    <UserContext.Provider 
     value={{ user, setUser, isUserLoaded, setIsUserLoaded }}>
      <NavigationContainer>
        {isUserLoaded ? (
          <Stack.Navigator screenOptions={{headerShown: false}}>
            {user ? (
              // Se o usuário está logado, nós mostramos o DrawerNavigator
              <Stack.Screen name="Drawer" component={DrawerContainer} />
            ) : (
              // Se o usuário está deslogado, nós mostramos o stack de autenticação
              <>
                <Stack.Screen name="Cadastro">{props => <Cadastro {...props}/>}</Stack.Screen>
                <Stack.Screen name="Login">{props => <Login {...props}/>}</Stack.Screen>
              </>
            )}
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </UserContext.Provider>
  );
}