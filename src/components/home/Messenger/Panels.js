import './Messenger.css';

import React from 'react';

/* The front panel of the card */
class Front extends React.Component {
  render() {
    return <div className="front tile">{this.props.children}</div>;
  }
}

/* The back panel of the card */     
class Back extends React.Component {
  render() {
    return <div className="back tile">{this.props.children}</div>;
  }
}

export { Front, Back }