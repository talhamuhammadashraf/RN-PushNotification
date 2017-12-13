import React from 'react'
import { AppRegistry,View,Text } from 'react-native';
import App from './App';
import firebase from 'react-native-firebase'
// import { fire } from './server/functions/node_modules/firebase-admin';
// import firebase from 'firebase'
// import RNfirebase from "react-native-firebase"
// var config = {
//   apiKey: "AIzaSyD8T9ncXQHlgsggXEVZw5rOF-3fIXn4TBg",
//   authDomain: "push-notification-01996.firebaseapp.com",
//   databaseURL: "https://push-notification-01996.firebaseio.com",
//   projectId: "push-notification-01996",
//   storageBucket: "push-notification-01996.appspot.com",
//   messagingSenderId: "312303248462",
//   debug:true
// };
// firebase.initializeApp(config);
console.log(firebase)
firebase.messaging().getToken().then((token)=>{console.log("token",token)})

AppRegistry.registerComponent('pushNot', () => App);
