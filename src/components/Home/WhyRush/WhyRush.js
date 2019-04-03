import './WhyRush.css';

import React, { Component } from 'react';
import { Element } from 'react-scroll';
import { Container, Col, Row } from 'react-bootstrap';
import stepData from './data.js';
import { FaComments, FaUsers, FaEnvelope, FaCheckCircle } from 'react-icons/fa';

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
                  { step.icon === 'FaComments' && <FaComments size="2em" className="rush-step-icon" /> }
                  { step.icon === 'FaUsers' && <FaUsers size="2em" className="rush-step-icon" /> }
                  { step.icon === 'FaEnvelope' && <FaEnvelope size="2em" className="rush-step-icon" /> }
                  { step.icon === 'FaCheckCircle' && <FaCheckCircle size="2em" className="rush-step-icon" /> }
                  <span className="step-title">{ step.title }</span>
                  <span className="step-description">{ step.description }</span>
                </div>
                <div className={`step-triangle ${step.position}`} />
              </Col>
            ))}
          </Row>

          {/* <a className="rush-button" href="/rush">
            {' '}
            Inspire Innovation{' '}
          </a> */}
        </Container>
      </Element>
    );
  }
}

export { WhyRush };
