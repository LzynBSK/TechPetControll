import { View, Text, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles'; // Importe seus estilos aqui
import Parse from 'parse/react-native';
import { Updates } from 'expo';
import React, { useContext } from "react";
import { Button } from "react-native";
import { UserContext } from "../LoginScreen/UserContext"; // ajuste para o path correto

export const DrawerContent = () => {
  const { setUser } = useContext(UserContext);

  const handleLogout = async () => {
    await Parse.User.logOut();
    setUser(null);
  };

  return (
    <View style={styles.drawerContainer}>
      <DrawerContentScrollView>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DrawerContent;
