import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import {animateScroll as scroll, scroller} from 'react-scroll'; 
import './NavBar.css';

const scrollToComp = (name) => {
  scroller.scrollTo(name, {offset: -80, smooth: true})
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

  render() {
    return (
      <AppBar
        children={NavBarTabs}
        style={{"position": "fixed"}}
        iconElementLeft={
          <a className="nav-logo" href='#' onClick={this.scrollToTop}>
            <img className="logo" src={require('../../../../public/images/tt_logo.png')} />
          </a>
        }
        zDepth={2}
      />
    );
  }
}

export {NavBar};