import React, {Component} from 'react';
import {PageHeader} from 'react-bootstrap';
import {Element} from 'react-scroll';

class ContactUs extends Component {
  render() {
    return (
      <Element name="contact-us" className="element">
        <div className="contact-us big-cont">
          <PageHeader className="title">This is the Contact Us Module</PageHeader>
        </div>
      </Element>
    );
  }
}

export {ContactUs};
