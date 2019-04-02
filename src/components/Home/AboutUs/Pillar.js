import './AboutUs.css';
import { isChrome } from '../../../shared/helpers.js';

import React from 'react';
import styled from 'styled-components';

class Pillar extends React.Component {
  state = { zoom: false }

  showInfo = () => {
    /* Only runs when window width is greater than 768px */
    if (window.innerWidth >= 768) {
      this.setState({ zoom: true })
    }
  }

  hideInfo = () => {
    /* Only runs when window width is greater than 768px */
    if (window.innerWidth >= 768) {
      this.setState({ zoom: false })
    }
  }

  render() {
    return (
      <div>
        <ImageContainer
          onMouseOver={this.showInfo}
          onMouseOut={this.hideInfo}
        >
          <Image
            className="lozad"
            data-src={isChrome ? this.props.pillar.image : this.props.pillar.safari}
            alt="Pillar"
            zoom={this.state.zoom}
          />
          <InfoContainer zoom={this.state.zoom}>
            <Info>{this.props.pillar.info}</Info>
            <Description>{this.props.pillar.description}</Description>
          </InfoContainer>
        </ImageContainer>
        <Name>{this.props.pillar.name}</Name>
        <Content>{this.props.pillar.content}</Content>
      </div>
    );
  }
}

export { Pillar };

const ImageContainer = styled.div`
  position: relative;
  background-color: #000;
  overflow: hidden;
`;

const Image = styled.img`
  object-fit: cover;
  height: 300px;
  width: 100%;
  max-width: 100%;
  -moz-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;

  ${props => props.zoom && `
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    opacity: 0.5;
  `}
`;

const InfoContainer = styled.div`
  position: absolute;
  color: #fff;
  width: 80%;
  top: 50%;
  left: 50%;
  opacity: 0;

  ${props => props.zoom && `
    opacity: 1;
    animation: slideInUp 1s;
    animation-fill-mode: both;

    @keyframes slideInUp {
      from {
        opacity: 0;
        transform: translate(-50%, -20%);
        visibility: visible;
      }
      to {
        opacity: 1;
        transform: translate(-50%, -50%);
      }
    }
  `}
`;

const Info = styled.h3`
  font-weight: 700;
`;

const Description = styled.h4`
  line-height: 1.5;
`;

const Name = styled.h3`
  font-weight: 700;
  font-size: 35px;
  color: var(--primary-color);
  padding-top: 8px;
`;

const Content = styled.p`
  font-size: 18px;
  color: var(--secondary-light);
`;
