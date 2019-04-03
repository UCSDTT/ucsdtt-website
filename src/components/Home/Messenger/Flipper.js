import React from 'react';
import styled from 'styled-components';
import { Front, Back } from './Panels.js';
import { ActiveInfo } from './ActiveInfo.js';

/* Flipper component that consists of a front and back panel */
function Flipper({ index, flipped, frontActive, backActive }) {
  return (
    <Card index={index}>
      <FlipperContainer>
        <Front index={index} flipped={flipped}>
          <ActiveInfo active={frontActive} />
        </Front>
        <Back index={index} flipped={flipped}>
          <ActiveInfo active={backActive} />
        </Back>
      </FlipperContainer>
    </Card>
  );
}

export { Flipper };

const Card = styled.div`
  width: 100%;
  height: 463px;
`;

const FlipperContainer = styled.div`
  float: left;
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
`;
