import React, {Fragment} from 'react';
import Backdrop from "../Backdrop/Backdrop";
import './Modal.css';


const Modal = props => (
  <Fragment>
    <Backdrop
      show={props.show}
      onClick={props.close}
    />
    <div className="Modal" style={{
      transform: props.show ? 'translate(-50%, 0)' : 'translateY(-100vh)',
      opacity: props.show ? '1' : '0'
      }}>
      <div className="modal-dialog">  
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{props.title}</h5>
            <button onClick={props.close} type="button" className="close">x</button>
          </div>
          <div className="modal-body">
            <p>{props.text}</p>
          </div>
          <div className="modal-footer">
            {props.children}  
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export default Modal;