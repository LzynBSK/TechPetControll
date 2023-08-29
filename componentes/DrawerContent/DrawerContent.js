// components/DrawerContent.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles'; 



const DrawerContent = ({navigation}) => {
  console.log(navigation);
  const handleLogout = async () => {
   
    await AsyncStorage.removeItem('userLoggedIn');
    navigation.replace('Cadastro');
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
