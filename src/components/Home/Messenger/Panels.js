import React from 'react';
import styled from 'styled-components';

/* The front panel of the card */
function Front({ index, flipped, children }) {
  return <FrontCard index={index} flipped={flipped}>{ children }</FrontCard>;
}

/* The back panel of the card */
function Back({ index, flipped, children }) {
  return <BackCard index={index} flipped={flipped}>{ children }</BackCard>;
}

export { Front, Back };

const Card = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, .125);
  border-radius: 13px;
  backface-visibility: hidden;
  transform-style: preserve-3d;

  ${props => {
    switch (props.index) {
      case 0:
        return `
          transition: -webkit-transform ease 0.6s;
          transition: -moz-transform ease 0.6s;
          transition: transform ease 0.6s;
        `;
      case 1:
        return `
          transition: -webkit-transform ease 1.1s;
          transition: -moz-transform ease 0.6s;
          transition: transform ease 1.1s;
        `;
      case 2:
        return `
          transition: -webkit-transform ease 1.4s;
          transition: -moz-transform ease 0.6s;
          transition: transform ease 1.4s;
        `;
      default:
    }
  }}
`;

const FrontCard = styled(({ flipped, ...rest }) =>
  <Card {...rest} />
)`
  transform: rotateY(0deg);

  ${props => props.flipped && `
    transform: rotateY(180deg);
  `}
`;

const BackCard = styled(({ flipped, ...rest }) =>
  <Card {...rest} />
)`
  transform: rotateY(-180deg);

  ${props => props.flipped && `
    transform: rotateY(0deg);
  `};
`;
