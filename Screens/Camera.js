import * as React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import colors from '../assets/colors/Colors';
//import {Button} from 'react-native-elemets';
import {useNavigation} from '@react-navigation/native';

const Camera = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={styles.text}>here should be Camera</Text>
      <Button
        title="go to Main page"
        onPress={() => navigation.navigate('MainPage')}
      />
    </View>
  );
};

export default Camera;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Nunito-Bold',
    color: colors.blue,
    fontSize: 17,
  },
});
