import './Landing.css';

import React, {Component} from 'react';
import {scroller} from 'react-scroll';
import {Slides} from './Slides.js';
import {BrothersAre} from './BrothersAre.js';

class Landing extends Component {
  /* Scrolls to selected section */
  scrollToComp(name) {
    scroller.scrollTo(name, {
      offset: 0,
      smooth: true,
    });
  }

  render() {
    return (
      <div className="landing">
        <Slides />
        <BrothersAre />

        <div className="learn-more" onClick={() => this.scrollToComp("rush")}>
          Learn More
        </div>
      </div>
    );
  }
}

export {Landing};
