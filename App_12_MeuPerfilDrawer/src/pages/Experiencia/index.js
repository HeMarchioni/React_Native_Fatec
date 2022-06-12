import React from "react";
import { View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from './styles';


export default function Formacao() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable style={styles.botaoMenu}
        onPress={() => navigation.toggleDrawer()}
      >
        <Text style={styles.menu}> Menu </Text>
      </Pressable>

      
      <Text style={{ ...styles.text, ...styles.title }}> Experiência</Text>
      <Text style={styles.text}>Desenvolvedor JAVA  SOC </Text>
      <Text style={styles.text}>Desenvolvedor Back-end  ModalGR</Text>
      <Text style={{ ...styles.text, ...styles.title }}>Atuando</Text>
      <Text style={styles.text}>Java - Mvc, struts, jsp, sprig boot </Text>
      <Text  style={styles.text}>C# .Net, APIs , entity framework</Text> 
    </View>
  );
}
