import React, { Component } from 'react';
import { Text, View,Image,StyleSheet,TextInput,Button,Alert,ScrollView,FlatList,SectionList,TouchableOpacity  } from 'react-native';
import Footer from './Footer' ;


class DetailsScreen extends React.Component {
  static navigationOptions = {
      title: 'DetailsScreen',
    };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>Details Screen</Text>
              <Button
                title="Go to Details... again"
                onPress={() => this.props.navigation.navigate('Details_1')}
              />
              <Footer/>
      </View>
    );
  }
}

export default DetailsScreen;
