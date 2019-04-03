import './AboutUs.css';
import { isChrome, isMobile } from '../../../shared/helpers.js';

import React, { Fragment } from 'react';
import styled from 'styled-components';

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
    } else if (style.styleSheet) style.styleSheet.addRule(selector, rule);

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

    function transYrotX(y, x) {
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
        } else {
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

  get body() {
    return (
      <Fragment>
        <p>
          <Lorem>I</Lorem>n the Spring of 2009, several students of UCSD's Jacobs School of Engineering felt
          that there was a lack of engineering representation in the Greek community on campus. Luckily an opportunity
          arose for them to change that.
        </p>
        <FoundersList>
          &nbsp;&nbsp;&nbsp;&nbsp;With the help of a Theta Tau alumnus,
          <i>&nbsp;Jennifer Young</i>,&nbsp;thirteen founding fathers
          {isMobile() ? (
            ' '
          ) : (
            <ScrollCrest
              className="lozad"
              data-src={isChrome ? require('./images/crest.webp') : require('./images/crest.png')}
              alt="Crest"
            />
          )}
          took the first step towards
          establishing a chapter of the nation's oldest and largest professional engineering fraternity on the UCSD
          campus:
          <i>&nbsp;Ashay Verma</i>,<i>&nbsp;Errynne Bell</i>,
          <i>&nbsp;Takahiro Kuwayama</i>,<i>&nbsp;Amelia Chu</i>,
          <i>&nbsp;Xiumei Wu</i>,<i>&nbsp;Chris Lam</i>,
          <i>&nbsp;Chuong Do</i>,<i>&nbsp;Joe Shao</i>,
          <i>&nbsp;Michelle Mojica</i>,
          <i>&nbsp;Tanakorn Best Techajongchareon</i>,<i>&nbsp;Scott Louie</i>
          ,<i>&nbsp;Alan Leung</i>,&nbsp;and
          <i>&nbsp;John Phu Nguyen</i>.
        </FoundersList>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp; On November 20th, 2010, UCSD was installed as the Epsilon Delta Chapter of Theta Tau.
        </p>
        <FoundersImage
          className="lozad"
          data-src={isChrome ? require('./images/founders.webp') : require('./images/founders.jpg')}
          alt="Founders"
        />
      </Fragment>
    )
  }

  render() {
    return (
      <div id="container">
        <div id="content">
          <ScrollTitle>
            <h1>The Founding</h1>
            <h2>of</h2>
            <h1>Epsilon Delta Chapter</h1>
          </ScrollTitle>
          { this.body }
        </div>
      </div>
    );
  }
}

class MobileOrigins extends React.Component {
  render() {
    return (
      <MobileContainer>
        &nbsp;&nbsp;&nbsp;&nbsp;
        { this.body }
      </MobileContainer>
    );
  }
}

export { Scroll, MobileOrigins };

const MobileContainer = styled.div`
  @media (min-width: 992px) {
    display: none;
    width: 60%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const ScrollTitle = styled.header`
  margin-top: 30px;
  text-align: center;

  > {
    margin-top: 10px;
    margin-bottom: 0;
    text-align: center;
  }

  & h1 {
    font-size: 45px;
  }

  & h2 {
    font-size: 25px;
  }
`;

const Lorem = styled.span`
  @media (min-width: 992px) {
    font-size: 7em;
    color: var(--primary-color);
    float: left;
    line-height: 1;
    margin-right: 20px;
  }
`;

const FoundersList = styled.p`
  & i {
    color: var(--primary-color);

    @media (max-width: 768px) {
      font-weight: 700;
    }
  }
`;

const ScrollCrest = styled.img`
  float: right;
  height: 300px;
  margin: 20px 20px 0;
`;

const FoundersImage = styled.img`
  width: 80%;
  margin: 50px 75px 180px;
  filter: grayscale(80%);

  @media (max-width: 992px) {
    width: 100%;
    margin-top: 50px;
    filter: grayscale(80%);
  }
`;
