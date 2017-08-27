import React, {Component} from 'react';
import {Card, CardTitle, CardText } from 'material-ui/Card';
import {PageHeader} from 'react-bootstrap';
import {Element} from 'react-scroll';
import './WhoWeAre.css';
import data from './data.js';

class WhoWeAre extends Component {
  render() {
    return (
      <Element name="who-we-are" className="element">
        <div className="container">
          <div className="who-we-are big-cont">
            <PageHeader className="title"> Who We Are </PageHeader>
          </div>
          <div className="pillars">
            {data.map((pillar) => (
              <div className="pillar-card">
                <h3 className="pillar-name">
                  {pillar.name}
                </h3>
                <p className="pillar-content">
                  {pillar.content}
                </p>
              </div>

              // <Card
              //   className="pillar-card"
              //   key={pillar.name}
              // >
              //   <CardTitle className="pillar-name"
              //     title={pillar.name}
              //   >
              //   </CardTitle>
              //   <CardText className="pillar-content">
              //     {pillar.content}
              //   </CardText>
              // </Card>
            ))}
          </div>
        </div>
      </Element>
    );
  }
}

export {WhoWeAre}
