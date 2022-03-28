import { StatusBar } from 'expo-status-bar';
import { Text, View,  TextInput, Pressable, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';




export default function App() {



  const img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa0csTyRh7ydgP9pJ6RZ_pzB3nW8H9sDG6bg&usqp=CAU';




  const [peso,setpeso] = useState();
  const [altura,setaltura] = useState();
  const [resultado,setResultado] = useState("_____");



  function calcular(){
    
    let imc = peso/(altura*altura);

    if( imc < 18.5) 
      setResultado('ABAIXO DO PESO')
    else if(imc < 24.9 )
      setResultado('PESO NORMAL')
    else if(imc < 29.9 )
      setResultado('SOBREPESO')
    else if(imc < 34.9 ) 
      setResultado('OBESIDADE GRAU I')
    else if(imc < 39.9 )
      setResultado('OBESIDADE GRAU II')
    else 
      setResultado('OBESIDADE GRAU III')
    
     
  }


  return (


<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>


    <View style={styles.container}>


    <Text style={styles.tituloTexto}> Cálculo do IMC </Text>


      <Image
        source = {{ uri: img}}
        style={styles.img}
      />



      <TextInput
        style={styles.input}
        onChangeText={setpeso}
        placeholder="Digite seu peso em kg"
        keyboardType="numeric"   
        value={peso}
      />

      <TextInput
        style={styles.input}
        onChangeText={setaltura}
        placeholder="Digite sua altura em metros"
        keyboardType="numeric"
        value={altura}
      />



      <Pressable style={styles.botao}
        onPress={calcular}>

        <Text style={styles.textoBotao}> Verificar </Text>

      </Pressable>


      <Text style={styles.resultado}> {resultado} </Text>


      <StatusBar style="auto" />
    </View>
    
    </TouchableWithoutFeedback>

  );
}
