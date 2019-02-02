import './AboutUs.css';
import { isChrome } from '../../../helpers/helpers.js';

import React from 'react';

class Pillars extends React.Component {
  /* Shows info for pillars on mouse hover */
  showInfo(target) {
    /* Only runs when window width is greater than 768px */
    if (window.innerWidth >= 768) {
      let imageGroup = document.getElementsByClassName('pillar-image');
      let imageInfoGroup = document.getElementsByClassName('pillar-info');

      /* Adds these classes to zoom into photo */
      imageGroup[target].classList.toggle('zoom');
      imageInfoGroup[target].classList.toggle('show');
      imageInfoGroup[target].classList.toggle('slideInUp');
    }
  }

  render() {
    return (
      <div>
        <div
          className="pillar-image-container"
          onMouseOver={() => this.showInfo(this.props.index)}
          onMouseOut={() => this.showInfo(this.props.index)}
        >
          <img
            className="lozad pillar-image"
            data-src={isChrome ? this.props.pillar.image : this.props.pillar.safari}
            alt="Pillar"
          />
          <div className="pillar-info animated">
            <h3> {this.props.pillar.info} </h3>
            <h4> {this.props.pillar.description} </h4>
          </div>
        </div>
        <h3 className="pillar-name">{this.props.pillar.name}</h3>
        <p className="pillar-content">{this.props.pillar.content}</p>
      </div>
    );
  }
}

export { Pillars };
