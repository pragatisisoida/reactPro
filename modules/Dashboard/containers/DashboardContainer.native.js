import React from 'react';
import { Alert } from 'react-native';
import DashboardView from '../views/DashboardView';



export default class DashboardContainer extends React.Component {
    onClick=()=> {
        this.props.navigation.navigate('Modal');
        // Alert.alert('This is an example application to show how to reuse code between React and React Native');
    }
    render() {
        return <DashboardView onClick={this.onClick} props = {this.props} navigation = {this.props.navigation}/>
    }

}