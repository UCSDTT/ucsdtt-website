import './WhyRush.css';

import React, {Component} from 'react';
import {Element} from 'react-scroll';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import stepData from './data.js';

class WhyRush extends Component {
  render() {
    return (
      <Element name="why-rush" className="element rush">
        <h1 className="title">What is Rush?</h1>
        <h1 className="rush-tt">Fall Rush 2017</h1>
        <h2 className="rush-slogan">Reinvent.</h2>
        <h2 className="rush-process">The Process</h2>

        <Image className="items1" src={require('./images/items1.png')} />
        <Image className="items2" src={require('./images/items2.png')} />

        <Grid>
          <div className="table-row">
            {stepData.map((step, i) => (
              <Col className={`${step.position}`} xs={12} md={3} key={i}>
                <div className={`rush-steps ${step.position}`}>
                  <i className={`${step.icon} rush-step-icon`}></i>
                  <span className="step-title"> {step.title} </span>
                  <hr className="step-break"/>
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
