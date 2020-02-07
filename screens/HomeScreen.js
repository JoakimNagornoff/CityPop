import React from 'react';

import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={style.container}>
        <View style={style.half1}>
          <Text style={style.title}>CityPop</Text>
        </View>
        <View style={style.half2}>
          <TouchableOpacity
            style={style.Button}
            onPress={() => navigate('CityScreen')}>
            <Text style={style.buttonText}>SEARCH BY CITY</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.Button}
            onPress={() => navigate('CountryScreen')}>
            <Text style={style.buttonText}>SEARCH BY COUNTRY</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
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
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 100,
  },
  Button: {
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 382,
    height: 80,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#000',
    marginLeft: 5,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
  },
});

export default HomeScreen;
