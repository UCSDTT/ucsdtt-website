import React, {Component} from 'react';
import {animateScroll as scroll, scroller} from 'react-scroll'; 
import './MobileNav.css';

class MobileNav extends Component {
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollToComp(name) {
    document.querySelector('#hamburger').classList.toggle('open');
    scroller.scrollTo(name, {offset: -80, smooth: true});
    document.querySelector('#mobile-nav').style.opacity = 0;
    document.querySelector('#mobile-nav').style.zIndex = -1;
    document.querySelector('#nav-logo').style.opacity = 1;
  }

  render() {
    return (
      <div id="mobile-nav">
        <ul>
          <li> 
            <a onClick={() => this.scrollToComp("who-we-are")}>
              About
            </a>
          </li>
          <li> 
            <a onClick={() => this.scrollToComp("brothers-are")}>
              Members 
            </a>
          </li>
          <li>
            <a onClick={() => this.scrollToComp("why-rush")}>
              Rush
            </a>
          </li>
          <li>
            <a onClick={() => this.scrollToComp("faq")}>
              FAQ
            </a>
          </li>
          <li>
            <a onClick={() => this.scrollToComp("messenger")}>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export {MobileNav};