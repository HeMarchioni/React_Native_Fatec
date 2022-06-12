import React from "react";
import { View, Text, Pressable, Image, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from './styles';



export default function Pessoal() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
    
      <View style={styles.wrapper}>
        <Text style={{ ...styles.text, ...styles.title }}>Dados Pessoais</Text>
        <Text style={styles.text}>
          <Text>Henrique Marchioni</Text>
        </Text>
        <Text style={styles.text}>
          <Text>Brasileiro </Text>
          <Text>Santos - SP </Text>
        </Text>
        

      </View>
    </View>
  );
}
