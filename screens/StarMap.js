
import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform, StatusBar,TouchableOpacity,ImageBackground, Image} from 'react-native';
import {WebView} from 'react-native-webview'

export default class StarMap extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Star Map!</Text>



                <WebView
            scalesPageToFit={true}
            source={{uri: path}}
            style ={{marginTop:20, marginBottom:20,}}
            />

            <TextInput>
                style={{height:40,borderColor:'gray',borderWidth:1}}
                placeholder = "Enter your latitude"
                placeholderTextColor = "#ffff#000000"
                onChangeText={(text)=>{
                    this.setState({
                        latitude :text
                    })
                }}
            </TextInput>
            </View>
     )
    
            }
      
        
         

}


