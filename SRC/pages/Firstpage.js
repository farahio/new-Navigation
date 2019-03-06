import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Dimensions,Image,TouchableOpacity} from 'react-native';
import { createSwitchNavigator, createAppContainer} from "react-navigation";
import Login from './Login'
import Signin from './Signin'

let dim=Dimensions.get('window')

class Firstpage extends Component {
render() {
    return (

<View style={styles.container}>
      
      <View style={styles.viewImg1}>
        <Image
          source={require('../asecct/layout.png')}
          style={styles.layOut}
        />
        <View style={styles.viewImg2}>
       <Image
            source={require('../asecct/page.png')}
            style={styles.page}
          
          />


          
<View style = {styles.bottonContainer}>
                    <View style = {styles.singUp}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('signins')}>
                            <Text style = {styles.bottonText}>SINGUP</Text>

                        </TouchableOpacity>

                    </View>

                    <View style = {styles.singUp}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('logins')}>
                             <Text style = {styles.bottonText}>LOGIN</Text>
                        </TouchableOpacity>

                    </View>
                    
                </View>
      </View>
     </View>
     
      </View>
       );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
   viw1:{
   flex:1,
   
   
   },
   bottonContainer : {
    flexDirection : 'row',
    marginTop:30,
    
  },
  singUp : {
    width : 140,
    height : 50,
    backgroundColor : '#ffc107',
    borderRadius : 7,
    justifyContent : 'center',
    alignItems : 'center',
    margin:13,
  
  },
  bottonText :{
    fontSize : 18,
    color : 'white',
    fontWeight :'300'
  },
  viewImg1:{flex:1,
    justifyContent:'center',
    alignItems: 'center',
  },
  layOut:{width:dim.width,
    height:dim.height,
    position:'absolute'
  },
  viewImg2:{justifyContent:'center',
  alignItems:'center'
  },
  page:{width:200,
    height:200,
    marginTop:160}
  
  
  
   
   
  });
  const AppNavigator = createSwitchNavigator(
    {
        Firstpages: Firstpage,
        logins:Login,
        signins:Signin,
        
      },
      {
        initialRouteName: "Firstpages"
      }
    );
    export default createAppContainer(AppNavigator);
  
