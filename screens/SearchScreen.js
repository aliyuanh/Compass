import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Constants } from 'expo';
import { SearchBar } from 'react-native-elements';
import { FluidNavigator, Transition } from 'react-navigation-fluid-transitions';

export default class SearchScreen extends React.Component {
  static navigationOptions = {
    header: null
  }
  
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  onEnd = () => {
    if(this.state.search == 'New York' || this.state.search == 'Los Angeles') {
      this.props.navigation.navigate( 'Home' )
    }
    else {
      alert("error")
    }
  };
 
  render() {
    const { search } = this.state;

    return (
      <View style={styles.container}>
        <Text> Hello, Search </Text>

        <View style={styles.searchContainer}>
          <SearchBar
              containerStyle={{
                backgroundColor: 'white', 
                borderColor: '#ade6e6',
                borderTopColor: '#ade6e6',
                borderBottomColor: '#ade6e6',
                borderWidth: 1,
                borderRadius: 30,
                width: '90%',
              }}
              inputContainerStyle={{
                backgroundColor: 'white',
              }}
              onChangeText={this.updateSearch}
              value={search}
              lightTheme={true}
              onEndEditing={this.onEnd}
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
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 15,
    paddingBottom: 5,
    paddingTop: 5,
    backgroundColor: 'white',
    width: '90%'
  },
});