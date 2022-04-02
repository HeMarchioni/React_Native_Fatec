import {StyleSheet} from 'react-native';



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ebebea',
      justifyContent: 'center',
      marginTop: 20,
      paddingTop:20,
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
      color:'#483e0a',
      fontWeight: "bold",
      paddingLeft:'20%',
      },

      tituloResultado:{
        fontSize: 20,
        marginBottom:10,
        color:'#483e0a',
        fontWeight: "bold",
        paddingLeft:20,
        },




    divInput:{
      marginVertical:10,
      marginHorizontal:20,
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


    textLimite:{
      flex:1,
      fontSize: 20,
      color:'#b70e0b',
      fontWeight: "bold",
      paddingLeft:"60%",
      marginTop:-25,
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
        fontSize: 25,
        color:'#b70e0b',
        fontWeight: "bold",
        height: 50,
        marginLeft:-35,
      },
    
      inputSwitch:{
        flex:2,
      },
    
  

  
  });


  export {styles};