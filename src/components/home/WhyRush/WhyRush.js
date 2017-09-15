import './WhyRush.css';

import React, {Component} from 'react';
import {Element} from 'react-scroll';
import {Image, Grid, Row, Col} from 'react-bootstrap';

class WhyRush extends Component {
  render() {
    return (
      <Element name="why-rush" className="element">
        <div className="rush-container">
          <Grid className="rush-container">
            <Row className="rush-container">
              <Col xs={12} md={4} >
                <Image className="" src={require('./images/rushflyer.jpg')} responsive/>
              </Col>
              <Col xs={12} md={8}>
                <Row>
                  <div className="rush-header">
                    <span className="rush-title"> Rush Fall 2017</span>
                    <span className="rush-subheader">  Rush is a week full of events to interact with the active body </span>
                  </div>
                </Row>
                <Row>
                  <Col xs={12} md={6}>
                    <div className="rush-subcontent">
                      <span className="rush-title">
                        <i className="icon-info-circled"></i> Info Night 
                      </span>
                      <span className="rush-details">
                        <i className="icon-location"></i> Triton Statue, Tuesday 4/4  7:30 PM
                      </span>
                      <p className="rush-summary"> Come out to the first rush event to get a gist of what the fraternity is all about and meet the brothers of Theta Tau! Let's break the ice! </p>
                    </div>
                    <div className="rush-subcontent">
                      <span className="rush-title"> 
                        <i className="icon-suitcase"></i>  Professional Night
                      </span>
                      <span className="rush-details">
                        <i className="icon-location"></i> Triton Statue, Thursday 4/6 7:30 PM
                      </span>
                      <p className="rush-summary"> Get your resumes critiqued and learn quality professional skills from actives in industry. Professional attire is highly recommended. </p>
                    </div>
                  </Col>
                  <Col xs={12} md={6}>
                    <div className="rush-subcontent">
                      <span className="rush-title">
                        <i className="icon-wechat"></i>  Meet N Greet
                      </span>
                      <span className="rush-details">
                        <i className="icon-location"></i> Triton Statue, Wednesday 4/5 7:30 PM 
                      </span>
                      <span className="rush-summary"> Engineer seeking engineer? <br /> Well now is your chance to mingle with the brothers of Theta Tau -- speed-dating style. </span>
                    </div>
                    <div className="rush-subcontent">
                      <span className="rush-title">
                        <i className="icon-wrench"></i>  Engineer Night
                      </span>
                      <span className="rush-details">
                        <i className="icon-location"></i> RIMAC, Friday 4/7 6:30 PM
                      </span>
                      <span className="rush-summary"> Interact with other rushees and put your skills to the test with engineering-related challenges! Be prepared to get hands on with the Brothers! </span>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={3}>
                <div className="rush-steps">
                  <i className="icon-chat rush-step-icon"></i>
                  <span className="step-title"> Rush </span>
                  <hr className="step-break"/>
                  <span className="step-details"> Join us for a whole week of rush events! Learn about the fraternity,  interact with other rushees, and mingle with the members of Theta Tau.</span>
                </div>
              </Col>
              <Col xs={12} md={3}>
                <div className="rush-steps">
                  <i className="icon-users rush-step-icon"></i>
                  <span className="step-title"> Interview </span>
                  <hr className="step-break"/>
                  <span className="step-details"> The Brothers of Theta Tau would like to find out more about you and hear about the reasons for your interest in Theta Tau through a formal interview. </span>
                </div>
              </Col>
              <Col xs={12} md={3}>
                <div className="rush-steps">
                 <i className="icon-mail-alt rush-step-icon"></i>
                  <span className="step-title"> Bid </span>
                  <hr className="step-break" />
                  <span className="step-details"> If the Brothers of Theta Tau decide on you, an invitation will be sent to you. It is your choice to continue to the pledging process or decline the bid. </span>
                </div>
              </Col>
              <Col xs={12} md={3}>
                <div className="rush-steps">
                  <i className="icon-ok-circled rush-step-icon"></i>
                  <span className="step-title"> Pledge </span>
                  <hr className="step-break"/>
                  <span className="step-details"> Once you accept your bid, you will then begin pledging. Prepare to spend a large amount of time and effort. "Approach it as a four unit upper division engineering course." </span>
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
