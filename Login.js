import React, { Component } from 'react';
import { 
  StyleSheet,
  Text, 
  View,
  TextInput,
  Button,
  StatusBar
} from 'react-native';

export default class Login extends Component<{}> {
  render(){
    return(
      <View style={styles.container}>
        <StatusBar
          backgroundColor='#1c313a'
          barStyle='light-content'
        />  
        <Text style={styles.logo}>Login</Text>      
        <TextInput style = {styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="Username"
          placeholderTextColor="#ffffff"
        />
        <TextInput style = {styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="#ffffff"
        />
        <Button 
          title="Login"
          onPress={() => {this.props.navigation.navigate('home')}}
        />
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#009432',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  inputBox:{
    width:300,
    backgroundColor:'rgba(255,255,255,0.3)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color:'#ffffff',
    marginVertical: 10
  },

  logo:{
    marginVertical: 50,
    fontSize: 50,
    color:'rgba(255, 255, 255, 0.7)'

  }
});