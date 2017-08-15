import React, {Component} from 'react';
import {PageHeader} from 'react-bootstrap';
import {Element} from 'react-scroll';

class RushSchedule extends Component {
  render() {
    return (
      <Element name="rush-schedule" className="element">
        <div className="big-cont">
          <PageHeader className="title">Rush More Module</PageHeader>
        </div>
      </Element>
    );
  }
}

export {RushSchedule};
