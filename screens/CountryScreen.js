import React, {useState} from 'react';
import countryLookup from 'country-code-lookup';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  TextInput,
  Image,
} from 'react-native';

import geonames from '../src/api/geonames';

const CountryScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchCountryApi = async () => {
    try {
      const countryCode = countryLookup.byCountry(term);
      console.log(countryCode);
      //kolla om landet finns? if else
      if (countryCode) {
        const responsCountry = await geonames.get('', {
          params: {
            q: term,
            maxRows: 20,
            type: 'json',
            username: 'weknowit',
            country: countryCode.iso2,
          },
        });
        const data = responsCountry.data.geonames
          .sort((a, b) => b.population - a.population)
          .map(city => ({
            name: city.name,
            population: city.population,
            country: city.countryName,
          }));

        console.log(data);
        setResults(data);
      } else {
        setErrorMessage('Country dosent exist');
      }
    } catch (e) {
      console.log(e);
      setErrorMessage('Something went wrong');
    }
  };

  return (
    <View style={style.container}>
      <View style={style.half1}>
        <Text style={style.title}>SEARCH BY COUNTRY</Text>
      </View>
      <View style={style.half2}>
        <TextInput
          style={style.input}
          placeholder="Enter a country"
          term={term}
          onChangeText={newTerm => setTerm(newTerm)}></TextInput>
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <TouchableOpacity
          style={style.searchButtonTwo}
          onPress={searchCountryApi}>
          <Image
            style={style.searchImgage}
            source={require('./img/search3.png')}
          />
        </TouchableOpacity>
        {results.map(city => (
          <Text>
            {city.name} {city.population}
          </Text>
        ))}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  half1: {
    flex: 1,
  },
  half2: {
    flex: 2,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 100,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    textAlign: 'center',
    fontSize: 18,
  },
  searchImgage: {
    width: 30,
    height: 30,
    alignSelf: 'center',
  },
  searchButtonTwo: {
    marginTop: 20,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 40,
    borderColor: '#000',
  },
});

export default CountryScreen;
