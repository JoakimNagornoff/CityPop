import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import CityScreen from './screens/CityScreen';
import CountryScreen from './screens/CountryScreen';
import HomeScreen from './screens/HomeScreen';
import CountrySearch from './screens/CountrySearch';
import CityResult from './screens/CityResult';

//create stackNavigator for all screens
const App = createStackNavigator(
  {
    CityScreen: {screen: CityScreen},
    CountryScreen: {screen: CountryScreen},
    HomeScreen: {screen: HomeScreen},
    CountrySearch: {screen: CountrySearch},
    CityResult: {screen: CityResult},
  },
  {
    //Setting home as homeScreen
    initialRouteName: 'HomeScreen',
    defaultNavigationOptions: {
      title: 'CityPop',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerStyle: {
        backgroundColor: '#fff',
        elevation: 0,
        shadowOpacity: 0,
      },
    },
  },
);

export default createAppContainer(App);
