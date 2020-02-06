import React from 'react';

import {StyleSheet, Text, View, TouchableOpacity, Button, TextInput} from 'react-native'

const CityResult = ({navigation}) => {
    const City = navigation.getParam('City');
        return (
            <View>
            <Text> {City.name}</Text>
            <Text> {City.population}</Text>
            </View>

        );
    


}
const style = StyleSheet.create({

});
export default CityResult;