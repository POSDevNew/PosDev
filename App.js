import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import AuthNavigator from './src/navigation/AuthNavigator';
import auth from '@react-native-firebase/auth';
import {HomeScreen} from './src/screen';

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
      {user ? <HomeScreen /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default App;
