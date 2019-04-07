import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Button,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import { SearchBar } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';
import SearchScreen from './SearchScreen';

function addEvents(loc, arr){
  return arr.filter(event=> event.location == 'Los Angeles')
}
function pressBoi(item, arr, nav){
  arr.push(item)
  Alert.alert(
  'YUHItinerary Modified',
  'YEAdded to itinerary for '+item.location,
  [
    {text: 'Woo!', onPress: () => console.log("button pressed in search")}
  ],
  { cancelable: false }
)
{nav.navigate('Settings', {itinerary: arr})}
}

export default class HomeScreen extends React.Component {
  constructor(){
    super();
    this.location = 'New York City'
    this.toAddToItinerary = []
    this.eventAndPic = [
      {event: 'Disneyland', imageLoc: require('../assets/images/disneyland.jpg'), location: 'Los Angeles'},
      {event: 'Universal Studios Hollywood', imageLoc: require('../assets/images/universal.jpeg'), location: 'Los Angeles'},
      {event: 'Griffith Observatory', imageLoc: require('../assets/images/griffith.jpg'), location: 'Los Angeles'},
      {event: 'Santa Monica Pier', imageLoc: require('../assets/images/santa.jpg'), location: 'Los Angeles'},
      {event: 'The Getty', imageLoc: require('../assets/images/getty.jpeg'), location: 'Los Angeles'},
      {event: 'Hollywood Walk of Fame', imageLoc: require('../assets/images/hollywood.jpg'), location: 'Los Angeles'},
      {event: 'Broadway', imageLoc: require('../assets/images/broadway.jpeg'), location: 'New York City'},
      {event: 'Empire State Building', imageLoc: require('../assets/images/empire.jpg'), location: 'New York City'},
      {event: 'Statue of Liberty', imageLoc: require('../assets/images/liberty.jpg'), location: 'New York City'},
      {event: 'Central Park', imageLoc: require('../assets/images/central.jpg'), location: 'New York City'},
      {event: 'Rockefeller Center', imageLoc: require('../assets/images/rockefeller.jpg'), location: 'New York City'},
      {event: 'Museum of Modern Art', imageLoc: require('../assets/images/moma.jpg'), location: 'New York City'},
    ]
  }
  static navigationOptions = {
    header: null,
  };

  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

          <View style={styles.welcomeContainer}>
            <Image
                source={
                  __DEV__
                    ? require('../assets/images/icon.png')
                    : require('../assets/images/icon.png')
                }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>

            <Text style={styles.getStartedText}>Get started by opening</Text>

            <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
              <MonoText style={styles.codeHighlightText}>screens/HomeScreen.js</MonoText>
            </View>
          <Text>   </Text>
          <Text>   </Text>
          <Text>   </Text>

        <View style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-evenly'
            }}>
            <Text style = {styles.developmentModeText}>{this.location}</Text>
            <View style= {{flex:5}}>
              <ScrollView style = {{margin:20}}>
              <View/>
              {
              }
                {
                  this.eventAndPic.map((item, key)=>
                (
                  item.location === this.location?
                  <View key = {key} style={styles.locationContainer}>
                    <Image source = {item.imageLoc} style = {styles.locationImage} resizeMode = "contain"/>
                    <Text style = {styles.locationText}> {item.event} </Text>
                    <View style = {styles.smallBox}>
                      <Button
                        onPress = {()=>pressBoi(item, this.toAddToItinerary, this.props.navigation)
                        }
                        title = 'Add'
                        color="#841584"
                        style = {styles.smallBox}
                        //  <Image source = {item.imageLoc}/>
                      />
                    </View>

                  </View>:null
                ))
                }
              </ScrollView>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  smallBox:{
    minWidth: 60,
    minHeight: 40,
    maxHeight:40,
    maxWidth:60,
    margin: 20,
  },
  locationImage:{
    margin: 10,
    height: 60,
    width: 60
  },
  locationText:{
    margin:10,
    fontSize: 20,
    flex: 2,
    flexWrap: 'wrap'
  },
  locationContainer:{
    flexDirection : 'row',
    borderRadius: 5,
    borderWidth: 3,
    borderColor: 'rgba(100,100,100,.5)',
    marginBottom:20,
    marginHorizontal: 5,
    fontSize: 20,
    //maxHeight: 100,
    backgroundColor: 'rgba(200,200,200,.5)'
  },
  container: {
    flex: 1,
    backgroundColor: '#fae3d9',
  },
  developmentModeText: {
    margin: 20,
    paddingTop:35,
    fontWeight:'bold',
    color: 'rgba(0,0,0,0.4)',
    fontSize: 50,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 20,
    alignItems:'center'
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 5,
    height: 50
  },
  welcomeImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    //alignItems: 'center',
    marginHorizontal: 50,
    borderColor: 'orange', borderWidth: 1
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
    borderColor: 'yellow', borderWidth: 1
  },
  getStartedText: {
    fontSize: 20,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
  //  alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
    borderColor: 'black', borderWidth: 1
  },
  tabBarInfoText: {
    fontSize: 37,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 34,
    color: '#2e78b7',
  },
  searchContainer: {
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 15,
    paddingBottom: 5,
    paddingTop: 5,
    backgroundColor: 'white',
  }
});
