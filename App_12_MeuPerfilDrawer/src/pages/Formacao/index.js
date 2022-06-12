import React from "react";
import { View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from './styles';


export default function Formacao() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.botaoMenu}
        onPress={() => navigation.toggleDrawer()}>
          
        <Text style={styles.menu}> Menu </Text>
      </Pressable>
      <Text style={{ ...styles.text, ...styles.title }}>Formação</Text>
      <Text style={styles.text}>
        <Text>Cursando: Sistemas para Internet - Fatec Rubens Lara </Text>
      </Text>
    </View>
  );
}
