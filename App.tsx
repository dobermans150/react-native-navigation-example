import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';

const App = () => {
  return (
    <NavigationContainer
    >
      <MenuLateralBasico />
    </NavigationContainer>
  );
};

export default App;
