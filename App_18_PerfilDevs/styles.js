import {StyleSheet} from 'react-native';



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ebebea',
      alignItems: 'center',
      justifyContent: 'center',

    },

    botao:{
      width: 200,
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
      color:'#b70e0b',
      fontWeight: "bold",
      },

      tituloResultado:{
        fontSize: 25,
        marginBottom:10,
        color:'#483e',
        fontWeight: "bold",
        },



        img: {

          borderWidth: 4,
          borderColor: "#20232a",
          borderRadius: 50,
          width: '40%',
          height: '30%',
      
        },


    divInput:{
      marginVertical:10,
      marginHorizontal:30,
      justifyContent: 'center',
      alignItems:'center',
    },

    textInput:{
      fontSize: 20,
      color:'#483e0a',
      fontWeight: "bold",
      borderWidth: 3,
      borderColor: "#20232a",
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },


    
     
    
        
  
  
  });


  export {styles};