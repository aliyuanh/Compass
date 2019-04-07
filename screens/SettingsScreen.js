import React, { Component } from 'react';
import { Button, ScrollView, Text, StyleSheet, View, Alert , TouchableOpacity} from 'react-native';
import { ExpoConfigView, ExpoLinksView } from '@expo/samples';
import ItineraryScreen1 from '../screens/ItineraryScreen1';


export default class SettingsScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.fauxContainer}>
      <ScrollView contentContainerStyle={styles.wrapper}>
      <View style={styles.container}>

<Text style={styles.MainText}>My Itineraries</Text>
       <View style={styles.textContainer}>
       <TouchableOpacity
          style={styles.buttonstyle}
          onPress={() => this.props.navigation.navigate('Itinerary1')}  >
          <Text style={styles.buttonstyle}>Los Angeles</Text>
        </TouchableOpacity>
       </View>
       <Text></Text>
       <Text></Text>
       <View style={styles.textContainer}>
       <TouchableOpacity
          style={styles.buttonstyle}
          onPress={() => this.props.navigation.navigate('Itinerary1')}  >
          <Text style={styles.buttonstyle}>Tokyo</Text>
        </TouchableOpacity>
       </View>
       <Text></Text>
       <Text></Text>
       <View style={styles.textContainer}>
       <TouchableOpacity
          style={styles.buttonstyle}
          onPress={() => this.props.navigation.navigate('Itinerary1')}  >
          <Text style={styles.buttonstyle}>New York</Text>
        </TouchableOpacity>
       </View>


       </View>
       </ScrollView></View>
    );
  }
}



const styles = StyleSheet.create({
  fauxContainer:{
    backgroundColor: '#fae3d9',
    flex: 1,
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
    backgroundColor: '#fae3d9',
    color: '#fae3d9',
    flex: 1,
    paddingLeft: 75,
    paddingRight: 75,
    paddingBottom: 350,
    paddingTop: 20,
  },
  container: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 75,
    paddingRight: 75,
    backgroundColor: '#fae3d9',
  },
  buttonstyle: {
    justifyContent:'center',
    paddingTop: 8,
    color: 'white',
    fontSize: 40,
    height: 70,
    fontWeight: "bold",
    alignItems: 'center'
  },
  textContainer: {
    justifyContent:'center',
    width: 325,
    flexDirection: 'row',
    //paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 5,
    paddingLeft: 5,
    backgroundColor: '#61c0bf',
    borderRadius: 5,
  },
  bigText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  smolText: {
    color: '#fff',
    fontSize: 15,
  },
  MainContainer: {
    flex: 1,
    margin: 10
  },
  MainText:{
    fontSize: 50,
    fontWeight: 'bold',
    color: '#ffb6b9',
  },

  TextStyle:{
    fontSize : 25,
    textAlign: 'center'
  }
});
