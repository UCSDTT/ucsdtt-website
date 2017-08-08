import React, {Component} from 'react';
import {Image, Navbar, MenuItem, NavDropdown, Nav, NavItem} from 'react-bootstrap';
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
      <div>
        <Navbar inverse collapseOnSelect className="navbar-default navbar-fixed-top navbar">
        <Navbar.Header>
          <Navbar.Brand>
            <a className="no-padding" href="#" onClick={this.scrollToTop}>          
              <Image className="nav-logo" src={require('../../../public/images/tt_logo.png')} />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem className="nav-bar-link" onClick={() => this.scrollToComp("who-we-are")}>About Us</NavItem>
            <NavItem className="nav-bar-link" onClick={() => this.scrollToComp("brothers-are")}>Members</NavItem>
            <NavItem className="nav-bar-link" onClick={() => this.scrollToComp("why-rush")}>Rush</NavItem>
            <NavItem className="nav-bar-link" onClick={() => this.scrollToComp("faq")}>FAQ</NavItem>
            <NavItem className="nav-bar-link" onClick={() => this.scrollToComp("contact-us")}>Contact Us</NavItem>
            <NavDropdown className="nav-bar-link" eventKey={6} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    );
  }
}

export {NavBar};
