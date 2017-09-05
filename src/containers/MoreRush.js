import React, {Component} from 'react';
import {Image, Grid, Row, Col} from 'react-bootstrap';
// import RushSchedule from '../components/rush';

export default class MoreRush extends Component {
  render() {
    return (
      <div className="homepage">
        <Grid>
          <Row className="show-grid">

            <Col md={3}>
              <Row>
                <div>
                   <span className="schedule-title"> <strong> INFO NIGHT </strong> </span>
                   <span className="schedule-subtitle"> Come out and learn about our fraternity and get a chance to meet the brothers of Theta Tau. </span>
                   <span className="schedule-details"> Tuesday April 4th @ 7:30pm Meet at the Triton Statue </span>
                </div>
              </Row>
              <Row>
                <div>
                   <span className="schedule-title"> <strong> INFO NIGHT </strong> </span>
                   <span className="schedule-subtitle"> Come out and learn about our fraternity and get a chance to meet the brothers of Theta Tau. </span>
                   <span className="schedule-details"> Tuesday April 4th @ 7:30pm Meet at the Triton Statue </span>
                </div>
              </Row>
            </Col>

            <Col md={6}>
            <Image className="rush-banner" src={require('./temp-images/rushflyer.jpg')} responsive/>
            </Col>


            <Col md={3}>
              <Row>
                <div>
                   <span className="schedule-title"> <strong> INFO NIGHT </strong> </span>
                   <span className="schedule-subtitle"> Come out and learn about our fraternity and get a chance to meet the brothers of Theta Tau. </span>
                   <span className="schedule-details"> Tuesday April 4th @ 7:30pm Meet at the Triton Statue </span>
                </div>
              </Row>
              <Row>
                <div>
                   <span className="schedule-title"> <strong> INFO NIGHT </strong> </span>
                   <span className="schedule-subtitle"> Come out and learn about our fraternity and get a chance to meet the brothers of Theta Tau. </span>
                   <span className="schedule-details"> Tuesday April 4th @ 7:30pm Meet at the Triton Statue </span>
                </div>
              </Row>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
