import './Messenger.css';

import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {Element} from 'react-scroll';
import {brothers} from '../../../activeData/data.js';

class Flipper extends React.Component {
  render() {
    return <div className={`messenger-card-${this.props.index}`}>
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
    let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    return <div>
      <img
        className="messenger-image"
        src={isSafari ? this.props.active.safari : this.props.active.image}
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
      activeList: [],
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
    let activeList = brothers.filter(function(brother) {
      return brother.messenger;
    });

    let shuffled = this.shuffle(activeList);

    actives.forEach((active, i) => {
      active.front = shuffled[i];
    });

    this.setState({
      actives: actives
    });
  }

  shuffle(list) {
    const shuffled = list.sort(() => .5 - Math.random());// shuffle
    let activeList = shuffled.slice(3);

    this.setState({
      activeList: activeList
    })

    return shuffled.slice(0, 3) ; //get sub-array of first n elements AFTER shuffle
  }

  flip() {
    let actives = this.state.actives;
    let shuffled = this.shuffle(this.state.activeList);

    if (shuffled.length !== 3) {
      return;
    }

    if (this.state.flipped) {
      actives.forEach((active, i) => {
        active.front = shuffled[i];
      });
    }
    else {
      actives.forEach((active, i) => {
        active.back = shuffled[i];
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
        <h1 className="title">
          Get to know us!
        </h1>

        <Grid>
          <Row className="messenger-row">
            {this.state.actives.map((active, i) => (
              <Col md={4} key={i}>
                <Flipper 
                  flipped={this.state.flipped} 
                  frontActive={active.front} 
                  backActive={active.back} 
                  index={i}
                />
              </Col>
            ))}
          </Row>
        </Grid>
        <div className="messenger-actions">
          <a onClick={this.flip}>Shuffle Actives</a>
          {/*<a className="members-link" href="/members">Meet the Fraternity</a>*/}
        </div>
      </Element>
    )
  }
}

export {Messenger}