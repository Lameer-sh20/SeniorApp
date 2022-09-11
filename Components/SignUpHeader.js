import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import colors from '../assets/colors/Colors';
import {useNavigation} from '@react-navigation/native';

function SignUnHeader() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* header */}
      <SafeAreaView>
        <View style={styles.header}>
          {/* header's left */}
          <TouchableOpacity
            onPress={() => navigation.navigate('VerficationPage')}>
            <View style={styles.headerLeft}>
              <Image
                source={require('../assets/Images/back-icon.png')}
                style={styles.image}
              />
            </View>
          </TouchableOpacity>
          {/* header's center */}
          <Text style={styles.text}>Sign Up</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

export default SignUnHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 95,
    backgroundColor: '#FCFDFF',
    //width: 390,
    borderBottomColor: '#E7E7EB',
    borderBottomWidth: 1,
    //elevation: 4, // is it a shadow ??
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 140,
  },
  text: {
    fontFamily: 'Nunito-Bold',
    color: colors.blackFont,
    fontSize: 24,
  },
  image: {
    width: 21,
    height: 26.7,
  },
  blank: {
    width: 21,
    height: 26.7,
    color: '#FCFDFF',
  },
});
