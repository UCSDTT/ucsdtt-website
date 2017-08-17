import React, {Component} from 'react';
import {Image, Navbar, Nav, NavItem} from 'react-bootstrap';
import {animateScroll as scroll, scroller} from 'react-scroll'; 

class NavBar extends Component {
  scrollToTop() {
    scroll.scrollToTop();
  }

  scrollToComp(name) {
    scroller.scrollTo(name, {offset: -120, smooth: true})
  }

  render() {
    return (
      <Navbar inverse collapseOnSelect className="navbar-fixed-top">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#" onClick={this.scrollToTop}>          
              <Image className="nav-logo" src={require('../../../public/images/tt_logo.png')} />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Nav pullLeft className="hidden-sm hidden-xs">
            <NavItem className="navbar-title" onClick={this.scrollToTop}>Theta Tau @ UC San Diego</NavItem>
        </Nav>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem onClick={() => this.scrollToComp("who-we-are")}>About Us</NavItem>
            <NavItem onClick={() => this.scrollToComp("brothers-are")}>Members</NavItem>
            <NavItem onClick={() => this.scrollToComp("why-rush")}>Rush</NavItem>
            <NavItem onClick={() => this.scrollToComp("faq")}>FAQ</NavItem>
            <NavItem onClick={() => this.scrollToComp("messenger")}>Contact Us</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export {NavBar};
