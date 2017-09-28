import React, {Component} from 'react';

import {Companies} from '../components/home/Companies/Companies.js';
import {FAQ} from '../components/home/FAQ/FAQ.js';
import {Footer} from '../components/home/Footer/Footer.js';
import {Landing} from '../components/home/Landing/Landing.js';
import {Messenger} from '../components/home/Messenger/Messenger.js';
import {NavBar} from '../components/home/NavBar/NavBar.js';
import {AboutUs} from '../components/home/AboutUs/AboutUs.js';
import {WhyRush} from '../components/home/WhyRush/WhyRush.js';

export default class Home extends Component {
  componentDidMount() {
    const observer = window.lozad('.lozad', {
      rootMargin: '100px 0px'
    }); // lazy loads elements with default selector as '.lozad'
    observer.observe();
  }

  render() {
    return (
      <div className="homepage">
        <NavBar/>
        <Landing/>
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
