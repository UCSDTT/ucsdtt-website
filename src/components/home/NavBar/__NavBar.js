import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import {animateScroll as scroll, scroller} from 'react-scroll'; 
import './NavBar.css';

const scrollToComp = (name) => {
  scroller.scrollTo(name, {offset: -120, smooth: true})
}

const NavBarTabs = 
  <Tabs className="tabs">
    <Tab label="About" onActive={() => scrollToComp("who-we-are")}>
    </Tab>
    <Tab label="Members" onActive={() => scrollToComp("brothers-are")}>
    </Tab>
    <Tab label="Rush" onActive={() => scrollToComp("why-rush")}>
    </Tab>
    <Tab label="FAQ" onActive={() => scrollToComp("faq")}>
    </Tab>
    <Tab label="Contact Us" onActive={() => scrollToComp("messenger")}>
    </Tab>
  </Tabs>

class NavBar extends Component {
  scrollToTop() {
    scroll.scrollToTop();
  }
  openMenu() {
    document.querySelector('#hamburger').classList.toggle('open');
    if ( document.querySelector('#hamburger').classList.contains('open')) {
      document.querySelector('#nav-logo').style.opacity = 0;
      document.querySelector('#mobile-nav').style.opacity = 1;
      document.querySelector('#mobile-nav').style.zIndex = 100;
    }
    else {
      document.querySelector('#nav-logo').style.opacity = 1;
      document.querySelector('#mobile-nav').style.opacity = 0;
      document.querySelector('#mobile-nav').style.zIndex = -1;
    }
  }

  render() {
    return (
      <AppBar
        children={window.innerWidth > 992 && NavBarTabs}
        style={{"position": "fixed"}}
        iconElementLeft={
          <a id="nav-logo" href='#' onClick={this.scrollToTop}>
            <img className="logo" src={require('../../../../public/images/tt_logo.png')} role="presentation" />
          </a>
        }
        iconElementRight={
          <div id="hamburger" onClick={this.openMenu}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        }
        zDepth={2}
      />
    );
  }
}

export {NavBar};