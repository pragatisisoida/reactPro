import { createStackNavigator, createAppContainer, createBottomTabNavigator, createDrawerNavigator } from "react-navigation";
import App from '../modules/App';
import DashboardContainer from '../modules/Dashboard/containers';
import React from 'react';
import LoginScreen from '../modules/login/loginScreen';
import modalContainer from '../ui-components/modalContainer';
import {Container} from 'native-base';
import CustomHeader from '../ui-components/header';
import {Text} from 'react-native';
class TabA extends React.Component{
  render(){
    return(
<Container>
<CustomHeader title = {"TabA"}/>
<Text>This is TabA</Text>
</Container>
    )

  }
}
class TabB extends React.Component{
  render(){
    return(
<Container>
<CustomHeader title = {"TabB"}/>
<Text>This is TabB</Text>
</Container>
    )

  }
}



const myTabNav = createBottomTabNavigator({
  Dashboard:{
    screen:DashboardContainer
  },
  TabA: {
    screen:TabA
  },
  TabB :{
    screen: TabB
  }
},{
  initialRouteName:"Dashboard"
})
const MyDrawerNavigator = createDrawerNavigator({
  App: {
    screen: App,
    navigationOptions: {
      title: "App"
    }
  },
  Home : {
      screen: myTabNav,
     
  }
});
const AppNavigator = createStackNavigator({
  Drawer: {
    screen:MyDrawerNavigator
  },
    LoginScreen: {
      screen: LoginScreen,
    }
   
  },{
      initialRouteName:"LoginScreen",
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



  const AppContainer =  createAppContainer(modalStack);
  export default AppContainer;