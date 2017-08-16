import React, {Component} from 'react';
import {FormGroup, FormControl, Button, InputGroup, Glyphicon, Grid, Col, Row, Image} from 'react-bootstrap';
import {Element} from 'react-scroll';

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      namestate: null,
      email:'',
      emailstate: null,
      message: '',
      messagestate: null
    };
  }

  getValidationState() {
    const emailpattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    
    let length = this.state.name.length;
    let valid = true;
    if (length > 1) this.setState({ namestate: 'success' });
    else {
      this.setState({ namestate: 'error' });
      valid = false;
    }

    if (emailpattern.test(this.state.email)) this.setState({ emailstate: 'success' });
    else {
      this.setState({ emailstate: 'error' });
      valid = false;
    }

    length = this.state.message.length;
    if (length > 1) this.setState({ messagestate: 'success' });
    else {
      this.setState({ messagestate: 'error' });
      valid = false;
    }

    if (valid) console.log("valid");
  }

  handleChange(e, type) {
    this.setState({ [type]: e.target.value });
  }

  render() {
    return (
      <Element name="contact-us" className="element">
        <div className="contact-us">
          <Grid className="form-border">
            <Row>
              <Col md={7}>
                <Row>
                  <Col xs={8}>
                    <h1 className="text-left contact-title">
                      Contact Us!
                    </h1>
                  </Col>
                  <Col xs={2}>
                    <a href="https://www.facebook.com/thetatau.ucsd/"> <i className="fa fa-facebook fa-3x light-grey"></i></a>
                  </Col>
                  <Col xs={2}>
                    <a href="https://instagram.com/thetatau_ucsd/"><i className="fa fa-instagram fa-3x light-grey"></i></a>
                  </Col>
                </Row>
                <form>
                  <FormGroup 
                    controlId="formBasicName"
                    validationState={this.state.namestate}
                  >
                    <InputGroup>
                      <InputGroup.Addon>
                        <Glyphicon glyph="user" />
                      </InputGroup.Addon>
                      <FormControl
                        type="text"
                        value={this.state.name}
                        placeholder="Name*"
                        onChange={(e) => this.handleChange(e, "name")}
                      />
                      <FormControl.Feedback />
                    </InputGroup>
                  </FormGroup>

                  <FormGroup 
                    controlId="formBasicEmail"
                    validationState={this.state.emailstate}
                  >
                    <InputGroup>
                      <InputGroup.Addon>
                        <Glyphicon glyph="envelope" />
                      </InputGroup.Addon>
                      <FormControl
                        type="text"
                        value={this.state.email}
                        placeholder="Email*"
                        onChange={(e) => this.handleChange(e, "email")}
                      />
                      <FormControl.Feedback />
                    </InputGroup>
                  </FormGroup>

                  <FormGroup 
                    controlId="formControlsTextarea"
                    validationState={this.state.messagestate}
                  >
                    <InputGroup>
                      <InputGroup.Addon>
                        <Glyphicon glyph="pencil" />
                      </InputGroup.Addon>
                      <FormControl 
                        componentClass="textarea"
                        value={this.state.message}
                        placeholder="Message*"
                        onChange={(e) => this.handleChange(e, "message")}
                      />
                    </InputGroup>
                  </FormGroup>
                  <Button 
                    className="contact-button"
                    type="submit"
                    onClick={(e) => {this.getValidationState(); e.preventDefault()}}
                  >
                    Send            <span><Glyphicon glyph="send"/></span>
                  </Button>
                </form>
              </Col>

              <Col smHidden md={4}>
                <div className="contact-container">
                  <Image src={require("../../../public/images/rushflyer.jpg")} responsive/>
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
