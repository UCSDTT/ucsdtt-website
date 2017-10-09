import './MemberPage.css';

import React from 'react';
import {Image} from 'react-bootstrap';

class MemberInfo extends React.Component {
  render() {
    return (
      <div>
        <Image
          className="brother-image"
          src={this.props.brother.professional}
          onClick={() => this.props.open(this.props.brother)}
          responsive
          rounded
        />
        <h4> {this.props.brother.name.toUpperCase()} </h4>
        <p> {this.props.brother.position.toUpperCase()} </p>
        <p> {this.props.brother.className.toUpperCase()} </p>
      </div>
    )
  }
}

export {MemberInfo};