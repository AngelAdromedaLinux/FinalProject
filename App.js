
//Prueba
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StackNavigator from './navigation.js';
import { GasProvider } from './src/context/gascontext.js';
import { DesProvider } from './src/context/descontext.js';
import { NativeBaseProvider } from 'native-base';

const Stack = createStackNavigator();

const App = () => {

  return (
    <NativeBaseProvider>
      <GasProvider>
        <DesProvider>
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </DesProvider>
      </GasProvider>
    </NativeBaseProvider>
  );


};

export default App;


