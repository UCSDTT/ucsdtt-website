import React, {Component} from 'react';
import {Card, CardMedia, CardTitle, CardText, CardActions} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {Element} from 'react-scroll';
import './Messenger.css';
import data from './data.js';

class Messenger extends Component {
  render() {
    return (
      <Element name="messenger" className="element">
        <div className="container">
          <h1 className="header"> Ask our Actives! </h1>
          <div className="messenger">
            {data.map((active) => (
              <Card
                className="messenger-card"
                key={active.name}
              >
                <CardTitle className="active-position"
                  title={active.position}
                >
                </CardTitle>
                <CardMedia className="card-media">
                  <img src={require(active.image)} />
                </CardMedia>
                <CardTitle
                  title={active.name}
                >
                </CardTitle>
                <CardText className="card-body">
                  {active.year}
                  <br/>
                  {active.major}
                  <br/>
                  {active.class}
                </CardText>
                <CardActions className="card-actions">
                  <FloatingActionButton>
                    <i className="material-icons">email</i>
                  </FloatingActionButton>
                  <FloatingActionButton>
                    <i className="fa fa-temp-messenger"></i>
                  </FloatingActionButton>
                </CardActions>
              </Card>
            ))}
          </div>
        </div>
      </Element>
    )
  }
}

export {Messenger}