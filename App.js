/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  WebView,
  Button
} from 'react-native';
import firebase from 'react-native-firebase'
// import PushNotification from 'react-native-push-notification'
import PushNotification from './config/pushNotification'
export default class App extends Component{
  // componentDidMount(){
  //   PushNotification.localNotification({
  //     title:"any",
  //     message:"anything"
  //   })
  // }
  render() {
    return (
      <View>
        <Button
          title="click to redirect"
          onPress={() => {
            firebase.database().ref("timePeriod").push("1234")
            .then(()=>{
              console.log("clicked")
            })
            // return
            // <WebView
            //   style={{ flex: 1 }}
            //   onError={(err) => { console.log("error") }}
            //   source={{ uri: "https://link-assignment.firebaseapp.com/" }}
            // />

          }} />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
