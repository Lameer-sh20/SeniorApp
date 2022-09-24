import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import MapView from 'react-native-maps';
import colors from '../assets/colors/Colors';
//import {Button} from 'react-native-elemets';

const Location = () => {
  return (
    <View>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({});
