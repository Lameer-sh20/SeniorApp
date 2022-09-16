import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import colors from '../assets/colors/Colors';
import {useNavigation, useRoute} from '@react-navigation/native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import UserHeader from '../Components/UserHeader';

function Home_xStorePage() {
  const navigation = useNavigation();
  const route = useRoute();
  const [name, setName] = useState('');

  useEffect(() => {
    getData();
  });

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('UserData');
      if (value !== null) {
        setName(JSON.parse(value).name);
        console.warn(JSON.parse(value).name);
      }
    } catch (e) {
      // error reading value
    }
  };
  return (
    <View style={styles.pageContainer}>
      <UserHeader name={name}> </UserHeader>
      <View style={styles.textContainer}>
        <Text style={styles.first}>Latest Offers</Text>
      </View>
      <View style={styles.Container}>
        <TouchableOpacity onPress={() => navigation.navigate('PersonalMenu')}>
          <Text style={styles.text}>
            here should be the store menu
            {'\n'}click to go to personal
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  pagecontainer: {
    flex: 1,
  },
  Container: {
    marginTop: 90,
    flexDirection: 'column',
    //justifyContent: 'space-evenly',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 5,
    fontFamily: 'Nunito-Regular',
    color: '#212429',
    fontSize: 16,
  },
  textContainer: {
    height: 45,
    backgroundColor: '#FECD42',
    borderRadius: 15,
    //borderColor: colors.mainYellow,
    //borderWidth: 0.5,

    justifyContent: 'center',
    alignItems: 'center',

    //paddingVertical: 10,
    //paddingHorizontal: 10,
    //marginVertical: 9,
    margin: 9,
  },
  first: {
    color: 'white',
    fontWeight: '700',
    fontSize: 17,
    fontFamily: 'Nunito-Bold',
  },
});
export default Home_xStorePage;
