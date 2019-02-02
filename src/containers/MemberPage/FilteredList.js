import './MemberPage.css';

import React from 'react';
import { Col } from 'react-bootstrap';
import { MemberInfo } from './MemberInfo.js';

class FilteredList extends React.Component {
  render() {
    let brothers = this.props.updatedBrothers;

    return (
      <Col xs={6} sm={3} style={{ padding: 0 }}>
        {brothers.map((brother, i) => {
          if (brother[this.props.dropdownValue] === this.props.option.value) {
            return (
              <div className="brother-info" key={i}>
                <MemberInfo brother={brother} open={this.props.open} />
              </div>
            );
          } else {
            return false;
          }
        })}
      </Col>
    );
  }
}

export { FilteredList };
