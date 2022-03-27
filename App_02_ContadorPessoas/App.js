import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';


export default function App() {


 
    const [contador, setContador] = useState(0);
  

   function bMais(){
     setContador(contador+1);
    }

    function bMenos(){
      if(contador > 0)
      setContador(contador-1);
     }


  return (


    <View style={styles.container}>

      <Text style={styles.tituloTexto}> Contador de Pessoas </Text>

      <Text style={styles.contador}> {contador} </Text>


      <Pressable style={styles.botaoMais}
       onPress={bMais}>

        <Text style={styles.textoBotao}>+</Text>

      </Pressable>


      <Pressable style={styles.botaoMenos}
       onPress={bMenos}>

        <Text style={styles.textoBotao}>-</Text>
        
      </Pressable>


      <StatusBar style="auto" />

    </View>

  );
}




