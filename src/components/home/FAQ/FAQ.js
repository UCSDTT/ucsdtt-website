import React, {Component} from 'react';
import {PageHeader, Grid, Col, Row, Panel} from 'react-bootstrap';
import {Element} from 'react-scroll';
import {faqCol1, faqCol2} from './data.js';
import './FAQ.css';

class FAQ extends Component {
  render() {
    return (
      <Element name="faq" className="element">
        <PageHeader className="title"> FAQ </PageHeader>
        <Grid>
          <Row className="faq-col">
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