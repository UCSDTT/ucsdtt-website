import React from 'react';
import "../style/about.css";

function titleComponent(props) {
  return (
    <div>
      <div className="text-4xl sm:text-5xl px-10 text-red-800 abhaya">{props.text}</div>
      <div className="grow border-2 border-red-800"></div>
    </div>
  );
};

export default titleComponent;
