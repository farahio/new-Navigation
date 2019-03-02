import React, {Component} from 'react';
import {Platform,Animated, StyleSheet, Text, View,Dimensions,Image,TouchableOpacity,Easing} from 'react-native';
let dim=Dimensions.get('window')


export default class Login extends Component {
  constructor(props){
    super(props);
   
      this.animatedValue = new Animated.Value(-400)
    
    
  }
  componentDidMount () {
    this.animate()
  }
  animate () {
    this.animatedValue.setValue(0)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 2000,
        
      }
    ).start()
  }
 
  render() {
    const movingMargin = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [-300, 300, 0]
    })
    const movingMarginright = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [-300, 300, 0]
    })
    const topMargin = this.animatedValue.interpolate({
      inputRange: [0, 1],
    outputRange: [-100, 10]
    })
    return (
      <View style={styles.container}>
      <View style={styles.viwImg1}>
      
      <Image
        source={require('../asecct/design2.png')}
        style={styles.imgBackground}

        />
    <Animated.View style={{marginTop: topMargin}}>
      <Image
        source={require('../asecct/logo2.png')}
        style={styles.logo2}
      />
      </Animated.View>
        
  
      </View>

      <View style={styles.login}>
      <View style={styles.login2}>
       
        <Animated.View style={[styles.email, {marginLeft: movingMargin}]}>
          <Image
            source={require('../asecct/email.png.png')}
            style={{marginTop:30}}
          />
          
            <Text style={styles.emailText}>Email</Text>
          
        </Animated.View>
       
        <Animated.View style={[styles.password,{marginRight:movingMarginright,}]}>
        <Image
            source={require('../asecct/lock.png.png')}
            style={{marginTop:30}}
          />
          
            <Text style={styles.passwordText}>password</Text>
        </Animated.View>
        
        <TouchableOpacity style={styles.button}><Text style={styles.textButton}>SINGIN</Text></TouchableOpacity>
        <Text style={styles.forget}>Forget you password?</Text>
        <Text style={styles.sign}>Dosent have an account? signup</Text>
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
  imgBackground:{
    width:dim.width,
    height:600,
    position:'absolute'
    
   
  },
  viwImg1:{flex:3,
    backgroundColor:'#206bec'
  },
  login:{
    flex:2,
    backgroundColor:'#206bec',
    justifyContent:'center',
    alignItems: 'center'
  },
  login2:{
    width:280,
    height:320,
    
  },
  email:{height:60,
    borderBottomWidth:2,
    borderBottomColor:'white',
    flexDirection: 'row',
    
  },
  password:{height:60,
    borderBottomWidth:2,
    borderBottomColor:'white',
    flexDirection: 'row',
  },
  emailText:
  {
    marginTop:30,
    marginLeft:30,
    color:'#EAEDED'
  },
  passwordText:{
    marginTop:30,
    marginLeft:30,
    color:'#EAEDED'
  },
  button:{
    width:220,
    height:70,
    backgroundColor:'#ffc107',
    borderRadius:7,
    marginLeft:30,
    marginTop:20,
    justifyContent:'center',
    alignItems:'center'
  },
  textButton:{fontSize:18,
    color:'white'
  },
  forget:{marginLeft:60,
    marginTop:10,
    color:'white'
  },
  sign:{marginLeft:30,
    marginTop:20,
    color:'white'
  },
  logo2:{
    marginLeft:140,
    marginTop:20,
    
  } 

 
});









  



