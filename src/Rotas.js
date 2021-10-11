import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Servicos from './telas/Servicos';
import Carrinho from './telas/Carrinho';

import { cores } from './estilos';

const Tab = createBottomTabNavigator();

export default function Rotas() {
  return <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        tabBarIconStyle: { display: "none" },
      }}

      tabBarOptions={{
        activeTintColor: cores.roxo,
        inactiveTintColor: cores.claro,
        activeBackgroundColor: cores.roxo,
        inactiveBackgroundColor: cores.laranja,
        style: {
          height: 70
        },
        labelStyle: {
          width: '100%',
          flex: 1,
          fontWeight: 'bold',
          fontSize: 16,
          lineHeight: 21,
          marginTop: 3,
          paddingTop: 21,
          backgroundColor: cores.laranja
        },
        keyboardHidesTabBar: true
      }}
      screenOptions={{
        tabBarActiveTintColor: cores.roxo,
        tabBarInactiveTintColor: cores.claro,
        tabBarActiveBackgroundColor: cores.roxo,
        tabBarInactiveBackgroundColor: cores.laranja,
        tabBarLabelStyle: {
          fontWeight: 'bold',
          fontSize: 16,
          textAlignVertical: 'center',
          height: '95%',
          width: '105%',
          backgroundColor: cores.laranja,
        },
        tabBarStyle: {
          width: '100%',
          height: 70,
          lineHeight: 21,
        },
        tabBarIconStyle: {
          display: 'none',
        },
        keyBoarHidesTabBar: true,
      }}
    >
      <Tab.Screen name="Serviços" component={Servicos} />
      <Tab.Screen name="Carrinho" component={Carrinho} />
    </Tab.Navigator>
  </NavigationContainer>
}