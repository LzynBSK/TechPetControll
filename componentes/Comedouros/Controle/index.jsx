// // ComedouroControl.js

// import React, { useState, useEffect } from 'react';
// import { View, Text, Button, Modal, StyleSheet } from 'react-native';
// import axios from 'axios';
// import { useRoute } from '@react-navigation/native';

// const ComedouroControl = () => {
//   const route = useRoute();
//   const { comedouro } = route.params; // Agora estamos passando o objeto completo do comedouro

//   const [status, setStatus] = useState('Desconhecido');
//   const [poteCheio, setPoteCheio] = useState(100); // Estado inicial: 40% cheio
//   const [modalVisible, setModalVisible] = useState(false);

//   const handleAlimentar = () => {
//     axios
//       .get(`http://endereço-do-seu-esp32/comedouro/controle?comando=alimentar`)
//       .then((response) => {
//         console.log('Comando de alimentação enviado com sucesso');
//         setStatus('Alimentado');
//         setPoteCheio(100); // Agora o pote está cheio
//       })
//       .catch((error) => {
//         console.error('Erro ao enviar comando de alimentação', error);
//         setStatus('Erro ao alimentar');
//       });
//   };

//   // Simulação de carregamento de informações do comedouro
//   useEffect(() => {
//     // Simular uma chamada ao servidor para obter os detalhes do comedouro
//     // Neste caso, estamos apenas atualizando o pote para 40% cheio
//     setTimeout(() => {
//       setPoteCheio(40);
//     }, 2000); // Simula uma chamada de servidor após 2 segundos
//   }, []);

//   return (
//     <View>
//       <Text>Comedouro {comedouro.id}</Text>
//       <Text>Status: {status}</Text>
//       <Text>Pote de ração: {poteCheio}% cheio</Text>
//       <Button title="Alimentar" onPress={() => setModalVisible(true)} />
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <View style={styles.modalView}>
//           <Text style={styles.modalText}>Controlar Comedouro {comedouro.id}</Text>
//           <Button title="Fechar" onPress={() => setModalVisible(false)} />
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   modalView: {
//     margin: 20,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 35,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: 'center',
//   },
// });

// export default ComedouroControl;

// ComedouroControl.js

import React, { useState } from 'react';
import { View, Text, Button, Modal, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ComedouroControl = () => {
  const route = useRoute();
  const { comedouro } = route.params;

  const [modalVisible, setModalVisible] = useState(false);

  const handleAlimentar = () => {
    // Lógica para enviar o comando de alimentação para o esp32
    // Atualize o estado do comedouro conforme necessário
  };

  return (
    <View>
      <Text>Comedouro {comedouro.id}</Text>
      <Text>Status: {comedouro.status}</Text>
      <Text>Pote de ração: {comedouro.poteRacao}</Text>
      <Text>Bateria: {comedouro.batery}</Text>
      <Button title="Alimentar" onPress={() => setModalVisible(true)} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Controlar Comedouro {comedouro.id}</Text>
          <Button title="Fechar" onPress={() => setModalVisible(false)} />
          {/* Adicione controles adicionais e lógica aqui conforme necessário */}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ComedouroControl;

