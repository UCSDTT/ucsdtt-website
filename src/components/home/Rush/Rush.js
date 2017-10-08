import './Rush.css';

import React, {Component} from 'react';
import {Element} from 'react-scroll';
import {RushLeft, RushRight} from './RushSections.js';

class Rush extends Component {
  render() {
    return (
      <Element name="rush" className="rush">
        <RushLeft />
        <RushRight />
      </Element>
    );
  }
}

export {Rush};
