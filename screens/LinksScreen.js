import React from 'react';
import { Image, StyleSheet, Text, View, Button } from 'react-native';
{/*import * as firebase from 'react-native-firebase'; */}
import MainTaNavigator from '../navigation/MainTabNavigator';
import { StackNavigator } from 'react-navigation';
import { AuthSession } from 'expo';
//import * as firebase from 'firebase';
import MainTabNavigator from '../navigation/MainTabNavigator';
const FB_APP_ID = '414920962651232';
import { Input } from 'react-native-elements';

{/*
// Initialize Firebase
const firebaseConfig = {
  apiKey: "<YOUR-API-KEY>",
  authDomain: "<YOUR-AUTH-DOMAIN>",
  databaseURL: "<YOUR-DATABASE-URL>",
  storageBucket: "<YOUR-STORAGE-BUCKET>"
};

firebase.initializeApp(firebaseConfig);
*/}

export default class login extends React.Component {
  static navigationOptions = {
    header: null,
  };
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          error: '',
          loading: false };
    }
    onLoginPress() {

        this.setState({ error: '', loading: true });
        alert({email}, {password});
        const { email, password } = this.state;

        {/*firebacks.
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ error: '', loading: false });
                this.props.navigation.navigate('Main');

            })
            .catch(() => {
                this.setState({ error: 'Authentication failed', loading: false });

            })*/}

    }

    onSignUpPress() {
        this.setState({ error: '', loading: true });
        const { email, password } = this.state;
        {/*firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ error: '', loading: false });
                this.props.navigation.navigate('Main');

            })
            .catch(() => {
                this.setState({ error: 'Authentication failed', loading: false });

            })*/}
    }

    renderButtonOrLoading() {
        if (this.state.loading) {
            return <Text> Loading </Text>
        }
        return <View>
            <Button
                onPress={this.onLoginPress.bind(this)}
                title='Login'/>
            <Button
                onPress={this.onSignUpPress.bind(this)}
                title='Sign up'/>

        </View>

    }
    render() {

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

                <Input
                  label='Email'
                  placeholder='joebruin@ucla.edu'
                  inputContainerStyle={{
                  }}
                  containerStyle={{
                    marginBottom: 20,
                    width: '80%'
                  }}
                  onChangeText={email => this.setState({ email })}

                />

                <Input
                  label='Password'
                  placeholder='******'
                  inputContainerStyle={{
                  }}
                  containerStyle={{
                    width: '80%',
                  }}
                  onChangeText={password => this.setState({ password })}
                />

                <Text>{this.state.error}</Text>
                {this.renderButtonOrLoading()}

								<Button title="Log in with your facebook account" onPress={this._handlePressAsync} />
				        {this.state.result ? (
				          <Text>Login Successfully!</Text>
						  				        // <Text>{JSON.stringify(this.state.result)}*</Text>
				        ) : null}

            </View>


        )

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
    backgroundColor: '#fae3d9',
    alignItems: 'center',
    justifyContent: 'center'

  },
    welcomeImage: {
      width: 200,
      height: 200,
      resizeMode: 'contain',
      marginTop: 3,
      marginLeft: -10,
    },

});
