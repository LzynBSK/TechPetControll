import { StyleSheet } from "react-native";

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
      marginBottom: 5,
  },
  input2: {
    height: 40,
    marginTop: -1,
    marginLeft: 7,
    marginRight: 7,
    borderWidth: 1,
    borderColor: '#009E67', // Nova cor do tema
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
    width: "90%",
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
    alignSelf: 'center',
    marginBottom: 10,
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
  inputError:{
    borderColor:"red",
  }
});
export default styles;