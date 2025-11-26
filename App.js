import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import LoginScreen from './src/login';
import RegisterScreen from './src/Register';
import HomeScreen from './src/Home';
import AboutScreen from './src/About';
import ConverterScreen from './src/Converter';
import ImcScreen from './src/imc';
import ToDoList from './src/ToDoList';
import Frases from './src/frases';

import { initDatabase } from './database/database';

const Stack = createStackNavigator();

export default function App() {

  useEffect(() => {
    (async () => {
      try {
        await initDatabase();
      } catch (e) {
        console.warn('Database initialization failed', e);
      }
    })();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          // transição suave padrão
          ...TransitionPresets.SlideFromRightIOS,
          headerBackTitleVisible: false,
          headerTitleAlign: 'left',
          headerTintColor: '#fff',
          headerStyle: { backgroundColor: '#0A0F24' },
          headerTitleStyle: { fontSize: 18, fontWeight: '800' }, // header mais compacto
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Início" }}
        />

        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{ title: "Sobre" }}  // título padrão
        />

        <Stack.Screen
          name="Converter"
          component={ConverterScreen}
          options={{ title: "Conversor" }} // título padrão
        />

        <Stack.Screen
          name="imc"
          component={ImcScreen}
          options={{ title: "IMC" }} // título padrão
        />

        <Stack.Screen
          name="ToDoList"
          component={ToDoList}
          options={{ title: "A fazer" }} // título padrão
        />

        <Stack.Screen
          name="frases"
          component={Frases}
          options={{ title: "Frases" }} // título padrão
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
