import './AboutUs.css';

import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Element } from 'react-scroll';
import { Gears } from './Gears.js';
import { Scroll, MobileOrigins } from './Origins.js';
import { Pillars } from './Pillars.js';
import { gearPosition, pillarData } from './data.js';

class AboutUs extends Component {
  render() {
    return (
      <Element name="about-us" className="element about" style={{ paddingBottom: 50 + 'px' }}>
        {gearPosition.map((position, i) => (
          <Gears position={position} key={i} />
        ))}

        <h1 className="title"> About Us </h1>

        <Container>
          <Row>
            <h1 className="about-section-title">The Origins of Theta Tau UCSD</h1>
          </Row>
          <Row>
            <Col className="about-description">
              <Scroll />

              <MobileOrigins />
            </Col>
          </Row>
          <Row>
            <h1 className="about-section-title">The Three Pillars</h1>
            {pillarData.map((pillar, i) => (
              <Col className="pillar-container" md={4} key={i}>
                <Pillars pillar={pillar} index={i} />
              </Col>
            ))}
          </Row>
        </Container>
      </Element>
    );
  }
}

export { AboutUs };
