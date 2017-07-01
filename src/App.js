import React, { Component } from 'react';
import * as firebase from 'firebase';
import { LoginStack } from './Router';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDzXxa79gpAvMcHT0A9lhQ8ZOFCjJ0pyig",
    authDomain: "appwk12.firebaseapp.com",
    databaseURL: "https://appwk12.firebaseio.com",
    projectId: "appwk12",
    storageBucket: "appwk12.appspot.com",
    messagingSenderId: "309678766835"
    });
  }

  render() {
    return (
      <LoginStack />
    );
  }
}


export default App;
