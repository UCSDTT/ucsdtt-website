import './NavBar.css';
import {isChrome} from '../../../helpers/helpers.js';

import {Image, Nav, NavItem, Navbar} from 'react-bootstrap';
import React, {Component} from 'react';
import {animateScroll as scroll, scroller} from 'react-scroll';

/* Underlines the hovered element by adding the underline class */
function underline(event) {
  if (window.innerWidth > 768) {
    event
      .target
      .classList
      .toggle('underline');
  }
}

/* Opens the menu for mobile */
function openMenu() {
  /* Adds the open class to these elements */
  document
    .querySelector('#hamburger')
    .classList
    .toggle('open');
  document
    .querySelector('.navbar-fixed-top')
    .classList
    .toggle('open');
  document
    .querySelector('#nav-logo')
    .classList
    .toggle('open');
  document
    .querySelector('.navbar-collapse .navbar-nav')
    .classList
    .toggle('open');
  
  /* Prevents user from scrolling if menu is open on mobile */
  // if (document.body.style.overflow === 'hidden') {
  //   document.body.style.overflow = 'visible';
  // }
  // else {
  //   document.body.style.overflow = 'hidden';
  // }
}

/* Scrolls to the top */
function scrollToTop() {
  scroll.scrollToTop({
    duration: 1000,
  });

  /* If window width is less than 768px, closes hamburger menu */
  if (window.innerWidth <= 768) {
    openMenu();
  }
}

/* Scrolls to the selected section */
function scrollToComp(name) {
  scroller.scrollTo(name, {
    duration: 1000,
    offset: 0,
    smooth: true,
  });

  /* If window width is less than 768px, closes hamburger menu */
  if (window.innerWidth <= 768) {
    openMenu();
  }
}

class NavBar extends Component {
  render() {
    return (
      <Navbar className="navbar-fixed-top" collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a role="button" id="nav-logo" href="/">
              <Image 
                className="logo" 
                src={isChrome ? (require('./images/logo.webp')) : (require('./images/logo.png'))} 
              />
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
            onClick={openMenu}
          />
        </Navbar.Header>
        <Nav pullLeft className="hidden-sm hidden-xs">
          <NavItem className="navbar-title" onClick={scrollToTop}>Theta Tau @ UCSD</NavItem>
        </Nav>
        <Navbar.Collapse>
          <Nav pullRight>
            {/*<li role="presentation">
              <DropdownButton
                title="About" 
                noCaret 
                id="about"
                onClick={() => {
                  this.scrollToComp("about-us");
                  document.querySelector('.dropdown .dropdown-menu').style.display = 'none';
                }}
              >
                <MenuItem eventKey="1" href="/history">History</MenuItem>
                <MenuItem eventKey="2" href="/brotherhood">Brotherhood</MenuItem>
                <MenuItem eventKey="3" href="/professionalism">Professionalism</MenuItem>
                <MenuItem eventKey="4" href="/philanthropy">Philanthropy</MenuItem>
              </DropdownButton>
            </li>*/}
            <NavItem 
              onClick={scrollToTop}
              onMouseOver={underline} 
              onMouseOut={underline}
            >
              Home
            </NavItem>
            <NavItem 
              onClick={() => scrollToComp("rush")}
              onMouseOver={underline} 
              onMouseOut={underline}
            >
              Rush
            </NavItem>
            <NavItem 
              onClick={() => scrollToComp("about-us")}
              onMouseOver={underline} 
              onMouseOut={underline}
            >
              About
            </NavItem>
            <NavItem 
              onClick={() => scrollToComp("faq")}
              onMouseOver={underline} 
              onMouseOut={underline}
            >
              FAQ
            </NavItem>
            <NavItem 
              onClick={() => scrollToComp("messenger")}
              onMouseOver={underline} 
              onMouseOut={underline}
            >
              Members
            </NavItem>
            <Navbar.Brand>
              <li>
                <a href="http://garnett-app.herokuapp.com">
                  <Image className="gem" src={require('./images/garnett.svg')} />
                </a>
              </li>
            </Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export {NavBar};
