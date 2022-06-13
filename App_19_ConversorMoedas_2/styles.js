import {StyleSheet} from 'react-native';



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ebebea',
      justifyContent: 'center',
      paddingTop:40,
      alignItems:'flex-start',

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
      color:'#b70e0b',
      fontWeight: "bold",
      paddingLeft:'20%',
      },

      tituloResultado:{
        fontSize: 25,
        marginBottom:10,
        color:'#483e',
        fontWeight: "bold",
        paddingLeft:'20%',
        },

      resultado:{
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 10,
        fontSize: 25,
        marginBottom:10,
        color:'#483e',
        fontWeight: "bold",
        margin: 40,
        width: 300,
        height: 50,
        paddingLeft:'20%',
        justifyContent: 'center',
        alignItems: 'center',

        },

    divInput:{
      marginVertical:10,
      marginHorizontal:30,
      flexDirection:'row',
      justifyContent: 'center',
      alignItems:'flex-start',
    },

    textInput:{
      flex:1,
      fontSize: 20,
      color:'#483e0a',
      fontWeight: "bold",
    },




    input:{
        flex:2,
        fontSize: 18,
        color:'#b70e0b',
        fontWeight: "bold",
        textAlign: "center",
        height: 50,
        borderWidth: 3,
        borderColor: "#20232a",
        borderRadius: 20,
        marginLeft:-25,
      },

    
      inputSelect:{
        flex:1,
        fontSize: 20,
        color:'#b70e0b',
        fontWeight: "bold",
        height: 50,
        marginLeft:-55,
      },
    
        
  
  
  });


  export {styles};