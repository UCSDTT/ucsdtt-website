import './FAQ.css';

import React, { Component } from 'react';
import { Col, Container, Card, Row } from 'react-bootstrap';
import { faqCol1, faqCol2 } from './data.js';

import { Element } from 'react-scroll';

class FAQ extends Component {
  render() {
    return (
      <Element name="faq" className="element faq" data-background-image={require('./images/faq-background.svg')}>
        <h1 className="title"> FAQ </h1>
        <Container>
          <Row>
            <Col sm={6}>
              {faqCol1.map((question, i) => (
                <Card className="faq-card" key={i}>
                  <h4 className="faq-title"> {question.title} </h4>
                  <p className="faq-body"> {question.body} </p>
                </Card>
              ))}
            </Col>
            <Col sm={6}>
              {faqCol2.map((question, i) => (
                <Card className="faq-card" key={i}>
                  <h4 className="faq-title"> {question.title} </h4>
                  <p className="faq-body"> {question.body} </p>
                </Card>
              ))}
            </Col>
          </Row>
        </Container>
      </Element>
    )
  }
}

export { FAQ };
