import React, {Component} from 'react';

import {PageHeader} from 'react-bootstrap';

class Photos extends Component {
  render() {
    return (
      <div className="photos">
        <PageHeader className="title">This is the Photos Module</PageHeader>
      </div>
    );
  }
}

export {Photos};
