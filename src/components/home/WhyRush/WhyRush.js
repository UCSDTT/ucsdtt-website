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
                <Col xs={12} md={4}>
                  <Image className="" src={require('./images/rushflyer.jpg')} responsive/>
                </Col>
                <Col xs={12} md={8}>
                  <Row>
                    <div className="rush-header">
                      <span className="rush-title"> Rush Fall 2017</span>
                      <span className="rush-details">  Rush is a week full of events to learn about the fraternity and to meet the active body. </span>
                    </div>
                  </Row>
                  <Row>
                    <Col xs={12} md={6}>
                      <div className="rush-subheader">
                        <span className="rush-title"> Info Night </span>
                        <span className="rush-details"> Triton Statue, Tuesday 4/4  7:30 PM</span>
                        <p className="rush-summary"> Come out and learn about our fraternity and meet the brothers of Theta Tau! </p>
                      </div>
                      <div className="rush-subheader">
                        <span className="rush-title"> Professional Night</span>
                        <span className="rush-details"> Triton Statue, Thursday 4/6 7:30 PM</span>
                        <p className="rush-summary"> Get your resumes critiqued and learn quality professional skills from actives in industry. Professional attire recommended. </p>
                      </div>
                    </Col>
                    <Col xs={12} md={6}>
                      <div className="rush-subheader">
                        <span className="rush-title"> Meet N Greet</span>
                        <span className="rush-details"> Triton Statue, Wednesday 4/5 7:30 PM </span>
                        <span className="rush-summary"> Engineer seeking engineer? Meet the brothers of Theta Tau speed-dating style. </span>
                      </div>
                      <div className="rush-subheader">
                        <span className="rush-title"> Engineer Night</span>
                        <span className="rush-details"> RIMAC, Friday 4/7 6:30 PM </span>
                        <span className="rush-summary"> Interact with other rushees and put your skills to the test with engineering-related games with the brothers! </span>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={3}>
                  <div className="rush-steps">
                    <span className="step-title"> RUSH THETA TAU </span>
                    <span className="step-details"> Learn about what the fraternity is all about. Get to meet the members of Theta Tau are made of.</span>
                  </div>
                </Col>
                <Col xs={12} md={3}>
                  <div className="rush-steps">
                    <span className="step-title"> RUSH THETA TAU </span>
                    <span className="step-details"> Learn about what the fraternity is all about. Get to meet the members of Theta Tau are made of.</span>
                  </div>
                </Col>
                <Col xs={12} md={3}>
                  <div className="rush-steps">
                    <span className="step-title"> RUSH THETA TAU </span>
                    <span className="step-details"> Learn about what the fraternity is all about. Get to meet the members of Theta Tau are made of.</span>
                  </div>
                </Col>
                <Col xs={12} md={3}>
                  <div className="rush-steps">
                    <span className="step-title"> RUSH THETA TAU </span>
                    <span className="step-details"> Learn about what the fraternity is all about. Get to meet the members of Theta Tau are made of.</span>
                  </div>
                </Col>
              </Row>
            </Grid>
            //
            // <Grid className="rush-container">
            //   <Row className="rush-container">
            //     <Col xs={12} md={8} className="image-div padding-0">
            //       <Image className="rush-image" src={require('./images/rose.jpg')} responsive/>
            //     </Col>
            //     <Col xs={8} md={4} className="rush-blurb padding-0">
            //         <div className="rush-text">
            //           <span className="rush-bold"> Rush Theta Tau </span>
            //           <span className="rush-details">  Learn about the fraternity and meet the active body </span>
            //         </div>
            //         <div>
            //           <span className="rush-promo"> JOIN US FOR FALL 2017 RUSH</span>
            //           <a href="/rush">
            //             <button className="rush-button" type="button"> Learn More </button>
            //           </a>
            //         </div>
            //     </Col>
            //   </Row>
            // </Grid>
          </div>
        </Element>
    );
  }
}

export {WhyRush};
