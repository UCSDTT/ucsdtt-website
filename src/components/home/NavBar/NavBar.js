import './NavBar.css';

import { Nav, Navbar } from 'react-bootstrap';
import React, { Component } from 'react';
import { animateScroll as scroll, scroller } from 'react-scroll';

/* Underlines the hovered element by adding the underline class */
// function underline(event) {
//   if (window.innerWidth > 768) {
//     event.target.classList.toggle('underline');
//   }
// }

/* Opens the menu for mobile */
// function openMenu() {
//   /* Adds the open class to these elements */
//   document.querySelector('#hamburger').classList.toggle('open');
//   document.querySelector('.navbar-fixed-top').classList.toggle('open');
//   document.querySelector('#nav-logo').classList.toggle('open');
//   document.querySelector('.navbar-collapse .navbar-nav').classList.toggle('open');

//   /* Prevents user from scrolling if menu is open on mobile */
//   if (document.body.style.overflow === 'hidden') {
//     document.body.style.overflow = 'visible';
//   } else {
//     document.body.style.overflow = 'hidden';
//   }
// }

/* Scrolls to the top */
function scrollToTop() {
  scroll.scrollToTop({
    duration: 1000
  });

  /* If window width is less than 768px, closes hamburger menu */
  // if (window.innerWidth <= 768) {
  //   openMenu();
  // }
}

/* Scrolls to the selected section */
function scrollToComp(name) {
  scroller.scrollTo(name, {
    duration: 1000,
    offset: 0,
    smooth: true
  });

  /* If window width is less than 768px, closes hamburger menu */
  // if (window.innerWidth <= 768) {
  //   openMenu();
  // }
}

class NavBar extends Component {
  render() {
    return (
      <>
        {/* <Navbar className="navbar-fixed-top" collapseOnSelect>
          <Navbar.Brand>
            <a role="button" id="nav-logo" href="/">
              <Image
                className="logo"
                src={
                  isChrome
                    ? require('./images/logo.webp')
                    : require('./images/logo.png')
                }
              />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle
            children={
              <div id="hamburger">
                <span />
                <span />
                <span />
                <span />
              </div>
            }
            onClick={openMenu}
          />
          <Nav pullLeft className="hidden-sm hidden-xs">
            <NavItem className="navbar-title" onClick={scrollToTop}>
              Theta Tau @ UCSD
            </NavItem>
          </Nav>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem
                onClick={scrollToTop}
                onMouseOver={underline}
                onMouseOut={underline}
              >
                Home
              </NavItem>
              <NavItem
                href="rush"
                onMouseOver={underline}
                onMouseOut={underline}
              >
                Rush
              </NavItem>
              <NavItem
                onClick={() => scrollToComp('about-us')}
                onMouseOver={underline}
                onMouseOut={underline}
              >
                About
              </NavItem>
              <NavItem
                onClick={() => scrollToComp('faq')}
                onMouseOver={underline}
                onMouseOut={underline}
              >
                FAQ
              </NavItem>
              <NavItem
                href="members"
                onMouseOver={underline}
                onMouseOut={underline}
              >
                Members
              </NavItem>
              <Navbar.Brand>
                <li>
                  <a href="http://garnett-app.herokuapp.com">
                    <Image
                      className="gem"
                      src={require('./images/garnett.svg')}
                    />
                  </a>
                </li>
              </Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
        </Navbar> */}

        <Navbar collapseOnSelect sticky="top" expand="sm" variant="dark">
          <Navbar.Brand onClick={scrollToTop}>
            <img className="logo nav-logo" src={require('./images/logo.webp')} alt="TT Logo" />
          </Navbar.Brand>
          <Navbar.Brand className="nav-title" onClick={scrollToTop}>
            THETA TAU @ UCSD
          </Navbar.Brand>
          <Navbar.Toggle className="ml-auto" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link onClick={() => scrollToComp('rush')}>Rush</Nav.Link>
              <Nav.Link onClick={() => scrollToComp('about-us')}>About</Nav.Link>
              <Nav.Link onClick={() => scrollToComp('faq')}>FAQ</Nav.Link>
              <Nav.Link onClick={() => scrollToComp('messenger')}>Members</Nav.Link>
            </Nav>
            <Navbar.Brand href="http://garnett-app.herokuapp.com">
              <img className="gem" src={require('./images/garnett.svg')} alt="Garnett Logo" />
            </Navbar.Brand>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export { NavBar };
