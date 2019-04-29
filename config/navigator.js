import { createStackNavigator, createAppContainer, createBottomTabNavigator, createDrawerNavigator } from "react-navigation";
import App from '../modules/App';
import DashboardContainer from '../modules/Dashboard/containers';
// import React from 'react';
import modalContainer from '../ui-components/modalContainer';
const MyDrawerNavigator = createDrawerNavigator({
  App: {
    screen: App,
    navigationOptions: {
      title: "App"
    }
  },
  Dashboard : {
      screen: DashboardContainer,
      navigationOptions:{
        title: "Home"
      }
  }
});
const AppNavigator = createStackNavigator({
  Drawer: {
    screen:MyDrawerNavigator
  },
    App: {
      screen: App,
     
    },
    Dashboard : {
        screen: DashboardContainer,
        
    }
  },{
      initialRouteName:"Drawer",
      headerMode: 'none'
      // defaultNavigationOptions: {
      //   headerStyle: {
      //     backgroundColor: '#f4511e',
      //   },
      //   headerTintColor: '#fff',
      //   headerTitleStyle: {
      //     fontWeight: 'bold',
      //   },
      // },
  });

  const modalStack = createStackNavigator(
    {
      Main: {
        screen: AppNavigator,
      },
      Modal: {
        screen: modalContainer,
      },
    },
    {
      mode: 'modal',
      headerMode: 'none',
    }
  );


  
  // const MyApp = createAppContainer(MyDrawerNavigator);

  // const Tabs = createBottomTabNavigator(AppNavigator);

  const AppContainer =  createAppContainer(modalStack);
  export default AppContainer;