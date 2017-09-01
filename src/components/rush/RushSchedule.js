import React, {Component} from 'react';

import {Element} from 'react-scroll';
import {PageHeader} from 'react-bootstrap';

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
