import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Carrinho from './pages/Carrinho/index';
import Main from './pages/Main/index';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Main'
        screenOptions={
          { headerStyle: { backgroundColor: "#ccc" } },
          { headerTintColor: '#000' }
        }
      >
        <Stack.Screen name="Carrinho"
          component={Carrinho}
          options={{ title: "Carrinho de Compras" }} />
        <Stack.Screen name="Main" options={{ title: "Carrinho de Compras" }} component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}