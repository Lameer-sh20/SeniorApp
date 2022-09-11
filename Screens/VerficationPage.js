import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../assets/colors/Colors';
import {useNavigation} from '@react-navigation/native';

function VerficationPage() {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Home_noStorePage')}>
        <Text style={styles.text}>verfication pageeeee !!!!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Nunito-Bold',
    color: colors.blue,
    fontSize: 17,
  },
});
export default VerficationPage;
