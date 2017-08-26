import React, {Component} from 'react';
import {Image, Carousel} from 'react-bootstrap';

class Landing extends Component {
  render() {
    return (
    <div className="landing">
      <Image className="landing-image" src={require('../../../../public/images/BR.jpg')} responsive/>
      <Carousel.Caption>
        <h1>Theta Tau @ UC San Diego</h1>
      </Carousel.Caption>
    </div>
    );
  }
}

export {Landing};
