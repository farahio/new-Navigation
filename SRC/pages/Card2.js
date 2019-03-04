import React, {Component} from 'react';
import {Platform,Animated, StyleSheet, Text, View,Dimensions,Image,TextInput,TouchableOpacity,Easing} from 'react-native';
import {createAppContainer,createMaterialTopTabNavigator} from "react-navigation";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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

        // const TabNavigator = createBottomTabNavigator(
        //   {
           
           
        //     Signins:Signin,
        //     Homes:Home,
        //     Card2:Card2
            
        //   },
        //   {
        //     initialRouteName:'Homes',
        //     tabBarOptions: {
        //       activeTintColor: '#e91e63',
        //       inactiveTintColor:'white',
        //       labelStyle: {
        //         fontSize: 18,
        //         marginBottom:10
        //       },
        //       style: {
        //         backgroundColor: 'skyblue',
        //       },
        //     }
        //   }
        //   )
        //   export default createAppContainer(TabNavigator);

        const TabRouter = createMaterialTopTabNavigator({
          Card2: { 
             screen: Card2, 
             navigationOptions: {
              tabBarLabel: ({focused, tintColor:color}) => (
                <Icon name="history" size={30} color={color} />
              )
             }
          },
          Home: { 
            screen: Home, 
            navigationOptions: {
             tabBarLabel: ({focused, tintColor:color}) => (
               <Icon name="home" size={30} color={color} />
             )
            }
         },
          Signin: {
             screen: Signin,
             navigationOptions: {
                tabBarLabel: ({focused, tintColor:color}) => (
                  <Icon name="message-text-outline" size={20} color={color} />
                )
             }
          }},
          { 
            tabBarOptions: {
               showIcon: false, 
                                
               showLabel: true,
               activeTintColor: '#FFF',
               labelStyle: {},
               
             
          }
        }
          )
          export default createAppContainer(TabRouter);