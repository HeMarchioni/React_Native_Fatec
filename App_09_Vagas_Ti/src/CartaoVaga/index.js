import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles'




export default function CartaoVaga(props) {
    


      return(
        <View style={styles.areaCartao}>
          <Text style={styles.textoTitulo}>{props.data.nome} </Text>
          <Text style={styles.texto}>Salário:  R$ {props.data.salario} </Text>
          <Text style={styles.texto}>Descrição: {props.data.descricao} </Text>
          <Text style={styles.texto}>Contato: {props.data.contato} </Text>
        </View>
      );

      }
