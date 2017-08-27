import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {NavBar} from '../components/home/NavBar/NavBar.js';
import {Landing} from '../components/home/Landing/Landing.js';
import {WhoWeAre} from '../components/home/WhoWeAre/WhoWeAre.js';
import {BrothersAre} from '../components/home/BrothersAre/BrothersAre.js';
import {WhyRush} from '../components/home/WhyRush/WhyRush.js';
import {FAQ} from '../components/home/FAQ/FAQ.js';
import {Messenger} from '../components/home/Messenger/Messenger.js';
import {ContactUs} from '../components/home/ContactUs/ContactUs.js';
import {Footer} from '../components/home/Footer/Footer.js';
import {MobileNav} from '../components/home/MobileNav/MobileNav.js';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#000',
  },
  appBar: {
    height: 80,
  },
});

export default class Home extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
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
          <MobileNav/>
        </div>
      </MuiThemeProvider>
    );
  }
}
