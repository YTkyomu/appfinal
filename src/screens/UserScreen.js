import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import * as firebase from 'firebase';
import { Tile, List, ListItem, Button } from 'react-native-elements';
// import me from '../json/me.json';

// Make a component
class UserScreen extends Component {
  state = {
    email: null,
    username: null,
    city: null,
    phone: null,
    gender: null
  };

  componentDidMount() {
    this.setUserInfo();
  }

  setUserInfo = async () => {
    const { currentUser } = firebase.auth();
    let dbUserid = firebase.database().ref(`/users/${currentUser.uid}`);
    try {
      let snapshot = await dbUserid.once('value');
      let username = snapshot.val().username;
      let email = snapshot.val().email;
      let city = snapshot.val().city;
      let phone = snapshot.val().phone;
      let gender = snapshot.val().gender;

      this.setState({ username, email, city, phone, gender });
    } catch (err) { }

  }

  onSignOut = () => {
    firebase.auth().signOut();
    this.props.navigation.navigate('LoginScreen');
  }

  render() {
    const { email, phone, username, city, gender } = this.state;
    return (
      <ScrollView>
        <View style={styles.viewStyle}>
          <List>
            <ListItem
              title="Username"
              titleStyle={{fontSize: 15}}
              rightTitle={username}
              rightTitleStyle={{fontSize: 15}}
              hideChevron
            />
          </List>
          <List>
            <ListItem
              title="Email"
              titleStyle={{fontSize: 15}}
              rightTitle={email}
              rightTitleStyle={{fontSize: 15}}
              hideChevron
            />
            <ListItem
              title="Phone"
              titleStyle={{fontSize: 15}}
              rightTitle={phone}
              rightTitleStyle={{fontSize: 15}}
              hideChevron
            />
          </List>
          <List>
            <ListItem
              title="Gender"
              titleStyle={{fontSize: 15}}
              rightTitle={gender}
              rightTitleStyle={{fontSize: 15}}
              hideChevron
            />
            <ListItem
              title="City"
              titleStyle={{fontSize: 15}}
              rightTitle={city}
              rightTitleStyle={{fontSize: 15}}
              hideChevron
            />
          </List>
        </View>
          <View style={{ flex: 1, marginTop: 20 }}>
            <Button
              textStyle = {{fontSize:18}}
              title='Sign out'
              onPress={this.onSignOut}
            />
          </View>
      </ScrollView>
    );
  }
}

const styles = {
  viewStyle: {
    marginRight: 5,
    marginLeft: 5,
  },
};

export default UserScreen;