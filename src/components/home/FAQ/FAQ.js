import React, {Component} from 'react';
import {Card, CardMedia, CardTitle, CardText, CardActions} from 'material-ui/Card';
import {Element} from 'react-scroll';

class FAQ extends Component {
  render() {
    return (
      <Element name="faq" className="element">
        <div className="container">
          <h1 className="header"> FAQ </h1>
        </div>
      </Element>
    )
  }
}

export {FAQ};