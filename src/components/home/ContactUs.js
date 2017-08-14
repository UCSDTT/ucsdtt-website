import React, {Component} from 'react';
import {FormGroup, FormControl, Button, InputGroup, Glyphicon, Grid, Col, Row} from 'react-bootstrap';
import {Element} from 'react-scroll';

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = { value: ''};
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 1) return 'success';
    else if (length > 0) return 'error';
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <Element name="contact-us" className="element">
        <div className="contact-us">
        <h1>Contact Us</h1>
          <Grid className="form-padding">
            <Row>
              <Col md={8} mdPush={2}>
                <form>
                  <FormGroup 
                    controlId="formBasicName"
                    validationState={this.getValidationState()}
                  >
                    <InputGroup>
                      <InputGroup.Addon>
                        <Glyphicon glyph="user" />
                      </InputGroup.Addon>
                      <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder="Name*"
                        onChange={(e) => this.handleChange(e)}
                      />
                      <FormControl.Feedback />
                    </InputGroup>
                  </FormGroup>

                  <FormGroup controlId="formBasicEmail">
                    <InputGroup>
                      <InputGroup.Addon>
                        <Glyphicon glyph="envelope" />
                      </InputGroup.Addon>
                      <FormControl
                        type="text"
                        placeholder="Email*"
                      />
                      <FormControl.Feedback />
                    </InputGroup>
                  </FormGroup>

                  <FormGroup controlId="formControlsTextarea">
                    <InputGroup>
                      <InputGroup.Addon>
                        <Glyphicon glyph="pencil" />
                      </InputGroup.Addon>
                      <FormControl componentClass="textarea" placeholder="Message*" />
                    </InputGroup>
                  </FormGroup>
                  <Button className="contact-button" type="submit">
                    Send            <span><Glyphicon glyph="send"/></span>
                  </Button>
                </form>
              </Col>
            </Row>
          </Grid>
        </div>
      </Element>
    );
  }
}

export {ContactUs};
