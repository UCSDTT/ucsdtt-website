import './AboutUs.css';
import {isChrome} from '../../../helpers/helpers.js';

import React from 'react';

class Scroll extends React.Component {
  componentDidMount() {
    /* Scroll Stuff */
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

      let container = document.getElementById('container');

      syncPanelContent(tops, bottoms, 0, container.clientHeight, panelHeight);

      function update() {
        let container = document.getElementById('container');
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
  
  render() {
    return (
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
            <span className="founder"> Jennifer Young</span>, thirteen founding fathers <img className="lozad scroll-crest" data-src={isChrome ? (require('./images/crest.webp')) : (require('./images/crest.png'))} alt="Crest" />
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
            className="founders"
            src={isChrome ? (require('./images/founders.webp')) : (require('./images/founders.jpg'))} 
            alt="Founders"
          />
        </div>
      </div>
    )
  }
}

class MobileOrigins extends React.Component {
  render() {
    return (
      <div className="mobile-origins">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;
          In the Spring of 2009, several students of UCSD's Jacobs School of Engineering felt that there was a lack of engineering representation in the Greek community on campus. Luckily an opportunity arose for them to change that.
        </p>
        <p> </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;
          With the help of a Theta Tau alumnus, 
          <span className="founder"> Jennifer Young</span>, thirteen founding fathers took the first step towards establishing a chapter of the nation's oldest and largest professional engineering fraternity on the UCSD campus: 
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
        <p> </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;
          On November 20th, 2010, UCSD was installed as the Epsilon Delta Chapter of Theta Tau.
        </p>

        <img 
          className="lozad founders"
          data-src={isChrome ? (require('./images/founders.webp')) : (require('./images/founders.jpg'))} 
          alt="Founders"
        />
      </div>
    )
  }
}

export {Scroll, MobileOrigins}
