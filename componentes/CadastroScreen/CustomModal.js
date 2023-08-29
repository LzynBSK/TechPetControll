// import React from 'react';
// import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';

// const CustomModal = ({ visible, onClose, username }) => {
//   return (
//     <Modal isVisible={visible} animationType="slide" transparent={true}>
//       <View style={styles.modalContainer}>
//         <Text style={styles.title}>Bem-vindo!</Text>
//         <Text style={styles.message}>
//           🐶 Seja bem-vindo <Text style={styles.username}>{username}!</Text> Sua conta foi criada com sucesso!
//         </Text>
//         <TouchableOpacity style={styles.okButton} onPress={onClose}>
//           <Text style={styles.okButtonText}>OK</Text>
//         </TouchableOpacity>
//       </View>
//     </Modal>
//   );
// };

// const styles = StyleSheet.create({
//   modalContainer: {
//     backgroundColor: 'white',
//     alignItems: 'center',
//     padding: 20,
//     borderRadius: 8,
//     position: 'absolute',
//     top: '40%',
//     left: '10%',
//     right: '10%',
//     zIndex: 999,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 0 },
//     shadowOpacity: 100,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   message: {
//     fontSize: 16,
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   username: {
//     fontWeight: 'bold',
//   },
//   okButton: {
//     backgroundColor: '#009E67',
//     borderRadius: 8,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 0 },
//     shadowOpacity: 0.50,
//     shadowRadius: 3.84,
//     elevation: 20,
//   },
//   okButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default CustomModal;
import React from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const CustomModal = ({ visible, onClose, username }) => {
  return (
    <Modal isVisible={visible} animationType="fade" transparent={true}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Sucesso!</Text>
          <Text style={styles.message}>
            🐶 Seja bem-vindo, <Text style={styles.username}>{username}</Text>! Sua conta foi criada com sucesso!
          </Text>
          <TouchableOpacity style={styles.okButton} onPress={onClose}>
            <Text style={styles.okButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    width: '80%',
    zIndex: 999,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 100,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  username: {
    fontWeight: 'bold',
  },
  okButton: {
    backgroundColor: '#009E67',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.50,
    shadowRadius: 3.84,
    elevation: 20,
  },
  okButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomModal;
