import {createStackNavigator} from '@react-navigation/stack';
import {
  EmailSingIn,
  EmailSignUp,
  ForgetPassword,
  OTPVerigication,
  PhoneRegistration,
} from '../screen';
const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="EmailSingIn" component={EmailSingIn} />
      <Stack.Screen name="EmailSignUp" component={EmailSignUp} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="OTPVerigication" component={OTPVerigication} />
      <Stack.Screen name="PhoneRegistration" component={PhoneRegistration} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
