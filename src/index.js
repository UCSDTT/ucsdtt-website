import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import './index.css';

import Home from './containers/Home';
import Garnett from './containers/Garnett';
import MoreRush from './containers/MoreRush';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/garnett' component={Garnett}/>
        <Route exact path='/rush' component={MoreRush}/>
        <Route path='*' component={Home}/>
      </Switch>
    </App>
  </BrowserRouter>,
  document.getElementById('root')
);
