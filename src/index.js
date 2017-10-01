import './index.css';
// import registerServiceWorker from './registerServiceWorker.js';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import App from './App/App';
import Garnett from './containers/Garnett/Garnett';
import Home from './containers/Home';
import MemberPage from './containers/MemberPage/MemberPage';
import RushInfo from './containers/RushInfo/RushInfo'
import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-107328054-1');
ReactGA.pageview(window.location.pathname);

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/garnett' component={Garnett}/>
        <Route exact path='/rush' component={RushInfo}/>
        <Route exact path='/members' component={MemberPage}/>
        <Route path='*' component={Home}/>
      </Switch>
    </App>
  </BrowserRouter>, 
  document.getElementById('root'));
  