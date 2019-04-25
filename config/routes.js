import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import LoginScreen from '../modules/login/loginScreen';
import NotFound from '../modules/notFound/notFoundScreen';
import  App from '../modules/App';
export default () => {
 return (
   <BrowserRouter>
   <Switch>
       <Route exact path = "/" component = {App}/>
   <Route exact path='/home' component={LoginScreen}/>
   <Route path='/notFound' component={NotFound}/>
   </Switch>
   </BrowserRouter>
 )
}