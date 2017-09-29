import './Footer.css';

import React, {Component} from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import {scroller} from 'react-scroll';

class Footer extends Component {
  scrollToComp(name) {
    scroller.scrollTo(name, {
      offset: 0,
      smooth: true,
    });
  }

  render() {
    return (
      <div className="footer">
        <Grid className="footer-padding">
          <Row className="show-grid">
            <Col xsOffset={2} xs={8} smOffset={0} sm={6} md={4} className="widget">
              <div className="widget-header">Want to learn more?</div><br/>
              <p> 
                Outside of the Epsilon Delta chapter at UCSD, Theta Tau is the oldest 
                and largest professional engineering fraternity in the United States, 
                with chapters everywhere from coast to coast!
              </p>
              <p>
                For more information, visit Theta Tau's national site:
                  <a className="footer-links" href="http://thetatau.org/"> thetatau.org</a>
              </p>
            </Col>
            <Col xsOffset={2} xs={8} smOffset={0} sm={6} md={4} className="widget">
              <div className="widget-header">Contact Us</div><br/>
              <p>
                For any questions or queries, you can find our FAQS and contact details
                <a className="footer-links footer-contact" onClick={() => this.scrollToComp("faq")}> here</a>
              </p>
              <p>
                And you can find our social media links here:
              </p>
              <div className="media-icons">
                <a href="https://www.facebook.com/thetatau.ucsd/" target="_blank" rel="noopener noreferrer">
                  <i className="icon-facebook"></i>
                </a>
                <a href="https://instagram.com/thetatau_ucsd/" target="_blank" rel="noopener noreferrer">
                  <i className="icon-instagram"></i>
                </a>
              </div>
            </Col>
            <Col xsOffset={2} xs={8} smOffset={3} sm={6} mdOffset={0} md={4} className="widget">
              <div className="widget-header">Website Credits</div><br/>
              <ul>
                <li><a className="footer-links" href='https://github.com/bchann/' target="_blank" rel="noopener noreferrer">Brian Chan</a></li>
                <li><a className="footer-links" href='https://github.com/hillary/' target="_blank" rel="noopener noreferrer">Hillary Fan</a></li>
                <li><a className="footer-links" href='https://github.com/3605031/' target="_blank" rel="noopener noreferrer">Blake Huynh</a></li>
                <li><a className="footer-links" href='https://github.com/kaiserpk/' target="_blank" rel="noopener noreferrer">Kaiser Kim</a></li>
                <li><a className="footer-links" href='https://github.com/jeffreyzlee/' target="_blank" rel="noopener noreferrer">Jeffrey Lee</a></li>
              </ul>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export {Footer};