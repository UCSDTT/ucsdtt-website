import './Members.css';
import { isChrome } from '../../shared/helpers.js';

import React from 'react';
import styled from 'styled-components';

function MemberInfo({ brother, open }) {
  return (
    <div>
      <ImageContainer>
        <Image
          src={isChrome ? brother.image : brother.safari}
          onClick={() => open(brother)}
          alt="Active"
        />
      </ImageContainer>
      <Name>{ brother.name }</Name>
      <Position>{ brother.position }</Position>
      <Class>{ brother.className }</Class>
    </div>
  );
}

export { MemberInfo };

const ImageContainer = styled.div`
  height: 250px;
  width: 190px;
  background-color: #000;
  margin: auto;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    height: 200px;
    width: 150px;
  }

  @media (max-width: 350px) {
    height: 180px;
    width: 130px;
  }
`;

const Image = styled.img`
  object-fit: cover;
  height: 250px;
  width: 190px;
  margin: auto;
  border-radius: 6px;
  -webkit-transition: opacity 0.5s;
  -moz-transition: opacity 0.5s;
  -o-transition: opacity 0.5s;
  transition: opacity 0.5s;

  &:hover {
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    height: 200px;
    width: 150px;
  }

  @media (max-width: 350px) {
    height: 180px;
    width: 130px;
  }
`;

const Name = styled.h4`
  font-weight: 700;
  font-size: 19px;
  color: var(--secondary-dark);
  margin-bottom: 0;

  @media (max-width: 992px) {
    font-size: 16px;
  }
`;

const Position = styled.p`
  font-size: 16px;
  color: var(--secondary-color);
  margin-bottom: 0;

  @media (max-width: 992px) {
    font-size: 14px;
  }
`;

const Class = styled(Position)``;
