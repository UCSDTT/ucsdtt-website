import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { Element } from 'react-scroll';
import { isChrome } from '../../../shared/helpers.js';
import './Companies.css';
import { bigCompanies, smallCompanies } from './data.js';

class Companies extends Component {
  render() {
    return (
      <Element name="companies" className="element companies">
        <h1 className="title">Our Alumni Network </h1>

        <div className="companies-container">
          <Row className="companies-row">
            {bigCompanies.map((company, i) => (
              <div className="company-col big-logo" key={i}>
                <a href={company.href} target="_blank" rel="noopener noreferrer">
                  <img
                    className="lozad company-logo"
                    data-src={isChrome ? company.image : company.safari}
                    href={company}
                    alt="Big Company"
                  />
                </a>
              </div>
            ))}
          </Row>
          <Row className="companies-row">
            {smallCompanies.map((company, i) => (
              <div className="company-col small-logo" key={i}>
                <a href={company.href} target="_blank" rel="noopener noreferrer">
                  <img
                    className="lozad company-logo"
                    data-src={isChrome ? company.image : company.safari}
                    alt="Small Company"
                  />
                </a>
              </div>
            ))}
          </Row>
        </div>
      </Element>
    );
  }
}

export { Companies };
