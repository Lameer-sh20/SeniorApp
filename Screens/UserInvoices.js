import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import colors from '../assets/colors/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';

import {useNavigation} from '@react-navigation/native';

import YellowHeader from '../Components/YellowHeader';
import InputBox from '../Components/InputBox';
import LongButton from '../Components/LongButton';

function UserInvoices() {
  const navigation = useNavigation();
  //parameters

  //functions

  return (
    <View>
      <Text>this page is for user's invoices</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
export default UserInvoices;
