import React, {useState} from 'react';

import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const CountryResult = ({navigation}) => {
  const city = navigation.getParam('city');
  const citytwo = navigation.getParam('citytwo');
  const citythree = navigation.getParam('citythree');

  return (
    <View style={style.container}>
      <View style={style.halfOne}>
        <Text style={style.title}>{city.countryNane}</Text>
      </View>
      <View style={style.halfTwo}>
        <TouchableOpacity style={style.button}>
          <Text style={style.text}>{city.name}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <Text style={style.text}>{citytwo.name}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <Text style={style.text}>{citythree.name}</Text>
        </TouchableOpacity>
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
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
    width: 382,
    height: 60,
    borderWidth: 1,
    marginTop: 4,
    marginLeft: 5,
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default CountryResult;
