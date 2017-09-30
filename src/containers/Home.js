import React, {Component} from 'react';

import {NavBar} from '../components/home/NavBar/NavBar.js';
import {Landing} from '../components/home/Landing/Landing.js';
import {Rush} from '../components/home/Rush/Rush.js';
import {WhyRush} from '../components/home/WhyRush/WhyRush.js';
import {AboutUs} from '../components/home/AboutUs/AboutUs.js';
import {FAQ} from '../components/home/FAQ/FAQ.js';
import {Messenger} from '../components/home/Messenger/Messenger.js';
import {Companies} from '../components/home/Companies/Companies.js';
import {Footer} from '../components/home/Footer/Footer.js';


export default class Home extends Component {
  componentDidMount() {
    const observer = window.lozad('.lozad', {
      load: function(el) {
        el.srcset = el.dataset.srcset || el.dataset.src;
        el.onload = function() {
            el.classList.add('fadeIn')
        }
      },
      rootMargin: '100px 0px'
    }); // lazy loads elements with default selector as '.lozad'
    observer.observe();
  }

  render() {
    return (
      <div className="homepage">
        <NavBar/>
        <Landing/>
        <Rush/>
        <WhyRush/>
        <AboutUs/>
        <FAQ/>
        <Messenger/>
        <Companies/>
        <Footer/>
      </div>
    );
  }
}
