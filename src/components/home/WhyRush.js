import React, {Component} from 'react';
import {Element} from 'react-scroll';
import {Image, Grid, Row, Col} from 'react-bootstrap';

class WhyRush extends Component {
  render() {
    return (
        <Element name="why-rush" className="element">
          <div className="rush-container">
            <Grid className="rush-container">
              <Row className="rush-container">
                <Col xs={12} md={8} className="image-div padding-0">
                  <Image className="rush-image" src={require('../../../public/images/rose.jpg')} responsive/>
                </Col>
                <Col xs={8} md={4} className="rush-blurb padding-0">
                    <div className="rush-text">
                      <span className="rush-bold"> Rush Theta Tau </span>
                      <span className="rush-details">  Learn about the fraternity and meet the active body </span>
                    </div>
                    <div>
                      <span className="rush-promo"> JOIN US FOR FALL 2017 RUSH</span>
                      <a href="/rush">
                        <button className="rush-button" type="button"> Learn More </button>
                      </a>
                    </div>
                </Col>
              </Row>
            </Grid>
          </div>
        </Element>
    );
  }
}

export {WhyRush};
