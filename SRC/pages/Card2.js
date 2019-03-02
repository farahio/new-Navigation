import React, {Component} from 'react';
import {Platform,Animated, StyleSheet, Text, View,Dimensions,Image,TextInput,TouchableOpacity,Easing} from 'react-native';
import { createSwitchNavigator, createAppContainer,createBottomTabNavigator} from "react-navigation";
import Login from './Login'
import Card from './Card'
import Signin from './Signin'
import Home from './Home'


 class Card2 extends Component {
 
          static navigationOptions={
            headerTintColor:'white',
            headerTransparent: true,
          }

        render() {
          return (
            <View style={styles.container}>
              
            </View>
          )
        }
    }

    





    
        const styles = StyleSheet.create({
            container: {
              flex: 1,
             backgroundColor:'green'
              
            },
        })

        const TabNavigator = createBottomTabNavigator(
          {
           
           
            Signins:Signin,
            Homes:Home
            
          },
          {
            initialRouteName:'Homes'
          }
          )
          export default createAppContainer(TabNavigator);
