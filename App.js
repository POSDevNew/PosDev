import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import AuthNavigator from './src/navigation/AuthNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} translucent />
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default App;
