import './Rush.css';
import React, {Component} from 'react';
import {Grid, Row, Col, Carousel, Image} from 'react-bootstrap';
import {carouselData, images}  from './data.js';

export default class RushPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rushQuote: [],
      currentRushQuote: 0,
    };
  }

  componentDidMount() {
    let rushQuote = document.getElementsByClassName('quote-appear');

    rushQuote[0].style.opacity = 1;

    this.setState({
      rushQuote: rushQuote,
    })
  }

  changeQuote = (event) => {
    var cq = this.state.rushQuote[this.state.currentRushQuote];
    var nq = this.state.rushQuote[event];

    cq.style.opacity = 0;
    this.animateQuoteOut(cq)

    nq.style.opacity = 1;
    this.animateQuoteIn(nq)

    this.setState({
      currentRushQuote: event,
    })
  }

  animateQuoteOut(cq) {
    cq.className = 'quote-appear animated fadeOutDown';
  }

  animateQuoteIn(nq) {
    nq.className = 'quote-appear animated fadeInDown';
  }

  render() {
    return (
      <div>
        <div>
          <div className="rush-landing-header">
            <a className="rush-logo" role="button" href="/">
              <Image className="logo" src={require('../../components/home/NavBar/images/logo.png')}/>
            </a>
            RUSH WEEK
          </div>
          <div className="rush-image-container">
            <Image className="rush-image" src={require('./images/rushflyer-withborder.png')} responsive/>
          </div>
        </div>
        <div>
          <div className="rush-divider">
            <div className="rush-header">
              <span className="rush-title"> Rush Fall 2017</span>
            </div>
            <Grid className="rush-container">
              <Row>
                <Col xs={12} sm={6} md={6} lg={3}>
                  <div className="rush-subcontent">
                    <span className="rush-title"> Info Night </span>
                    <i className="icon-info-circled rush-icons"></i>
                    <span className="rush-details"> <i className="icon-location"></i> Triton Statue, Tuesday 4/4  7:30 PM</span>
                    <p className="rush-summary"> Come out to the first rush event to get a gist of what the fraternity is all about and meet the brothers of Theta Tau! Break the ice! </p>
                  </div>
                </Col>
                <Col xs={12} sm={6} md={6}  lg={3}>
                  <div className="rush-subcontent">
                    <span className="rush-title"> Meet N Greet</span>
                    <i className="icon-chat rush-icons"></i>
                    <span className="rush-details"> <i className="icon-location"></i>  Triton Statue, Wednesday 4/5 7:30 PM </span>
                    <span className="rush-summary"> Engineer seeking engineer? <br /> Well now is your chance to mingle with the brothers of Theta Tau -- speed-dating style. </span>
                  </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={3}>
                  <div className="rush-subcontent">
                    <span className="rush-title"> Professional Night</span>
                    <i className="icon-suitcase rush-icons"></i>
                    <span className="rush-details"> <i className="icon-location"></i> Triton Statue, Thursday 4/6 7:30 PM</span>
                    <p className="rush-summary"> Get your resumes critiqued and learn quality professional skills from actives in industry. Professional attire is highly recommended. </p>
                  </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={3}>
                  <div className="rush-subcontent">
                    <span className="rush-title"> Engineer Night</span>
                    <i className="icon-wrench rush-icons"></i>
                    <span className="rush-details"> <i className="icon-location"></i> RIMAC, Friday 4/7 6:30 PM </span>
                    <span className="rush-summary"> Interact with other rushees and put your skills to the test with engineering-related challenges! Be prepared to get hands on with the Brothers! </span>
                  </div>
                </Col>
              </Row>
            </Grid>
          </div>
          <div className="rush-divider">
            <div className="rush-header">
              <span className="rush-title"> Why Rush?</span>
              <span className="rush-subheader">  Rush is a week full of events to interact with the active body. Rush to meet cool people like me. text text text text text  text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</span>
            </div>
            <Grid className="carousel-container">

              <Row>
                <Col md={12} lg={8}>
                  <Carousel interval={7000} onSelect={this.changeQuote}>
                    {carouselData.map((slide) => (
                      <Carousel.Item key={slide.id}>
                        <Image width = {900} height ={500} src={slide.image} />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </Col>
                <Col md={12} lg={4}
               className="quote-container">
                  {carouselData.map((slide, i) => (
                    <div key={i} className="quote-appear">
                      <span className="rush-quote" > "{slide.quote}" </span>
                      <span className="rush-author" > - {slide.author} </span>
                    </div>
                  ))}
                </Col>
              </Row>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}
