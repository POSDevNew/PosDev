import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../contacts/thems';
import PhoneRegistration from './PhoneRegistration';
import OTPVerigication from './OTPVerigication';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} translucent />
      <OTPVerigication />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.backgroung,
  },
});
