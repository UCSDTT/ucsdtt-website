import React, {Component} from 'react';
import {Image, Carousel} from 'react-bootstrap';
import slides from './data.js'
import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <Carousel className="landing">
        {slides.map((slide) => (
          <Carousel.Item key={slide.title}>
            <div className="landing-gradient">
              <Image className="landing-image" src={require(slide.image)} responsive/>
            </div>
            <Carousel.Caption>
              <h1 className="brothers-are">BROTHERS ARE {slide.title}</h1>
            </Carousel.Caption>
            <Carousel.Caption className="quote-container">
              <div className="active-quote">
                <p> "{slide.quote}" </p>
                <Image className="active-image" src={require(slide.activeImage)} circle />
                <h3> {slide.active} </h3>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}

export {Landing};
