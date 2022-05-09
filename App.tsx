import React, { FC } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { MenuLateral } from './src/navigator/MenuLateral';
import { StatusBar } from 'react-native';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* Ver si lo dejo o no */}
        <StatusBar
          backgroundColor="white"
          barStyle="dark-content"
        />
        <MenuLateral />
      </AppState>
    </NavigationContainer>
  );
};

type AppStateProps = {
  children: JSX.Element[];
}

const AppState: FC<AppStateProps> = ({ children }) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
};

export default App;
