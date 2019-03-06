import React, {Component} from 'react';
import {Platform,Animated, StyleSheet, Text, View,Dimensions,Image,TextInput,TouchableOpacity,Easing} from 'react-native';
import {createAppContainer,createBottomTabNavigator} from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';
import Login from './Login'
import Card from './Card'
import Signin from './Signin'
import Home from './Home'
import Book from './Book'


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
            imgicon:{
              width: 30, 
              height: 30,
              borderRadius:50
            }
        })

        
        const TabRouter = createBottomTabNavigator({
          Card2: { 
             screen: Card2, 
             navigationOptions: {
              tabBarIcon: ({tintColor:color}) => (
                <Icon name="history" size={30} color={color} />
              )
             }
          },
          Home: { 
            screen: Home, 
            navigationOptions: {
             tabBarIcon: ({tintColor:color}) => (
               <Icon name="home" size={30} color={color} />
             )
            }
         },
         Book: { 
          screen: Book, 
          navigationOptions: {
           tabBarIcon: ({tintColor:color}) => (
             <Icon name="certificate" size={30} color={color} />
           )
          }
       },
      
          Signin: {
            screen: Signin,
          
             navigationOptions: {
              tabBarIcon: ({tintColor:color}) => (
                <Image  style={styles.imgicon} source={require('../asecct/book4.png')}/>)

                
                }
          }
        },
          { 
            tabBarOptions: {
              showLabel:false,
               style:{
               backgroundColor:'bluesky' } ,               
              
               activeTintColor: 'red',
         
               
          }
        }
          )
          export default createAppContainer(TabRouter);