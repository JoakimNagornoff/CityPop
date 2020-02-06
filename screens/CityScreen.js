import React, {useState} from 'react';

import {StyleSheet, Text, View, TouchableOpacity, TextInput,Image, ActivityIndicator} from 'react-native';

import geonames from '../src/api/geonames';


const CityScreen = () =>{
        const [term, setTerm] = useState('');
        const [results, setResults] = useState([]);
        const [username] = useState('weknowit');
        const [type] = useState('json');
        const [maxRow] = useState('1');
        const [errorMessage, setErrorMessage] = useState('');
        const [isLoading] = useState(false);
        
            const searchApi= async () => {
                try{
            const respons = await geonames.get('cities', {
                params : {
                    q : term,
                    name_equals : term,
                    maxRows: maxRow,
                    type : type,
                    username : username,
                }
    
            });
            console.log(respons);
            setResults(respons.data.city);  
        } catch (e){
            setErrorMessage('Something went wrong');
    
        };
            }
            const getApiSearch = () => {

            }



        return(
            <View style={style.container}>
                <View style={style.halfOne}>
                <Text style={style.title}>SEARCH BY CITY</Text>

                
                </View>
                <View style={style.halfTwo}>
                    <TextInput style={style.input}
                    placeholder='Enter a city'
                    term={term}
                    onChangeText={newTerm =>setTerm(newTerm)}>
                    </TextInput>
                    {errorMessage ? <Text>{errorMessage}</Text> : null}
                    <TouchableOpacity style={style.searchCityButton}
                    onPress={searchApi}>
                        <Image
                        source={require('./img/search3.png')}
                        style={style.searchImg}/>
                    </TouchableOpacity>
                    <Text>we have found {results} results </Text>

                </View>

            </View>

        

        );
    
  };
    


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



});

  
export default CityScreen;

