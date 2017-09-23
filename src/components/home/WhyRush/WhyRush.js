import './WhyRush.css';

import React, {Component} from 'react';
import {Element} from 'react-scroll';
import {Grid, Row, Col} from 'react-bootstrap';

class WhyRush extends Component {
  render() {
    return (
      <Element name="why-rush" className="element rush">
        <h1 className="title">Rush</h1>
        <h1 className="rush-tt">Theta Tau</h1>
        <h2 className="rush-slogan">Reinvent.</h2>

        <h2 className="rush-process">The Process</h2>
        <Grid>
          <Row className="table-row">
            <Col xs={12} sm={6} md={3}>
              <div className="rush-steps">
                <i className="icon-chat rush-step-icon"></i>
                <span className="step-title"> Rush </span>
                <hr className="step-break"/>
                <span className="step-details"> Join us for a whole week of rush events! Learn about the fraternity,  interact with other rushees, and mingle with the members of Theta Tau.</span>
              </div>
              <div className="step-triangle"></div>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <div className="rush-steps">
                <i className="icon-users rush-step-icon"></i>
                <span className="step-title"> Interview </span>
                <hr className="step-break"/>
                <span className="step-details"> The Brothers of Theta Tau would like to find out more about you and hear about the reasons for your interest in Theta Tau through a formal interview. </span>
              </div>
              <div className="step-triangle"></div>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <div className="rush-steps">
               <i className="icon-mail-alt rush-step-icon"></i>
                <span className="step-title"> Bid </span>
                <hr className="step-break" />
                <span className="step-details"> If the Brothers of Theta Tau decide on you, an invitation will be sent to you. It is your choice to continue to the pledging process or decline the bid. </span>
              </div>
              <div className="step-triangle"></div>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <div className="rush-steps">
                <i className="icon-ok-circled rush-step-icon"></i>
                <span className="step-title"> Pledge </span>
                <hr className="step-break"/>
                <span className="step-details"> Once you accept your bid, you will then begin pledging. Prepare to spend a large amount of time and effort. "Approach it as a four unit upper division engineering course." </span>
              </div>
            </Col>
          </Row>
          <Row>
            <a className="rush-button" href="/rush"> Reinvent </a>
          </Row>
        </Grid>
      </Element>
    );
  }
}

export {WhyRush};
