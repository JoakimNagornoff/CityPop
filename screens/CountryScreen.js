import React from 'react';

import {StyleSheet, Text, View, TouchableOpacity, Button, TextInput, Image} from 'react-native';


class CountryScreen extends React.Component{
    static navigationOptions ={
        title: 'CityPop',

    }
    render(){
        return(
            <View style={style.container}>
                <View style={style.half1}>
                    <Text style={style.title}>SEARCH BY COUNTRY</Text>


                </View>
                <View style={style.half2}>
                    <TextInput style={style.input}
                    placeholder='Enter a country'>

                    </TextInput>
                    <TouchableOpacity style={style.searchButtonTwo}>
                        <Image
                        style={style.searchImgage}
                        source={require('./img/search3.png')}/>

                    </TouchableOpacity>

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
    half2: {
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
        textAlign: "center",
        fontSize: 18,
        
    },
    searchImgage: {
        width: 30,
        height: 30,
        alignSelf: "center",
    

    
    },
    searchButtonTwo: {
        marginTop: 20, 
        width: 50,
        height: 50,
        justifyContent: "center",
        alignSelf: "center",
        borderWidth: 1,
        borderRadius: 40,
        borderColor: '#000',

    }



})


export default CountryScreen;