/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';

const setScreen = (screen) => {
  setState({screen: screen})
}

export class App extends React.Component{
  render(){
      return (
        <View style={style.container}>
          <View style={style.half1}>
            <Text style={style.title}>CityPop</Text>



          </View>
          <View style={style.half2}>
            <TouchableOpacity style={style.Button}>
              <Text style={style.buttonText}>SEARCH BY CITY</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.Button}>
              <Text style={style.buttonText}>SEARCH BY COUNTRY</Text>
            </TouchableOpacity>


          </View>
        </View>
     
      )
  }
}
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
  title:{
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 100,

  },
  Button: {
    alignItems: "center",
    backgroundColor: '#DDDDDD',
    width: 420,
    height: 80,
    marginBottom: 10,

  },
  buttonText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    padding: 20,
  }

});
export default App;