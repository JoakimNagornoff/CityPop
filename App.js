/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';


export default class App extends React.Component{
  render(){
    return (
      <View style={style.container}>
        <Text style={style.title}>CityPop</Text>
  


    
      </View>
  
    );
  }
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
  },

  title:{
    fontFamily: 'Cochin',
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 100,
  
  }

});