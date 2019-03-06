import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Dimensions,Image,TouchableOpacity} from 'react-native';
import { createSwitchNavigator, createAppContainer} from "react-navigation";
import { createStore , applyMiddleware  } from 'redux'
import {Provider}  from 'react-redux'
import reducer from './SRC/Services/reducerUser'
import thunk from "redux-thunk";
import Firstpage from './SRC/pages/Firstpage'


const store = createStore(reducer,applyMiddleware(thunk));

 export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Firstpage/>
      </Provider>
    );
  }
}