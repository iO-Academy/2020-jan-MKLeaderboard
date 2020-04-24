import React from 'react';
import Modal from '../Modal/Modal';
import CreateRacerForm from '../CreateRacerForm/CreateRacerForm';
import './utilityBar.css';

class UtilityBar extends React.Component {
    state = { 
        modalShow: false,
        modalHeading: '',
        modalContent: <CreateRacerForm />,


    }
  
    showModal = () => {
        this.setState({ modalShow: true });
    }
    
    hideModal = () => {
        this.setState({ modalShow: false });
    }
      
    render() {
        return (
            <div className="utilityBar">
                <Modal heading={'Create a Racer'} show={this.state.modalShow} handleClose={this.hideModal} modalContent={<CreateRacerForm />} />
                <button type='button' className ="utilityButton" onClick={this.showModal}><span>+</span> Create a Racer</button>
            </div>
        )
    }
}
  
export default UtilityBar;