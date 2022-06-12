import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Text, View,  TextInput, Pressable, TouchableWithoutFeedback, Keyboard, Switch, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function Home() {

  const [nome,setNome] = useState('');
  const [idade,setIdade] = useState('');
  const [sexo,setSexo] = useState('Masculino');
  const [escolaridade,setEscolaridade] = useState('Superior');
  const [limite,setLimite] = useState(0);
  const [brasileiro,setBrasileiro] = useState(false);
  const [resultado,setResultado] = useState({});





  const navigation = useNavigation();




  


  function submit() {
    
    navigation.navigate('Results', {resultado});
  }



  function confirmar(){
    
    let limiteSt = limite.toString();
    let  brasileiroSt ="";
    brasileiro == true ? brasileiroSt = "Sim" : brasileiroSt = "Não";


    setResultado({ 
      "Dados Informados:":"",
      "Nome:":nome,
      "Idade:":idade,
      "Sexo:":sexo,
      "Escolaridade:":escolaridade,
      "Limite:":limiteSt,
      "Brasileiro:":brasileiroSt  });

    }



  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

<ScrollView showsVerticalScrollIndicator={false}>

    <View style={styles.container}>


    <Text style={styles.tituloTexto}> Abertura de Conta </Text>


     
  <View style={styles.divInput}>
    
    <Text style={styles.textInput}>Nome:</Text>
      
      
      <TextInput
        style={styles.input}
        onChangeText={setNome}
        placeholder="Digite seu nome"
        value={nome}
      />

  </View>





<View style={styles.divInput}>

<Text style={styles.textInput}>Idade:</Text>

      <TextInput
        style={styles.input}
        onChangeText={setIdade}
        placeholder="Digite sua idade"
        keyboardType="numeric"
        value={idade}
      />

</View>



<View style={styles.divInput}>

<Text style={styles.textInput}>Sexo:</Text>

    
  <Picker
      style={styles.inputSelect}
      selectedValue={sexo}
      onValueChange={ (itemValue) => setSexo(itemValue) }
      >
        <Picker.Item key={1} value={"Masculino"} label="Masculino" />
        <Picker.Item key={2} value={"Feminino"} label="Feminino" />
      </Picker>

</View>




<View style={styles.divInput}>

<Text style={styles.textInput}>Escolaridade:</Text>

    
  <Picker
      style={styles.inputSelect}
      selectedValue={escolaridade}
      onValueChange={ (itemValue) => setEscolaridade(itemValue) }
      >
        <Picker.Item key={1} value={"Superior"} label="Superior" />
        <Picker.Item key={2} value={"Ensino Médio"} label="Ensino Médio" />
        <Picker.Item key={3} value={"Ensino Fundamental"} label="Ensino Fundamental" />
        <Picker.Item key={4} value={"Incompleto"} label="Incompleto" />
      </Picker>

</View>






<View style={styles.divInput}>

<Text style={styles.textInput}>Limite:</Text>

     
  <Slider
      style={styles.input}
      minimumValue={0}
      maximumValue={1000}
      onValueChange={ (valorSelecionado) => setLimite(valorSelecionado)}
      value={limite}              //-> valor inicial
      step={1}
      minimumTrackTintColor='blue'
      maximumTrackTintColor='green'
      thumbTintColor='orange'
    />



</View>

<Text style={styles.textLimite}>{limite}</Text>



<View style={styles.divInput}>

<Text style={styles.textInput}>Brasileiro:</Text>

  <Switch 
      style={styles.inputSwitch}
      value={brasileiro}
      onValueChange={ (valorSwitch) => setBrasileiro(valorSwitch)}
      thumbColor='orange'
      />

</View>




      <Pressable style={styles.botao}
        onPress={confirmar}>

        <Text style={styles.textoBotao}> Confirmar </Text>

      </Pressable>

      <Pressable style={styles.botao}
        onPress={submit}>

        <Text style={styles.textoBotao}> Enviar </Text>

      </Pressable>




      <StatusBar style="auto" />
    </View>

    </ScrollView>

    </TouchableWithoutFeedback>

  );
}

