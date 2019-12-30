import React, {Component} from 'react';
import {View, 
        StatusBar, 
        StyleSheet, 
        Text, 
        Image, 
        Dimensions, 
        ScrollView, 
        TouchableOpacity,
        TextInput,
        FlatList} 
from 'react-native';

var { height } = Dimensions.get('window');
 
var box_count = 4;
var box_height = height / box_count;

function List({ title, harga, img }) {
    return (
      <View style={styles.item}>
        <Image style={{width: 100, height: 100}}  source={img} />
        <Text>{title}</Text>
        <Text style={{fontSize: 15}}>{harga}</Text>
        <TouchableOpacity>
        <Image
            style={{width: 100, height: 40}}
            source={require('../image/bt_beli.png')}
          />
         </TouchableOpacity>
      </View>
    );
  }

export default class home extends Component{

constructor(props) {
    super(props);
    this.state = {

      marketlist: [
        {
          img: require('../produk/02.jpg'),
          nama: 'Topi Reebok',
          harga: 'Rp. 50.000'
        },
        {
          img: require('../produk/03.jpg'),
          nama: 'Topi Ninja',
          harga: 'Rp. 30.000'
        },
        {
          img: require('../produk/05.jpg'),
          nama: 'Kemeja Abu-abu',
          harga: 'Rp. 85.000'
        },
        {
          img: require('../produk/06.jpg'),
          nama: 'Kaos',
          harga: 'Rp. 70.000'
        },
        {
          img: require('../produk/07.jpg'),
          nama: 'Celana Chino',
          harga: 'Rp. 150.000'
        },
        {
          img: require('../produk/08.jpg'),
          nama: 'Celana Pendek',
          harga: 'Rp. 100.000'
        },
        {
          img: require('../produk/011.jpg'),
          nama: 'Hoodie',
          harga: 'Rp. 200.000'
        },
        {
          img: require('../produk/012.jpg'),
          nama: 'Jaket Parasut',
          harga: 'Rp. 250.000'
        },
        {
          img: require('../produk/015.jpg'),
          nama: 'Tas Ransel',
          harga: 'Rp. 200.000'
        },
        {
          img: require('../produk/013.jpg'),
          nama: 'Tas Port USB',
          harga: 'Rp. 2.000.000'
        },
        {
          img: require('../produk/017.jpg'),
          nama: 'Sepatu Sekolah',
          harga: 'Rp. 250.000'
        },
        {
          img: require('../produk/018.jpg'),
          nama: 'Sepatu Adidas',
          harga: 'Rp. 2.000.000'
        },
        
      ]
    };
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

        <View style={{backgroundColor: '#009432'}}>
        <View style = {styles.cari}>
          <TextInput style = {styles.inputbox}
            placeholder='Cari Produk'
            placeholderTextColor='#B2BABB'
            autoCapitalize="none">
          </TextInput>
          <Image source={require('../image/cari.png')} 
            style={{width:20, height:20, alignSelf:'center', margin: 10, marginTop: 10}} />
        </View>
        </View>

        <ScrollView>
        <View style={[styles.box, styles.kategori]}>
          <View style={{flexDirection:'row'}}>
            <View style={{alignItems:'center'}}>
              <Image source={require('../produk/01.jpg')} 
              style={{width:70, height:70, alignSelf:'center', marginTop: 15, margin: 10, marginBottom: 0}} />
              <Text style={{fontSize:12}}>Topi</Text>
            </View>
            <View style={{alignItems:'center'}}>
              <Image source={require('../produk/04.jpg')} 
              style={{width:70, height:70, alignSelf:'center', marginTop: 15, margin: 10, marginBottom: 0}} />
              <Text style={{fontSize:12}}>Baju</Text>
            </View>
            <View style={{alignItems:'center'}}>
              <Image source={require('../produk/09.jpg')} 
              style={{width:70, height:70, alignSelf:'center', marginTop: 15, margin: 10, marginBottom: 0}} />
              <Text style={{fontSize:12}}>Celana</Text>
            </View>
          </View>
          <View style={{flexDirection:'row'}}>
            <View style={{alignItems:'center'}}>
              <Image source={require('../produk/010.jpg')} 
              style={{width:70, height:70, alignSelf:'center', margin: 10, marginBottom: 0}} />
              <Text style={{fontSize:12}}>Jaket</Text>
            </View>
            <View style={{alignItems:'center'}}>
              <Image source={require('../produk/013.jpg')} 
              style={{width:70, height:70, alignSelf:'center', margin: 10, marginBottom: 0}} />
              <Text style={{fontSize:12}}>Tas</Text>
            </View>
            <View style={{alignItems:'center'}}>
              <Image source={require('../produk/016.jpg')} 
              style={{width:70, height:70, alignSelf:'center', margin: 10, marginBottom: 0}} />
              <Text style={{fontSize:12}}>Sepatu</Text>
            </View>
          </View>
        </View>

        <View style={[styles.box, styles.sale]}>
            <Image source={require('../image/flash.png')} 
            style={{width:200, height:50, alignSelf:'center', marginTop: 10}} />
           <FlatList
            numColumns={2}
            data={this.state.marketlist}
           
            renderItem={obj => (
              <List img={obj.item.img} title={obj.item.nama} harga={obj.item.harga}  />
            )}
            keyExtractor={(item, index) => index.toString()}
        />
        </View>
        </ScrollView>
        
        <View style={[styles.box, styles.footer]}>
          <View>
            <Image source={require('../image/home.png')} 
            style={styles.icon} /> 
            <Text style={{fontSize:10}}>Home</Text>
          </View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('order')}>
          <View>
            <Image source={require('../image/shop.png')} 
            style={styles.icon} />
            <Text style={{fontSize:10}}>Transaksi</Text>
          </View>
          </TouchableOpacity>
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
    flexDirection:'column' ,
    justifyContent: 'space-between' 
  },

  box:{
    height:box_height
  },

  header:{
    paddingLeft:10,
    paddingRight:10,
    height:50,
    backgroundColor:'#009432',
    flexDirection:'row',
    justifyContent: 'space-between'
  },

  cari:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: '#6E7B79',
    height: 40,
    borderRadius: 5,
    margin: 10,
  },

  inputbox:{
    flex: 1

  },

  kategori:{ 
    paddingLeft: 45,
    paddingRight: 50,
    paddingBottom: 5,
    height:200,
    backgroundColor: '#DCDCDC',
    justifyContent: 'space-between'
  },

  sale:{
    marginTop:20,
    height:1500,
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
  },

  item: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});