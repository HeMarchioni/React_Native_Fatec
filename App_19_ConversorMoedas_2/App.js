import { Text, View,  TextInput, Pressable, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import {Picker} from '@react-native-picker/picker';


export default function App() {




  const [valor,setValor] = useState('');
  const [de,setDe] = useState('real');
  const [para,setPara] = useState('dol');
  const [resultado,setResultado] = useState(0);
  const [cotDolar,setCotDolar] = useState(0);
  const [cotEuro,setCotEuro] = useState(0);
  const [cotBtc,setCotBtc] = useState(0);




function BuscarCota(){

  var url = "https://api.hgbrasil.com/finance?format=json-cors&key=be36731f";




  fetch(url, { mode: 'no-cors' })
  .then(T => T.json())
  .then(cotacao => {
    setCotDolar(cotacao.results.currencies.USD.buy)
    setCotEuro(cotacao.results.currencies.EUR.buy)
    setCotBtc(cotacao.results.currencies.BTC.buy)
  })
  .catch(err => console.log(err.message));

}







  function confirmar(){

    
    let valorNumber = parseFloat(valor);
    

    if (de == 'real' && para == 'dol') {

      setResultado(valorNumber/cotDolar)
    
    } else if (de == 'real' && para == 'euro'){

      setResultado(valorNumber/cotEuro)

    }else if (de == 'dol' && para == 'real'){

      setResultado(valorNumber*cotDolar)

    }else if (de == 'dol' && para == 'euro'){

      setResultado((cotDolar/cotEuro)*valorNumber)

    }else if (de == 'euro' && para == 'real'){

      setResultado(valorNumber*cotEuro)

    }

    else if (de == 'real' && para == 'btc'){

      setResultado(valorNumber/cotBtc)
    }
    else if (de == 'btc' && para == 'real'){

      setResultado(valorNumber*cotBtc)

    }

    else if (de == 'btc' && para == 'euro'){

      setResultado((cotBtc/cotEuro)*valorNumber)

    }

    else if (de == 'euro' && para == 'btc'){

      setResultado((cotEuro/cotBtc)*valorNumber)

    }

    else if (de == 'dol' && para == 'btc'){

      setResultado((cotDolar/cotBtc)*valorNumber)

    }

    else if (de == 'btc' && para == 'dol'){

      setResultado((cotBtc/cotDolar)*valorNumber)

    }


    else if (de == 'real' && para == 'real' || de == 'dol' && para == 'dol' || de == 'euro' && para == 'euro' ||de == 'btc' && para == 'btc' ){

      setResultado(valorNumber)
    }

 
    else{ //euro para dolar

      setResultado((cotEuro/cotDolar)*valorNumber)

    }
      
    
    
  
  }







  return (


<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

<View style={styles.container}>

<ScrollView showsVerticalScrollIndicator={false}>

    


    <Text style={styles.tituloTexto}>Conversor de Moedas </Text>


     



<View style={styles.divInput}>

<Text style={styles.textInput}>Valor:</Text>

      <TextInput
        style={styles.input}
        onChangeText={setValor}
        onChange={BuscarCota()}
        placeholder="Digite o valor"
        keyboardType="numeric"
        value={valor}
      />

</View>



<View style={styles.divInput}>

<Text style={styles.textInput}>De:</Text>

    
  <Picker
      style={styles.inputSelect}
      selectedValue={de}
      onValueChange={ (itemValue) => setDe(itemValue) }
      >
        <Picker.Item style={styles.inputSelect} key={2} value={"real"} label="Real" />
        <Picker.Item style={styles.inputSelect} key={1} value={"dol"} label="Dólar" />
        <Picker.Item style={styles.inputSelect} key={2} value={"euro"} label="Euro" />
        <Picker.Item style={styles.inputSelect} key={2} value={"btc"} label="Bitcoin" />
      </Picker>

</View>



<View style={styles.divInput}>

<Text style={styles.textInput}>Para:</Text>

    
  <Picker
      style={styles.inputSelect}
      selectedValue={para}
      onValueChange={ (itemValue) => setPara(itemValue) }
      >
         <Picker.Item style={styles.inputSelect} key={1} value={"dol"} label="Dólar" />
        <Picker.Item style={styles.inputSelect} key={2} value={"real"} label="Real" />
        <Picker.Item style={styles.inputSelect} key={2} value={"euro"} label="Euro" />
        <Picker.Item style={styles.inputSelect} key={2} value={"btc"} label="Bitcoin" />
      </Picker>

</View>



<Pressable style={styles.botao}
        onPress={() => valor != "" && confirmar()}>

        <Text style={styles.textoBotao}> Converter </Text>

      </Pressable>





 
      <Text style={styles.tituloResultado}> Valor Convertido </Text>
      <Text style={styles.resultado}> {resultado.toFixed(4)} </Text>



     
            
       
    

    </ScrollView>

    </View>

    </TouchableWithoutFeedback>

  );
}
