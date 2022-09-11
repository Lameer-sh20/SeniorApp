import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import colors from '../assets/colors/Colors';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import {Icon as MaterialCommunityIcons} from 'react-native-vector-icons/MaterialCommunityIcons';

import SupermarketPage from '../Screens/Home_xSupermarketPage';
import PersonalMenu from '../Screens/PersonalMenu';
import Camera from '../Screens/Camera';

const superMarketPage = 'SupermarketPage';
const personalMenu = 'PersonalMenu';
const camera = 'Camera';

const Tab = createBottomTabNavigator();

function Line() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        /* which page we start with */
        initialRoutName={superMarketPage}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;

            /*if route name is home, some effect happens */
            if (rn === superMarketPage) {
              iconName = focused ? 'md-home-sharp' : 'home-outline';
            } else if (rn === camera) {
              iconName = focused ? 'md-camera' : 'radio-button-on-sharp';
            } else if (rn === personalMenu) {
              iconName = focused ? 'md-person' : 'md-person-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: colors.mainYellow,
          tabBarInactiveTintColor: '#c4c4c4',
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 70,
            backgroundColor: '#FCFDFF',
            width: '100%',
            borderTopColor: '#E7E7EB',
            borderTopWidth: 1.5,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
          },
        })}>
        <Tab.Screen name={superMarketPage} component={SupermarketPage} />
        <Tab.Screen name={camera} component={Camera} />
        <Tab.Screen name={personalMenu} component={PersonalMenu} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Line;
