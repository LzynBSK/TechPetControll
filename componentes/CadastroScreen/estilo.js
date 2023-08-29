import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    input1: {
      height: 40,
      marginLeft: 7,
      marginRight: 7,
      borderWidth: 1,
      borderColor: '#009E67', // Nova cor do tema
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      padding: 10,
      width: '90%',
      marginBottom: 10,
      
    },
  
    input2: {
      height: 40,
      marginLeft: 7,
      marginTop: -5,
      marginRight: 7,
      borderWidth: 1,
      borderColor: '#009E67', // Nova cor do tema
      padding: 10,
      width: '90%',
      marginBottom: 10,
    
      
    },
  
    input3: {
      height: 40,
      marginLeft: 7,
      marginTop: -5,
      marginRight: 7,
      borderWidth: 1,
      borderColor: '#009E67', // Nova cor do tema
      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 10,
      padding: 10,
      width: '90%',
      marginBottom: 10,
      
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
     
    },
    txtCadastro: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 10,
      color:"#009E67",
      
      
    },
    enterButton: {
      height: 35,
      marginTop: 10,
      marginLeft: 7,
      marginRight: 7,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#009E67', // Nova cor do tema
      borderRadius: 10,
      width: '90%',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 0 }, // Ajuste o valor aqui
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    linkText: {
      marginTop: 20,
      color: '#009E67', // Nova cor do tema
      fontSize: 12,
      fontWeight: 'bold',
      
    },
  });

  export default styles;