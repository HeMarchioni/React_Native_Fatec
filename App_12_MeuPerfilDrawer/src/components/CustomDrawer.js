import React from "react";
import { View, Text, Image } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

export default function CustomDrawer(props) {


  const imgPerfil = 'https://avatars.githubusercontent.com/u/78778541?s=400&u=1417f4e6d12e29b145cfeccf1caca8926e4645af&v=4';

  return (
    <DrawerContentScrollView {...props}
    >
      <View
        style={{
          width: "100%",
          height: 150,
          backgroundColor: "#000",
          justifyContent: "center",
          alignItems: "center",
          
        }}
      >
        <Image
         source = {{ uri: imgPerfil}}
          style={{
            width: 80,
            aspectRatio: 1,
            marginTop: '25%',
            borderRadius: 8,
            alignSelf: "center",
            
          }}
        />
        <Text
          style={{
            color: "#FFF",
            marginBottom: '25%',
            fontSize: 19,
            marginTop: 6,
            
          }}
        >
          Henrique
        </Text>
      </View>

      <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  );
}
