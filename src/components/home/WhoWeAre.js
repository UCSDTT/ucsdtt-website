import React, {Component} from 'react';
import {PageHeader} from 'react-bootstrap';
import {Element} from 'react-scroll';

class WhoWeAre extends Component {
  render() {
    return (
      <Element name="who-we-are" className="element">
        <div className="who-we-are big-cont">
          <PageHeader className="title">This is the Who We Are Module</PageHeader>
        </div>
      </Element>
    );
  }
}

export {WhoWeAre};

