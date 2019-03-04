import React, {Component} from 'react';
import {Platform,Animated, StyleSheet, Text, View,Dimensions,Image,TextInput,TouchableOpacity,Easing} from 'react-native';
import { createSwitchNavigator, createAppContainer,createBottomTabNavigator} from "react-navigation";
import Card2 from './Card2';



export default class Card extends Component {
 
          static navigationOptions={
            headerTintColor:'white',
            headerTransparent: true,
          }

        render() {
          return (
            <View style={styles.container}>
              <Card2/>
            </View>
          )
        }
    }

    





    
        const styles = StyleSheet.create({
            container: {
              flex: 1,
             backgroundColor:'#206bec'
              
            },
        })
 