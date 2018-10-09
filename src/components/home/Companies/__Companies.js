import React, { Component } from 'react';
import { Element } from 'react-scroll';
import './Companies.css';

class Companies extends Component {
  render() {
    return (
      <Element name="companies" className="element">
        <div className="container">
          <h1 className="header">Our Alumni Network </h1>

          <div className="row logo_row ">
            <div className="col-md-6"> <img src="https://www.facebook.com/images/fb_icon_325x325.png" height="130"/> </div>
            <div className="col-md-6"><img src="http://diylogodesigns.com/blog/wp-content/uploads/2016/04/Microsoft-Logo-PNG.png" height="130" /></div>
          </div>

          <div className="row logo_row">
            <div className="col-md-6 "><img src="https://piktochart.com/wp-content/uploads/2017/02/amazon-logo-copy-800x258.png" height="130" /></div>
            <div className="col-md-6 northrop"><img src="http://www.pngpix.com/wp-content/uploads/2016/07/PNGPIX-COM-Northrop-Grumman-Logo-PNG-Transparent.png" height="90"/></div>
          </div>

          <div className="row logo_row">
            <div className="col-md-4 "> <img src="http://pngimg.com/uploads/intel/intel_PNG16.png" height="70" /> </div>
            <div className="col-md-4"><img src="http://www.lockheedmartin.com/content/dam/lockheed/data/corporate/photo/general/LM-logo-700.jpg" height="70" /></div>
            <div className="col-md-4"> <img src="https://seeklogo.com/images/H/hp-logo-EEECF99DCE-seeklogo.com.png" height="70"/> </div>
          </div>

          <div className="row logo_row">
            <div className="col-md-4"> <img src="https://vignette1.wikia.nocookie.net/wowwiki/images/c/cf/Blizzard_app-OSX_1024x1024_icon.png/revision/latest?cb=20170324041037" height="70"/> </div>
            <div className="col-md-4"><img src="https://www.intuit.com/content/dam/intuit/intuitcom/company/images/logo-intuit-preferred.jpg" height="70" /></div>
            <div className="col-md-4"><img src="https://pbs.twimg.com/profile_images/883085574365753345/VsAF357r.jpg" height="70" /></div>
          </div>

          <div className="row logo_row">
            <div className="col-md-4"> <img src="http://aeroengineer.org/wp-content/uploads/2016/11/SPACEX.png" width="250" /> </div>
            <div className="col-md-4"> <img src="http://alliance.sdccmesa.com/wp-content/uploads/2014/11/solarturbinesacatcomp.jpg" height="70" /> </div>
            <div className="col-md-4"><img src="http://www.freelogovectors.net/wp-content/uploads/2012/09/teradata-logo.jpg" height="45" /></div>
          </div>
        </div>
      </Element>
    );
  }
}

export { Companies };