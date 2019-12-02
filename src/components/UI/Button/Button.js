import React from 'react';

const Button = props => (
  <button
    onClick={props.click}
    className={`btn ${props.type==='close' ? props.type : ['btn', props.type].join('-')}`}
  >
    {props.label}
  </button>
);

export default Button;