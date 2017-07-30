import React, {Component} from 'react';
import {Landing, WhoWeAre, BrothersAre, WhyRush, FAQ, ContactUs} from '../components/home';

export default class Home extends Component {
  render() {
    return (
      <div className="homepage">
        <Landing/>
        <WhoWeAre/>
        <BrothersAre/>
        <WhyRush/>
        <FAQ/>
        <ContactUs/>
      </div>
    );
  }
}
