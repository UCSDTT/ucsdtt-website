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
      currentWord: 0
    };
  }

  componentDidMount() {
    let words = document.getElementsByClassName('word');

    words[this.state.currentWord].style.opacity = 1;
    for (var i = 0; i < words.length; i++) {
      this.splitLetters(words[i]);
    }

    this.setState({words: words})
  }

  changeWord() {
    var cw = this.state.wordArray[this.state.currentWord];
    var nw = this.state.currentWord === this.state.words.length - 1
      ? this.state.wordArray[0]
      : this.state.wordArray[this.state.currentWord + 1];

    for (var i = 0; i < cw.length; i++) {
      this.animateLetterOut(cw, i);
    }

    for (i = 0; i < nw.length; i++) {
      nw[i].className = 'letter behind';
      nw[0].parentElement.style.opacity = 1;
      this.animateLetterIn(nw, i);
    }

    this.setState({
      currentWord: (this.state.currentWord === this.state.wordArray.length - 1)
        ? 0
        : this.state.currentWord + 1
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

  render() {
    return (
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
            {brothersAre.map((brother, j) => (
              <span className={`word ${brother.color}`} key={j}>
                {brother.name}
              </span>
            ))}
          </h1>
        </div>
      </div>
    );
  }
}

export {Landing};
