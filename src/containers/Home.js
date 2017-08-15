import React, {Component} from 'react';
import {NavBar, Landing, WhoWeAre, BrothersAre, WhyRush, FAQ, Messenger, ContactUs, Footer} from '../components/home';

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
