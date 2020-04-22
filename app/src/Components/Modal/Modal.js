
const Modal = ({ heading, show, handleClose, modalContent }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  
    return (
        <div className={showHideClassName}>
            <section className='modal-main'>
                <header>
                    <h2>{ heading }</h2>
                    <button className="btnCloseCircle" onClick={ handleClose }>X</button>
                </header>
                <div className="modalContent">{ modalContent }</div>
            </section>
        </div>
    );
}