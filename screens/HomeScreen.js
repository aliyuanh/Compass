import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

function addEvents(loc, arr){
  return arr.filter(event=> event.location == 'Los Angeles')
}

export default class HomeScreen extends React.Component {
  constructor(){
    super();
    this.location = 'Los Angeles'
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

  render() {
    return (
      <View style={styles.container}>
            <View style={styles.welcomeContainer}>
              <Image
                source={
                  __DEV__
                  //set this to the app logo later
                    ? require('../assets/images/robot-dev.png')
                    : require('../assets/images/robot-prod.png')
                }
                style={styles.welcomeImage}
              />
            </View>

        <View style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-evenly'
            }}>
            <View style= {{flex:5}}>
              <ScrollView style = {{margin:20}}>
              <View/>
              {
              //  addEvents('hihi', this.eventAndPic)
              }
                {
                  this.eventAndPic.map((item, key)=>
                (
                  item.location === 'Los Angeles'?
                  <View key = {key} style={styles.locationContainer}>
                    <Image source = {item.imageLoc} style = {styles.locationImage} resizeMode = "contain"/>
                      <Text style = {styles.locationText}> {item.event} </Text>
                  </View>:null
                ))
                }
              </ScrollView>
            </View>


        </View>

      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
         {}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
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
    marginVertical:20,
    marginHorizontal: 5,
    fontSize: 35,
    //maxHeight: 100,
    backgroundColor: 'rgba(200,200,200,.5)'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 30,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
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
  },
  getStartedText: {
    fontSize: 30,
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
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
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
});
