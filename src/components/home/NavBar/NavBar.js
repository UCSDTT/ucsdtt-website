import './NavBar.css';

import React, {Component} from 'react';
import {Image, Nav, NavItem, Navbar} from 'react-bootstrap';
import {animateScroll as scroll, scroller} from 'react-scroll';

class NavBar extends Component {
  underline = (event) => {
    if (window.innerWidth > 768) {
      event
        .target
        .classList
        .toggle('underline');
    }
  }

  openMenu() {
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

    if (window.innerWidth <= 768) {
      if (document.body.style.overflow === 'hidden') {
        document.body.style.overflow = 'visible';
      }
      else {
        document.body.style.overflow = 'hidden';
      }
    }
  }

  scrollToTop() {
    scroll.scrollToTop({
      duration: 1000,
    });
    this.openMenu();
  }

  scrollToComp(name) {
    scroller.scrollTo(name, {
      duration: 1000,
      offset: 0,
      smooth: true,
    });
    this.openMenu();
  }

  render() {
    return (
      <Navbar className="navbar-fixed-top" collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a role="button" id="nav-logo" href="/">
              <Image className="logo" src={require('./images/logo.png')}/>
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
          <NavItem className="navbar-title" onClick={this.scrollToTop}>Theta Tau, UCSD</NavItem>
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
              onClick={this.scrollToTop.bind(this)}
              onMouseOver={this.underline} 
              onMouseOut={this.underline}
            >
              Home
            </NavItem>
            <NavItem 
              onClick={() => this.scrollToComp("about-us")}
              onMouseOver={this.underline} 
              onMouseOut={this.underline}
            >
              About
            </NavItem>
            <NavItem 
              onClick={() => this.scrollToComp("why-rush")}
              onMouseOver={this.underline} 
              onMouseOut={this.underline}
            >
              Rush
            </NavItem>
            <NavItem 
              onClick={() => this.scrollToComp("faq")}
              onMouseOver={this.underline} 
              onMouseOut={this.underline}
            >
              Questions?
            </NavItem>
            <li role="presentation">
              <a
                style={{color: '#b22222'}} 
                href="/members"
                onMouseOver={this.underline}
                onMouseOut={this.underline}
              >
                Members
              </a>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export {NavBar};
