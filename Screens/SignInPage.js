import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import colors from '../assets/colors/Colors';
import {AsyncStorage} from '@react-native-async-storage/async-storage';

// import components
import SignHeader from '../Components/SignHeader';
import InputBox from '../Components/InputBox';
import LongButton from '../Components/LongButton';

function SignInPage() {
  const navigation = useNavigation();
  //parameters
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  //functions

  // const setData = async () => {
  //   if (name.length == 0 || phone.length == 0 || password.length == 0) {
  //     Alert.alert('Warning!', 'Please fill the required info');
  //     console.warn(name);
  //   } else {
  //     try {
  //       const user = JSON.stringify({
  //         name: name,
  //         phone: phone,
  //         password: password,
  //       });
  //       //await AsyncStorage.setItem('UserData', JSON.stringify(user));
  //       await AsyncStorage.setItem('UserData', user);
  //       console.warn('fdhdfhdf');
  //       Alert.alert('account created successfully!');
  //       navigation.navigate('VerficationPage');
  //     } catch (error) {
  //       console.warn(error);
  //     }
  //   }
  // };

  // const passData = () => {
  //   if (name.length == 0 || phone.length == 0 || password.length == 0) {
  //     Alert.alert('Warning!', 'Please fill the required info');
  //   } else {
  //     try {
  //       navigation.navigate('OtpPage', {
  //         name: name,
  //         phone: phone,
  //         password: password,
  //       });
  //     } catch (error) {
  //       console.warn(error);
  //     }
  //   }
  // };

  //const submitData = () => {};

  // actual page flow
  return (
    <View style={styles.pageContainer}>
      <SignHeader
        text="Sign In"
        onPress={() => navigation.navigate('SignUpPage')}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Please enter your phone number and password
        </Text>
      </View>
      <View style={styles.inputsContainer} behavior="padding">
        <InputBox
          placeholder="05xxxxxxxx"
          value={phone}
          onChangeText={text => setPhone(text)}
        />
        <InputBox
          placeholder="Password"
          value={phone}
          onChangeText={text => setPhone(text)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <LongButton text="Countinue" onPress={'...'} />
      </View>
      <View style={styles.questionContainer}>
        <Text style={styles.questionstext}>Forgot your password? </Text>
        <TouchableOpacity
          style={styles.clickableContainer}
          onPress={() => navigation.navigate('ResetPassPage')}>
          <Text style={styles.coloredText}>Reset Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pagecontainer: {
    flex: 1,
    justifyContent: 'center',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',

    fontFamily: 'Nunito-Regular',
    color: '#212429',
    fontSize: 16,
  },
  inputContainer: {
    //justifyContent: 'space-evenly',
    //marginVertical: 15,
  },
  buttonContainer: {
    marginVertical: 10,
  },
  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionstext: {
    fontFamily: 'Nunito-Regular',
    color: '#212429',
    fontSize: 13,
  },
  clickableContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  coloredText: {
    fontFamily: 'Nunito-Bold',
    color: colors.blue,
    fontSize: 13,
  },
});
export default SignInPage;
