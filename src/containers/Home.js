import React, {Component} from 'react';
import {NavBar} from '../components/home/NavBar.js';
import {Landing} from '../components/home/Landing.js';
import {WhoWeAre} from '../components/home/WhoWeAre.js';
import {BrothersAre} from '../components/home/BrothersAre.js';
import {WhyRush} from '../components/home/WhyRush.js';
import {FAQ} from '../components/home/FAQ.js';
import {Messenger} from '../components/home/Messenger.js';
import {ContactUs} from '../components/home/ContactUs.js';
import {Footer} from '../components/home/Footer.js';

export default class Home extends Component {
  render() {
    return (
      <div className="homepage">
        <NavBar/>
        <Landing/>
        <WhoWeAre/>
        <BrothersAre/>
        <WhyRush/>
        <FAQ/>
        <Messenger/>
        <ContactUs/>
        <Footer/>
      </div>
    );
  }
}
