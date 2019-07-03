
import React, { Component } from 'react';
import { Navigator,Platform,Text, View,Image,StyleSheet,TextInput,Button,Alert,ScrollView,FlatList,SectionList,TouchableOpacity  } from 'react-native';

import Footer from './Footer' ;
import styles from './styles';

class LogoTitle extends React.Component {
  render() {
    return (
      <View>
      <Image
        source={{uri:'https://s3-ap-northeast-1.amazonaws.com/ac.ezimport.co.jp/image/Lisa/img/2019-bibian-logo-jp.png?1'}}
        style={{ width: 120, height: 10 }}/>
      </View>
    );
  }
}



class Home extends Component {
  static navigationOptions = {
    //headerTitle: <LogoTitle />,
    header: null,
  };

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
        <View >
            <Text>Loading</Text>
        </View>
      );

    }else{

      return (

        <View style={{flexDirection: 'column',flex:1}} >
          <FlatList
                  data={this.state.movies}
                  renderItem={this.renderMovie}
                  style={styles.list}
                  keyExtractor={item => item.id}
          />

          <Footer/>
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



export default Home;
