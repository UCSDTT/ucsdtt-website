import './MemberPage.css';

import React from 'react';
import {Col} from 'react-bootstrap';
import {MemberInfo} from './MemberInfo.js';

class FilteredList extends React.Component {
  render() {
    let brothers = this.props.updatedBrothers;
    
    return (
      <Col xs={12} md={10}>
        {brothers.map((brother, i) => {
          if (brother[this.props.dropdownValue] === this.props.option.value) {
            return (
              <Col xs={6} sm={4} md={3} className="brother-info" key={i}>
                <MemberInfo brother={brother} open={this.props.open} />
              </Col>
            );
          }
          else {
            return false;
          }
        })}
      </Col>
    )
  }
}

export {FilteredList};