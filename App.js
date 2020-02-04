import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import CityScreen from './screens/CityScreen';
import CountryScreen from './screens/CountryScreen';
import HomeScreen from './screens/HomeScreen';
import CountrySearch from './screens/CountrySearch';
import CitySearch from './screens/CitySearch';

//create stackNavigator for all screens
const App = createStackNavigator({
  CityScreen: {screen: CityScreen},
  CountryScreen: {screen: CountryScreen},
  HomeScreen: {screen: HomeScreen},
  CountrySearch: {screen: CountrySearch},
  CitySearch: {screen: CitySearch},

},
{
  //Setting home as homeScreen
  initialRouteName: 'HomeScreen',
}
);


export default createAppContainer(App);