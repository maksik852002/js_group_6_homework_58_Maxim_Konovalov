import React from 'react';
import './Popup.css';

const Popup = props => {
  
  let text = 'A simple success alert!'
  props.type==='warning'&& (text='A simple warning alert!');
  props.type==='primary'&& (text='A simple primary alert!');
  props.type==='danger'&& (text='A simple danger alert!');

  return (
    <div onClick={!props.clickDismissable ? props.dismiss : null} 
    className={`Alert ${['alert' , props.type].join('-')}`} 
    style={{
      transform: props.show ? 'translate(-50%, 0)' : 'translateY(-100vh)',
      opacity: props.show ? '1' : '0'
    }}>
      {text}
      {props.clickDismissable && props.children}
    </div>
  );
}

export default Popup;