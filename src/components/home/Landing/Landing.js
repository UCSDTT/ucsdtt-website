<<<<<<< HEAD
import React, {Component} from 'react';
import {Image, Carousel} from 'react-bootstrap';
// import ReactRotatingText from 'react-rotating-text';
import {slideData, brothersAre, quoteData}  from './data.js';
=======
>>>>>>> 3591eafa3b519c06dc4301b98adfe5a88f457055
import './Landing.css';

import {Carousel, Image} from 'react-bootstrap';
import React, {Component} from 'react';
import {brothersAre, slideData} from './data.js';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      wordArray: [],
<<<<<<< HEAD
      currentWord: 0,
      quotes: [],
      currentQuote: 0
=======
      currentWord: 0
>>>>>>> 3591eafa3b519c06dc4301b98adfe5a88f457055
    };
  }

  componentDidMount() {
    let words = document.getElementsByClassName('word');
    let quotes = document.getElementsByClassName('quote');

    words[this.state.currentWord].style.opacity = 1;
    for (var i = 0; i < words.length; i++) {
      this.splitLetters(words[i]);
    }

<<<<<<< HEAD
    quotes[this.state.currentQuote].style.opacity = 1;

    this.setState({
      words: words,
      quotes: quotes,
    })
=======
    this.setState({words: words})
>>>>>>> 3591eafa3b519c06dc4301b98adfe5a88f457055
  }

  changeWord = (event) => {
    var cw = this.state.wordArray[this.state.currentWord];
<<<<<<< HEAD
    var nw = this.state.wordArray[event];
    var cq = this.state.quotes[this.state.currentQuote];
    var nq = this.state.quotes[event];
=======
    var nw = this.state.currentWord === this.state.words.length - 1
      ? this.state.wordArray[0]
      : this.state.wordArray[this.state.currentWord + 1];
>>>>>>> 3591eafa3b519c06dc4301b98adfe5a88f457055

    for (var i = 0; i < cw.length; i++) {
      this.animateLetterOut(cw, i);
    }
<<<<<<< HEAD
    
    for (var j = 0; j < nw.length; j++) {
      nw[j].className = 'letter behind';
=======

    for (i = 0; i < nw.length; i++) {
      nw[i].className = 'letter behind';
>>>>>>> 3591eafa3b519c06dc4301b98adfe5a88f457055
      nw[0].parentElement.style.opacity = 1;
      this.animateLetterIn(nw, j);
    }

    cq.style.opacity = 0;
    this.animateQuoteOut(cq)
    
    cq.style.opacity = 1;
    this.animateQuoteIn(nq)


    this.setState({
<<<<<<< HEAD
      currentWord: event,
      currentQuote: event,
=======
      currentWord: (this.state.currentWord === this.state.wordArray.length - 1)
        ? 0
        : this.state.currentWord + 1
>>>>>>> 3591eafa3b519c06dc4301b98adfe5a88f457055
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
    cq.className = 'quote animated fadeOutDown';
  }

  animateQuoteIn(nq) {
    nq.className = 'quote animated fadeInDown';
  }

  render() {
    return (
<<<<<<< HEAD
      <div className="landing">
        <Carousel className="carousel-fade"
          interval={3500}
          onSelect={this.changeWord}
        >
          {slideData.map((slide, i) => (
            <Carousel.Item key={i}>
              <div className="landing-gradient">
                <Image className="landing-image" src={require(`${slide.image}`)} responsive/>
              </div>
=======
      <div>
        <Carousel
          className="landing carousel-fade"
          interval={3500}
          pauseOnHover={false}
          onSelect={this
          .changeWord
          .bind(this)}>
          {slideData.map((slide, j) => (
            <Carousel.Item key={j}>
              <div className="landing-gradient">
                <Image className="landing-image" src={require(`${slide.image}`)} responsive/>
              </div>
              <Carousel.Caption className="quote-container">
                <div className="active-quote">
                  <p>
                    "{slide.quote}"
                  </p>
                  <Image className="active-image" src={require(`${slide.activeImage}`)} circle/>
                  <h3>
                    {slide.active}
                  </h3>
                </div>
              </Carousel.Caption>
>>>>>>> 3591eafa3b519c06dc4301b98adfe5a88f457055
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="brothers-are">
          <h1 className="brothers-are-text">
            Brothers are
          </h1>
<<<<<<< HEAD
          <h1 className="brothers-are-text" style={{marginLeft: '0.25em'}}>
            {brothersAre.map((brother, i) => (
              <span className={`word ${brother.color}`} key={i}>
=======
          <h1
            className="brothers-are-text"
            style={{
            marginLeft: '0.25em'
          }}>
            {brothersAre.map((brother, j) => (
              <span className={`word ${brother.color}`} key={j}>
>>>>>>> 3591eafa3b519c06dc4301b98adfe5a88f457055
                {brother.name}
              </span>
            ))}
          </h1>
        </div>
        <div className="quote-container"> 
          {quoteData.map((quote, i) => (
            <div className="quote" key={i}>
              <p> <i>"{quote.text}"</i> </p>
              <div className="active-quote-group">
                <Image className="active-image" src={require(`${quote.activeImage}`)} circle />
                <div className="active-quote-labels">
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
