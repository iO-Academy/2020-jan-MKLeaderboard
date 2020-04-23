import React from 'react';
import './modal.css';

const Modal = ({ heading, show, handleClose, modalContent }) => {
    var showHideClassName = show ? 'modal display-block' : 'modal display-none';
  
    return (
        <div className={showHideClassName}>
            <section className='modal-main'>
                <header>
                    <h2>{ heading }</h2>
                    <button className="btnCloseCircle" onClick={ handleClose }>&#10006;</button>
                </header>
                <div className="modalContent">{ modalContent }</div>
            </section>
        </div>
    );
}

export default Modal;