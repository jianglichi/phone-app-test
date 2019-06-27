

import React, { Component } from 'react';
import { Navigator,Platform,Text, View,Image,StyleSheet,TextInput,Button,Alert,ScrollView,FlatList,SectionList,TouchableOpacity  } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json


import Footer from './Footer' ;
import DetailsScreen from './DetailsScreen' ;
import DetailsScreen_1 from './DetailsScreen_1' ;
import Home from './Home' ;
import styles from './styles';


//import Testobj from './Testobj' ;

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Details: DetailsScreen,
    Details_1: DetailsScreen_1
  },
  {
    initialRouteName: "Home"
  }
);


export default createAppContainer(AppNavigator);
