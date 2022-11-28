import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../contacts/thems';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.alreadyaccount}>HomeScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 20,
    backgroundColor: COLORS.background,
  },
});
