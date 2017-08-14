import React, {Component} from 'react';
import {NavBar, Landing, WhoWeAre, BrothersAre, WhyRush, FAQ, ContactUs, Footer} from '../components/home';

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
        <ContactUs/>
        <Footer/>
      </div>
    );
  }
}
