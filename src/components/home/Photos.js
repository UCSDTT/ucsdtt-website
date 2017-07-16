import React, {Component} from 'react';
import * as BS from 'react-bootstrap';

class Photos extends Component {
  render() {
    return (
      <div className="photos">
        <BS.PageHeader className="title">This is the Photos Module</BS.PageHeader>
      </div>
    );
  }
}

export {Photos};
