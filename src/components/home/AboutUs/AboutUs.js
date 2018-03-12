import './AboutUs.css';

import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {Element} from 'react-scroll';
import {Gears} from './Gears.js';
import {Scroll, MobileOrigins} from './Origins.js';
import {Pillars} from './Pillars.js';
import {gearPosition, pillarData} from './data.js';

/* Runs when you scroll */
window.onscroll = function() {
  let navbarHeight = document.querySelector('.navbar').clientHeight;
  let landingHeight = document.querySelector('.landing').clientHeight;
  let rushHeight = document.querySelector('.rush').clientHeight;
  let whyRushHeight = document.querySelector('.why-rush').clientHeight;
  let aboutHeight = document.querySelector('.element.about').clientHeight;
  let gears = document.getElementsByClassName('gear');
  let gearsOpp = document.getElementsByClassName('gear-opp');
  let wScroll = document.body.scrollTop || document.documentElement.scrollTop;

  /* Checks if browser is Safari */
  let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  /* If browser is safari, hide scroll and display text instead */
  if (isSafari) {
    if (window.innerWidth >= 992) {
      document.getElementById('container').style.display = 'none';
      document.querySelector('.mobile-origins').style.display = 'block';
      document.querySelector('.about-description').style.height = '1050px';
    }
    if (window.innerWidth <= 1200 && window.innerWidth > 992) {
      document.querySelector('.about-description').style.height = '1200px';   
    }
  }

  /* Changes the navbar color when you scroll past the navbar height */
  if (wScroll >= navbarHeight) {
    document.querySelector('.navbar').style.background = 'var(--secondary-dark)';
    document.querySelector('.navbar').style.boxShadow = '0 2px 16px rgba(12,42,51,.3)';
  }
  else {
    document.querySelector('.navbar').style.background = 'transparent';
    document.querySelector('.navbar').style.boxShadow = 'none';
  }
  
  /* Displays gears if window width is greater than 768px */
  if (window.innerWidth >= 768) {
    /* Rotate gears if it you scroll between landing and faqs */
    if (wScroll <= landingHeight + aboutHeight + rushHeight + whyRushHeight &&
        wScroll >= landingHeight) {
      Array.from(gears).forEach( gear => {
        gear.style.transform = 'rotate(' + wScroll / 5 + 'deg)';
      })
      Array.from(gearsOpp).forEach( gear => {
        gear.style.transform = 'rotate(-' + wScroll / 5 + 'deg)';
      })
    }
  }
}

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

export {AboutUs}
