import React, {useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  AsyncStorage,
  ScrollView,
} from 'react-native';
import colors from '../assets/colors/Colors';
import {useNavigation} from '@react-navigation/native';

import SignHeader from '../Components/SignHeader';

function StoresMenu() {
  useEffect(() => {
    getData();
  });

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('UserData');
      if (value !== null) {
        console.warn(value);
      }
    } catch (e) {
      // error reading value
    }
  };
  const navigation = useNavigation();

  return (
    <View>
      <ScrollView>
        <SignHeader
          text="Stores"
          onPress={() => navigation.navigate('Home_noStorePage')}
        />
        <View>
          <Text style={styles.text}>Choose the store you are shopping at</Text>
        </View>
        <View style={styles.itemsContainer}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('StorePage')}>
            <View style={styles.itemInfo}>
              <Text>logo</Text>
              <Text style={styles.itemText}>store name</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <View style={styles.itemInfo}>
              <Text>logo</Text>
              <Text style={styles.itemText}>store name</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <View style={styles.itemInfo}>
              <Text>logo</Text>
              <Text style={styles.itemText}>store name</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    margin: 10,
    fontFamily: 'Nunito-Bold',
    color: '#212429',
    fontSize: 16,
  },
  itemsContainer: {
    //marginVertical: 10,
    marginHorizontal: 10,
    //justifyContent: 'space-between',
  },
  item: {
    height: 65,
    width: '100%',
    backgroundColor: '#F5F5F9',
    borderColor: '#E7E7EB',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    //elevation: 4, // is it a shadow ??
    //flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginVertical: 5,
  },
  itemInfo: {
    flexDirection: 'row',
    //justifyContent: 'space-between',
  },
  itemText: {
    fontFamily: 'Nunito-Regular',
    fontSize: 17,
    color: '#212429',
    paddingLeft: 15,
  },
});
export default StoresMenu;
