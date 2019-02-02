import './WhyRush.css';

import React, { Component } from 'react';
import { Element } from 'react-scroll';
import { Container, Col, Row } from 'react-bootstrap';
import stepData from './data.js';

class WhyRush extends Component {
  render() {
    return (
      <Element name="why-rush" className="element why-rush">
        <h1 className="title">What is Rush?</h1>
        <h2 className="rush-process">The Process</h2>

        <Container>
          <Row className="table-row">
            {stepData.map((step, i) => (
              <Col className={`${step.position}`} sm={12} lg={3} key={i}>
                <div className={`rush-steps ${step.position}`}>
                  <i className={`${step.icon} rush-step-icon`} />
                  <span className="step-title"> {step.title} </span>
                  <span className="step-description"> {step.description} </span>
                </div>
                <div className={`step-triangle ${step.position}`} />
              </Col>
            ))}
          </Row>

          <a className="rush-button" href="/rush">
            {' '}
            Discover Possibility{' '}
          </a>
        </Container>
      </Element>
    );
  }
}

export { WhyRush };
