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
import {activeData, rosePosition} from './data';

class Messenger extends Component {
  render() {
    return (
      <Element name="messenger" className="element messenger">
        <h1 className="title">
          Ask a Brother!
        </h1>

        {rosePosition.map((position, i) => (
          <Image 
            className={`rose ${position}`} 
            src={require('./images/rose.png')}
            key={i} 
          />
        ))}

        <Grid>
          <Row className="messenger-row">
            {activeData.map((active, i) => (
              <Col md={4} key={i}>
                <Panel className="messenger-card" header={active.position}>
                  <Image
                    className="messenger-image"
                    src={require(`${active.image}`)}
                    role="presentation"
                    circle
                  />
                  <h3 className="messenger-name">
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