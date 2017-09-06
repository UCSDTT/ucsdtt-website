import './Landing.css';
import {Carousel, Image, Button, Glyphicon} from 'react-bootstrap';
import React, {Component} from 'react';
import {slideData, brothersAre, quoteData}  from './data.js';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      wordArray: [],
      currentWord: 0,
      quotes: [],
      currentQuote: 0,
    };
  }

  componentDidMount() {
    let words = document.getElementsByClassName('word');
    let quotes = document.getElementsByClassName('quote');

    words[this.state.currentWord].style.opacity = 1;
    for (var i = 0; i < words.length; i++) {
      this.splitLetters(words[i]);
    }

    quotes[this.state.currentQuote].style.opacity = 1;

    this.setState({
      words: words,
      quotes: quotes,
    })
  }

  changeWord = (event) => {
    var cw = this.state.wordArray[this.state.currentWord];
    var nw = this.state.wordArray[event];
    var cq = this.state.quotes[this.state.currentQuote];
    var nq = this.state.quotes[event];

    for (var i = 0; i < cw.length; i++) {
      this.animateLetterOut(cw, i);
    }
    
    for (var j = 0; j < nw.length; j++) {
      nw[j].className = 'letter behind';
      nw[0].parentElement.style.opacity = 1;
      this.animateLetterIn(nw, j);
    }

    cq.style.opacity = 0;
    this.animateQuoteOut(cq)
    
    nq.style.opacity = 1;
    this.animateQuoteIn(nq)


    this.setState({
      currentWord: event,
      currentQuote: event,
    })
  }

  animateLetterOut(cw, i) {
    setTimeout(function () {
      cw[i].className = 'letter out';
    }, i * 80);
  }

  animateLetterIn(nw, i) {
    setTimeout(function () {
      nw[i].className = 'letter in';
    }, 340 + (i * 80));
  }

  splitLetters(word) {
    var content = word.innerHTML;
    word.innerHTML = '';
    var letters = [];
    for (var i = 0; i < content.length; i++) {
      var letter = document.createElement('span');
      letter.className = 'letter';
      letter.innerHTML = content.charAt(i);
      word.appendChild(letter);
      letters.push(letter);
    }
    
    this
      .state
      .wordArray
      .push(letters);
  }

  animateQuoteOut(cq) {
    cq.className = 'quote animated zoomOut';
  }

  animateQuoteIn(nq) {
    nq.className = 'quote animated zoomIn';
  }

  render() {
    return (
      <div className="landing">
        <Carousel 
          className="carousel-fade"
          interval={3500}
          onSelect={this.changeWord}>
          {slideData.map((slide, i) => (
            <Carousel.Item key={i}>
              <div className="landing-gradient">
                <Image className="landing-image" src={require(`${slide.image}`)} responsive/>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="brothers-are">
          <h1 className="brothers-are-text">
            Brothers are
          </h1>
          <h1 
            className="brothers-are-text" 
            style={{
            marginLeft: '0.25em'
          }}>
            {brothersAre.map((brother, i) => (
              <span className={`word ${brother.color}`} key={i}>
                {brother.name}
              </span>
            ))}
          </h1>
        </div>
        <div className="members-button-container">
          <Button className="members-button" href="/brothers"> 
            Meet the Brothers
            <Glyphicon glyph="chevron-right" />
          </Button>
        </div>
        <div className="quote-container"> 
          {quoteData.map((quote, i) => (
            <div 
              className="quote" 
              key={i}>
              <div className="quote-text-group">
                <span className="quote-quotes">❝</span>
                <p> <i>{quote.text}</i> </p>
              </div>
              <div className="quote-active-group">
                <Image className="active-image" src={require(`${quote.activeImage}`)} circle />
                <div className="quote-active-labels">
                  <h3> {quote.active} </h3>
                  <h3> {quote.major} </h3>
                  <h3> {quote.class} </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export {Landing};
