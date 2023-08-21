// styles.js (ou onde você tiver definido os estilos do DrawerContent)
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    justifyContent: 'space-between', // Alinhar itens no espaço entre
  },
  logoutButton: {
    backgroundColor: '#AB76FA',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20, // Ajuste o espaçamento inferior
    alignSelf: 'center', // Alinhar o botão ao centro horizontal
  },
  logoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
