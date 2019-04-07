import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
{/*import * as firebase from 'react-native-firebase'; */}
import MainTaNavigator from '../navigation/MainTabNavigator';
import { StackNavigator } from 'react-navigation';
import { AuthSession } from 'expo';
import * as firebase from 'firebase';
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

            </View>
          

        )

    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'

  },
});