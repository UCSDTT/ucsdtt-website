import React, {Component} from 'react';
import {PageHeader} from 'react-bootstrap';
import {Element} from 'react-scroll'; 

class BrothersAre extends Component {
  render() {
    return (
      <Element name="brothers-are" className="element">
        <div className="brothers-are big-cont">
          <PageHeader className="title">This is the Brothers Are Module</PageHeader>
        </div>
      </Element>
    );
  }
}

export {BrothersAre};
