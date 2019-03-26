import './Messenger.css';

import React from 'react';
import { Card } from 'react-bootstrap';

/* The front panel of the card */
class Front extends React.Component {
  render() {
    return <Card className="front">{this.props.children}</Card>;
  }
}

/* The back panel of the card */
class Back extends React.Component {
  render() {
    return <Card className="back">{this.props.children}</Card>;
  }
}

export { Front, Back };
