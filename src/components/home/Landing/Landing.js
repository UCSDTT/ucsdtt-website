import './Landing.css';

import React, { Component } from 'react';
import { scroller } from 'react-scroll';
import { Slides } from './Slides.js';
import { BrothersAre } from './BrothersAre.js';

/* Scrolls to selected section */
function scrollToComp(name) {
  scroller.scrollTo(name, {
    offset: 0,
    smooth: true
  });
}

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <Slides />
        <BrothersAre />

        <div className="learn-more" onClick={() => scrollToComp('rush')}>
          Learn More
        </div>
      </div>
    );
  }
}

export { Landing };
