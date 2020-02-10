import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

const CityResult = ({navigation}) => {
  //get data from navigation param 'city'
  const city = navigation.getParam('city');
  return (
    <View style={style.container}>
      <View style={style.halfone}>
        <Text style={style.title}> {city.name}</Text>
      </View>
      <View style={style.halftwo}>
        <View style={style.box}>
          <Text style={style.populationText}>POPULATION</Text>
          <Text style={style.populationNumber}> {city.population}</Text>
        </View>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  halfone: {
    flex: 1,
  },
  halftwo: {
    flex: 2,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 100,
  },
  box: {
    borderWidth: 2,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  populationText: {
    fontSize: 14,
  },
  populationNumber: {
    fontSize: 30,
  },
});
export default CityResult;
