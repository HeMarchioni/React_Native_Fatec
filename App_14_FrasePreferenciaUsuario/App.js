import React, { Component } from 'react'
import { View, Text, Switch, ScrollView, TextInput, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { styles } from './styles';



export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {dia: false,tamanho: false,fraseSalva: ' '}
    this.trocaCorQuadro = this.trocaCorQuadro.bind(this)
    this.trocaCorTamanho = this.trocaCorTamanho.bind(this)
  }



 


  trocaCorTamanho() {
    const estilo = {
      flex: 1,
    }
    const dia = this.state.dia
    const tamanho = this.state.tamanho

    dia === true ?
      estilo.color = '#fff' : estilo.color = '#000'
    tamanho == true ?
      estilo.fontSize = 25 : estilo.fontSize = 18

    return estilo
  }


 

  trocaCorQuadro() {
    const estilo = {
      display: 'flex',
      height: 400,
      margin: 15,
      padding: 15,
      borderRadius: 5
    }
    this.state.dia === false ?
      estilo.backgroundColor = '#C2C1C2' :
      estilo.backgroundColor = '#000'
    return estilo
  }

 
  async componentDidMount() {
    const atualizarItems = async (listaChaves) => {
      await AsyncStorage.multiGet(listaChaves, (erro, storedItems) => {
        for (let item of storedItems) {
          console.log(item)
          try {
            if (item[0] === 'frase_armazenada')
              this.setState({ fraseGuardada: item[1] })
            else if (item[0] === 'statusDia_armazenado')
              this.setState({ statusDia: JSON.parse(`${item[1]}`.toLowerCase()) })
            else if (item[0] === 'fontSize_armazenado')
              this.setState({ statusTamanho: JSON.parse(`${item[1]}`.toLowerCase()) })
          } 
          catch (e) {
            console.log(e)
          }
        }
      })
    }
    atualizarItems([
      'frase_armazenada', 
      'statusDia_armazenado',
      'fontSize_armazenado'
    ])
  }
  


  async componentDidUpdate(_, statsAnterior) {
    const frase = this.state.fraseGuardada
    const statusDia = this.state.statusDia
    const tamanhoFonte = this.state.statusTamanho

    try {
      if (statsAnterior.fraseGuardada != frase)
        await AsyncStorage.setItem('frase_armazenada', frase)

      else if (statsAnterior.statusDia != statusDia)
        await AsyncStorage.setItem('statusDia_armazenado', `${statusDia}`)

      else if (statsAnterior.statusTamanho != tamanhoFonte)
        await AsyncStorage.setItem('fontSize_armazenado', `${tamanhoFonte}`)
    }
    catch(e) {
      console.log(`Erro ao redefinir items -> ${e}`)
    }
  }



  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Frases</Text>
        <View style={styles.area}>
          
          <Text style={styles.txt}>
          <Switch
            value={this.state.dia}
            onValueChange={(vlDia) => this.setState({ dia: vlDia })}
          /> {this.state.dia ? 'Noite' : 'Dia'}
          </Text>
          
          <Text style={styles.txt}> <Switch
            value={this.state.tamanho}
            onValueChange={vlSize => this.setState({ tamanho: vlSize })} />
            {this.state.tamanho ? 'Grande' : 'Pequeno'}
          </Text>

          
        </View>


        <ScrollView style={this.trocaCorQuadro()}>
          <TextInput 
            onChangeText={txtDigitado => this.setState({ fraseSalva: txtDigitado })}
            style={this.trocaCorTamanho()}
            multiline={true}
            defaultValue={this.state.fraseSalva}
          />
       </ScrollView>
      </View>
    )
  }
}

