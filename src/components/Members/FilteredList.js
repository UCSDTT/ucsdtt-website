import './Members.css';

import React from 'react';
import { Col } from 'react-bootstrap';
import { MemberInfo } from './MemberInfo.js';

function FilteredList({ updatedBrothers, dropdownValue, option, open }) {
  return (
    <Col xs={6} sm={3} style={{ padding: 0 }}>
      {updatedBrothers.map((brother, i) => {
        if (brother[dropdownValue] !== option.value) {
          return null
        }
        return (
          <div className="brother-info" key={i}>
            <MemberInfo brother={brother} open={open} />
          </div>
        );
      })}
    </Col>
  );
}

export { FilteredList };
