import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
 
  const imgPerfil = 'https://avatars.githubusercontent.com/u/78778541?s=400&u=1417f4e6d12e29b145cfeccf1caca8926e4645af&v=4';
  


  return (
    <View style={styles.container}>


      <Image
          source = {{ uri: imgPerfil}}
          style={styles.img}
          
      />


      <View style={styles.containerTexto}>
          <Text style={styles.tituloTexto}> Nome </Text>

          <Text> Henrique Marchioni </Text>

          <Text style={styles.tituloTexto}> Formação </Text>

          <Text> Curso Superior {'\n'} Tecnologia em Sistemas para Internet </Text>

          <Text style={styles.tituloTexto}> Experiencia </Text>

          <Text> Desenvolvedor back-end / ModalGR  </Text>


          <Text style={styles.tituloTexto}> Projetos </Text>

          <Text> JAVA / Spring Boot (Barbettoo, entre outros) </Text>
          <Text> C# / .NET Core (Mega Imagem, entre outros) </Text>

          <StatusBar style="auto" />
      </View>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#fffaf0"
  },
  
  tituloTexto: {
    
    marginTop:20,
    fontWeight: 'bold',
    fontSize: 18,
    
  },

  containerTexto: {
    marginLeft:10,
    marginRight:10,
    marginTop:20,
    alignItems: 'flex-start',
  },



  img: {

    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 50,
    width: '50%',
    height: '40%',

  },



});
