import './App.css';
import '../fontello/css/fontello.css';

import React, {Component} from 'react';
import ReactGA from 'react-ga';

class App extends Component {
  constructor() {
    super();
    ReactGA.initialize('UA-107328054-1');
    ReactGA.pageview(window.location.pathname);
  }
  
  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

export default App;
