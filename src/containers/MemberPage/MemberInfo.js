import './MemberPage.css';

import React from 'react';

class MemberInfo extends React.Component {
  render() {
    let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    return (
      <div>
        <div className="brother-image-container">
          <img
            className="brother-image"
            src={isSafari ? this.props.brother.safari : this.props.brother.image}
            onClick={() => this.props.open(this.props.brother)}
            alt="Active"
          />
        </div>
        <h4> {this.props.brother.name.toUpperCase()} </h4>
        <p> {this.props.brother.position.toUpperCase()} </p>
        <p> {this.props.brother.className.toUpperCase()} </p>
      </div>
    )
  }
}

export {MemberInfo};