import './Landing.css';

import React, {Component} from 'react';

import {Carousel} from 'react-bootstrap';
import {scroller} from 'react-scroll';
import {slideData}  from './data.js';

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

  /* Scrolls to selected section */
  scrollToComp(name) {
    scroller.scrollTo(name, {
      offset: 0,
      smooth: true,
    });
  }

  /* Runs when component mounts */
  componentDidMount() {
    let words = document.getElementsByClassName('word');
    // let quotes = document.getElementsByClassName('quote');

    /* Makes the first word visible */
    words[this.state.currentWord].style.opacity = 1;

    /* Adds each letter of the word to an array */
    for (var i = 0; i < words.length; i++) {
      this.splitLetters(words[i]);
    }

    // quotes[this.state.currentQuote].style.opacity = 1;

    this.setState({
      words: words,
      // quotes: quotes,
    })
  }

  /* Changes the current word to the new word */
  changeWord = (event) => {
    var cw = this.state.wordArray[this.state.currentWord];  // Current Word
    var nw = this.state.wordArray[event]; // New Word
    //var cq = this.state.quotes[this.state.currentQuote];
    //var nq = this.state.quotes[event];

    /* Prevents animation from occurring if you click on same slide */
    if (cw === nw) {
      return;
    }

    /* Animates the current word out */
    for (var i = 0; i < cw.length; i++) {
      this.animateLetterOut(cw, i);
    }

    /* Makes the new word visible and animates the letters in */
    for (var j = 0; j < nw.length; j++) {
      nw[j].className = 'letter behind';
      nw[0].parentElement.style.opacity = 1;
      this.animateLetterIn(nw, j);
    }

    // cq.style.opacity = 0;
    // this.animateQuoteOut(cq)

    // nq.style.opacity = 1;
    // this.animateQuoteIn(nq)


    this.setState({
      currentWord: event,
      currentQuote: event,
    })
  }

  /* Animates each letter of the current word out */
  animateLetterOut(cw, i) {
    setTimeout(function () {
      cw[i].className = 'letter out';
    }, i * 50);
  }

  /* Animates each letter of the new word in */
  animateLetterIn(nw, i) {
    setTimeout(function () {
      nw[i].className = 'letter in';
    }, 340 + (i * 50));
  }

  /* Splits the letters of the word and adds them to an array */
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
    /* Checks if browser is safari to determine which images to feed */
    let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    return (
      <div className="landing">
        <Carousel
          className="carousel-fade"
          interval={5000}
          onSelect={this.changeWord}
          pauseOnHover={false}>
          {slideData.map((slide, i) => (
            <Carousel.Item key={i}>
              <div className="landing-gradient">
                <img
                  className="landing-image"
                  src={isSafari ? slide.xsSafari : slide.xsImage}
                  // eslint-disable-next-line
                  srcSet={isSafari ? (slide.smSafari + ' 992w', slide.safari + ' 1200w') :
                          (slide.smImage + ' 992w', slide.image + ' 1200w')}
                  alt="Landing"
                />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        <div className="brothers-are">
          <h1 className="brothers-are-text">
            Brothers are
          </h1>
          <h1 className="brothers-are-word">
            {slideData.map((slide, i) => (
              <span className="word" key={i}>
                {slide.name}
              </span>
            ))}
          </h1>
        </div>

        <a
          className="members-button"
          onClick={() => this.scrollToComp("rush")}
        >
          Learn More
        </a>

        {/*{quoteData.map((quote, i) => (
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
                <h1> {quote.active} </h1>
                <h2> {quote.major} </h2>
                <h2> {quote.class} </h2>
              </div>
            </div>
          </div>
        ))}*/}
      </div>
    );
  }
}

export {Landing};
