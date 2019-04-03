import './Members.css';

import { Col } from 'react-bootstrap';
import React from 'react';

function FilteredLabel({ specificValue, option }) {
  if (specificValue && (option.value !== specificValue)) {
    return null
  }
  return (
    <Col xs={6} sm={3} className="brother-info">
      <h3 className="option-label">{ option.label }</h3>
      <img className="option-image" src={option.image} alt="Label" />
    </Col>
  );
}

export { FilteredLabel };
