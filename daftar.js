import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ScrollView } from 'react-native';
import {NavigationActions} from 'react-navigation';

export class daftar extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }
  render() {
    return(
      <View style={styles.container}>
      <ScrollView style = {styles.scroll}>
        <TextInput style = {styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="Nama"
          placeholderTextColor="#ffffff"
        />
        <TextInput style = {styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="Username"
          placeholderTextColor="#ffffff"
        />
        <TextInput style = {styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="Email"
          placeholderTextColor="#ffffff"
        />
        <TextInput style = {styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="No.Telepon"
          placeholderTextColor="#ffffff"
        />
        <TextInput style = {styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="Password"
          placeholderTextColor="#ffffff"
        />
        <View style = {styles.pencet}>
        <Button 
          onPress={() => {
            alert('Data Telah Tersimpan..!');
          }}
          title="Simpan"
        />
        </View>
        <View style = {styles.pencet}>
        <Button 
          onPress={() => this.props.navigation.navigate('Login')}
          title="Kembali"/>
        </View>
        </ScrollView>
      </View> 
      );
  }
}

const styles = StyleSheet.create({
 container : {
  backgroundColor:'#ffffff',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center'
},
  inputBox:{
    width:300,
    backgroundColor:'black',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color:'#ffffff',
    marginVertical: 10
},
  pencet:{
    margin: 10,
    marginBottom: 1,
    paddingVertical: 1,
    marginHorizontal: 100
},
  scroll:{
    marginHorizontal: 20
  }
});

export default daftar;