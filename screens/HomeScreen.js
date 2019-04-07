 import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Alert
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
//  const MyNavScreen = ({ navigation })
  Alert.alert(
  'YUHItinerary Modified',
  'YEAdded to itinerary for '+item.location,
  [
    {text: 'Woo!', onPress: () => console.log("button pressed in search")}
  ],
  { cancelable: false }
)
//move this to another button which sends to my itineraries
{nav.navigate('Settings', {itinerary: arr})}
}

export default class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    //navigation = this.props.navigation
    this.location = 'Los Angeles'
    this.toAddToItinerary = []
    this.eventAndPic = [
      {event: 'Disneyland        ', imageLoc: require('../assets/images/disneyland.jpg'), location: 'Los Angeles'},
      {event: 'Universal Studios Hollywood', imageLoc: require('../assets/images/universal.jpeg'), location: 'Los Angeles'},
      {event: 'Griffith Observatory', imageLoc: require('../assets/images/griffith.jpg'), location: 'Los Angeles'},
      {event: 'Santa Monica Pier', imageLoc: require('../assets/images/santa.jpg'), location: 'Los Angeles'},
      {event: 'The Getty         ', imageLoc: require('../assets/images/getty.jpeg'), location: 'Los Angeles'},
      {event: 'Hollywood Walk of Fame', imageLoc: require('../assets/images/hollywood.jpg'), location: 'Los Angeles'},
      {event: 'Broadway           ', imageLoc: require('../assets/images/broadway.jpeg'), location: 'New York City'},
      {event: 'Empire State Building', imageLoc: require('../assets/images/empire.jpg'), location: 'New York City'},
      {event: 'Statue of Liberty', imageLoc: require('../assets/images/liberty.jpg'), location: 'New York City'},
      {event: 'Central Park', imageLoc: require('../assets/images/central.jpg'), location: 'New York City'},
      {event: 'Rockefeller Center', imageLoc: require('../assets/images/rockefeller.jpg'), location: 'New York City'},
      {event: 'Museum of Modern Art', imageLoc: require('../assets/images/moma.jpg'), location: 'New York City'},
      {event: 'MORI Digital Art Museum', imageLoc: require('../assets/images/mori.jpg'), location: 'Tokyo'},
      {event: 'Tsukiji Fish Market', imageLoc: require('../assets/images/tsukiji.jpg'), location: 'Tokyo'},
      {event: 'Muji GINZA Flagship Store', imageLoc: require('../assets/images/muji.png'), location: 'Tokyo'},
      {event: 'Tokyu Hands Ginza', imageLoc: require('../assets/images/ginza.jpg'), location: 'Tokyo'},
      {event: 'Urikiriya         ', imageLoc: require('../assets/images/uri.jpg'), location: 'Tokyo'},
      {event: 'Studio Ghibli Museum', imageLoc: require('../assets/images/ghibli.jpg'), location: 'Tokyo'},

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
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  //set this to the app logo later
                    ? require('../assets/images/icon.png')
                    : require('../assets/images/icon.png')
              }
              style={styles.welcomeImage}
            />
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
            <ScrollView style = {{margin:10}}>
          <View/>

           {
              //  addEvents('hihi', this.eventAndPic)
            }

          {
            this.eventAndPic.map((item, key)=> (
            item.location === this.location?
            <View key = {key} style={styles.locationContainer}>
              <Image source = {item.imageLoc} style = {styles.locationImage} resizeMode = "contain"/>
              <Text style = {styles.locationText}> {item.event} </Text>
              <View style = {styles.smallBox}>
                <Button
                  onPress = {()=>pressBoi(item, this.toAddToItinerary, this.props.navigation)
                  }
                  title = 'Add'
                  color = '#92d7e5'
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
  locationContainer:{
    flex: 7,
    maxHeight: 200,
    flexDirection: 'row',
    margin: 10,
    flexWrap : 'wrap',
    backgroundColor: '#f7ebe6',
    borderRadius:5,
    justifyContent:'space-between'
  },
  locationText:{
    margin: 5,
    textAlign: 'left',
    fontSize: 20,
    maxWidth: 170,
    justifyContent:'space-between'
  },
  locationImage:{
    margin:5,
    maxWidth: 50,
    maxHeight:50
  },
  smallBox:{
    marginRight: 5,
    textAlign: 'right',
    padding: 3
  },
  container: {
    flex: 1,
    backgroundColor: '#fae3d9',
  },
  developmentModeText: {
    marginBottom:10,
    color: 'rgba(0,0,0,1)',
    fontSize: 24,
    lineHeight: 24,
    textAlign: 'center',
    fontWeight: "bold",
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
  },
  welcomeImage: {
    width: 100,
    height: 100,
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
    fontSize: 17,
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
    borderColor: 'black', borderWidth: 1
  },
  tabBarInfoText: {
    fontSize: 17,
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
    fontSize: 14,
    color: '#2e78b7',
  },
  searchContainer: {
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 15,
    paddingBottom: 5,
    paddingTop: 5,
    backgroundColor: 'white',
  },
});
