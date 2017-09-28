import './WhyRush.css';

import React, {Component} from 'react';
import {Element} from 'react-scroll';
import {Grid, Col} from 'react-bootstrap';
import stepData from './data.js';

class WhyRush extends Component {
  render() {
    return (
      <Element name="why-rush" className="element why-rush">
        <h1 className="title red">What is Rush?</h1>
        <h2 className="rush-process">The Process</h2>

        <Grid>
          <div className="table-row">
            {stepData.map((step, i) => (
              <Col className={`${step.position}`} xs={12} md={3} key={i}>
                <div className={`rush-steps ${step.position}`}>
                  <i className={`${step.icon} rush-step-icon`}></i>
                  <span className="step-title"> {step.title} </span>
                  <span className="step-description"> {step.description} </span>
                </div>
                <div className={`step-triangle ${step.position}`}></div>
              </Col>
            ))}
          </div>
          
          <a className="rush-button" href="/rush"> Ready to Reinvent? </a>
        </Grid>
      </Element>
    );
  }
}

export {WhyRush};
