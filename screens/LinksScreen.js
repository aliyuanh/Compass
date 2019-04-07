import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { AuthSession } from 'expo';
import * as firebase from 'firebase';
import MainTabNavigator from '../navigation/MainTabNavigator';
import { StackNavigator } from 'react-navigation';
const FB_APP_ID = '414920962651232';

export default class App extends React.Component {
  state = {
    result: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Log in with your facebook account" onPress={this._handlePressAsync} />
        {this.state.result ? (
          <Text>{JSON.stringify(this.state.result)}</Text>
        ) : null}
        </View>
    );
  }

  _handlePressAsync = async () => {
    let redirectUrl = AuthSession.getRedirectUrl();
    let result = await AuthSession.startAsync({
      authUrl:
        `https://www.facebook.com/v2.8/dialog/oauth?response_type=token` +
        `&client_id=${FB_APP_ID}` +
        `&redirect_uri=${encodeURIComponent(redirectUrl)}`,
    });
    this.setState({ result });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
