import React, {Component} from 'react';
import {Grid, Row, Col, Image, Button} from 'react-bootstrap';
import {Element} from 'react-scroll';

class Messenger extends Component {
  render() {
    return (
      <Element name="messenger" className="element">
        <div className="messenger">
          <Grid>
            <Row>
              <Col className="standard-pad" md={12}>
                <h1 className="text-left">Ask a Brother!</h1>
              </Col>
              <Col className="standard-pad" xs={8} xsOffset={2} sm={6} smOffset={0} md={4}>
                <Image className="messenger-image" src={require("../../../public/images/jenk.jpg")} circle />
                <h2>Name</h2>
                <h4>Major</h4>
                <h4>Class</h4>
                <Button bsStyle="primary">Message</Button>
              </Col>
              <Col className="standard-pad" xs={8} xsOffset={2} sm={6} smOffset={0} md={4}>
                <Image className="messenger-image" src={require("../../../public/images/jenk.jpg")} circle />
                <h2>Name</h2>
                <h4>Major</h4>
                <h4>Class</h4>
                <Button bsStyle="primary">Message</Button>
              </Col>
              <Col className="standard-pad" xs={8} xsOffset={2} sm={6} smOffset={3} md={4} mdOffset={0}>
                <Image className="messenger-image" src={require("../../../public/images/jenk.jpg")} circle />
                <h2>Name</h2>
                <h4>Major</h4>
                <h4>Class</h4>
                <Button bsStyle="primary">Message</Button>
              </Col>
            </Row>
          </Grid>
        </div>
      </Element>
    );
  }
}

export {Messenger};
