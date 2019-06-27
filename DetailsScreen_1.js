import React, { Component } from 'react';
import { Text, View,Button} from 'react-native';
import Footer from './Footer' ;

class DetailsScreen_1 extends React.Component {
  static navigationOptions = {
      title: 'DetailsScreen1',
    };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>DetailsScreen_1 Screen</Text>
              <Footer/>
      </View>

    );
  }
}

export default DetailsScreen_1;
