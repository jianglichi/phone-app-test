import React, { Component } from 'react';
import { Navigator,Platform,Text, View,Image,StyleSheet,TextInput,Button,Alert,ScrollView,FlatList,SectionList,TouchableOpacity  } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json

import { withNavigation } from 'react-navigation';



class Footer extends Component {
  render() {

    return (
      <View style={{flexDirection: 'row',bottom:0,position: 'absolute',backgroundColor:'#FFFFFF',width: '100%'}}>
        <View style={{paddingRight: 5,borderColor: '#FFFFFF'}}><Button title="Home" color="#000000" onPress={() => this.props.navigation.navigate('Home')} /></View>
        <View style={{paddingRight: 5}}><Button title="more" color="#000000"/></View>
        <View style={{paddingRight: 5,width:120}}><Button title="測試" color="#000000"/></View>

        <TouchableOpacity >
                <Image
                  source={{uri:'https://s3-ap-northeast-1.amazonaws.com/ac.ezimport.co.jp/image/Lisa/img/2019-bibian-logo-jp.png?1'}}
                  style={{width: 120, height: 40}} />
        </TouchableOpacity>
        <Button title="Go to Details" onPress={() => this.props.navigation.navigate('Details')}/>
      </View>

    );


  }
}





export default withNavigation(Footer);
