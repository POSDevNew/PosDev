import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../contacts/thems';
import PhoneInput from 'react-native-phone-number-input';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RegButton} from '../component';
const PhoneRegistration = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const handleOnPress = () => {
    navigation.navigate('OTPVerigication');
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Ionicons
          style={{marginRight: 100}}
          name="chevron-back-outline"
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Register Phone</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Enter your registered phone number to login.
        </Text>
      </View>
      <View style={styles.phoneInput}>
        <Text style={styles.phoneNumber}>Phone Number</Text>
        <PhoneInput
          defaultValue={phoneNumber}
          defaultCode="MM"
          onChangeFormattedText={text => setPhoneNumber(text)}
          containerStyle={styles.phoneContainer}
          textContainerStyle={styles.phoneContainer1}
        />

        <RegButton lable="Continue" handleOnPress={handleOnPress} />
      </View>
    </View>
  );
};

export default PhoneRegistration;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 15,
  },
  headerTitle: {
    fontSize: 20,
    textAlign: 'center',
    color: COLORS.textColor,
  },
  titleContainer: {
    marginHorizontal: 20,
    marginVertical: 50,
  },
  title: {
    fontSize: 20,
    color: COLORS.textColor,
  },
  phoneInput: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneNumber: {
    fontSize: 16,
    paddingVertical: 10,
    color: '#7d7d7d',
    width: '95%',
  },
  phoneContainer: {
    borderRadius: 10,
    backgroundColor: COLORS.background,
    width: '95%',
    marginBottom: 100,
  },
  phoneContainer1: {
    borderRadius: 10,
    backgroundColor: COLORS.background,
    width: '95%',
  },
});
