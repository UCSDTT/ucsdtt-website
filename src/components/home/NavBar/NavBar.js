import './NavBar.css';

import {Image, Nav, NavItem, Navbar} from 'react-bootstrap';
import React, {Component} from 'react';
import {animateScroll as scroll, scroller} from 'react-scroll';

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
            <a role="button" id="nav-logo" onClick={this.scrollToTop}>
              <Image className="logo" src={require('./images/tt_logo.png')}/>
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
            {/*<li role="presentation">
              <DropdownButton
                title="About" 
                noCaret 
                id="about"
                onClick={() => {
                  this.scrollToComp("who-we-are");
                  document.querySelector('.dropdown .dropdown-menu').style.display = 'none';
                }}
              >
                <MenuItem eventKey="1" href="/history">History</MenuItem>
                <MenuItem eventKey="2" href="/brotherhood">Brotherhood</MenuItem>
                <MenuItem eventKey="3" href="/professionalism">Professionalism</MenuItem>
                <MenuItem eventKey="4" href="/philanthropy">Philanthropy</MenuItem>
              </DropdownButton>
            </li>*/}
            <NavItem onClick={() => this.scrollToComp("who-we-are")}>About</NavItem>
            <li role="presentation">
              <a href="/brothers">
                Members
              </a>
            </li>
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
