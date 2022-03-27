import {StyleSheet} from 'react-native';



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0ebd1',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
    },

    botao:{
      width: 300,
      height: 60,
      margin: 40,
      borderWidth: 4,
      borderColor: "#20232a",
      borderRadius: 10,
      backgroundColor: '#0b4db7',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    textoBotao:{
      fontSize: 30,
      fontWeight: "bold",
      color:'#92b70b',
    },

    tituloTexto:{
      fontSize: 25,
      marginBottom:30,
      color:'#483e0a',
      fontWeight: "bold",
    },

    input:{
        fontSize: 25,
        color:'#b70e0b',
        fontWeight: "bold",
        textAlign: "center",
        width: 270,
        height: 50,
        margin: 10,
        borderWidth: 3,
        borderColor: "#20232a",
        borderRadius: 20,
      },

    resultado:{
      fontSize: 45,
      color:'#92b70b',
      textAlign: "center",
      textAlignVertical:"center",
    }
  
  
  });


  export {styles};