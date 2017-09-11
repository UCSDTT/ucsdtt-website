import './Companies.css';
import React, {Component} from 'react';
import {Grid, Row, Col, Image, PageHeader} from 'react-bootstrap';
import {Element} from 'react-scroll';
import {bigCompanies, smallCompanies} from './data.js';

class Companies extends Component {
  render() {
    return (
      <Element name="companies" className="element">
        <Grid>
          <PageHeader>Our Alumni Network </PageHeader>

          <Row>
            {bigCompanies.map((company, i) => (
              <Col 
                className="company-col big" 
                md={6} 
                key={i}
              >
                <a href={company.href}>
                  <Image className="big-company" src={company.image} href={company}/> 
                </a>
              </Col>
            ))}
          </Row>
          <Row>
            {smallCompanies.map((company, i) => (
              <Col 
                className="company-col small" 
                xs={6} md={4} 
                key={i}
              >
                <a href={company.href}>
                  <Image className="sm-company" src={company.image}/>
                </a>
              </Col>
            ))}
          </Row>
        </Grid>
      </Element>
    );
  }
}

export {Companies};