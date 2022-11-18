import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../contacts/thems';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {RegButton, ToggleButton} from '../component';
import {types} from '@babel/core';

const EmailSignUp = ({navigation}) => {
  const [passwordShow, setPasswordShow] = useState(false);
  return (
    <ScrollView styles={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Sing Up</Text>
        <Text style={styles.content}>
          Enter your Name, Email and password to create Account.
        </Text>
        <View style={styles.text}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.alreadyaccount}>Arleady have account?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
          <Feather
            name="user"
            size={22}
            color={COLORS.primary}
            style={{marginRight: 10}}
          />
          <TextInput
            placeholder="User Name"
            placeholderTextColor={COLORS.primary}
            selectionColor={COLORS.primary}
            style={styles.inputText}
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
          <Fontisto
            name="email"
            size={22}
            color={COLORS.primary}
            style={{marginRight: 10}}
          />
          <TextInput
            placeholder="Email address"
            placeholderTextColor={COLORS.primary}
            selectionColor={COLORS.primary}
            style={styles.inputText}
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
          <Feather
            name="lock"
            size={22}
            color={COLORS.primary}
            style={{marginRight: 10}}
          />
          <TextInput
            secureTextEntry={passwordShow ? false : true}
            placeholder="Password"
            placeholderTextColor={COLORS.primary}
            selectionColor={COLORS.primary}
            style={styles.inputText}
          />
          <Feather
            name={passwordShow ? 'eye' : 'eye-off'}
            size={22}
            color={COLORS.textColor}
            style={{marginRight: 10}}
            onPress={() => setPasswordShow(!passwordShow)}
          />
        </View>
      </View>
      <Text></Text>
      {/* <View style={styles.forgotPasswordContainer}> */}
      {/* <View style={styles.toggleContainer}> */}
      {/* <ToggleButton size={0.6} /> */}
      {/* <Text style={styles.remembermeText}>Remember Me</Text> */}
      {/* </View> */}
      {/* <TouchableOpacity> */}
      {/* <Text style={styles.forgotPasswordText}>Fotgot Password ?</Text> */}
      {/* </TouchableOpacity> */}
      {/* </View> */}
      <View style={styles.SingupButton}>
        <RegButton lable="Create Account" />
      </View>
      {/* <View style={styles.SingUpContainer}> */}
      {/* <Text style={styles.accountText}>Don't have an account?</Text> */}
      {/* <TouchableOpacity> */}
      {/* <Text style={styles.singUpText}>Sing Up</Text> */}
      {/* </TouchableOpacity> */}
      {/* </View> */}
      <Text style={styles.orText}>or</Text>
      <View style={{marginBottom: 20}}>
        <TouchableOpacity style={styles.googleButton}>
          <View style={styles.socialButtonConatiner}>
            <View style={styles.singinLogoContainer}>
              <MaterialIcons name="phone-iphone" size={25} color="#000" />
            </View>
            <Text style={styles.socialButtonText}>Phone Registeriation</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleButton}>
          <View style={styles.socialButtonConatiner}>
            <View style={styles.singinLogoContainer}>
              <AntDesign name="google" size={24} color="#F4B400" />
            </View>
            <Text style={styles.socialButtonText}>Connect with Google</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.facebookButton}>
          <View style={styles.socialButtonConatiner}>
            <View style={styles.singinLogoContainer}>
              <AntDesign name="facebook-square" size={24} color="#4285F4" />
            </View>
            <Text style={styles.socialButtonText}>Connect with Facebook</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default EmailSignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  headerContainer: {
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 1,
  },
  headerTitle: {
    fontSize: 28,
    lineHeight: 100,
    width: 100,
    textAlign: 'center',
    color: COLORS.textColor,
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    lineHeight: 30,
    marginTop: 20,
    marginBottom: 2,
    marginHorizontal: 20,
    color: COLORS.textColor,
  },
  text: {
    paddingVertical: 5,
    paddingBottom: 5,
    marginHorizontal: 8,
  },
  content: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 20,
    color: COLORS.textColor,
  },
  alreadyaccount: {
    fontSize: 16,
    color: COLORS.singinColor,
  },

  inputContainer: {
    backgroundColor: COLORS.background,
    paddingHorizontal: 20,
    padding: 7,
    margin: 2,
    marginHorizontal: 20,
    marginVertical: 6,
    borderRadius: 8,
    borderWidth: 5,
    borderColor: COLORS.background,
    justifyContent: 'center',
  },
  inputSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputText: {
    fontSize: 16,
    textAlignVertical: 'center',
    padding: 1,
    color: COLORS.textColor,
    flex: 1,
  },
  forgotPasswordContainer: {
    marginHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  remembermeText: {
    fontSize: 14,
    color: COLORS.primary,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: COLORS.primary,
  },
  SingupButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    marginHorizontal: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  SinginButtonText: {
    fontSize: 20,
    color: COLORS.textColor,
  },
  SingUpContainer: {
    marginHorizontal: 20,
    justifyContent: 'center',
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  accountText: {
    fontSize: 16,
    color: COLORS.textColor,
  },
  singUpText: {
    fontSize: 18,
    color: COLORS.singinColor,
    marginLeft: 15,
  },
  orText: {
    fontSize: 16,
    color: COLORS.primary,
    marginLeft: 10,
    alignSelf: 'center',
    paddingVertical: 10,
  },
  facebookButton: {
    backgroundColor: COLORS.background,
    paddingVertical: 8,
    marginHorizontal: 20,
    borderRadius: 8,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleButton: {
    backgroundColor: COLORS.background,
    paddingVertical: 8,
    marginHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  singinButtonLogo: {
    height: 18,
    width: 18,
  },
  singinLogoContainer: {
    padding: 2,
    borderRadius: 3,
    position: 'absolute',
    left: 35,
  },
  socialButtonConatiner: {
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  socialButtonText: {
    fontSize: 16,
    color: COLORS.textColor,
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
