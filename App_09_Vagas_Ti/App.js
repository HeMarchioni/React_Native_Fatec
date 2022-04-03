import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView ,View } from 'react-native';
import CartaoVaga from './src/CartaoVaga'
import {useState} from "react";


export default function App() {




  const [vagas,setVagas] = useState([
    
    
    {id:1,
      nome:'Desenvolvedor Back End', 
    salario: '5000,00' 
    ,descricao: 'Domínio de tecnologias web, HTML, CSS, Experiência em programação .NET CoreExperiência em programação usando Bancos de Dados SQL'
    ,contato:'https://jobs.kenoby.com/tegra/job/desenvolvedor-back-end'
  },

  {id:2,
    nome:'Desenvolvedor Java', 
  salario: '8000,00' 
  ,descricao: 'Nível hierárquico: Especialista Lugar de trabalho: São Paulo, SP Regime de contratação de tipo Efetivo – CLT Jornada Período Integral '
  ,contato:'https://genteseguradora.com.br/'
  },

  {id:3,
    nome:'Desenvolvedor Full Stack', 
  salario: '1000,00' 
  ,descricao: 'Nível hierárquico: Estagiário Lugar de trabalho: São Vicente, SP Regime de contratação de tipo Estágio Jornada Parcial tardes Manutenção de Website'
  ,contato:'DESPNET'
  },
    
    
  {id:4,
    nome:'Desenvolvedor(a) Front-End', 
  salario: '3000,00' 
  ,descricao: 'Procuramos um(a) desenvolvedor(a) Front-end, nerd, poeta digital, destruidor(a) de falanges, como preferir. O(a) profissional irá atuar no desenvolvimento'
  ,contato:'Mkt Virtual'
  },


  
  ]);





  return (
    <View style={styles.container}>


      <Text style={styles.tituloTexto}> Vagas </Text>

      <ScrollView 
      style={styles.scroll}
      showsVerticalScrollIndicator={false}>


{
  
  vagas.map((value,key)=> (

    <CartaoVaga key={key} data={value}></CartaoVaga>

  ))
}



      </ScrollView>
      
      <StatusBar style="auto" />
    </View>
  );
}










const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tituloTexto:{
    fontSize: 30,
    marginBottom:30,
    color:'red',
    fontWeight: "bold",
    paddingTop:30,
  },
  


   scroll:{
    flex: 1,
    width: 320,
   },


});
