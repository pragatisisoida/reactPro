    
import React from 'react';
import DashboardView from '../views/DashboardView';

export default class DashboardContainer extends React.Component {
    onClick() {
    //   this.props.navigation.navigate('Modal');
    }
    render() {
        return <DashboardView onClick={this.onClick} props = {this.props}/>;
    }

}