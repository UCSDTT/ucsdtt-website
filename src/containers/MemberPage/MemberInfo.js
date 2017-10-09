import './MemberPage.css';

import React from 'react';

class MemberInfo extends React.Component {
  render() {
    return (
      <div>
        <img
          className="brother-image"
          src={this.props.brother.professional}
          onClick={() => this.props.open(this.props.brother)}
          alt="Active"
        />
        <h4> {this.props.brother.name.toUpperCase()} </h4>
        <p> {this.props.brother.position.toUpperCase()} </p>
        <p> {this.props.brother.className.toUpperCase()} </p>
      </div>
    )
  }
}

export {MemberInfo};