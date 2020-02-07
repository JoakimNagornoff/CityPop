import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';

import geonames from '../src/api/geonames';

const CityScreen = ({navigation}) => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const searchApi = async () => {
    //api call method
    //reset setErrorMessage
    try {
      setErrorMessage('');
      setIsLoading(true);
      const respons = await geonames.get('cities', {
        params: {
          name_equals: term,
          maxRows: 1,
          type: 'json',
          username: 'weknowit',
        },
      });
      setIsLoading(false);
      setResults(respons.data.geonames);
      //if respons is bigger then 0, send data with navigation to CityResult screen
      if (respons.data.geonames.length > 0) {
        navigation.navigate('CityResult', {City: respons.data.geonames[0][1]});
      } else {
        setErrorMessage('City dosent exist');
      }
    } catch (e) {
      setErrorMessage('Something went wrong with the api');
    }
  };

  return (
    <View style={style.container}>
      <View style={style.halfOne}>
        <Text style={style.titleOne}>SEARCH BY</Text>
        <Text style={style.titleTwo}>CITY</Text>
      </View>
      <View style={style.halfTwo}>
        <TextInput
          style={style.input}
          placeholder="Enter a city"
          term={term}
          onChangeText={newTerm => setTerm(newTerm)}></TextInput>
        {errorMessage ? (
          <Text style={style.errorText}>{errorMessage}</Text>
        ) : null}
        {isLoading ? <Text style={style.loadingText}>Loading....</Text> : null}
        <TouchableOpacity style={style.searchCityButton} onPress={searchApi}>
          <Image
            source={require('./img/search3.png')}
            style={style.searchImg}
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
  halfOne: {
    flex: 1,
  },
  halfTwo: {
    flex: 2,
  },
  titleOne: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
  },
  titleTwo: {
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
  searchImg: {
    width: 30,
    height: 30,
    alignSelf: 'center',
  },
  searchCityButton: {
    marginTop: 20,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 40,
    borderColor: '#000',
  },
  loadingText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: '#F00',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CityScreen;
