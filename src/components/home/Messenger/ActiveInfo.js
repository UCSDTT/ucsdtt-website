import './Messenger.css';

import React from 'react';

/* All the active information inside the messenger card */
class ActiveInfo extends React.Component {
  render() {
    let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    return (
      <div>
        <img
          className="messenger-image"
          src={isSafari ? this.props.active.image : this.props.active.safari}
          role="presentation"
          alt="Messenger"
        />
        <h3 className="messenger-name">
          {this.props.active.name}
        </h3>
        <p className="messenger-body">
          {this.props.active.year}
          <br/> {this.props.active.majorName}
          <br/> {this.props.active.className}
        </p>
        <a className="messenger-button" href={this.props.active.messenger} target="_blank">
          <i className="icon-temp-messenger"></i>
          Message
        </a>
      </div>
    )
  }
}

export {ActiveInfo}