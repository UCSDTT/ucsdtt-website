import './Landing.css';

import React from 'react';
import { slideData }  from './data.js';

class BrothersAre extends React.Component {
  render() {
    return (
      <div className="brothers-are">
        <h1 className="brothers-are-text">
          Brothers are
        </h1>
        <h1 className="brothers-are-word">
          {slideData.map((slide, i) => (
            <span className="word" key={i}>
              {slide.name}
            </span>
          ))}
        </h1>
      </div>
    )
  }
}

export { BrothersAre };