import './AboutUs.css';
import { createScroll } from './helpers/createScroll';
import { isChrome, isMobile } from '../../../shared/helpers.js';

import React, { Fragment } from 'react';
import styled from 'styled-components';

const isDesktop = window.innerWidth > 992

class Origins extends React.Component {
  componentDidMount() {
    if (isDesktop) {
      createScroll();
    }
  }

  get body() {
    return (
      <Fragment>
        <p>
          { isDesktop ? <Lorem>I</Lorem> : <span>&nbsp;&nbsp;&nbsp;&nbsp;I</span> }
          n the Spring of 2009, several students of UCSD&rsquo;s Jacobs School
          of Engineering felt that there was a lack of engineering
          representation in the Greek community on campus. Luckily an
          opportunity arose for them to change that.
        </p>
        <FoundersList>
          &nbsp;&nbsp;&nbsp;&nbsp;With the help of a Theta Tau alumnus,
          <i>&nbsp;Jennifer Young</i>,&nbsp;thirteen founding fathers
          {!isMobile() && (
            <ScrollCrest
              className="lozad"
              data-src={isChrome ? require('./images/crest.webp') : require('./images/crest.png')}
              alt="Crest"
            />
          )}
          &nbsp;took the first step towards establishing a chapter of the nation&rsquo;s
          oldest and largest professional engineering fraternity on the UCSD
          campus:
          <i>&nbsp;Ashay Verma</i>,<i>&nbsp;Errynne Bell</i>,
          <i>&nbsp;Takahiro Kuwayama</i>,<i>&nbsp;Amelia Chu</i>,
          <i>&nbsp;Xiumei Wu</i>,<i>&nbsp;Chris Lam</i>,
          <i>&nbsp;Chuong Do</i>,<i>&nbsp;Joe Shao</i>,
          <i>&nbsp;Michelle Mojica</i>,
          <i>&nbsp;Tanakorn Best Techajongchareon</i>,<i>&nbsp;Scott Louie</i>
          ,<i>&nbsp;Alan Leung</i>,&nbsp;and
          <i>&nbsp;John Phu Nguyen</i>.
        </FoundersList>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;On November 20th, 2010, UCSD was installed as
          the Epsilon Delta Chapter of Theta Tau.
        </p>
        <FoundersImage
          className="lozad"
          data-src={isChrome ? require('./images/founders.webp') : require('./images/founders.jpg')}
          alt="Founders"
        />
      </Fragment>
    )
  }

  render() {
    if (isDesktop) {
      return (
        <div id="container">
          <div id="content">
            <ScrollTitle>
              <h1>The Founding</h1>
              <h2>of</h2>
              <h1>Epsilon Delta Chapter</h1>
            </ScrollTitle>
            { this.body }
          </div>
        </div>
      );
    }
    return (
      <div>
        { this.body }
      </div>
    );
  }
}

export { Origins };

const ScrollTitle = styled.header`
  margin-top: 30px;
  text-align: center;

  > {
    margin-top: 10px;
    margin-bottom: 0;
    text-align: center;
  }

  & h1 {
    font-size: 45px;
  }

  & h2 {
    font-size: 25px;
  }
`;

const Lorem = styled.span`
  @media (min-width: 992px) {
    font-size: 7em;
    color: var(--primary-color);
    float: left;
    line-height: 1;
    margin-right: 20px;
  }
`;

const FoundersList = styled.p`
  & i {
    color: var(--primary-color);

    @media (max-width: 992px) {
      display: inline-block;
      font-weight: 700;
    }
  }
`;

const ScrollCrest = styled.img`
  float: right;
  height: 300px;
  margin: 20px 20px 0;
`;

const FoundersImage = styled.img`
  width: 80%;
  margin: 50px 75px 180px;
  filter: grayscale(80%);

  @media (max-width: 992px) {
    width: 100%;
    margin: 50px 0 0;
    filter: grayscale(80%);
  }
`;
