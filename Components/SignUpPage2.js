import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomInput from '../Components/CustomInput';
import colors from '../assets/colors/Colors';

const SignUpPage2 = () => {
  const [userName, setUserName] = useState(' ');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <CustomInput
        placeholder="UserName"
        value={userName}
        setUserName={setUserName}
      />
      <CustomInput
        placeholder="Phone Number"
        value={phone}
        setUserName={setPhone}
      />
      <CustomInput
        placeholder="Password"
        value={password}
        setUserName={setPassword}
        secureTextEntry={true}
      />
    </View>
  );
};

export default SignUpPage2;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.backgroundGrey,
    padding: 10,
  },
});
