import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../contacts/thems';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
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
