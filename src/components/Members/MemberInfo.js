import './Members.css';
import { isChrome } from '../../shared/helpers.js';

import React from 'react';

class MemberInfo extends React.Component {
  render() {
    return (
      <div className="brother-info">
        <div className="brother-image-container">
          <img
            className="brother-image"
            src={isChrome ? this.props.brother.image : this.props.brother.safari}
            onClick={() => this.props.open(this.props.brother)}
            alt="Active"
          />
        </div>
        <h4> {this.props.brother.name} </h4>
        <p> {this.props.brother.position} </p>
        <p> {this.props.brother.className} </p>
      </div>
    );
  }
}

export { MemberInfo };
