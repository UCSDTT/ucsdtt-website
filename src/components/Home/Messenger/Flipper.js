import './Messenger.css';

import React from 'react';
import { Front, Back } from './Panels.js';
import { ActiveInfo } from './ActiveInfo.js';

/* Flipper component that consists of a front and back panel */
class Flipper extends React.Component {
  render() {
    return (
      <div className={`messenger-card-${this.props.index}`}>
        <div className={'flipper' + (this.props.flipped ? ' flipped' : '')}>
          <Front>
            <ActiveInfo active={this.props.frontActive} />
          </Front>
          <Back>
            <ActiveInfo active={this.props.backActive} />
          </Back>
        </div>
      </div>
    );
  }
}

export { Flipper };
