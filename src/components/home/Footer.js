import React, {Component} from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

class Footer extends Component {
  render() {
    return (
        <div className="footer dark-bg">
            <Grid className="footer-padding">
              <Row className="show-grid">
                <Col xs={6} md={4} className="widget"><div className="widget-header">Want to learn more?</div><br/>asdf</Col>
                <Col xs={6} md={4} className="widget"><div className="widget-header">Visit our neighboring chapters</div><br/>asdf</Col>
                <Col xsHidden md={4} className="widget"><div className="widget-header">Credits</div><br/>asdf</Col>
              </Row>
            </Grid>
            <div className="media-icons">
              <Grid>
                <Row className="show-grid">
                  <Col sm={2} mdPush={4}>
                    <a href="https://www.facebook.com/thetatau.ucsd/">
                      <i className="fa fa-facebook fa-3x"></i>
                    </a>
                  </Col>
                  <Col sm={2} mdPush={4}>
                    <a href="https://instagram.com/thetatau_ucsd/">
                      <i className="fa fa-instagram fa-3x"></i>
                    </a>
                  </Col>
                </Row>
              </Grid>
            </div>
        </div>
    );
  }
}

export {Footer};