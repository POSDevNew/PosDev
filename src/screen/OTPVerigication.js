import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../contacts/thems';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RegButton} from '../component';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const OTPVerigication = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('+959979030066');
  const [otp, setOtp] = useState();
  const handleOnPress = () => {
    console.log(otp);
  };
  const onPressResent = () => {
    console.log(phoneNumber);
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
        <Text style={styles.headerTitle}>OTP Verification</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>OTP Verification</Text>
        <Text style={styles.content}>
          Enter the OTP number just sent you at{' '}
          <Text style={styles.phoneNumberText}>{phoneNumber}</Text>
        </Text>
      </View>
      <View style={styles.otpContainer}>
        <Text style={styles.correct}>Did You Enter The Correct Number?</Text>
        <View style={styles.inputOtp}>
          <OTPInputView
            style={styles.otp}
            pinCount={6}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={code => setOtp(code)}
          />
        </View>
        <View style={{flexDirection: 'row', marginBottom: 50}}>
          <Text style={styles.correct}>Don't receive SMS?</Text>
          <TouchableOpacity onPress={onPressResent}>
            <Text style={styles.resent}>Resent Code</Text>
          </TouchableOpacity>
        </View>
        <RegButton lable="Verify" handleOnPress={handleOnPress} />
      </View>
    </View>
  );
};

export default OTPVerigication;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.backgroung,
    width: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingLeft: 10,
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
  content: {
    fontSize: 14,
    marginTop: 10,
    lineHeight: 30,
  },
  phoneNumberText: {
    fontSize: 16,
    color: '#FBA83C',
  },
  otpContainer: {
    paddingHorizontal: 20,
  },
  correct: {
    color: COLORS.textColor,
    marginRight: 5,
  },
  resent: {
    color: COLORS.singinColor,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  inputOtp: {
    height: 120,
    backgroundColor: COLORS.backgroung,
  },
  underlineStyleBase: {
    width: 45,
    height: 45,
    borderWidth: 1,
    backgroundColor: COLORS.background,
    color: COLORS.textColor,
    borderRadius: 10,
  },
  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
  otp: {
    height: '100%',
    width: '100%',
  },
});
