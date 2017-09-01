import React, {Component} from 'react';
import {Image, Navbar, Nav, NavItem} from 'react-bootstrap';
import {animateScroll as scroll, scroller} from 'react-scroll';
import './NavBar.css';

class NavBar extends Component {
  scrollToTop() {
    scroll.scrollToTop();
  }

  scrollToComp(name) {
    scroller.scrollTo(name, {
      offset: -80,
      smooth: true
    });
    if (document.querySelector('#hamburger').classList.contains('open')) {
      document
        .querySelector('#hamburger')
        .classList
        .toggle('open');
      document
        .querySelector('.navbar-collapse .navbar-nav')
        .style
        .opacity = 0;
      document
        .querySelector('.navbar-collapse .navbar-nav')
        .style
        .zIndex = -1;
      document
        .querySelector('#nav-logo')
        .style
        .opacity = 1;
      document.body.style.overflow = 'visible';
    }
  }

  openMenu() {
    document
      .querySelector('#hamburger')
      .classList
      .toggle('open');
    if (document.querySelector('#hamburger').classList.contains('open')) {
      document
        .querySelector('.navbar-fixed-top')
        .style
        .backgroundColor = '#000';
      document
        .querySelector('#nav-logo')
        .style
        .opacity = 0;
      document
        .querySelector('.navbar-collapse .navbar-nav')
        .style
        .opacity = 1;
      document.body.style.overflow = 'hidden';
    } else {
      document
        .querySelector('.navbar-fixed-top')
        .style
        .backgroundColor = 'rgba(10, 10, 10, .9)';
      document
        .querySelector('#nav-logo')
        .style
        .opacity = 1;
      document
        .querySelector('.navbar-collapse .navbar-nav')
        .style
        .opacity = 0;
      document.body.style.overflow = 'visible';
    }
  }

  render() {
    return (
      <Navbar className="navbar-fixed-top" inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a id="nav-logo" href="#" onClick={this.scrollToTop}>
              <Image className="logo" src={require('../../../../public/images/tt_logo.png')}/>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle
            children={<div id="hamburger">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              </div>
            }
            onClick={this.openMenu}/>
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
