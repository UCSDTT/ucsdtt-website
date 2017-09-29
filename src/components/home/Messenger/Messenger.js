import './Messenger.css';

import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {Element} from 'react-scroll';
import {brothers} from '../../../activeData/data.js';

class Flipper extends React.Component {
  render() {
    return <div className="messenger-card">
      <div className={"flipper" + (this.props.flipped ? " flipped" : "")}>
        <Front>
          <ActiveInfo active={this.props.frontActive} />
        </Front>
        <Back>
          <ActiveInfo active={this.props.backActive} />
        </Back>
      </div>
    </div>;
  }
}

class Front extends React.Component {
  render() {
    return <div className="front tile">{this.props.children}</div>;
  }
}
      
class Back extends React.Component {
  render() {
    return <div className="back tile">{this.props.children}</div>;
  }
}

class ActiveInfo extends React.Component {
  render() {
    return <div>
      <img
        className="messenger-image"
        src={this.props.active.image}
        role="presentation"
        alt="Messenger"
      />
      <h3 className="messenger-name">
        {this.props.active.name}
      </h3>
      <p className="messenger-body">
        {this.props.active.year}
        <br/> {this.props.active.majorName}
        <br/> {this.props.active.className}
      </p>
      <a className="messenger-button" href={this.props.active.messenger} target="_blank">
        <i className="icon-temp-messenger"></i>
        Message
      </a>
    </div>;
  }
}


class Messenger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actives: [],
      flipped: false,
    };
    this.flip = this.flip.bind(this);
  }

  componentDidMount() {
    let actives = [
      {
      'front': {},
      'back': {},
      },
      {
      'front': {},
      'back': {},
      },
      {
      'front': {},
      'back': {},
      },
    ];
    let list = this.shuffle(brothers);

    actives.forEach((active, i) => {
      active.front = list[i];
    });

    this.setState({
      actives: actives
    });
  }

  shuffle(list) {
    const shuffled = list.sort(() => .5 - Math.random());// shuffle  
    return shuffled.slice(0,3) ; //get sub-array of first n elements AFTER shuffle
  }

  flip() {
    let actives = this.state.actives;
    let list = this.shuffle(brothers);

    if (this.state.flipped) {
      actives.forEach((active, i) => {
        active.front = list[i];
      });
    }
    else {
      actives.forEach((active, i) => {
        active.back = list[i];
      });
    }

    this.setState({
      actives: actives,
      flipped: !this.state.flipped,
    });
  }

  render() {
    return (
      <Element name="messenger" className="element messenger">
        <h1 className="title red">
          Get to know us!
        </h1>

        <Grid>
          <Row className="messenger-row">
            {this.state.actives.map((active, i) => (
              <Col md={4} key={i}>
                <Flipper flipped={this.state.flipped} frontActive={active.front} backActive={active.back} />
              </Col>
            ))}
          </Row>
        </Grid>
        <div className="messenger-actions">
          <a className="red-bg" onClick={this.flip}>Shuffle Actives</a>
          <a className="members-link" href="/members">Meet the Fraternity</a>
        </div>
      </Element>
    )
  }
}

export {Messenger}