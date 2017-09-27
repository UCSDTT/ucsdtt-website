import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {Element} from 'react-scroll';
import './AboutUs.css';
import {gearPosition, pillarData} from './data.js';

class AboutUs extends Component {
  componentDidMount() {
    window.onscroll = function() {
      let navbarHeight = document.querySelector('.navbar').clientHeight;
      let landingHeight = document.querySelector('.landing').clientHeight;
      let aboutHeight = document.querySelector('.element.about').clientHeight;
      let gears = document.getElementsByClassName('gear');
      let gearsOpp = document.getElementsByClassName('gear-opp');
      let wScroll = document.body.scrollTop || document.documentElement.scrollTop;

      if (document.body.scrollTop >= navbarHeight) {
        document.querySelector('.navbar').style.background = 'rgba(10, 10, 10, 0.8)';
      }
      else {
        document.querySelector('.navbar').style.background = 'transparent';
      }
      
      if (window.innerWidth >= 768) {
        if (wScroll <= landingHeight + aboutHeight) {
          Array.from(gears).forEach( gear => {
            gear.style.transform = 'rotate(' + wScroll / 5 + 'deg)';
          })
          Array.from(gearsOpp).forEach( gear => {
            gear.style.transform = 'rotate(-' + wScroll / 5 + 'deg)';
          })
        }
      }
    }

    var div = document.createElement('div');
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.overflow = 'scroll';
    div.style.position = 'absolute';
    div.style.top = '-9999px';
    document.body.appendChild(div);

    var scrollBarWidth = div.offsetWidth - div.clientWidth;

    document.body.removeChild(div);

    var style = document.createElement('style');
    document.querySelector('head').appendChild(style);

    var selector = '.panel-content';
    var rule = `padding-right: ${scrollBarWidth}px`;

    if (style.sheet) {
      if (style.sheet.insertRule) style.sheet.insertRule(`${selector} {${rule}}`, 0);
      else style.sheet.addRule(selector, rule);
    }
    else if (style.styleSheet) style.styleSheet.addRule(selector, rule);

    // Each articulation panel consists of three DOM elements
    //  - a grandparent for 3d positioning
    //  - a parent for clipping
    //  - and a child to hold and 'scroll' content via changing transforms
    function panel(html) {
      var panelNode = document.createElement('div');
      var panelCutoutNode = document.createElement('div');
      var panelContentNode = document.createElement('div');
        
      panelNode.classList.add('panel-node');
      
      panelCutoutNode.classList.add('panel-cutout');
      
      panelContentNode.innerHTML = html;
      panelContentNode.classList.add('panel-content');
      
      panelCutoutNode.appendChild(panelContentNode);
      panelNode.appendChild(panelCutoutNode);
      
      return panelNode;
    }

    // Keep the content panels in sync by translating them up or down according to the scroll distance
    function syncPanelContent(tops, bottoms, scrollTop, containerHeight, panelHeight) {
      for (var i = 0; i < tops.length; i++) {
        var t = tops[i];
        var b = bottoms[i];
        var tTop = (i + 1) * panelHeight - scrollTop;
        var bTop = -i * panelHeight - scrollTop - containerHeight;
        t.style.transform = `translate3d(0,${tTop}px,0)`;
        b.style.transform = `translate3d(0,${bTop}px,0)`;
      }
    }

    function transYrotX(y,x) {
      return `translate3d(0,${y}px,0) rotateX(${x}rad)`;
    }

    // Create num top and bottom panels based off the innerHTML of el with articulation angle.
    // We nest panels and use `transform-style: preserve-3d` to get the tentacle curl effect.
    // Should probably only use this on relatively simple el's, because we are going to need to create 2 * num deep copies of el and attach them to the DOM. Needless to say, this will scale poorly.
    function createScrollOverlay(el, panelHeight, num, angle) {
      var tops = [];
      var bottoms = [];

      var topParent = el.parentNode;
      var bottomParent = el.parentNode;

      var html = el.innerHTML;
      
      var totalTheta = 0;
      
      for (var i = 0; i < num; i++) {
        var topPanel = panel(html);
        var bottomPanel = panel(html);

        topPanel.style.height = `${panelHeight}px`;
        bottomPanel.style.height = `${panelHeight}px`;
        topPanel.style.transformOrigin = '50% 100% 0';
        bottomPanel.style.transformOrigin = '50% 0% 0';
        
        var topPanelContent = topPanel.querySelector('.panel-content');
        var bottomPanelContent = bottomPanel.querySelector('.panel-content');

        if (i === 0) {
          topPanel.style.transform = transYrotX(-panelHeight, 0);
          bottomPanel.style.top = '100%';
          bottomPanel.style.transform = transYrotX(0, 0);
        }
        else {
          topPanel.style.transform = transYrotX(-panelHeight + 0.25, angle);
          bottomPanel.style.transform = transYrotX(panelHeight - 0.25, angle);

          totalTheta += angle;
          totalTheta %= 2 * Math.PI;
          if (Math.PI * (1 / 2) < totalTheta && totalTheta < Math.PI * (3 / 2)) {
            topPanelContent.classList.add('backface');
            bottomPanelContent.classList.add('backface');
          }
        }

        angle += 0.025;

        tops.push(topPanelContent);
        bottoms.push(bottomPanelContent);

        topParent.appendChild(topPanel);
        bottomParent.appendChild(bottomPanel);

        topParent = topPanel;
        bottomParent = bottomPanel;
      }

      let container = document.querySelector('#container');

      syncPanelContent(tops, bottoms, 0, container.clientHeight, panelHeight);

      function update() {
        let container = document.querySelector('#container');
        var scrollTop = el.scrollTop;
        var containerHeight = container.clientHeight;
        requestAnimationFrame(function() {
          syncPanelContent(tops, bottoms, scrollTop, containerHeight, panelHeight);
        });
      }

      el.onscroll = update;
      window.onresize = update;
      
      // setInterval(function() {el.scrollTop++}, 32)
    }

    var theta = 0.3;
    var num = 20;
    if (/iPhone|Android/.test(navigator.userAgent)) {
      theta = 0.45;
      num = 10;
    }

    var $ = document.querySelector.bind(document);
    createScrollOverlay($('#content'), 20, num, theta);
  }

