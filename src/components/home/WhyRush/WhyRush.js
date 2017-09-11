import React, {Component} from 'react';

import {Element} from 'react-scroll';
import {Image, Grid, Row, Col} from 'react-bootstrap';
import {MdWork, MdBuild, MdTextsms, MdInfo, MdLocationOn} from 'react-icons/lib/md';

class WhyRush extends Component {
  render() {
    return (
        <Element name="why-rush" className="element">
          <div className="rush-container">
            <Grid className="rush-container">
              <Row className="rush-container">
                <Col xs={12} md={6} lg={4}>
                  <Image className="" src={require('./images/rushflyer.jpg')} responsive/>
                </Col>
                <Col xs={12} md={6} lg={8}>
                  <Row>
                    <div className="rush-header">
                      <span className="rush-title"> Rush Fall 2017</span>
                      <span className="rush-subheader">  Rush is a week full of events to interact with the active body </span>
                    </div>
                  </Row>
                  <Row>
                    <Col xs={12} md={6}>
                      <div className="rush-subcontent">
                        <span className="rush-title"> <MdInfo />  Info Night </span>
                        <span className="rush-details"> <MdLocationOn /> Triton Statue, Tuesday 4/4  7:30 PM</span>
                        <p className="rush-summary"> Come out to the first rush event to get a gist of what the fraternity is all about and meet the brothers of Theta Tau! Let's break the ice! </p>
                      </div>
                      <div className="rush-subcontent">
                        <span className="rush-title"> <MdWork />  Professional Night</span>
                        <span className="rush-details"> <MdLocationOn /> Triton Statue, Thursday 4/6 7:30 PM</span>
                        <p className="rush-summary"> Get your resumes critiqued and learn quality professional skills from actives in industry. Professional attire is highly recommended. </p>
                      </div>
                    </Col>
                    <Col xs={12} md={6}>
                      <div className="rush-subcontent">
                        <span className="rush-title"> <MdTextsms />  Meet N Greet</span>
                        <span className="rush-details"> <MdLocationOn /> Triton Statue, Wednesday 4/5 7:30 PM </span>
                        <span className="rush-summary"> Engineer seeking engineer? <br /> Well now is your chance to mingle with the brothers of Theta Tau -- speed-dating style. </span>
                      </div>
                      <div className="rush-subcontent">
                        <span className="rush-title"> <MdBuild />  Engineer Night</span>
                        <span className="rush-details"> <MdLocationOn /> RIMAC, Friday 4/7 6:30 PM </span>
                        <span className="rush-summary"> Interact with other rushees and put your skills to the test with engineering-related challenges! Be prepared to get hands on with the Brothers! </span>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={3}>
                  <div className="rush-steps">
                    <span className="step-title"> Rush </span>
                    <span className="step-details"> Learn about what the fraternity is all about. Get to meet the members of Theta Tau are made of.</span>
                  </div>
                </Col>
                <Col xs={12} md={3}>
                  <div className="rush-steps">
                    <span className="step-title"> Interview </span>
                    <span className="step-details"> Learn about what the fraternity is all about. Get to meet the members of Theta Tau are made of.</span>
                  </div>
                </Col>
                <Col xs={12} md={3}>
                  <div className="rush-steps">
                    <span className="step-title"> Bid </span>
                    <span className="step-details"> Learn about what the fraternity is all about. Get to meet the members of Theta Tau are made of.</span>
                  </div>
                </Col>
                <Col xs={12} md={3}>
                  <div className="rush-steps">
                    <span className="step-title"> Pledge </span>
                    <span className="step-details"> Learn about what the fraternity is all about. Get to meet the members of Theta Tau are made of.</span>
                  </div>
                </Col>
              </Row>
            </Grid>
          </div>
        </Element>
    );
  }
}

export {WhyRush};
