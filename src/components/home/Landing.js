import React, {Component} from 'react';
import {Image} from 'react-bootstrap';

class Landing extends Component {
  render() {
    return (
    <div className="landing">
      <Image className="landing-image" src={require('../../../public/images/BR.jpg')} responsive/>   
    </div>
    );
  }
}

export {Landing};
