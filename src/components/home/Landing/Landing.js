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

        <a
          className="members-button"
          onClick={() => this.scrollToComp("rush")}
        >
          Learn More
        </a>

        {/*{quoteData.map((quote, i) => (
          <div
            className="quote"
            key={i}>
            <div className="quote-text-group">
              <span className="quote-quotes">❝</span>
              <p> <i>{quote.text}</i> </p>
            </div>
            <div className="quote-active-group">
              <Image className="active-image" src={require(`${quote.activeImage}`)} circle />
              <div className="quote-active-labels">
                <h1> {quote.active} </h1>
                <h2> {quote.major} </h2>
                <h2> {quote.class} </h2>
              </div>
            </div>
          </div>
        ))}*/}
      </div>
    );
  }
}

export {Landing};
