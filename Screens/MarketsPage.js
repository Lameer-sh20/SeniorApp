import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import React from 'react';
import BottomBar from '../Components/BottomBar';
import {useNavigation, useRoute} from '@react-navigation/native';

function MarketsPage() {
  const navigation = useNavigation();

  return (
    <View style={styles.Container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home_xSupermarketPage')}>
        <Text style={styles.text}>here should be the store menu</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  pagecontainer: {
    //flex: 1,
  },
  Container: {
    marginTop: 90,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    //justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 5,
    fontFamily: 'Nunito-Regular',
    color: '#212429',
    fontSize: 16,
  },
});
export default MarketsPage;
