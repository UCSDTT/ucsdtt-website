import React, {Component} from 'react';
import {FormGroup, FormControl, Button, InputGroup, Glyphicon, Grid, Col, Row} from 'react-bootstrap';
import {Element} from 'react-scroll';

class ContactUs extends Component {
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
                  >
                    <InputGroup>
                      <InputGroup.Addon>
                        <Glyphicon glyph="user" />
                      </InputGroup.Addon>
                      <FormControl
                        type="text"
                        placeholder="Name*"
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
                    Submit
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
