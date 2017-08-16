import React, {Component} from 'react';
import {Grid, Col, Row, Panel} from 'react-bootstrap';
import {Element} from 'react-scroll';

class FAQ extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      q1: false,
      q2: false,
      q3: false,
      q4: false,
      q5: false,
      q6: false,
      q7: false,
      q8: false
    };
  }

  handleClick(qNumber) {
    this.setState({ [qNumber]: !this.state.qNumber });
  }

  render() {
    return (
      <Element name="faq" className="element">
        <div className="faq">
          <Grid>
            <Row>
              <Col className="standard-pad" md={12}>
                <h1 className="text-left">Frequently Asked Questions</h1>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={3}>
                <Panel className="question-panel" onClick={() => this.handleClick("q1")} header={<h3>Question?</h3>}></Panel>
                <Panel collapsible expanded={this.state.q1}>
                  Answer
                </Panel>
                <Panel header={<h3>Question?</h3>}>
                  Answer
                </Panel>
              </Col>
              <Col xs={6} md={3}>
                <Panel header={<h3>Question?</h3>}>
                  Answer
                </Panel>
                <Panel header={<h3>Question?</h3>}>
                  Answer
                </Panel>
              </Col>
              <Col xs={6} md={3}>
                <Panel header={<h3>Question?</h3>}>
                  Answer
                </Panel>
                <Panel header={<h3>Question?</h3>}>
                  Answer
                </Panel>
              </Col>
              <Col xs={6} md={3}>
                <Panel header={<h3>Question?</h3>}>
                  Answer
                </Panel>
                <Panel header={<h3>Question?</h3>}>
                  Answer
                </Panel>
              </Col>
            </Row>
          </Grid>
        </div>
      </Element>
    );
  }
}

export {FAQ};
