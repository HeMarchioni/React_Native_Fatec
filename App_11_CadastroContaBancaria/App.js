import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from './pages/Home';
import Results from './pages/Results';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{
          title:'Cadastro',
          headerStyle:{
            backgroundColor: 'orange'
          },
          headerTintColor: '#FFF',
          //headerShown: false,
        }}
 />
        <Stack.Screen name="Results" component={Results} options={{
          title:'Dados Informados',
          headerStyle:{
            backgroundColor: 'orange'
          },
          headerTintColor: '#FFF',
          //headerShown: false,
        }}
 />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

