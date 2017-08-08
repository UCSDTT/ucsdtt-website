import React, {Component} from 'react';
import {PageHeader} from 'react-bootstrap';
import {Element} from 'react-scroll';

class WhyRush extends Component {
  render() {
    return (
      <Element name="why-rush" className="element">
        <div className="why-rush big-cont">
          <PageHeader className="title">This is the Why Rush Module</PageHeader>
        </div>
      </Element>
    );
  }
}

export {WhyRush};

