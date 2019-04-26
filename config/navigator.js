import { createStackNavigator, createAppContainer } from "react-navigation";
import App from '../modules/App';
import DashboardContainer from '../modules/Dashboard/containers';
// import React from 'react';

const AppNavigator = createStackNavigator({
    App: {
      screen: App
    },
    Dashboard : {
        screen: DashboardContainer
    }
  },{
      initialRouteName:"App"
  });
  const AppContainer =  createAppContainer(AppNavigator);
  export default AppContainer;