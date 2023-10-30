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
  
  export const UserContext = React.createContext();

  Parse.setAsyncStorage(AsyncStorage);
  Parse.initialize('c0LHkbk3waILSqO3K76twbzlSoOtcrcTJvgjJf8m', 'T3MDD7j3GgOKV6haJZKWCYru1gxZujnKv9Mbkzpp');
  Parse.serverURL = 'https://parseapi.back4app.com/';

  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();

const DrawerContainer = () => {
    return (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Controle" component={Controle} />
            <Drawer.Screen name="Lista" component={ComedouroList} />
        </Drawer.Navigator>
    );
};

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [user, setUser] = useState(null);
  
async function prepareApp() {
  try {
    // Keep the splash screen visible while we fetch resources
    await SplashScreen.preventAutoHideAsync();

    // Preload resources
    const currentUser = await Parse.User.currentAsync();
    setUser(currentUser);
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

return (
  <UserContext.Provider value={{ user, setUser }}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {user ? (
          // Se o usuário está logado, nós mostramos o DrawerNavigator
          <Stack.Screen name="Drawer" component={DrawerContainer} />
        ) : (
          // Se o usuário está deslogado, nós mostramos o stack de autenticação
          <>
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="Login" component={Login} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  </UserContext.Provider>
);
};