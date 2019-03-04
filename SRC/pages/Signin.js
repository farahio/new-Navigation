import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Dimensions,Image,TouchableOpacity} from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import Card2 from './Card2'
import Card from './Card'
import Home from './Home'

let dim=Dimensions.get('window')

export default class Signin extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text>
            hello
      </Text>
     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'blue'
    
  },

 
 
});


