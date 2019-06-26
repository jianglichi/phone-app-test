

import React, { Component } from 'react';
import { Navigator,Platform,Text, View,Image,StyleSheet,TextInput,Button,Alert,ScrollView,FlatList,SectionList,TouchableOpacity  } from 'react-native';


import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json


import Myobj from './Myobj' ;



class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}



class LogoTitle extends React.Component {
  render() {
    return (
      <View>
      <Image
        source={{uri:'https://s3-ap-northeast-1.amazonaws.com/ac.ezimport.co.jp/image/Lisa/img/2019-bibian-logo-jp.png?1'}}
        style={{ width: 120, height: 30 }}/>
      </View>
    );
  }
}



class myapp extends Component {
  static navigationOptions = {headerTitle: <LogoTitle />};

  constructor(props) {
      super(props);
      this.state = {
          movies : null,
          data : null,
      }
    }


  componentDidMount() {
      var REQUEST_URL =  "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";
      fetch(REQUEST_URL, {
              method: "GET",
              headers: {
                  "Content-Type": "application/x-www-form-urlencoded"
              }
          })
          .then((response) => response.json())
          .then((responseData) => {
            this.setState({
                      movies: responseData.movies,
                    });

          })
          .catch((error) => {
          })
          .done();
  }

  render() {
    if(!this.state.movies){
      return (
        <View style={styles.container}>
            <Text>Loading</Text>
        </View>
      );
    }else{
      return (
        <View style={{flexDirection: 'column'}} >
          <View >

          <FlatList
                  data={this.state.movies}
                  renderItem={this.renderMovie}
                  style={styles.list}
                  keyExtractor={item => item.id}
          />
          </View>

          <View style={{flexDirection: 'row',flex: 1,bottom:0,position: 'absolute',backgroundColor:'#FFFFFF',width: '100%'}}>
            <View style={{paddingRight: 5,borderColor: '#FFFFFF'}}><Button title="Learn" color="#000000" /></View>
            <View style={{paddingRight: 5}}><Button title="more" color="#000000"/></View>
            <View style={{paddingRight: 5,width:120}}><Button title="測試" color="#000000"/></View>

            <TouchableOpacity style={styles.touchable}>
                    <Image
                      source={{uri:'https://s3-ap-northeast-1.amazonaws.com/ac.ezimport.co.jp/image/Lisa/img/2019-bibian-logo-jp.png?1'}}
                      style={{width: 120, height: 40}} />
            </TouchableOpacity>

            <Button title="Go to Details" onPress={() => this.props.navigation.navigate('Details')}
            />


          </View>
        </View>

        );
    }
  }

  renderMovie({ item  }) {
      return (
        <View style={styles.rows} >
          <View style={{padding:5}} >
            <Image source={{ uri: item.posters.thumbnail }} style={styles.thumbnail} />
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{item.title}}</Text>
            <Text style={styles.year}>{item.year}</Text>
          </View>
        </View>

      );
  }




}


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
      </View>
    );
  }
}


class DetailsScreen_1 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>DetailsScreen_1 Screen</Text>

      </View>
    );
  }
}



const AppNavigator = createStackNavigator(
  {
    Home: myapp,
    Details: DetailsScreen,
    Details_1: DetailsScreen_1
  },
  {
    initialRouteName: "Home"
  }
);


export default createAppContainer(AppNavigator);




const styles = StyleSheet.create({
  container: {
      alignItems: "flex-start",
      flexDirection: "column",
      height: "100%"
    },
    rows: {
      flexDirection: "row",
    },
    thumbnail: {
      width: 100,
      height: 81,
    },


});
