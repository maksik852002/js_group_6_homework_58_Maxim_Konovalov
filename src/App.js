import React, {Component, Fragment} from 'react';
import Modal from "./components/UI/Modal/Modal";
import Button from "./components/UI/Button/Button";
import Popup from "./components/UI/Popup/Popup";
import './bootstrap.min.css';

class App extends Component {
  state = {
    showModal: false,
    showAlert: false,
  };

  modalHandler = () => {
    let showModal = this.state.showModal;
    showModal = !showModal;
    this.setState({showModal});
  };

  alertHandler = () => {
    let showAlert = this.state.showAlert;
    showAlert = !showAlert;
    this.setState({showAlert});
  };

  render() {

    const modalBtns = [
      {type:'primary', label:'Continue', click:this.alertHandler},
      {type:'danger', label:'Close', click:this.modalHandler},
    ];

    const triggerBtns =[
      {type:'secondary', label:'Modal', click:this.modalHandler},
      {type:'secondary', label:'Alert', click:this.alertHandler},
    ];

    return (
      <Fragment>  
        {triggerBtns.map((el, i) => (
          <Button
            key={i}
            type={el.type}
            label={el.label}
            click={el.click}
          />
        ))}
        <Popup
          show={this.state.showAlert}
          click={this.alertHandler}
          type='danger'
          dismiss
        >
          <Button
            type='close'
            label='x'
            click={this.alertHandler}
          />
        </Popup>
        <Modal
          show={this.state.showModal}
          close={this.modalHandler}
          title="Some kind of modal title"
          text="Modal body text goes here."
        >
          {modalBtns.map((el, i) => (
            <Button
              key={i}
              type={el.type}
              label={el.label}
              click={el.click}
            />
          ))}
        </Modal> 
      </Fragment>
    )
  }
}

export default App;
