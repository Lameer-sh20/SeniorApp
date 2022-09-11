import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../assets/colors/Colors';
import {useNavigation} from '@react-navigation/native';

function MainPage() {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('SignUpPage')}>
          <View style={styles.leftButton}>
            <Text style={styles.leftText}>SignUp</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.rightButton}>
            <Text style={styles.rightText}>Skip</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  buttonsContainer: {
    //backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 9,
    //position: 'absolute',
    bottom: -640,
  },
  leftButton: {
    backgroundColor: colors.mainYellow,
    width: 171,
    height: 65,
    borderRadius: 10,
    borderColor: colors.mainYellow,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftText: {
    fontFamily: 'Nunito-Bold',
    color: '#FFFFFF',
    fontSize: 17,
  },
  rightButton: {
    backgroundColor: '#FFFFFF',
    width: 171,
    height: 65,
    borderRadius: 10,
    borderColor: colors.mainYellow,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightText: {
    fontFamily: 'Nunito-Bold',
    color: colors.mainYellow,
    fontSize: 17,
  },
});
export default MainPage;
