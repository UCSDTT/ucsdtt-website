import './Messenger.css';

import React, {Component} from 'react';
import {
  Col,
  Grid,
  Image,
  Panel,
  Row
} from 'react-bootstrap';
import {Element} from 'react-scroll';
import data from './data';

class Messenger extends Component {
  render() {
    return (
      <Element name="messenger" className="element messenger">
        <h1 className="title">
          Ask a Brother!
        </h1>
        <Grid>
          <Row className="messenger-row">
            {data.map((active, i) => (
              <Col md={4} key={i}>
                <Panel className="messenger-card" header={active.position}>
                  <Image
                    className="messenger-image"
                    src={require(`${active.image}`)}
                    role="presentation"
                    circle/>
                  <h3 style={{color: '#2f4f4f'}}>
                    {active.name}
                  </h3>
                  <p className="messenger-body">
                    {active.year}
                    <br/> {active.major}
                    <br/> {active.class}
                  </p>
                  <div className="messenger-actions">
                    <span className="messenger-button">
                      <i className="icon-mail-alt"></i>
                    </span>
                    <a className="messenger-button" href={active.messenger} target="_blank">
                      <i className="icon-temp-messenger"></i>
                    </a>
                  </div>
                </Panel>
              </Col>
            ))}
          </Row>
        </Grid>
      </Element>
    )
  }
}

export {Messenger}