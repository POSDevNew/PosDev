import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import auth from '@react-native-firebase/auth';
import {AuthNavigator, MainNavigator} from './src/navigation';

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} translucent />
      {user ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default App;
