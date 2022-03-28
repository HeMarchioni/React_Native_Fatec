import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';




export default function App() {



  const img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBysD2qyR5P-Z6JcFxWgKFQ6gsPZABR4H4IQ&usqp=CAU';


  const [resultado,setResultado] = useState();



  function calcular(){
    setResultado(Math.floor(Math.random() * 10));
  }


  return (


<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>


    <View style={styles.container}>


    <Text style={styles.tituloTexto}> Jogo do N° Aleatório </Text>


      <Image
        source = {{ uri: img}}
        style={styles.img}
      />



      <Text style={styles.resultadoTitulo}> Pense em um N° de 0 a 10 </Text>

      <Text style={styles.resultado}> {resultado} </Text>



      <Pressable style={styles.botao}
        onPress={calcular}>

        <Text style={styles.textoBotao}> Descobrir </Text>

      </Pressable>



      <StatusBar style="auto" />
    </View>
    
    </TouchableWithoutFeedback>

  );
}