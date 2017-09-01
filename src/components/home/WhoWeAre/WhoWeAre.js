import React, {Component} from 'react';

import {Element} from 'react-scroll';
import {PageHeader} from 'react-bootstrap';

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

