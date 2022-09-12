import React, {useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  AsyncStorage,
} from 'react-native';
import colors from '../assets/colors/Colors';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';

function VerficationPage() {
  const navigation = useNavigation();
  const route = useRoute();

  // useEffect(() => {
  //   setData();
  // }, []);

  // const setData = async () => {
  //   if (route.params.name === null) {
  //     AsyncStorage.sendItem('UserToken', JSON.stringify(user));
  //     Alert.alert('Warning!', 'it is null');
  //   } else {
  //     try {
  //       var user = {
  //         name: route.params.name,
  //         phone: route.params.phone,
  //         password: route.params.password,
  //         otp: route.params.otp,
  //       };
  //       await AsyncStorage.sendItem('UserToken', JSON.stringify(user));
  //     Alert.alert('Done!', 'it is not null');

  //     } catch (error) {
  //       console.warn(error);
  //     }
  //   }
  // };
  /*
  const storeData = async () => {
    await AsyncStorage.sendItem(
      'userData',
      JSON.stringify({
        name: route.params.name,
        phone: route.params.phone,
        password: route.params.password,
      }),
    );
    Alert.alert('Done!', 'it is not null');
  };*/
  return (
    <View>
      <Text style={styles.text}>verfication pageeeee !!!!</Text>
      {/* <Text>{route.params.name}</Text>
      <Text>{route.params.phone}</Text>
      <Text>{route.params.password}</Text>
      <Text>{route.params.otp}</Text>*/}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('VerficationPage')}>
          <Text style={styles.buttonText}>send OTP code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Nunito-Bold',
    color: colors.blue,
    fontSize: 17,
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
export default VerficationPage;
