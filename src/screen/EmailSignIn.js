import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../contacts/thems';
import Feather from 'react-native-vector-icons/Feather';
import {TextInput} from 'react-native-gesture-handler';
import {Images} from '../contacts/Images';
import {ToggleButton} from '../component';
const EmailSignIn = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  return (
    <View styles={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Sing In</Text>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.content}>
          Enter your username and password, and growth your business with POS
        </Text>
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
            color={COLORS.primary}
            style={{marginRight: 10}}
            onPress={() => setPasswordShow(!passwordShow)}
          />
        </View>
      </View>
      <Text></Text>
      <View style={styles.forgotPasswordContainer}>
        <View style={styles.toggleContainer}>
          <ToggleButton size={0.6} />
          <Text style={styles.remembermeText}>Remember Me</Text>
        </View>

        <Text style={styles.forgotPasswordText}>Fotgot Password</Text>
      </View>
      <TouchableOpacity style={styles.SinginButton}>
        <Text style={styles.SinginButtonText}>Sing In</Text>
      </TouchableOpacity>
      <View style={styles.SingUpContainer}>
        <Text style={styles.accountText}>Don't have an account?</Text>
        <Text style={styles.singUpText}>Sing Up</Text>
      </View>
      <Text style={styles.orText}>OR</Text>
      <TouchableOpacity style={styles.googleButton}>
        <View style={styles.socialButtonConatiner}>
          <View style={styles.singinLogoContainer}>
            <Image source={Images.GOOGLE} style={styles.singinButtonLogo} />
          </View>
          <Text style={styles.socialButtonText}>Connect with Google</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.facebookButton}>
        <View style={styles.socialButtonConatiner}>
          <View style={styles.singinLogoContainer}>
            <Image source={Images.FACEBOOK} style={styles.singinButtonLogo} />
          </View>
          <Text style={styles.socialButtonText}>Connect with Facebook</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default EmailSignIn;

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
    lineHeight: 60,
    width: 100,
    textAlign: 'center',
    color: COLORS.singinColor,
  },
  title: {
    fontSize: 20,
    lineHeight: 30,
    marginTop: 50,
    marginBottom: 2,
    marginHorizontal: 20,
    color: COLORS.textColor,
  },
  content: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 20,
    color: COLORS.textColor,
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
    color: COLORS.primary,
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
  SinginButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    height: 40,
    marginHorizontal: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
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
    fontSize: 20,
    color: COLORS.textColor,
  },
  singUpText: {
    fontSize: 18,
    color: COLORS.singinColor,
    marginLeft: 15,
  },
  orText: {
    fontSize: 18,
    color: COLORS.primary,
    marginLeft: 10,
    alignSelf: 'center',
    paddingVertical: 2,
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
    backgroundColor: COLORS.primary,
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
    fontSize: 18,
    color: COLORS.primary,
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
