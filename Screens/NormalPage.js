import * as React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import colors from '../assets/colors/Colors';
//import {Button} from 'react-native-elemets';
import {useNavigation} from '@react-navigation/native';

import ToResolve from '../Components/toResolve';

function NormalPage() {
  //const navigation = useNavigation();
  return <ToResolve> </ToResolve>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Nunito-Bold',
    color: colors.mainYellow,
    fontSize: 17,
  },
});
export default NormalPage;
