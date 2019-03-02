import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Dimensions,Image,TouchableOpacity} from 'react-native';
let dim=Dimensions.get('window')


export default class Home extends Component {
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
    backgroundColor:'red'
    
  },

 
 
});
