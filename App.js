import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './Login';
import daftar from './daftar';
import home from './page/home';
import akun from './page/akun';
import order from './page/order';

const pindah = createStackNavigator({
  Login: Login,
  daftar: daftar,
  home: home,
  akun: akun,
  order: order,
},
{
  headerMode: 'none'
});

export default createAppContainer(pindah);

