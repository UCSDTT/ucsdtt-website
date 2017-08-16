import React, {Component} from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

class Footer extends Component {
  render() {
    return (
        <div className="footer dark-bg">
            <Grid className="footer-padding">
              <Row className="show-grid">
                <Col xsOffset={2} xs={8} smOffset={0} sm={6} md={4} className="widget"><div className="widget-header">Want to learn more?</div><br/>
                  <p className="footer-p"> Outside of the Epsilon Delta chapter at UCSD, Theta Tau is the oldest 
                      and largest professional engineering fraternity in the United States, 
                      with chapters everywhere from coast to coast!
                  </p>
                  <p className="footer-p">
                    For more information, visit Theta Tau's national site: 
                      <a className="light-grey" href="http://thetatau.org/"> thetatau.org</a>
                  </p>
                </Col>
                <Col xsOffset={2} xs={8} smOffset={0} sm={6} md={4} className="widget">
                  <div className="widget-header">Visit our Neighboring Chapters</div><br/>
                      <ul className="footer-ul">
                        <li><a className="light-grey" href='http://www.thetatauuci.com/'>UC Irvine</a></li>
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
                <Col xsOffset={2} xs={8} smOffset={3} sm={6} mdOffset={0} md={4} className="widget"><div className="widget-header">Credits</div><br/>
                  <ul className="footer-ul">
                    <li><a className="light-grey" href='https://github.com/bchann/'>Brian Chan</a></li>
                    <li><a className="light-grey">Hillary Fan</a></li>
                    <li><a className="light-grey">Blake Huynh</a></li>
                    <li><a className="light-grey">Kaiser Kim</a></li>
                    <li><a className="light-grey">Jeffrey Lee</a></li>
                  </ul>
                </Col>
              </Row>
            </Grid>
            <div className="media-icons">
              <Grid>
                <Row className="show-grid">
                  <Col xs={6} xsOffset={0} md={3} mdOffset={3}>
                    <a href="https://www.facebook.com/thetatau.ucsd/">
                      <i className="fa fa-facebook fa-3x light-grey"></i>
                    </a>
                  </Col>
                  <Col xs={6} xsOffset={0} md={3}>
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