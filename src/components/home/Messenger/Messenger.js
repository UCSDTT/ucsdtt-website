import './Messenger.css';

import {
  Col,
  Grid,
  Image,
  PageHeader,
  Panel,
  Row
} from 'react-bootstrap';
import React, {Component} from 'react';

import {Element} from 'react-scroll';
import data from './data';

class Messenger extends Component {
  render() {
    return (
      <Element name="messenger" className="element messenger">
        <PageHeader className="title">
          Ask a Brother!
        </PageHeader>
        <Grid>
          <Row>
            {data.map((active, i) => (
              <Col md={4} key={i}>
                <Panel className="messenger-card" header={active.position}>
                  <Image
                    className="messenger-image"
                    src={require(`${active.image}`)}
                    role="presentation"
                    circle/>
                  <h3>
                    {active.name}
                  </h3>
                  <p className="messenger-body">
                    {active.year}
                    <br/> {active.major}
                    <br/> {active.class}
                  </p>
                  <div className="messenger-actions">
                    <span className="messenger-button">
                      <i className="material-icons email">email</i>
                    </span>
                    <span className="messenger-button">
                      <i className="fa fa-temp-messenger"></i>
                    </span>
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