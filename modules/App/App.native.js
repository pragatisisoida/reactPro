import {styles} from './styles';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>My new Native APP</Text>
      </View>
    );
  }
}

