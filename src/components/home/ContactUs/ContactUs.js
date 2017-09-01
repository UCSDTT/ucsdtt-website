import React, {Component} from 'react';
import {
  FormGroup,
  FormControl,
  Button,
  InputGroup,
  Glyphicon,
  Grid,
  Col,
  Row,
  Image,
  Alert
} from 'react-bootstrap';
import {Element} from 'react-scroll';
import './ContactUs.css';

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      namestate: null,
      email: '',
      emailstate: null,
      message: '',
      messagestate: null,
      sent: false,
      alert: false
    };
  }

  getValidationState() {
    const emailpattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    let length = this.state.name.length;
    let valid = true;
    if (length > 1) 
      this.setState({namestate: 'success'});
    else {
      this.setState({namestate: 'error'});
      valid = false;
    }

    if (emailpattern.test(this.state.email)) 
      this.setState({emailstate: 'success'});
    else {
      this.setState({emailstate: 'error'});
      valid = false;
    }

    length = this.state.message.length;
    if (length > 1) 
      this.setState({messagestate: 'success'});
    else {
      this.setState({messagestate: 'error'});
      valid = false;
    }

    if (valid) {
      console.log("valid");

      fetch('http://formspree.io/officialucsdtt@gmail.com', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({'Sender': this.state.name, 'Sender Email': this.state.email, 'Message': this.state.message})
      })
      this.setState({sent: true, alert: false});
    } else {
      this.setState({alert: true});
    }
  }

  handleChange(e, type) {
    this.setState({[type]: e.target.value});
  }

  render() {
    let contactForm = <Col className="sent-container" md={7}><div className="sent-text">Thank you for contacting us, we will get back to you soon!</div></Col>
    let alert = ''

    if (this.state.alert) {
      alert = (
        <Alert bsStyle="warning">
          <strong>Email not sent!</strong>
          &nbsp;Please completely fill out all fields.
        </Alert>
      )
    }

    if (!this.state.sent) {
      contactForm = (
        <Col md={7}>
          <Row>
            <Col xs={8}>
              <h1 className="text-left contact-title">
                Contact Us!
              </h1>
            </Col>
            <Col xs={2}>
              <a href="https://www.facebook.com/thetatau.ucsd/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-facebook fa-3x light-grey"></i>
              </a>
            </Col>
            <Col xs={2}>
              <a href="https://instagram.com/thetatau_ucsd/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-instagram fa-3x light-grey"></i>
              </a>
            </Col>
          </Row>
          <form>
            <FormGroup controlId="formBasicName" validationState={this.state.namestate}>
              <InputGroup>
                <InputGroup.Addon>
                  <Glyphicon glyph="user"/>
                </InputGroup.Addon>
                <FormControl
                  type="text"
                  value={this.state.name}
                  placeholder="Name*"
                  onChange={(e) => this.handleChange(e, "name")}/>
                <FormControl.Feedback/>
              </InputGroup>
            </FormGroup>

            <FormGroup controlId="formBasicEmail" validationState={this.state.emailstate}>
              <InputGroup>
                <InputGroup.Addon>
                  <Glyphicon glyph="envelope"/>
                </InputGroup.Addon>
                <FormControl
                  type="text"
                  value={this.state.email}
                  placeholder="Email*"
                  onChange={(e) => this.handleChange(e, "email")}/>
                <FormControl.Feedback/>
              </InputGroup>
            </FormGroup>

            <FormGroup
              controlId="formControlsTextarea"
              validationState={this.state.messagestate}>
              <InputGroup>
                <InputGroup.Addon>
                  <Glyphicon glyph="pencil"/>
                </InputGroup.Addon>
                <FormControl
                  componentClass="textarea"
                  value={this.state.message}
                  placeholder="Message*"
                  onChange={(e) => this.handleChange(e, "message")}/>
              </InputGroup>
            </FormGroup>
            <Button
              className="contact-button"
              type="submit"
              onClick={(e) => {
              this.getValidationState();
              e.preventDefault()
            }}>
              <span><Glyphicon glyph="send"/></span>
              &nbsp;&nbsp;Send
            </Button>
          </form>
        </Col>
      )
    }

    return (
      <Element name="contact-us" className="element">
        <div className="contact-us">
          <Grid className="form-border">
            {alert}
            <Row>
              {contactForm}
              <Col xsHidden smHidden md={5}>
                <div className="contact-container">
                  <Image src={require("./images/rushflyer.jpg")} responsive/>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </Element>
    );
  }
}

export {ContactUs};
