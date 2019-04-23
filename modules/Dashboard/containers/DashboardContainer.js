    
import React from 'react';
import AbstractDashboardContainer from './AbstractDashboardContainer';

export default class DashboardContainer extends AbstractDashboardContainer {
    onClick() {
        alert('This is an example application to show how to reuse code between React and React Native');
    }
}