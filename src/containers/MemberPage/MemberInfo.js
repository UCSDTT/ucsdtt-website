import './MemberPage.css';

import React from 'react';

class MemberInfo extends React.Component {
  render() {
    let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    return (
      <div>
        <img
          className="brother-image"
          src={isSafari ? this.props.brother.professional_jpg : this.props.brother.professional_webp}
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