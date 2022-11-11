import {TextInput, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../contacts/thems';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RegButton} from '../component';

const ForgetPassword = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Ionicons
          style={{marginRight: 100}}
          name="chevron-back-outline"
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Forget Password</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Forget Password</Text>
        <Text style={styles.content}>
          Please Enter Your Email So we can help you recover your password.
        </Text>
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
      <View style={styles.SingupButton}>
        <RegButton lable="Reset Password" />
      </View>
    </View>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  container: {
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
    paddingBottom: 10,
    textAlign: 'center',
    color: COLORS.textColor,
  },
  titleContainer: {
    marginHorizontal: 20,
    marginVertical: 50,
  },
  title: {
    fontSize: 23,
    color: COLORS.textColor,
  },
  content: {
    fontSize: 18,
    marginTop: 30,
    marginBottom: 20,

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
    color: COLORS.textColor,
  },
  SingupButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    paddingHorizontal: 20,
    margin: 2,
    marginHorizontal: 20,
    marginVertical: 6,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
});
