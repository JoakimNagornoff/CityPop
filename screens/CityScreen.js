import React from 'react';

import {StyleSheet, Text, View, TouchableOpacity, Button, TextInput} from 'react-native';



class CityScreen extends React.Component{
    render(){
        return(
            <View style={style.container}>
                <View style={style.half1}>
                    <Text style={style.title}>SEARCH BY CITY</Text>


                </View>
                <View style={style.half2}>
                    <TextInput style={style.input}  placeholder='Search a city'></TextInput>

                </View>


            </View>



        );
    }
}
const style = StyleSheet.create({
    container: {
        flex: 1,

    },
    half1: {
        flex: 1,
    },
    hafl2: {
        flex: 2,

    },
    title:{
        fontSize: 35,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 100,
    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
    }



});
export default CityScreen;