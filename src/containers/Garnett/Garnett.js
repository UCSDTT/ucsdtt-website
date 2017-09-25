import './Garnett.css';

import React, {Component} from 'react';
import {Image, FormGroup, FormControl} from 'react-bootstrap';

export default class Garnett extends Component {
  render() {
    return (
      <div className="garnett">
        <Image className="garnett-logo" src={require('./images/garnett.png')} />
        <form className="garnett-form">
          <FormGroup controlId="formHorizontalEmail">
            <FormControl
              className="garnett-input"
              type="email"
              placeholder="Email"
             />
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <FormControl
              className="garnett-input"
              type="password"
              placeholder="Password"
             />
          </FormGroup>
        </form>

        <div className="garnett-login">
          Login
        </div>
      </div>
    );
  }
}
