import './AboutUs.css';

import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Element } from 'react-scroll';
import { Gears } from './Gears.js';
import { Scroll, MobileOrigins } from './Origins.js';
import { Pillars } from './Pillars.js';
import { gearPosition, pillarData } from './data.js';

class AboutUs extends Component {
  render() {
    return (
      <Element name="about-us" className="element about">
        {gearPosition.map((position, i) => (
          <Gears position={position} key={i}/>
        ))}

        <h1 className="title"> About Us </h1>

        <Grid>
          <Row>
            <h1 className="about-section-title">The Origins of Theta Tau UCSD</h1>
            <Col className="about-description">
              <Scroll />

              <MobileOrigins />
            </Col>
          </Row>
          <Row>
            <h1 className="about-section-title">The Three Pillars</h1>
            {/*
            <div className="about-quote-container"> 
              <span className="about-quotes">&#10077;</span>
              <h3 className="about-quote-body">
                We, as brothers of Theta Tau, strive to embody the three pillars of our fraternity.
              </h3>
              <span className="about-quotes">&#10078;</span>
            </div> 
            */}

            {pillarData.map((pillar, i) => (
              <Col className="pillar-container" md={4} key={i}>
                <Pillars pillar={pillar} index={i} />
              </Col>
            ))}
          </Row>
        </Grid>
      </Element>
    );
  }
}

export { AboutUs }
