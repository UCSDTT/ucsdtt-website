import './AboutUs.css';

import React, { Component } from 'react';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import { Gears } from './Gears.js';
import { Origins } from './Origins.js';
import { Pillar } from './Pillar.js';
import { gearPosition, pillarData } from './data.js';

class AboutUs extends Component {
  render() {
    return (
      <Section name="about-us" className="element about">
        {gearPosition.map((position, i) => (
          <Gears position={position} key={i} />
        ))}

        <h1 className="title"> About Us </h1>

        <Header>The Origins of Theta Tau UCSD</Header>
        <div className="about-description">
          <Origins />
        </div>
        <Header>The Three Pillars</Header>
        <Pillars>
          {pillarData.map((pillar, i) => (
            <Pillar pillar={pillar} key={i} />
          ))}
        </Pillars>
      </Section>
    );
  }
}

export { AboutUs };

const Section = styled(Element)`
  position: relative;
  overflow: hidden;
  padding-bottom: 25vw;
`;

const Header = styled.h1`
  font-family: 'Helvetica Neue Condensed';
  font-weight: 700;
  font-size: 40px;
  color: var(--secondary-color);
  margin-bottom: 40px;
`;

const Pillars = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 320px);
  grid-gap: 30px;
  justify-content: center;
  justify-items: center;
`;
