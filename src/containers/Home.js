import React, {Component} from 'react';
import {About, Landing, MemberList, Photos, Recruitment, ContactUs} from '../components/home';

export default class Home extends Component {
  render() {
    return (
      <div className="homepage container-fluid">
        <Landing/>
        <About/>
        <MemberList/>
        <Photos/>
        <Recruitment/>
        <ContactUs/>
      </div>
    );
  }
}
