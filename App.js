import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Alert, Button, TouchableOpacity, Image } from 'react-native';
//import cliches from './cliches';
import { StackNavigator } from 'react-navigation';
import {playSound} from "./utils/playSound";
import HomeScreen from './Screens/HomeScreen';
import MotivationScreen from './Screens/MotivationScreen';

const App=StackNavigator({
  Home: {screen: HomeScreen},
  Motivation: {screen: MotivationScreen},
  //Home: {screen: HomeScreen},
  //Home: {screen: HomeScreen},
}, {
  headerMode: 'none'
});

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#40ff00',
  },
  baseText: {
    fontFamily: 'Pangolin',
    textAlign: 'center',
  },
  titleText: {
    fontSize: 30,
    fontWeight: '900',
    color: '#bf00ff',
  },
  buttonStart: {
    height: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStartText: {
    fontWeight: '700',
    fontSize: 20,
    color: '#000',
    alignContent: 'center',
  },


  buttonYES1: {
    height: 50,
    paddingHorizontal: 20,
    backgroundColor: '#000',
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonYES1Text: {
    fontWeight: '700',
    fontSize: 20,
    color: '#fff',
    height: 50,
    justifyContent: 'center',
  },
  buttonYES2: {
    height: 50,
    paddingHorizontal: 20,
    backgroundColor: '#000',
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonYES2Text: {
    fontWeight: '700',
    fontSize: 20,
    color: '#fff',
    height: 50,
    justifyContent: 'center',
  }
});
