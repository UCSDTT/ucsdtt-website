import React, {Component} from 'react';
import {Element} from 'react-scroll';
import {Image} from 'react-bootstrap';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

class WhyRush extends Component {
  render() {
    return (
      <Element name="why-rush" className="element">
        <div className="rush-container">
          <Image className="rush-banner" src={require('../../../public/images/rose.jpg')} responsive/>

          <div className="overlay-text">
            <h1 className="rush-title"> <strong> Rush Theta Tau </strong> </h1>

            <span className="rush-subtitle"> Learn about the fraternity and meet the active body </span>
            <div>
              <span className="rush-promo"> JOIN US FOR FALL 2017 RUSH</span>

              <a href = "/rush">
                <button className="rush-button" type = "button"> Learn More </button>
              </a>
            </div>
          </div>
        </div>
      </Element>
    );
  }
}

export {WhyRush};
