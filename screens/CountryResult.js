import React, {useState} from 'react';

import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const CountryResult = ({navigation}) => {
  const city = navigation.getParam('city');
  const citytwo = navigation.getParam('citytwo');
  const citythree = navigation.getParam('citythree');

  return (
    <View style={style.container}>
      <View style={style.halfOne}>
        <Text style={style.title}>{city.countryName}</Text>
      </View>
      <View style={style.halfTwo}>
        <Text>POPULATION</Text>
        <TouchableOpacity>
          <Text>{city.name}</Text>
        </TouchableOpacity>
        <Text>{citytwo.name}</Text>
        <Text>{citythree.name}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  halfOne: {
    flex: 1,
  },
  halfTwo: {
    flex: 2,
  },
});
export default CountryResult;