  showInfo(target) {
    if (window.innerWidth >= 768) {
      let imageGroup = document.getElementsByClassName('pillar-image');
      let imageInfoGroup = document.getElementsByClassName('pillar-info');

      imageGroup[target].classList.toggle('zoom');
      imageInfoGroup[target].classList.toggle('show');
      imageInfoGroup[target].classList.toggle('slideInUp');
    }
  }

  render() {
    return (
      <Element name="about-us" className="element about">
        {gearPosition.map((position, i) => (
          <div className={`gears ${position}`} key={i}>
            <svg className="gear" style={{fill: '#333'}} width="50%" height="50%" viewBox="0 0 201 201"><path d="M115.557,1.116c-9.907,-1.488 -19.981,-1.488 -29.889,0l-4.387,29.486c-5.762,1.591 -11.305,3.887 -16.503,6.836l-23.953,-17.747c-8.058,5.953 -15.181,13.076 -21.134,21.134l17.747,23.953c-2.949,5.198 -5.245,10.741 -6.836,16.503l-29.486,4.387c-1.488,9.908 -1.488,19.982 0,29.889l29.486,4.387c1.591,5.762 3.887,11.305 6.836,16.504l-17.747,23.952c5.953,8.058 13.076,15.181 21.134,21.135l23.953,-17.748c5.198,2.949 10.741,5.245 16.503,6.836l4.387,29.486c9.908,1.488 19.982,1.488 29.889,0l4.387,-29.486c5.762,-1.591 11.305,-3.887 16.504,-6.836l23.952,17.748c8.058,-5.954 15.181,-13.077 21.135,-21.135l-17.748,-23.952c2.949,-5.199 5.245,-10.742 6.836,-16.504l29.486,-4.387c1.488,-9.907 1.488,-19.981 0,-29.889l-29.486,-4.387c-1.591,-5.762 -3.887,-11.305 -6.836,-16.503l17.748,-23.953c-5.954,-8.058 -13.077,-15.181 -21.135,-21.134l-23.952,17.747c-5.199,-2.949 -10.742,-5.245 -16.504,-6.836l-4.387,-29.486ZM100.613,70.197c16.786,0 30.415,13.629 30.415,30.416c0,16.786 -13.629,30.415 -30.415,30.415c-16.787,0 -30.416,-13.629 -30.416,-30.415c0,-16.787 13.629,-30.416 30.416,-30.416Z"/></svg>
            <svg className="gear-opp" style={{fill: '#610301'}} width="70%" height="70%" viewBox="0 0 262 262"><path d="M182.59,44.688c-8.611,-5.121 -17.939,-8.927 -27.674,-11.291l-15.201,25.643c-5.936,-0.703 -11.936,-0.671 -17.863,0.095l-15.473,-25.481c-9.71,2.468 -18.996,6.373 -27.553,11.585l7.384,28.882c-4.694,3.699 -8.914,7.964 -12.564,12.698l-28.958,-7.077c-5.121,8.611 -8.927,17.938 -11.291,27.674l25.643,15.201c-0.703,5.936 -0.671,11.935 0.095,17.863l-25.481,15.473c2.468,9.71 6.373,18.996 11.585,27.552l28.882,-7.384c3.699,4.695 7.964,8.915 12.698,12.564l-7.077,28.959c8.611,5.121 17.938,8.926 27.674,11.291l15.201,-25.644c5.936,0.704 11.935,0.672 17.863,-0.095l15.473,25.481c9.71,-2.468 18.996,-6.372 27.552,-11.584l-7.384,-28.882c4.695,-3.7 8.915,-7.964 12.564,-12.698l28.959,7.077c5.121,-8.611 8.926,-17.939 11.291,-27.674l-25.644,-15.201c0.704,-5.936 0.672,-11.936 -0.095,-17.863l25.481,-15.473c-2.468,-9.71 -6.372,-18.996 -11.584,-27.553l-28.882,7.384c-3.7,-4.694 -7.964,-8.914 -12.698,-12.564l7.077,-28.958ZM142.656,103.004c15.543,6.342 23.013,24.109 16.671,39.652c-6.341,15.543 -24.109,23.013 -39.651,16.671c-15.543,-6.341 -23.013,-24.109 -16.672,-39.651c6.342,-15.543 24.109,-23.013 39.652,-16.672Z"/></svg>
            <svg className="gear" style={{fill: 'gold'}} width="50%" height="50%" viewBox="0 0 201 201"><path d="M115.557,1.116c-9.907,-1.488 -19.981,-1.488 -29.889,0l-4.387,29.486c-5.762,1.591 -11.305,3.887 -16.503,6.836l-23.953,-17.747c-8.058,5.953 -15.181,13.076 -21.134,21.134l17.747,23.953c-2.949,5.198 -5.245,10.741 -6.836,16.503l-29.486,4.387c-1.488,9.908 -1.488,19.982 0,29.889l29.486,4.387c1.591,5.762 3.887,11.305 6.836,16.504l-17.747,23.952c5.953,8.058 13.076,15.181 21.134,21.135l23.953,-17.748c5.198,2.949 10.741,5.245 16.503,6.836l4.387,29.486c9.908,1.488 19.982,1.488 29.889,0l4.387,-29.486c5.762,-1.591 11.305,-3.887 16.504,-6.836l23.952,17.748c8.058,-5.954 15.181,-13.077 21.135,-21.135l-17.748,-23.952c2.949,-5.199 5.245,-10.742 6.836,-16.504l29.486,-4.387c1.488,-9.907 1.488,-19.981 0,-29.889l-29.486,-4.387c-1.591,-5.762 -3.887,-11.305 -6.836,-16.503l17.748,-23.953c-5.954,-8.058 -13.077,-15.181 -21.135,-21.134l-23.952,17.747c-5.199,-2.949 -10.742,-5.245 -16.504,-6.836l-4.387,-29.486ZM100.613,70.197c16.786,0 30.415,13.629 30.415,30.416c0,16.786 -13.629,30.415 -30.415,30.415c-16.787,0 -30.416,-13.629 -30.416,-30.415c0,-16.787 13.629,-30.416 30.416,-30.416Z"/></svg>
          </div>
        ))}

        <h1 className="title"> About Us </h1>

        <Grid>
          <Row>
            <h1 className="about-section-title">The Origins of Theta Tau, UCSD</h1>
            <Col className="about-description">
              <div id="container">
                <div id="content">
                  <h1 className="scroll-title big">The Founding</h1>
                  <h1 className="scroll-title small">of</h1> 
                  <h1 className="scroll-title big">Epsilon Delta Chapter</h1>
                  <p>
                    <span id="lorem">I</span>n the Spring of 2009, several students of UCSD's Jacobs School of Engineering felt that there was a lack of engineering representation in the Greek community on campus. Luckily an opportunity arose for them to change that.
                  </p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    With the help of a Theta Tau alumnus, 
                    <span className="founder"> Jennifer Young</span>, thirteen founding fathers <img className="lozad scroll-crest" data-src={require('./images/crest.webp')} alt="Crest" />
                    took the first step towards establishing a chapter of the nation's oldest and largest professional engineering fraternity on the UCSD campus: 
                    <span className="founder"> Ashay Verma</span>, 
                    <span className="founder"> Errynne Bell</span>, 
                    <span className="founder"> Takahiro Kuwayama</span>, 
                    <span className="founder"> Amelia Chu</span>, 
                    <span className="founder"> Xiumei Wu</span>, 
                    <span className="founder"> Chris Lam</span>, 
                    <span className="founder"> Chuong Do</span>, 
                    <span className="founder"> Joe Shao</span>, 
                    <span className="founder"> Michelle Mojica</span>, 
                    <span className="founder"> Tanakorn Best Techajongchareon</span>, 
                    <span className="founder"> Scott Louie</span>, 
                    <span className="founder"> Alan Leung</span>, and 
                    <span className="founder"> John Phu Nguyen</span>.
                  </p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    On November 20th, 2010, UCSD was installed as the Epsilon Delta Chapter of Theta Tau.                   
                  </p>
                  <img 
                    className="lozad founders" 
                    data-src={require('./images/founders.webp')} 
                    alt="Founders"
                  />
                </div>
              </div>

              <div className="mobile-description">
                <p>
                In the Spring of 2009, several students of UCSD's Jacobs School of Engineering felt that there was a lack of engineering representation in the Greek community on campus. Luckily an opportunity arose for them to change that.
                </p>
                <p> </p>
                <p>With the help of a Theta Tau alumni, Jennifer Young, thirteen founding fathers took the first step towards establishing a chapter of the nation's oldest and largest professional engineering fraternity on the UCSD campus: Ashay Verma, Errynne Bell, Takahiro Kuwayama, Amelia Chu, Xiumei Wu, Chris Lam, Chuong Do, Joe Shao, Michelle Mojica, Tanakorn Best Techajongchareon, Scott Louie, Alan Leung, and John Phu Nguyen.
                </p>
                <p> </p>
                <p>  
                  On November 20th, 2010, UCSD was installed as the Epsilon Delta Chapter of Theta Tau.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <h1 className="about-section-title">The Three Pillars</h1>
            <div className="about-quote-container"> 
              <span className="about-quotes">&#10077;</span>
              <h3 className="about-quote-body">
                We, as brothers of Theta Tau, strive to embody the three pillars of our fraternity.
              </h3>
              <span className="about-quotes">&#10078;</span>
            </div>

            {pillarData.map((pillar, i) => (
              <Col className="pillar-container" md={4} key={i}>
                <div 
                  className="pillar-image-container"
                  onMouseOver={() => this.showInfo(i)}
                  onMouseOut={() => this.showInfo(i)}
                >
                  <img 
                    className="lozad pillar-image" 
                    data-src={pillar.image}
                    alt="Pillar"
                  />
                  <div className="pillar-info animated">
                    <h3> {pillar.info} </h3>
                    <h4> {pillar.description} </h4>
                  </div>
                </div>
                <h3 className="pillar-name">
                  {pillar.name}
                </h3>
                <p className="pillar-content">
                  {pillar.content}
                </p>
              </Col>
            ))}
          </Row>
        </Grid>
      </Element>
    );
  }
}

export {AboutUs}
