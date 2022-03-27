
import {StyleSheet} from 'react-native';



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0ebd1',
      alignItems: 'center',
      justifyContent: 'center',
    },
    botaoMais:{
      width: 300,
      height: 60,
      margin: 20,
      borderWidth: 2,
      borderColor: "#20232a",
      borderRadius: 10,
      backgroundColor: '#32CD32'
    },
    botaoMenos:{
      width: 300,
      height: 60,
      margin: 20,
      borderWidth: 2,
      borderColor: "#20232a",
      borderRadius: 10,
      backgroundColor: '#FF6347'
    },
    textoBotao:{
      fontSize: 40,
      textAlign: "center",
      fontWeight: "bold",
    },
    tituloTexto:{
      fontSize: 30,
      marginBottom:30,
      color:'#483e0a',
      fontWeight: "bold",
    },
    contador:{
      fontSize: 90,
      color:'#be2623',
      textAlign: "center",
      textAlignVertical:"center",
      width: 170,
      height: 170,
      margin: 20,
      borderWidth: 3,
      borderColor: "#20232a",
      borderRadius: 20,
    }
  
  
  });


  export {styles};