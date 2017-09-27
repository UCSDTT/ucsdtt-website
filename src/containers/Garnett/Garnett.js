import './Garnett.css';

import React, {Component} from 'react';
import {Image, FormGroup, FormControl} from 'react-bootstrap';
import formData from './data.js';

export default class Garnett extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signEmail: '',
      signPassword: '',
      firstname: '',
      lastname: '',
      class: '',
      major: '',
      email: '',
      code: '',
      password: '',
      confirmation: '',
      staySigned: false,
    };

    this.toggleSignState = this.toggleSignState.bind(this);
  }

  active = (event) => {
    if (!event.target.classList.contains('underline')) {
      document.querySelector('.sign-in')
        .classList
        .toggle('underline');
      document.querySelector('.sign-up')
        .classList
        .toggle('underline');
      document.querySelector('.garnett-form.sign-in')
        .classList
        .toggle('active');
      document.querySelector('.garnett-form.sign-up')
        .classList
        .toggle('active');
    }
    console.log(this.state.firstname)
  }

  handleChange(value, e) {
    this.setState({
      [value]: e.target.value
    })
  }

  toggleSignState() {
    this.setState({
      staySigned: !this.state.staySigned
    })
  }

  render() {
    return (
      <div className="garnett">
        <a className="tt-logo" role="button" href="/">
          <Image className="logo" src={require('../../components/home/NavBar/images/logo.webp')}/>
        </a>

        <div className="garnett-logo">
          <Image src={require('./images/garnett.webp')} />
          <h1> Garne<span className="red">tt</span> </h1>
        </div>

        <div className="sign-options">
          <span className="sign-in underline"
            onClick={this.active}
          >
            Sign In
          </span>
          <span className="sign-up"
            onClick={this.active}
          >
            Sign Up
          </span>
        </div>

        <form className="garnett-form sign-in active">
          <FormGroup controlId="formHorizontalEmail">
            <FormControl
              className="garnett-input"
              type="email"
              placeholder="Email"
              value={this.state.signEmail}
              onChange={(e) => this.handleChange('signEmail', e)}
             />
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <FormControl
              className="garnett-input"
              type="password"
              placeholder="Password"
              value={this.state.signPassword}
              onChange={(e) => this.handleChange('signPassword', e)}
             />
          </FormGroup>

          <div className="checkbox-container">
            <input 
              type="checkbox" 
              id="checkbox"
              checked={this.state.staySigned}
              onChange={this.toggleSignState}
            />
            <label htmlFor="checkbox">
              <span className="checkbox">stay signed in</span>
            </label>
          </div>

          <div className="garnett-login">
            Login
          </div>
        </form>

        <form className="garnett-form sign-up">
          {formData.map((form, i) => (
            <FormGroup controlId="formBasicText">
              <FormControl
                className="garnett-input"
                type="text"
                placeholder={`${form.name}`}
                value={this.state[`${form.value}`]}
                onChange={(e) => this.handleChange(form.value, e)}
               />
            </FormGroup>
          ))}
          <div className="garnett-login">
            Sign Up
          </div>
        </form>
      </div>
    );
  }
}
