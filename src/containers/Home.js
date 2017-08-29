import React, {Component} from 'react';
import {NavBar} from '../components/home/NavBar/NavBar.js';
import {Landing} from '../components/home/Landing/Landing.js';
import {WhoWeAre} from '../components/home/WhoWeAre/WhoWeAre.js';
import {WhyRush} from '../components/home/WhyRush/WhyRush.js';
import {FAQ} from '../components/home/FAQ/FAQ.js';
import {Messenger} from '../components/home/Messenger/Messenger.js';
import {ContactUs} from '../components/home/ContactUs/ContactUs.js';
import {Footer} from '../components/home/Footer/Footer.js';
import {Companies} from '../components/home/Companies/Companies.js';

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
        <ContactUs/>
        <Companies/>
        <Footer/>
      </div>
    );
  }
}
