import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import { Constants } from 'expo';
import { SearchBar, Icon } from 'react-native-elements';

export default class SearchScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  random_images_array = ["../assets/images/denmark.jpg", "../assets/images/beach.jpg", "../assets/images/kyoto.jpg", "../assets/images/russia.jpg", "../assets/images/shanghai.jpg", "../assets/images/tori.jpg"];

  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  onEnd = () => {
    if(this.state.search == 'New York City' || this.state.search == 'Los Angeles' || this.state.search == 'Tokyo') {
      this.props.navigation.navigate( 'Home', {Sending: this.state.search} )
    }
    else {
      alert("error")
    }
  };

  render() {
    const { search } = this.state;

    return (

      <ImageBackground
        source={require('../assets/images/Flower.jpg')}
        style={{width: '100%', height: '100%'}}>

        <View style={styles.container}>

        <Text style={[styles.titleText,styles.setColorWhite]}> Where do you want to go </Text>

        <View style={styles.searchContainer}>
          <SearchBar
              containerStyle={{
                backgroundColor: 'rgba(255,255,255,.2)',
                borderColor: '#ade6e6',
                borderTopColor: '#ade6e6',
                borderBottomColor: '#ade6e6',
                borderWidth: 1,
                borderRadius: 30,
                width: '90%',
              }}
              inputContainerStyle={{
                backgroundColor: 'transparent',

              }}
              onChangeText={this.updateSearch}
              value={search}
              lightTheme={true}
              onEndEditing={this.onEnd}
              icon = {{ color: 'white', style: styles.searchIcon }}
            />
        </View>

        {/*
        <Button
          title="Results"
          onPress={
            () => this.props.navigation.navigate( 'Home' )
          }
        />*/}

      </View>
      </ImageBackground>

    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.5)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 15,
    paddingBottom: 5,
    paddingTop: 5,
    backgroundColor: 'transparent',
    width: '90%'
  },
  searchResPgContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 15,
    paddingBottom: 5,
    paddingTop: 5,
    backgroundColor: 'transparent',
    width: '90%'
  },
  titleText: {
    fontSize: 20,
    fontFamily: 'avenir-light'
  },
  setColorWhite: {
    color: 'white'
  },
});
