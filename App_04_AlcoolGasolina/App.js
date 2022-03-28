import { StatusBar } from 'expo-status-bar';
import { Text, View,  TextInput, Pressable, Image } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';





export default function App() {



  const img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJtWlpNsvEvQd8266KV9E2RW4rDYFEKSzT5g&usqp=CAU';




  const [alcool,setAlcool] = useState();
  const [gasolina,setGasolina] = useState();
  const [resultado,setResultado] = useState("_____");



  function calcular(){
    setResultado((alcool/gasolina)>0.7?"Vai de Gasolina":"Vai de Alcool");
  }


  return (
    <View style={styles.container}>


    <Text style={styles.tituloTexto}>  Alcool ou Gasolina </Text>


      <Image
        source = {{ uri: img}}
        style={styles.img}
      />



      <TextInput
        style={styles.input}
        onChangeText={setAlcool}
        placeholder="Preço do Alcool"
        keyboardType="numeric"   
        value={alcool}
      />

      <TextInput
        style={styles.input}
        onChangeText={setGasolina}
        placeholder="Preço da Gasolina"
        keyboardType="numeric"
        value={gasolina}
      />




      <Pressable style={styles.botao}
        onPress={calcular}>

        <Text style={styles.textoBotao}> Calcular </Text>

      </Pressable>





      <Text style={styles.resultado}> {resultado} </Text>





      <StatusBar style="auto" />
    </View>
  );
}



