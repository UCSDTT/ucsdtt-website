import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from 'components/App';
import Home from 'components/Home/Home';
import Members from 'components/Members/Members';
import Rush from 'components/Rush/Rush';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/rush" component={Rush} />
        <Route exact path="/members" component={Members} />
        <Route path="*" component={Home} />
      </Switch>
    </App>
  </BrowserRouter>,
  document.getElementById('root')
);
