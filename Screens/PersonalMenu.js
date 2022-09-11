import * as React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import colors from '../assets/colors/Colors';
//import {Button} from 'react-native-elemets';
import {useNavigation} from '@react-navigation/native';

function PersonalMenu() {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={styles.text}>here shoul be personal menu </Text>
      <Button
        title="go to home page"
        onPress={() => navigation.navigate('Home_noStorePage')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Nunito-Bold',
    color: colors.mainYellow,
    fontSize: 17,
  },
});
export default PersonalMenu;
