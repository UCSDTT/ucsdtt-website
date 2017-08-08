import React, {Component} from 'react';
import {PageHeader} from 'react-bootstrap';
import {Element} from 'react-scroll';

class FAQ extends Component {
  render() {
    return (
      <Element name="faq" className="element">
        <div className="faq big-cont">
          <PageHeader className="title">This is the FAQ Module</PageHeader>
        </div>
      </Element>
    );
  }
}

export {FAQ};
