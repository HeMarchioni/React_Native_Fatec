import { StatusBar } from 'expo-status-bar';
import { Text, View,  TextInput, Pressable  } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';

export default function App() {



  const [number1,setNumber1] = useState();
  const [number2,setNumber2] = useState();

  const [resultado,setResultado] = useState();



  function calcular(){
    setResultado(number1*number2);
  }


  return (
    <View style={styles.container}>



      <Text style={styles.tituloTexto}> Multiplicador de Números </Text>

      

      <TextInput
        style={styles.input}
        onChangeText={setNumber1}
        placeholder="Digite o primeiro n° "
        keyboardType="numeric"   
        value={number1}
      />

      <TextInput
        style={styles.input}
        onChangeText={setNumber2}
        placeholder="Digite o segundo n° "
        keyboardType="numeric"
        value={number2}
      />


     
      <Pressable style={styles.botao}
      onPress={calcular}>

        <Text style={styles.textoBotao}> Calcular </Text>

      </Pressable>


      <Text style={styles.resultado}> Resultado: {resultado} </Text>



      <StatusBar style="auto" />
    </View>
  );
}











