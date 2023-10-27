// ComedouroList.js

import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ComedouroList = () => {
  const navigation = useNavigation();

  const comedouros = [
    { id: 1, nome: 'Comedouro 1', poteRacao: '100%', batery: '44%' },
    { id: 2, nome: 'Comedouro 2', poteRacao: '50%', batery: '2%'},
    { id: 3, nome: 'Comedouro 3', poteRacao: 'Vazio', batery: '100%'},
  ];

  const handleControlComedouro = (comedouro) => {
    navigation.navigate('Controle', { comedouro });
  };

  return (
    <View>
      <Text>Comedouros:</Text>
      <FlatList
        data={comedouros}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.nome}</Text>
            <Text>Bateria: {item.batery}</Text>
            <Text>Pote de Ração: {item.poteRacao}</Text>
            <Button
              title="Controlar"
              onPress={() => handleControlComedouro(item)}
            />
          </View>
        )}
      />
    </View>
  );
};

export default ComedouroList;
