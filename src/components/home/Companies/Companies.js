import './Companies.css';

import React, {Component} from 'react';
import {Row} from 'react-bootstrap';
import {Element} from 'react-scroll';
import {bigCompanies, smallCompanies} from './data.js';

class Companies extends Component {
  render() {
    return (
      <Element name="companies" className="element companies">
        <h1 className="title">Our Alumni Network </h1>

        <div className="companies-container">
          <Row className="companies-row">
            {bigCompanies.map((company, i) => (
              <div 
                className="company-col big-logo"
                key={i}
              >
                <a href={company.href}>
                  <img 
                    className="lozad company-logo" 
                    data-src={company.image} 
                    href={company} 
                    alt="Big Company"
                  /> 
                </a>
              </div>
            ))}
          </Row>
          <Row className="companies-row">
            {smallCompanies.map((company, i) => (
              <div 
                className="company-col small-logo"
                key={i}
              >
                <a href={company.href}>
                  <img 
                    className="lozad company-logo" 
                    data-src={company.image} 
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

export {Companies};