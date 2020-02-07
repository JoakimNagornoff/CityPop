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

const CountryScreen = ({navigation}) => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const searchCountryApi = async () => {
    try {
      //reset errorMessage
      setErrorMessage('');
      setIsLoading(true);
      //Countrycode iso2
      const countryCode = countryLookup.byCountry(term);
      console.log(countryCode);
      //check if the country code does exist
      if (countryCode) {
        //api call method
        const responsCountry = await geonames.get('', {
          params: {
            q: term,
            maxRows: 20,
            type: 'json',
            username: 'weknowit',
            country: countryCode.iso2,
            cities: 'cities15000',
          },
        });
        console.log(responsCountry);
        //mapping object
        const data = responsCountry.data.geonames
          .sort((a, b) => b.population - a.population)
          .map(city => ({
            name: city.name,
            population: city.population,
            country: city.countryName,
          }));
        setIsLoading(false);
        console.log(data);
        setResults(data);
        navigation.navigate('CountryResult', {
          city: responsCountry.data.geonames[0],
          citytwo: responsCountry.data.geonames[1],
          citythree: responsCountry.data.geonames[2],
        });
      } else {
        setIsLoading(false);
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
        <Text style={style.title}>SEARCH BY</Text>
        <Text style={style.titletwo}>COUNTRY</Text>
      </View>
      <View style={style.half2}>
        <TextInput
          style={style.input}
          placeholder="Enter a country"
          autoCapitalize="words"
          term={term}
          onChangeText={newTerm => setTerm(newTerm)}></TextInput>
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        {isLoading ? <Text style={style.loadingText}>Loading....</Text> : null}
        <TouchableOpacity
          style={style.searchButtonTwo}
          onPress={searchCountryApi}>
          <Image
            style={style.searchImgage}
            source={require('./img/search3.png')}
          />
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
  half1: {
    flex: 1,
  },
  half2: {
    flex: 2,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
  },
  titletwo: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    textAlign: 'center',
    fontSize: 18,
    marginRight: 5,
    marginLeft: 5,
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
