import {
  Image,
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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {RegButton} from '../component';
import {googleSingin, signIn} from '../databases/auth';

const EmailSignIn = ({navigation}) => {
  const [passwordShow, setPasswordShow] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const googleSignIn = () => {
    googleSingin()
      .then(res => {
        console.log('Signed in with Google!');
      })
      .catch(error => console.log(error));
  };

  const handleOnPress = () => {
    signIn(email, password);
  };

  return (
    <ScrollView styles={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Sing In</Text>
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
            value={email}
            onChangeText={value => setEmail(value)}
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
            value={password}
            onChangeText={value => setPassword(value)}
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
      <View style={styles.forgotPasswordContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
          <Text style={styles.forgotPasswordText}>Forgot Password ?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.SinginButton}>
        <RegButton lable="Sign In" handleOnPress={handleOnPress} />
      </View>
      <View style={styles.SingUpContainer}>
        <Text style={styles.accountText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('EmailSignUp')}>
          <Text style={styles.singUpText}>Sing Up</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.orText}>or</Text>
      <View style={{marginBottom: 20}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('PhoneRegistration')}
          style={styles.googleButton}>
          <View style={styles.socialButtonConatiner}>
            <View style={styles.singinLogoContainer}>
              <MaterialIcons name="phone-iphone" size={25} color="#000" />
            </View>
            <Text style={styles.socialButtonText}>Phone Registeriation</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.googleButton} onPress={googleSignIn}>
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

export default EmailSignIn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
  },
  headerContainer: {
    alignItems: 'center',
    paddingHorizontal: 1,
    marginTop: 60,
  },
  headerTitle: {
    fontSize: 28,
    width: 100,
    textAlign: 'center',
    color: COLORS.textColor,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    color: COLORS.textColor,
  },
  content: {
    fontSize: 20,
    marginVertical: 40,
    marginHorizontal: 20,
    color: COLORS.textColor,
  },
  inputContainer: {
    backgroundColor: COLORS.background,
    paddingHorizontal: 20,
    padding: 7,
    margin: 2,
    marginHorizontal: 20,
    marginVertical: 10,
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
  forgotPasswordText: {
    fontSize: 14,
    color: COLORS.primary,
  },
  SinginButton: {
    marginHorizontal: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
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
