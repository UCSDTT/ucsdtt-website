import React, {Component} from 'react';
//import {Card, CardTitle, CardText } from 'material-ui/Card';
import {PageHeader, Image} from 'react-bootstrap';
import {Element} from 'react-scroll';
import './WhoWeAre.css';
import data from './data.js';

class WhoWeAre extends Component {
  render() {
    return (
      <Element name="who-we-are" className="element">
        <div className="container">
          <div className="who-we-are-big-cont">
            <PageHeader className="title"> Who We Are </PageHeader>
            <div className="who-we-are-content">
            <p className="description">
            "The purpose of Theta Tau is to develop and maintain a high standard of professional interest among its members, and to unite them in a strong bond of fraternal fellowship."
            </p>
            <Image
              className="class-image"
              src={require('./Images/pi-class.jpg')}
              responsive
              />
            </div>
          </div>
          <div className="pillars">
            {data.map((pillar, i) => (
              <div className="pillar-card" key={i}>
                <h3 className="pillar-name">
                  {pillar.name}
                </h3>
                <p className="pillar-content">
                  {pillar.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Element>
    );
  }
}

export {WhoWeAre}
