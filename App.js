import * as React from 'react';
//import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import NormalPage from './Screens/NormalPage';

import MainPage from './Screens/MainPage';
import SignUpPage from './Screens/SignUpPage';
import Home_noStorePage from './Screens/Home-noStorePage';
import VerficationPage from './Screens/VerficationPage';
import OtpPage from './Screens/OtpPage';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="NormalPage"
          component={NormalPage}
          options={{headerShown: false}}
        />*/}
        <Stack.Screen
          name="MainPage"
          component={MainPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUpPage"
          component={SignUpPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OtpPage"
          component={OtpPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VerficationPage"
          component={VerficationPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home_noStorePage"
          component={Home_noStorePage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    /* <NormalPage> </NormalPage> */
  );
}

export default App;
