import './Members.css';
import { isChrome } from '../../shared/helpers.js';

import React from 'react';

function MemberInfo({ brother, open }) {
  return (
    <div className="brother-info">
      <div className="brother-image-container">
        <img
          className="brother-image"
          src={isChrome ? brother.image : brother.safari}
          onClick={() => open(brother)}
          alt="Active"
        />
      </div>
      <h4>{ brother.name }</h4>
      <p>{ brother.position }</p>
      <p>{ brother.className }</p>
    </div>
  );
}

export { MemberInfo };
