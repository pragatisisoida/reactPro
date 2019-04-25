import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';
// main app
import Router from './config/routes';
import App from './modules/App';


 ReactDOM.render(
    <Provider store={store}>
    <Router />
    </Provider>,
    document.getElementById('app')
   ) 