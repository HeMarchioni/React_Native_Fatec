import React from "react";
import { View, Text} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from './styles';


export default function Formacao() {


  const navigation = useNavigation();


  return (
    <View style={styles.container}>
     

     <View style={styles.wrapper}>
      <Text style={{ ...styles.text, ...styles.title }}> Experiência</Text>
      <Text style={styles.text}>Desenvolvedor JAVA  SOC </Text>
      <Text style={styles.text}>Desenvolvedor Back-end  ModalGR</Text>
      <Text style={{ ...styles.text, ...styles.title }}>Atuando</Text>
      <Text style={styles.text}>Java - Mvc, struts, jsp, sprig boot </Text>
      <Text  style={styles.text}>C# .Net, APIs , entity framework</Text> 
    </View>
    </View>
  );
}
