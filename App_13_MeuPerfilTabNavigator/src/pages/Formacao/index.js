import React from "react";
import { View, Text} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from './styles';


export default function Formacao() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
     
     <View style={styles.wrapper}>
      <Text style={{ ...styles.text, ...styles.title }}>Formação</Text>
      <Text style={styles.text}>
        <Text>Sistemas para Internet - Fatec Rubens Lara </Text>
      </Text>
      </View>
    </View>
  );
}
