import React, {Component} from 'react';
import {Image, Navbar, MenuItem, NavDropdown, Nav} from 'react-bootstrap';
import {animateScroll as scroll, Link} from 'react-scroll'; 

class NavBar extends Component {
  scrollToTop() {
    scroll.scrollToTop();
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
            <li role="presentation" class="nav-bar-link"><Link activeClass="active" to="who-we-are" offset={-120} smooth={true} href="#">About Us</Link></li>
            <li role="presentation" class="nav-bar-link"><Link activeClass="active" to="brothers-are" offset={-120} smooth={true} href="#">Members</Link></li>
            <li role="presentation" class="nav-bar-link"><Link activeClass="active" to="why-rush" offset={-120} smooth={true} href="#">Rush</Link></li>
            <li role="presentation" class="nav-bar-link"><Link activeClass="active" to="faq" offset={-120} smooth={true} href="#">FAQ</Link></li>
            <li role="presentation" class="nav-bar-link"><Link activeClass="active" to="contact-us" offset={-120} smooth={true} href="#">Contact Us</Link></li>
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
