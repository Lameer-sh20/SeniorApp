import * as React from 'react';
import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import colors from '../assets/colors/Colors';
import {useNavigation} from '@react-navigation/native';

import UserHeader from '../Components/UserHeader';

function Home_noStorePage() {
  const navigation = useNavigation();

  return (
    <View>
      <UserHeader> </UserHeader>
      <TouchableOpacity onPress={() => navigation.navigate('..')}>
        {/* <Text style={styles.text}>this is the no store page</Text> */}
      </TouchableOpacity>
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
export default Home_noStorePage;
