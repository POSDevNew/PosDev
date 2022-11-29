import auth from '@react-native-firebase/auth';
import {ToastAndroid} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export const googleSingin = async () => {
  GoogleSignin.configure({
    webClientId:
      '611399494769-u6rj43j5k0df9dfm2il3d9e6smi975t2.apps.googleusercontent.com',
  });

  // Get the users ID token
  const {idToken} = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
};

export const signIn = (email, password) => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log(email);
      ToastAndroid.show('Sign In', ToastAndroid.SHORT);
    })
    .catch(e => {
      console.log(e);
    });
};

export const signUp = (name, email, password) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log(name);
      ToastAndroid.show('Sign Up', ToastAndroid.SHORT);
    })
    .catch(e => {
      console.log(e);
    });
};

export const signOut = () => {
  auth()
    .signOut()
    .then(() => {
      ToastAndroid.show('Sign Out', ToastAndroid.SHORT);
    });
};

export const resetPassword = async email => {
  await auth()
    .sendPasswordResetEmail(email)
    .then(() => {
      ToastAndroid.show('Send', ToastAndroid.SHORT);
    });
};
