import './RushInfo.css';
import {isChrome} from '../../helpers/helpers.js';

import {Col, Grid, Image, Row} from 'react-bootstrap';
import React, {Component} from 'react';
import {Quote} from './Quote.js';

import {rushEventData} from './data.js';

export default class RushPage extends Component {
  /* Shows info for pillars on mouse hover */
  showInfo(target) {
    /* Only runs when window width is greater than 768px */
    if (window.innerWidth >= 768) {
      let imageGroup = document.getElementsByClassName('event-image');
      let imageInfoGroup = document.getElementsByClassName('event-info');

      /* Adds these classes to zoom into photo */
      imageGroup[target].classList.toggle('zoom');
      imageInfoGroup[target].classList.toggle('show');
      imageInfoGroup[target].classList.toggle('slideInUp');
    }
  }

  render() {
    return (
      <div className="rush-info">
        <div className="rush-landing-header">
          <a className="rush-logo" role="button" href="/">
            <Image className="logo" src={require('../../components/home/NavBar/images/logo.png')}/>
          </a>
          Rush Information
        </div>
        <Image 
          className="rush-image" 
          src={isChrome ? require('./images/rush_header.webp') : require('./images/rush_header.jpg')}
        />
        <div className="rush-header">
          <span className="rush-title">Rush Spring 2018</span>
        </div>
        <Grid className="rush-container">
          <Row>
            {rushEventData.map((event, i) => (
              <Col 
                className="event-container" 
                xs={12} sm={6} md={6} lg={3} 
                key={i}
              >
                <div 
                  className="event-image-container"
                  onMouseOver={() => this.showInfo(i)}
                  onMouseOut={() => this.showInfo(i)}
                >
                  <img 
                    className="event-image"
                    src={isChrome ? event.image : event.safari}
                    alt="Event"
                  />
                  <div className="event-info animated">
                    <h3><i className="icon-location"></i> {event.location} </h3>
                    <h4><i className="icon-clock"></i> {event.date} </h4>
                  </div>
                </div>
                <h3 className="event-name">{event.name}</h3>
                <p className="event-content">{event.content}</p>
              </Col>
            ))}
          </Row>
        </Grid>
        <div className="rush-header">
          <span className="rush-title"> Why Rush?</span>
          <div className="rush-subheader">Rush is an opportunity for you to learn more about Theta Tau. It consists of multiple events that will give you a taste of what our fraternity stands for, whether you are a good fit for us, and whether we are a good fit for you. At the end of rush, we extend a limited number of interviews and bids. Those who receive bids can then decide whether or not they would like to pledge. Rushing is completely free of charge and there are no obligations.</div>
        </div>
        <Grid className="carousel-container">
          <Quote />
        </Grid>
      </div>
    );
  }
}
