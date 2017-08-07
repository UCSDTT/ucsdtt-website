import React, {Component} from 'react';
import {Image, Navbar, MenuItem, NavDropdown, Nav, NavItem} from 'react-bootstrap';

class Landing extends Component {
  render() {
    return (
    <div className="landing">
      <Navbar inverse collapseOnSelect className="navbar-default navbar-fixed-top">
        <Navbar.Header>
          <Navbar.Brand>
            <a className="no-padding" href="#">          
              <Image className="nav-logo" src={require('../../../public/images/tt_logo.png')} />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem className="nav-bar-link" eventKey={1} href="#">Link</NavItem>
            <NavItem className="nav-bar-link" eventKey={2} href="#">Link</NavItem>
            <NavDropdown className="nav-bar-link" eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Image className="picture" src={require('../../../public/images/BR.jpg')} responsive/>     
    </div>
    );
  }
}
Landing.className="Landing"
export {Landing};
