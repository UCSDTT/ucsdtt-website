import './Messenger.css';
import { isChrome } from '../../../helpers/helpers.js';

import React from 'react';

/* All the active information inside the messenger card */
class ActiveInfo extends React.Component {
  render() {
    return (
      <div>
        <img
          className="messenger-image"
          src={isChrome ? this.props.active.image : this.props.active.safari}
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
        <a className="messenger-button" href={this.props.active.messenger} target="_blank" rel="noopener noreferrer">
          <i className="icon-temp-messenger"></i>
          Message
        </a>
      </div>
    )
  }
}

export { ActiveInfo }