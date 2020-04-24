import React from 'react';
import Modal from '../Modal/Modal';
import CreateRacerForm from '../CreateRacerForm/CreateRacerForm';
import CreateRaceLogForm from '../CreateRaceLogForm/CreateRaceLogForm';
import './utilityBar.css';

class UtilityBar extends React.Component {
    state = { 
        modalShow: false,
        modalHeading: this.props.modalOptions.modalHeading,
        modalContent: this.props.modalOptions.modalContent,
        modalButtonText: this.props.modalOptions.modalButtonText
    };

    showModal = () => {
        this.setState({ modalShow: true });
    };
    
    hideModal = () => {
        this.setState({ modalShow: false });
    };
      
    render() {
        return (
            <div className="utilityBar">
                <Modal heading={ this.state.modalHeading } show={this.state.modalShow} handleClose={this.hideModal} modalContent={this.state.modalContent === 'CreateRacerForm' ? <CreateRacerForm /> : <CreateRaceLogForm />} />
                <button type='button' className ="utilityButton" onClick={this.showModal}><span>+ </span>{ this.state.modalButtonText }</button>
            </div>
        )
    }
}
  
export default UtilityBar;