import './FAQ.css';

import { Col, Grid, PageHeader, Panel, Row } from 'react-bootstrap';
import React, { Component } from 'react';
import {faqCol1, faqCol2} from './data.js';

import { Element } from 'react-scroll';

class FAQ extends Component {
  render() {
    return (
      <Element name="faq" className="element faq">
        <PageHeader className="title"> FAQ </PageHeader>
        <Grid>
          <Row>
            <Col md={6}>
              {faqCol1.map((question, i) => (
                <Panel className="faq-card" key={i}>
                  <h4 className="faq-title"> {question.title} </h4>
                  <p className="faq-body"> {question.body} </p>
                </Panel>
              ))}
            </Col>
            <Col md={6}>
              {faqCol2.map((question, i) => (
                <Panel className="faq-card" key={i}>
                  <h4 className="faq-title"> {question.title} </h4>
                  <p className="faq-body"> {question.body} </p>
                </Panel>
              ))}
            </Col>
          </Row>
        </Grid>
      </Element>
    )
  }
}

export {FAQ};