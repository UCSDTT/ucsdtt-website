import './MemberPage.css';

import { Col } from 'react-bootstrap';
import React from 'react';

class FilteredLabel extends React.Component {
  render() {
    if (this.props.specificValue) {
      /* If option is major or class, displays the labels */
      if (this.props.option.value === this.props.specificValue) {
        return (
          <Col xs={12} md={2} className="brother-info">
            <h3 className="option-label"> {this.props.option.label} </h3>
            <img className="option-image" src={this.props.option.image} alt="Label" />
          </Col>
        );
      }
    }
    else {
      return (
        <Col xs={12} md={2} className="brother-info">
          <h3 className="option-label"> {this.props.option.label} </h3>
          <img className="option-image" src={this.props.option.image} alt="Label" />
        </Col>
      );
    }
  }
}

export { FilteredLabel };