import './Rush.css';

import React, { Component } from 'react';
import { Element } from 'react-scroll';
import { isChrome } from '../../../shared/helpers.js';

class Rush extends Component {
  render() {
    return (
      <Element name="rush" className="rush">
        <div className="rush-pic-container">
          <img
            className="lozad rush-pic"
            data-src={isChrome ? require('./images/rush-cover.webp') : require('./images/rush-cover.png')}
            alt="Rush"
          />
        </div>
      </Element>
    );
  }
}

export { Rush };
