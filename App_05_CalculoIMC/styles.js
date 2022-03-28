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
      margin: 40,
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
      marginBottom:30,
      color:'#483e0a',
      fontWeight: "bold",
    },

    input:{
        fontSize: 21,
        color:'#b70e0b',
        fontWeight: "bold",
        textAlign: "center",
        width: 280,
        height: 50,
        margin: 10,
        borderWidth: 3,
        borderColor: "#20232a",
        borderRadius: 20,
      },

    resultado:{
      fontSize: 45,
      color:'#b70e0b',
      textAlign: "center",
      textAlignVertical:"center",
    },

    img: {
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 15,
        width: '60%',
        height: '22%',
        marginBottom: 10,

    
      },
  
  
  });


  export {styles};