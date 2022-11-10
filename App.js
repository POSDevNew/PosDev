import React from 'react';
import {StatusBar} from 'react-native';
import {
  EmailSingIn,
  HomeScreen,
  OTPVerigication,
  PhoneRegistration,
} from './src/screen';
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} translucent />
      <EmailSingIn />
    </>
  );
};

export default App;
