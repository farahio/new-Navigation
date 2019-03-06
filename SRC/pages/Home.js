import React, {Component} from 'react';
import {Platform, StyleSheet,Animated, Text, View,Dimensions,TextInput,Image,FlatList,TouchableOpacity,ScrollView} from 'react-native';
import {createMaterialTopTabNavigator,createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import {data1} from '../Components/ComponentData1'
import Signin from './Signin'
import{connect} from 'react-redux'
import{fetchProducts} from '../Services/actionUser'
import reducer from '../Services/reducerUser'

let dim=Dimensions.get('window').width


 class Home extends Component {
 constructor(props){
   super(props)
   this.state={
    scrollX :new Animated.Value(0)
   }
 }

 componentDidMount() {
  this.props.fetchProducts()
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
       {/* <ScrollView> */}
           
       <View style={styles.User}>
                <View style={styles.viewTextUser}>
                  <Text style={styles.Popular}>Popular</Text>
                  <View style={{flexDirection:'row'}}>
                  <Text style={styles.More}>More</Text>
                 <Icon name="arrow-right" size={18} color='white' style={styles.Icon2}/>
                  </View>
                </View>
                <View style={styles.ViewImgUser}>
                

                   
                <FlatList
          data={this.props.result.item}
          horizontal={true}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
         
              <Image source={{uri: item.volumeInfo.imageLinks.thumbnail}} style={styles.userImage} />

          )}
        />
                </View>
                </View>
              </View>
                <View style={styles.Book}></View>
            
    {/* </ScrollView> */}
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
    height:40,
    marginTop:10,
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
    },
    User:
    {
      flex:6,
    
    },
    Book:{
      flex:1,
      backgroundColor:'#32C439'
    },
    viewTextUser:{
      width:370,
      height:40,
      marginLeft:25,
     
      justifyContent:'space-between',
      flexDirection:'row',
     
    },
    ViewImgUser:{
      flex:3,
      marginTop:10,
      justifyContent:'center',
      
    },
    Popular:{
      marginTop:10,
      fontSize:20,
      color:'white',
      fontWeight:'500'
    },
    More:{
      marginTop:15,
      fontSize:16,
      color:'white'
    },
    Icon2:{
      marginTop:18,
      marginLeft:10,
      
    },
    imgUser:{
      width:160,
      height:200,
      backgroundColor:'#ED82E0',
      borderRadius:15,
      marginLeft:10
    },
    userImage:{
      width:160,
      height:200,
      borderRadius:15,
      marginLeft:10
    }
 
});
const mapStateToProps = (state) =>{
  return{
    result:state
  }
}
export default  connect(mapStateToProps,{fetchProducts})(Home);
