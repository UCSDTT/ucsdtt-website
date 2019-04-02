import './AboutUs.css';

import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import { Gears } from './Gears.js';
import { Scroll, MobileOrigins } from './Origins.js';
import { Pillars } from './Pillars.js';
import { gearPosition, pillarData } from './data.js';

class AboutUs extends Component {
  render() {
    return (
      <Section name="about-us" className="element about">
        {gearPosition.map((position, i) => (
          <Gears position={position} key={i} />
        ))}

        <h1 className="title"> About Us </h1>

        <Container>
          <Row>
            <Header>The Origins of Theta Tau UCSD</Header>
          </Row>
          <Row>
            <Col className="about-description">
              <Scroll />

              <MobileOrigins />
            </Col>
          </Row>
          <Row>
            <Header>The Three Pillars</Header>
            {pillarData.map((pillar, i) => (
              <PillarContainer key={i}>
                <Pillars pillar={pillar} index={i} />
              </PillarContainer>
            ))}
          </Row>
        </Container>
      </Section>
    );
  }
}

export { AboutUs };

const Section = styled(Element)`
  position: relative;
  overflow: hidden;
  padding-bottom: 20vw;
`;

const Header = styled.h1`
  font-family: 'Helvetica Neue Condensed';
  font-weight: 700;
  font-size: 40px;
  color: var(--secondary-color);
  margin-bottom: 40px;
  width: 100%;
`;

const PillarContainer = styled(props =>
  <Col md={4} {...props} />
)`
  margin-bottom: 50px;
`;
