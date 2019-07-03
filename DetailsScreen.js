import React, { Component } from 'react';
import { WebView,Text, View,Image,StyleSheet,TextInput,Button,Alert,ScrollView,FlatList,SectionList,TouchableOpacity  } from 'react-native';
import Footer from './Footer' ;


class DetailsScreen extends React.Component {
  static navigationOptions = {
      title: 'DetailsScreen',
    };


    constructor(){
          super();
          this.state = {
              TextHolder:'This is Old Sample Text'
          }

          this.log = this.log.bind(this);

      }


    log(e) {
        console.log(e);
        this.setState({       TextHolder: e.url     });

      }



  render() {
    return (

           <View style={styles.container}>
                           <WebView
                               source={{uri: 'https://www.amazon.co.jp/'}}
                               onNavigationStateChange={this.log}
                               style= {styles.loginWebView}
                           />
           <Text>{this.state.TextHolder}</Text>
           </View>


    );
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    loginWebView: {
        flex: 1,
        marginTop: 30,
        marginBottom: 20
    }
});


export default DetailsScreen;
