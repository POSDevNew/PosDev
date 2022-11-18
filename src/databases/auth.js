import auth from '@react-native-firebase/auth'
import {ToastAndroid } from 'react-native'

export const signIn=(email,password)=>{
    auth().signInWithEmailAndPassword(email,password)
    .then(()=>{
        ToastAndroid.show("Sign In",ToastAndroid.SHORT)
    })
    .catch(e=>{
        console.log(e)
    })
}

export const signUp=(email,password)=>{
    auth().createUserWithEmailAndPassword(email,password)
    .then(()=>{
        ToastAndroid.show("Sign Up",ToastAndroid.SHORT)
    })
    .catch(e=>{
        console.log(e)
    })
}

export const signOut=()=>{
    auth().signOut().then(()=>{ToastAndroid.show("Sign Out",ToastAndroid.SHORT)})
}

export const resetPassword=async(email)=>{
        await auth().sendPasswordResetEmail(email)
        .then(()=>{ToastAndroid.show("Send",ToastAndroid.SHORT)})         
}

