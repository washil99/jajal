import React, {Component} from 'react';
import {View, StatusBar, StyleSheet, Text, Image, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import {NavigationActions} from 'react-navigation';

var { height } = Dimensions.get('window');
 
var box_count = 4;
var box_height = height / box_count;

export default class order extends Component{
	constructor(props) {
    super(props);
  
    this.state = {};
  }
 render() {
    return(
      <View style={styles.container}>
        <StatusBar
          backgroundColor= '#000000'
          barStyle="light-content" 
        />
        
        <View style={[styles.box, styles.header]}> 
          <View style={{flexDirection:'row'}}>
            <Image source={require('../image/menu.png')} 
            style={{width:30, height:30, alignSelf:'center'}} />
            <Text style={{fontSize:20, alignSelf:'center', margin:20}}>WAFALAPAK</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Image source={require('../image/pesan1.png')} 
            style={{width:20, height:20, alignSelf:'center', margin:25}} />
            <Image source={require('../image/notif.png')} 
            style={{width:20, height:20, alignSelf:'center'}} />
          </View>
        </View>
        
        
        <View style = {styles.tx_order}>
          <Text style={{fontSize: 20}}>Transaksi</Text>
        </View>

        <ScrollView>
        <View style={[styles.box, styles.kategori]}>
          <Text>Transaksi</Text>
        </View>
        </ScrollView>
        
        <View style={[styles.box, styles.footer]}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('home')}>
          <View>
            <Image source={require('../image/home.png')} 
            style={styles.icon} /> 
            <Text style={{fontSize:10}}>Home</Text>
          </View>
          </TouchableOpacity>
          <View>
            <Image source={require('../image/shop.png')} 
            style={styles.icon} />
            <Text style={{fontSize:10}}>Transaksi</Text>
          </View>
          <View>
            <Image source={require('../image/dompet.png')} 
            style={styles.icon} />
            <Text style={{fontSize:10}}>Saldo</Text>
          </View>
          <View>
            <Image source={require('../image/love.png')} 
            style={styles.icon} />
            <Text style={{fontSize:10}}>Favorit</Text>
          </View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('akun')}>
          <View>
            <Image source={require('../image/akun.png')} 
            style={styles.icon} />
            <Text style={{fontSize:10}}>Akun</Text>
          </View>
          </TouchableOpacity>
          
        </View>
        
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    justifyContent: 'space-between' 
  },

  header:{
    paddingLeft:10,
    paddingRight:10,
    height:50,
    backgroundColor:'#009432',
    flexDirection:'row',
    justifyContent: 'space-between'
  },

  tx_order:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 40,
    margin: 10,
  },

  kategori:{
    marginTop:20,
    height:500,
    backgroundColor:'#eaeaea'
  },

  footer:{ 
    paddingTop:10,
    paddingLeft:20,
    paddingRight:20,
    height:50,
    backgroundColor:'#009432',
    flexDirection:'row',
    justifyContent:'space-between'
  },

  icon:{
    width:20,
    height:20,
    alignSelf:'center'
  }
});