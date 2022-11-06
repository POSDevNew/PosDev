import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../contacts/thems';

const RegButton = ({lable, handleOnPress}) => {
  return (
    <TouchableOpacity onPress={handleOnPress} style={styles.container}>
      <Text style={styles.text}>{lable} </Text>
    </TouchableOpacity>
  );
};

export default RegButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 8,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
