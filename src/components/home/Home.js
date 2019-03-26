import React, { Component } from 'react';

import { NavBar } from './NavBar/NavBar.js';
import { Landing } from './Landing/Landing.js';
import { Rush } from './Rush/Rush.js';
import { WhyRush } from './WhyRush/WhyRush.js';
import { AboutUs } from './AboutUs/AboutUs.js';
import { FAQ } from './FAQ/FAQ.js';
import { Messenger } from './Messenger/Messenger.js';
import { Companies } from './Companies/Companies.js';
import { Footer } from './Footer/Footer.js';

export default class Home extends Component {
  /*
   * Initializes lozad for lazy loading images and onscroll watcher to
   * handle Safari differences, the navbar color, and the rotating gears
   * in the AboutUs section
   */
  componentDidMount() {
    const observer = window.lozad('.lozad', {
      load: function(el) {
        el.src = el.dataset.src;
        el.onload = function() {
          el.classList.add('fadeIn');
        };
      },
      rootMargin: '200px 0px'
    }); // lazy loads elements with default selector as '.lozad'
    observer.observe();

    /* Runs when you scroll */
    window.onscroll = function() {
      let navbarHeight = document.querySelector('.navbar').clientHeight;
      let landingHeight = document.querySelector('.landing').clientHeight;
      let rushHeight = document.querySelector('.rush').clientHeight;
      let whyRushHeight = document.querySelector('.why-rush').clientHeight;
      let aboutHeight = document.querySelector('.element.about').clientHeight;
      let gears = document.getElementsByClassName('gear');
      let gearsOpp = document.getElementsByClassName('gear-opp');
      let wScroll = document.body.scrollTop || document.documentElement.scrollTop;

      /* Checks if browser is Safari */
      let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

      /* If browser is safari, hide scroll and display text instead */
      if (isSafari) {
        if (window.innerWidth >= 992) {
          document.getElementById('container').style.display = 'none';
          document.querySelector('.mobile-origins').style.display = 'block';
          document.querySelector('.about-description').style.height = '1050px';
        }
        if (window.innerWidth <= 1200 && window.innerWidth > 992) {
          document.querySelector('.about-description').style.height = '1200px';
        }
      }

      /* Changes the navbar color when you scroll past the navbar height */
      if (wScroll >= navbarHeight) {
        document.querySelector('.navbar').style.background = 'rgba(46, 47, 51, 0.9)';
        document.querySelector('.navbar').style.boxShadow = '0 2px 16px rgba(12,42,51,.3)';
      } else {
        document.querySelector('.navbar').style.background = 'transparent';
        document.querySelector('.navbar').style.boxShadow = 'none';
      }

      /* Displays gears if window width is greater than 768px */
      if (window.innerWidth >= 768) {
        /* Rotate gears if it you scroll between landing and faqs */
        if (wScroll <= landingHeight + aboutHeight + rushHeight + whyRushHeight && wScroll >= landingHeight) {
          Array.from(gears).forEach(gear => {
            gear.style.transform = 'rotate(' + wScroll / 5 + 'deg)';
          });
          Array.from(gearsOpp).forEach(gear => {
            gear.style.transform = 'rotate(-' + wScroll / 5 + 'deg)';
          });
        }
      }
    };
  }

  render() {
    return (
      <div className="homepage">
        <NavBar />
        <Landing />
        <Rush />
        <WhyRush />
        <AboutUs />
        <FAQ />
        <Messenger />
        <Companies />
        <Footer />
      </div>
    );
  }
}
