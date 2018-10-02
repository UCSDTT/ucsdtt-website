import './MemberPage.css';

import React from 'react';
import { Col } from 'react-bootstrap';
import { FilteredLabel } from './FilteredLabel.js';
import { FilteredList } from './FilteredList.js';
import { MemberInfo } from './MemberInfo.js';

class BrothersList extends React.Component {
  renderFilteredList(option) {
    let brothers = this.props.updatedBrothers;
    let showList = false;

    /* Checks if there exists a brother in the specified major or class */
    brothers.forEach((brother) => {
      if (brother[this.props.dropdownValue] === option.value) {
        showList = true;
      }
    })

    /* 
      If there exists a brother in the specific major or class, 
      display the brothers of that specified major or class 
    */
    if (!showList) {
      return false;
    }
  }

  render() {
    let options;

    /* Sets label to major or class depending on which one is selected */
    if (this.props.dropdownValue === 'major') {
      options = this.props.majorOptions;
    }
    else {
      options = this.props.classOptions;
    }

    /* Sets the specific label based on which is selected */
    if (this.props.specificValue) {
      options = options.filter((option) => {
        return (option.value.toLowerCase() ===
          this.props.specificValue.toLowerCase()) !== false;
      });
    }

    /* Displays labels if the first dropdown value is major or class */
    if (this.props.dropdownValue === 'major' || this.props.dropdownValue === 'class') {
      return (
        <div>
          {options.map((option, i) => {
            if (this.renderFilteredList(option) !== false) {
              return (
                <div key={i}>
                  <FilteredLabel option={option} specificValue={this.props.specificValue} />
                  <FilteredList 
                    option={option} 
                    updatedBrothers={this.props.updatedBrothers}
                    dropdownValue={this.props.dropdownValue}
                    open={this.props.open}
                  />
                </div>
              )
            }
            else {
              return false;
            }
          })}
        </div>
      );
    }
    else {
      return (
        <div>
          {this.props.updatedBrothers.map((brother, i) => (
            <Col xs={6} sm={3} className="brother-info col-md-5th" key={i}>
              <MemberInfo brother={brother} open={this.props.open} />
            </Col>
          ))}
        </div>
      );
    }
  }
}

export { BrothersList };
