import './Rush.css';

import React, {Component} from 'react';
import {Element} from 'react-scroll';
import rushData from './data.js';

class Rush extends Component {
  render() {
    return (
      <Element name="rush" className="rush">
        <div className="rush-pic-container">
          <img className="lozad rush-pic" data-src={require('./images/rush-pic.webp')}></img>
        </div>

        <div className="rush-details-container">
          <div className="rush-details-header">
            <h2><span style={{'color': '#fff'}}>&Theta;&Tau;</span> Fall Rush 2017</h2>
            <h4>Professional Co-ed Engineering Fraternity</h4>
          </div>

          <div className="rush-details-body">
            <div className="rush-row">
              <div className="check-us-out">
                <h3>Check us out on <span>Library Walk!</span></h3>
              </div>
            </div>
            {rushData.map((event, i) => (
              <div className="rush-row" key={i}>
                <div className="rush-date">
                  <h4>{event.date}</h4>
                  <h4>{event.day}</h4>
                </div>
                <div className="rush-event">
                  <h2>{event.name}</h2>
                  <p className="rush-time">{event.time}</p>
                  <p>{event.description}</p>
                </div>
              </div>
            ))}
            <div className="rush-row">
              <div className="rush-chairs">
                <p><span>Ming Ming Liu</span> <a href="mailto:mingmingliu9@gmail.com">mingmingliu9@gmail.com</a> (650)690-6361</p>
                <p><span>Momina Mahmood</span> <a href="mailto:mominam96@gmail.com">mominam96@gmail.com</a> (510)676-2260</p>
              </div>
              <div className="rush-media">
                <a href="https://www.facebook.com/thetatau.ucsd/" target="_blank" rel="noopener noreferrer">
                  <i className="icon-facebook"></i>
                </a>
                <a href="https://instagram.com/thetatau_ucsd/" target="_blank" rel="noopener noreferrer">
                  <i className="icon-instagram"></i>
                </a>
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    );
  }
}

export {Rush};
