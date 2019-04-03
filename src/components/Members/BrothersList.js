import './Members.css';

import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FilteredLabel } from './FilteredLabel.js';
import { MemberInfo } from './MemberInfo.js';

class BrothersList extends React.Component {
  get brothersList() {
    const { updatedBrothers } = this.props;
    return (
      <Row>
        {updatedBrothers.map((brother, i) => (
          <Col xs={6} sm={3} className="brother-info col-md-5th" key={i}>
            <MemberInfo brother={brother} open={this.props.open} />
          </Col>
        ))}
      </Row>
    );
  }

  /* Displays labels if the selected filter is major or class */
  get filteredBrothersList() {
    const {
      dropdownValue,
      majorOptions,
      classOptions,
      specificValue,
      updatedBrothers
    } = this.props;
    /* Sets label to major or class depending on which one is selected */
    let options = dropdownValue === 'major' ? majorOptions : classOptions;

    /* Sets the specific label based on which is selected */
    if (specificValue) {
      options = options.filter(option => {
        return (option.value.toLowerCase() === specificValue.toLowerCase()) !== false;
      });
    }
    return (
      <div>
        {options.map((option, i) => {
          if (this.showFilteredList(option) === false) {
            return null
          }
          return (
            <Row key={i}>
              <FilteredLabel option={option} specificValue={specificValue} />
              {/* <FilteredList
                option={option}
                updatedBrothers={this.props.updatedBrothers}
                dropdownValue={this.props.dropdownValue}
                open={this.props.open}
              /> */}
              {updatedBrothers.map((brother, i) => {
                if (brother[dropdownValue] !== option.value) {
                  return null
                }
                return (
                  <Col xs={6} sm={3} style={{ padding: 0 }}>
                    <MemberInfo brother={brother} open={this.props.open} />
                  </Col>
                );
              })}
            </Row>
          );
        })}
      </div>
    );
  }

  /*
    If there exists a brother in the specific major or class,
    display the brothers of that specified major or class
  */
  showFilteredList(option) {
    const { dropdownValue, updatedBrothers } = this.props;
    /* Checks if there exists a brother in the specified major or class */
    updatedBrothers.forEach(brother => {
      if (brother[dropdownValue] === option.value) {
        return true
      }
    });
    return false
  }

  render() {
    const { dropdownValue } = this.props;
    if (dropdownValue === 'major' || dropdownValue === 'class') {
      return this.filteredBrothersList
    }
    return this.brothersList
  }
}

export { BrothersList };
