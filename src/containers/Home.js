import React, {Component} from 'react';

import {Companies} from '../components/home/Companies/Companies.js';
// import {ContactUs} from '../components/home/ContactUs/ContactUs.js';
import {FAQ} from '../components/home/FAQ/FAQ.js';
import {Footer} from '../components/home/Footer/Footer.js';
import {Landing} from '../components/home/Landing/Landing.js';
import {Messenger} from '../components/home/Messenger/Messenger.js';
import {NavBar} from '../components/home/NavBar/NavBar.js';
import {WhoWeAre} from '../components/home/WhoWeAre/WhoWeAre.js';
import {WhyRush} from '../components/home/WhyRush/WhyRush.js';

export default class Home extends Component {
  render() {
    return (
      <div className="homepage">
        <NavBar/>
        <Landing/>
        <WhoWeAre/>
        <WhyRush/>
        <FAQ/>
        <Messenger/>
        <Companies/>
        <Footer/>
      </div>
    );
  }
}
