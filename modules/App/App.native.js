import {styles} from './styles';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import {Icon, Container} from 'native-base';
import CustomHeader from '../../ui-components/header';
export default class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Container>
      <CustomHeader title = {"APP"} navigation = {this.props.navigation}/>
        <Text style={styles.welcome}>My new Native APP</Text>
        <Button
          title="Go to Dashboard"
          onPress={() => this.props.navigation.navigate('Dashboard')}
        />
      </Container>
    );
  }
}

