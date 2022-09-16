import * as React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import colors from '../assets/colors/Colors';
import {useNavigation} from '@react-navigation/native';

function MainPage() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/Images/homeBG.jpg')}
        resizeMode="cover"
        style={styles.mainimage}>
        <TouchableOpacity onPress={() => navigation.navigate('SignUpPage')}>
          <View style={styles.buttonsContainer}>
            <View style={styles.leftButton}>
              <Text style={styles.leftText}>SignUp</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.buttonsContainer2}>
            <View style={styles.rightButton}>
              <Text style={styles.rightText}>Skip</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    //alignItems: 'center',
    //position: 'absolute',
    bottom: 0,
  },
  buttonsContainer: {
    //backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 15,
    position: 'absolute',
    bottom: -395,
  },
  buttonsContainer2: {
    //backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 295,
    position: 'relative',
    bottom: -345,
  },
  leftButton: {
    backgroundColor: colors.mainYellow,
    width: 160,
    height: 50,
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
    width: 160,
    height: 50,
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
  mainimage: {
    flex: 1,
    justifyContent: 'center',
  },
});
export default MainPage;
