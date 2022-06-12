import {StyleSheet} from 'react-native';



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ebebea',
      },
      text: {
        marginLeft: 16,
        color:'#483e0a',
      },
      title: {
        fontSize: 25,
        color:'#b70e0b',
        fontWeight: "bold",
        marginVertical: 10,
      },
      img: {
        width: 250,
        aspectRatio: 1,
        borderWidth: 5,
        borderColor: "#3b4252",
        borderRadius: 10,
        alignSelf: "center",
        marginTop: 48,
      },
      wrapper: {
        backgroundColor: "#2e3440",
        marginTop: 18,
        marginHorizontal: 10,
        borderRadius: 10,
        paddingVertical: 16,
      },

      menu: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
      },

      botaoMenu:{
        paddingBottom: 10,
        paddingTop: 30,
        backgroundColor: "#483e0a",
      }
      
  });


  export {styles};