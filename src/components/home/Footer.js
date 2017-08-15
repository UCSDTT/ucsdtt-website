import React, {Component} from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

class Footer extends Component {
  render() {
    return (
        <div className="footer dark-bg">
            <Grid className="footer-padding">
              <Row className="show-grid">
                <Col xs={12} sm={6} md={4} className="widget"><div className="widget-header">Want to learn more?</div><br/>asdf</Col>
                <Col xs={12} sm={6} md={4} className="widget">
                  <div className="widget-header">Credits</div><br/>
                      <ul>
                        <li><a className="light-grey" href='http://www.thetatauuci.com/'> UC Irvine</a></li>
                        <li><a className="light-grey" href='http://theta-tau-chi-chapter.herokuapp.com/'>University of Arizona</a></li>
                        <li><a className="light-grey" href='http://www.thetataubruins.org/'>UC Los Angeles</a></li>
                        <li><a className="light-grey" href='http://www.engr.ucr.edu/~thetatau/'>UC Riverside</a></li>
                        <li><a className="light-grey" href='http://renothetatau.org/'>University of Nevada, Reno</a></li>
                        <li><a className="light-grey" href='http://www.calthetatau.com/'>UC Berkeley</a></li>
                        <li><a className="light-grey" href='http://pacific.orgsync.com/org/thetatau/About/'>University of the Pacific</a></li>
                        <li><a className="light-grey" href='http://www.mdthetatau.org/'>UC Merced</a></li>
                        <li><a className="light-grey" href='http://www.davisthetatau.com/'>UC Davis</a></li>
                        <li><a className="light-grey" href='http://www.thetatau-dg.org/'>Arizona State University</a></li>
                      </ul>
                </Col>
                <Col xs={12} sm={12} md={4} className="widget"><div className="widget-header">Credits</div><br/>asdf</Col>
              </Row>
            </Grid>
            <div className="media-icons">
              <Grid>
                <Row className="show-grid">
                  <Col xs={6} md={3} mdPush={3}>
                    <a href="https://www.facebook.com/thetatau.ucsd/">
                      <i className="fa fa-facebook fa-3x light-grey"></i>
                    </a>
                  </Col>
                  <Col xs={6} md={3} mdPush={3}>
                    <a href="https://instagram.com/thetatau_ucsd/">
                      <i className="fa fa-instagram fa-3x light-grey"></i>
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