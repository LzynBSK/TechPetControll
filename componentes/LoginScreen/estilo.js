import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    fontWeight: '700',
    backgroundColor:'#DEDEDE'
  },
  titulo: {
    fontSize: 18,
    marginBottom: 20
  },  
  texto: {
    textAlign: "center",
    color:"purple",
  },
  botao:{
    marginTop: 5,
  }
});

export default estilo;