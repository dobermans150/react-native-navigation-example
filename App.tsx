import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { MenuLateral } from './src/navigator/MenuLateral';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      {/* Ver si lo dejo o no */}
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
      />
      <MenuLateral />
    </NavigationContainer>
  );
};

export default App;
