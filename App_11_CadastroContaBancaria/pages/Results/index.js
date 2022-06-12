import React from 'react';
import {Text, View} from 'react-native';

export default function Results({route}) {
  return (
    <View>
      <Text>
        Dados da Conta
      </Text>

      <View>
        <Text>Nome: {route.params?.resultado["Nome:"]}</Text>
      </View>

      <View>
        <Text>Idade: {route.params?.resultado["Idade:"]}</Text>
      </View>

      <View>
        <Text>Sexo: {route.params?.resultado["Sexo:"]}</Text>
      </View>

      <View>
        <Text>Escolaridade: {route.params?.resultado["Escolaridade:"]}</Text>
      </View>

      <View>
        <Text>Limite: {route.params?.resultado["Limite:"]}</Text>
      </View>

      <View>
        <Text>Brasileiro: {route.params?.resultado["Brasileiro:"]}</Text>
      </View>

    </View>

  )
}