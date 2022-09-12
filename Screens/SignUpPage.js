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
// import components
import SignUnHeader from '../Components/SignUpHeader';

function SignUpPage() {
  const navigation = useNavigation();
  //parameters
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  //functions
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
  const submitData = () => {
    fetch('http://10.0.2.2:3000/user/getUserByPhone', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({phone}),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.status);
        if (!data.status) {
          fetch('http://10.0.2.2:3000/user/sendOTP', {
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
              navigation.navigate('OtpPage', {
                name: name,
                phone: phone,
                password: password,
              });
            })
            .catch(error => {
              console.error('Error:', error);
            });
        } else {
          Alert.alert('Make login');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  // const datasaved = () => {
  //   return alert('data is Saved');
  // };
  //
  // actual page flow
  return (
    <View style={styles.pagecontainer}>
      <SignUnHeader> </SignUnHeader>
      <Text styles={styles.text}>click arrow to next page</Text>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={text => setName(text)}
            style={styles.inputBox}
          />

          <TextInput
            placeholder="Phone Number"
            value={phone}
            onChangeText={text => setPhone(text)}
            style={styles.inputBox}
          />

          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.inputBox}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={submitData}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  pagecontainer: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    alignself: 'center',
    //justifyContent: 'center',
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: 10,
  },
  inputBox: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
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
export default SignUpPage;
