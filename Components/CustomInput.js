import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import colors from '../assets/colors/Colors';

const CustomInput = ({placeholder, value, setValue}) => {
  return (
    <View style={styles.containerBox}>
      <TextInput
        placeHolder={placeholder}
        value={value}
        onChangeText={setValue}
        style={styles.input}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  containerBox: {
    //justifyContent: 'center',
    //alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
    borderColor: '#E7E7EB',
    borderWidth: 1.5,
    borderRadius: 25,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {},
});
