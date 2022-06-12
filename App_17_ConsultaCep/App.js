import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { useState} from 'react';
import { styles } from './styles';


export default function App() {

  const [cep, setCep] = useState('');
  const [log, setLog] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');

  




  function BuscarCep() {

      

    var url = 'https://viacep.com.br/ws/';



    fetch(url+cep+'/json/', { mode: 'no-cors' })
    .then(T => T.json())
    .then(data => {
      setCep(data.cep)
      setLog(data.logradouro)
      setBairro(data.bairro)
      setCidade(data.localidade)
      setEstado(data.uf)
    })
    .catch(err => {
      setCep("Cep não encontrado")
      console.log(err.message)});

  }

  

  return (
    <View style={styles.container}>
      <Text style={styles.tituloTexto}>CEP x ENDEREÇO</Text>

      <View>
        <View style={styles.divInput}>

          <TextInput onChangeText={setCep}
            style={styles.textInput}
            value={cep}
            keyboardType="numeric" 
            placeholder="Digite um cep..."/>

        </View>
        <Pressable style={styles.botao} onPress={BuscarCep}>
          <Text style={styles.textoBotao}>Pesquisar</Text>
        </Pressable>
      </View>

      
        
         
            <View style={{marginVertical: 16}}>
              <Text>
                CEP: {cep}
              </Text>

              <Text>
                Logradouro: {log}
              </Text>

              <Text>
                Bairro: {bairro}
              </Text>

              <Text>
                Cidade: {cidade}
              </Text>

              <Text>
                Estado: {estado}
              </Text>
            </View>
      


    </View>
  );
}


