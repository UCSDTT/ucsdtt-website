import './index.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import App from './App';
import Garnett from './containers/Garnett';
import Home from './containers/Home';
import MemberPage from './containers/MemberPage/MemberPage';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/garnett' component={Garnett}/>
        <Route exact path='/brothers' component={MemberPage}/>
        <Route path='*' component={Home}/>
      </Switch>
    </App>
  </BrowserRouter>
  , document.getElementById('root'));
