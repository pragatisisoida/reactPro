/**
 * @format
 */
import { Provider } from 'react-redux';
import store from './store/index';
import React from 'react';
import {AppRegistry} from 'react-native';
// import App from './modules/App/App';
import {name as appName} from './app.json';
import AppContainer from './config/navigator';
const App = () => (
    <Provider store={store}>
  <AppContainer />
    </Provider>
  
  ); 

AppRegistry.registerComponent(appName, () => App);
