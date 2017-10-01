import './App.css';
import '../fontello/css/fontello.css';

import React, {Component} from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

export default App;
