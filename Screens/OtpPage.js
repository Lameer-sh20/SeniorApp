import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  Alert,
} from 'react-native';
import colors from '../assets/colors/Colors';
import {useNavigation, useRoute} from '@react-navigation/native';

function OtpPage() {
  const navigation = useNavigation();
  const route = useRoute();

  const {phone, name, password} = route.params;
  //console.log(route.params.name);
  // const phone = route.params.phone;
  // const password = route.params.password;

  const [OTP, setOtp] = useState('');

  // const passData = () => {
  //   navigation.navigate('VerficationPage', {
  //     name: name,
  //     phone: route.params.phone,
  //     password: password,
  //     otp: otp,
  //   });
  // };
  const submitData = () => {
    fetch('http://10.0.2.2:3000/user/verfiyOTP', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({phone, OTP}),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.status);
        if (data.status) {
          fetch('http://10.0.2.2:3000/user/signUp', {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, phone, password}),
          })
            .then(response => response.json())
            .then(data => {
              console.log(phone);
              console.log(data.token);
              //create local storage to store user info
              navigation.navigate('VerficationPage');
            })
            .catch(error => {
              console.error('Error:', error);
            });
        } else {
          Alert.alert('wrong otp');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  return (
    <View>
      <Text style={styles.text}>GO TO Verfiction Page</Text>
      <Text style={styles.text}>information passed to next page !!!!</Text>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="otp"
            value={OTP}
            onChangeText={text => setOtp(text)}
            style={styles.inputBox}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={submitData}>
            <Text style={styles.buttonText}>send OTP code</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Nunito-Bold',
    color: 'black',
    fontSize: 24,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});
export default OtpPage;
