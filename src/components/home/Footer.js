import React, {Component} from 'react';
import {PageHeader} from 'react-bootstrap';

class Footer extends Component {
  render() {
    return (
        <div className="footer big-cont">
            <PageHeader className="title">This is the Footer Module</PageHeader>
        </div>
    );
  }
}

export {Footer};