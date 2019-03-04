import React, {Component} from 'react';
import {Platform, StyleSheet,Animated, Text, View,Dimensions,TextInput,Image,FlatList,TouchableOpacity,ScrollView} from 'react-native';
import {createMaterialTopTabNavigator,createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {data1} from '../Components/ComponentData1'
import Signin from './Signin'

let dim=Dimensions.get('window').width


 export default class Home extends Component {
 constructor(props){
   super(props)
   this.state={
    scrollX :new Animated.Value(0)
   }
 }
  render() {
    let position = Animated.divide(this.state.scrollX,dim);
    return (
      <View style={styles.container}>
      <View style={styles.viewSearch}>
        <View style={styles.Search}>
       
          <TextInput style={styles.textsearch} placeholder='Type book name or author'/>
         
          <Icon name="search" size={20}  style={styles.Icon} />
          
        </View>
      </View>
      <View style={styles.viewDiscover}>
      <View style={styles.viewText}>
      <Text style={styles.textDiscover}>Discover</Text>
      </View>
        <View style={styles.Discover}>
          
          <FlatList
            data={data1}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            keyExtractor={item => item.title}
            onScroll={Animated.event( 
              [{ nativeEvent: { contentOffset: { x: this.state.scrollX } } }] 
            )} 
            renderItem={({ item }) =>

            
            <View>
              <Image
                source={item.image}
                style={styles.img1}
              />
              
            </View>
               
            }
            
          /> 
          
    
        </View>
        <View
                  style={{ flexDirection: 'row'}} 
                  >
                  {data1.map((_, i) => { 
                    let opacity = position.interpolate({
                      inputRange: [i - 1, i, i + 1],
                      outputRange: [0.2, 1, 0.2], 
           
                      extrapolate: 'extend' 
                    });
                    return (
                      <Animated.View 
                        key={i} 
                        style={[styles.Animated,{opacity}]}
                      />
                    );
                  })}
                </View>
      </View>
    
     
      <View style={styles.viewContact}>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
  },
  viewSearch:{
    flex:1,
   
    justifyContent: 'center',
    alignItems: 'center',

  },
  viewDiscover:{
    flex:6,
   
    justifyContent:'center',
    alignItems:'center'
  },
  viewContact:{
    flex:7,
    backgroundColor:'pink'
  },
  Search:{
    width:320,
    height:45,
    backgroundColor:'white',
    marginLeft:10,
    borderRadius: 5,
    marginTop:20

  },
  Discover:{
    width:360,
    height:200,
    
    marginTop:10,
    borderRadius:7,
 
  },
  Icon:
  {marginLeft:280,
    marginTop:10},
  textDiscover:
  {
    marginTop:10,
    fontSize:20,
    fontWeight:'400',
    color:'white'
    
    
  },
  viewText:{
    width:360,
    height:30,
    
    justifyContent:'center',
    
  },
  Discoverimg:{
    width:360,
    height:200,
    marginTop:10,
    borderRadius:7,
    position:'absolute'
  },
  img1:{
    width:360,
    height:200,
    borderRadius:7,
   
    
  },
  textsearch:{
    marginLeft:10,
    position:'absolute'
  },
  Animated:{ 
    
     height:10, 
     width:10, 
     backgroundColor: 'red',
      borderRadius: 5,
    }
 
 
});


