import {StyleSheet} from 'react-native';



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ebebea',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
    },

    botao:{
      width: 300,
      height: 60,
      margin: 20,
      borderWidth: 4,
      borderColor: "#20232a",
      borderRadius: 10,
      backgroundColor: '#92b70b',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    textoBotao:{
      fontSize: 30,
      fontWeight: "bold",
      color:'#b70e0b',
    },

    tituloTexto:{
      fontSize: 25,
      marginBottom:15,
      color:'#483e0a',
      fontWeight: "bold",
    },

    resultado:{
      fontSize: 40,
      margin:10,
      color:'#b70e0b',
      textAlign: "center",
      textAlignVertical:"center",
      borderBottomWidth: 4,
      borderColor: "#20232a",
      borderRadius: 10,
      width: '70%',
    },

    resultadoTitulo:{
        fontSize: 28,
        margin:12,
        color:'#b70e0b',
        textAlign: "center",
        textAlignVertical:"center",
      },


    img: {
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 15,
        width: '60%',
        height: '35%',
    },
  
  
  });


  export {styles};