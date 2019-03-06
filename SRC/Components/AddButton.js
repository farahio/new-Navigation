import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Dimensions,Image,TouchableOpacity} from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';




export default class Signin extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.Button}>
        <Icon name="plus" size={20}  style={styles.IconPlus}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    
  },
  Button:
  {
    width:100,
    height:100,
    backgroundColor:'blue',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    
    
  },
  IconPlus:{
    width:20,
    height:20
  }

 
 
});