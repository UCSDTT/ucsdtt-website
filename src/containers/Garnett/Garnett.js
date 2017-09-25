import './Garnett.css';

import React, {Component} from 'react';
import {Image, FormGroup, FormControl} from 'react-bootstrap';

export default class Garnett extends Component {
  render() {
    return (
      <div className="garnett">
        <a className="tt-logo" role="button" href="/">
          <Image className="logo" src={require('../../components/home/NavBar/images/logo.png')}/>
        </a>
        <div className="garnett-logo">
          <Image src={require('./images/garnett.png')} />
          <h1> Garne<span className="red">tt</span> </h1>
        </div>
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
