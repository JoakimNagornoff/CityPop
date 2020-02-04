import React from 'react';

import {StyleSheet, Text, View, TouchableOpacity, Button, TextInput,Image, ActivityIndicator} from 'react-native';

class CityScreen extends React.Component{
    static navigationOptions ={
        title: 'CityPop',

    }
    consoleMessage=()=>{
        console.log(this.state.CitySearch);
    }
    //Contructor for this state
    constructor(props){
        super(props);
        this.state = {
            dataSource: null,
            isLoading: true,
            CitySearch: ""
        }
    }
    //Metod get api request from textfield
  
    render(){
        return(
            <View style={style.container}>
                <View style={style.halfOne}>
                <Text style={style.title}>SEARCH BY CITY</Text>

                
                </View>
                <View style={style.halfTwo}>
                    <TextInput style={style.input}
                    placeholder='Enter a city'
                    onChangeText={CitySearch => this.setState({CitySearch})}
                    value={this.state.CitySearch}>

                    </TextInput>
                    <TouchableOpacity style={style.searchCityButton}
                    onPress={this.consoleMessage}>
                        <Image
                        source={require('./img/search3.png')}
                        style={style.searchImg}/>
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
    halfOne: {
        flex: 1,
    },
    halfTwo: {
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
    searchImg: {
        width: 30,
        height: 30,
        alignSelf: "center",
    

    
    },
    searchCityButton: {
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


export default CityScreen;