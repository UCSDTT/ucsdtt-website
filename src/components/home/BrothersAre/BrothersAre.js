import React, {Component} from 'react';
import ReactRotatingText from 'react-rotating-text';
import {Element} from 'react-scroll';
import './BrothersAre.css';

class BrothersAre extends Component {
  render() {
    return (
      <Element name="brothers-are" className="element">
        <div className="container">
          <h1 className="header"> Brothers </h1>
          <h3 className="brothers-intro"> Check out all the activities that our brothers do together! </h3>
          <div className="brothers-are-container">
            <h3> Brothers are </h3>
            <ReactRotatingText className="rotating-text" 
              items={['friends', 'buddies', 'mates']} 
            />
          </div>
        </div>
      </Element>
    );
  }
}

export {BrothersAre};
