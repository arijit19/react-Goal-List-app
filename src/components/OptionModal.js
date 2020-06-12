import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectOption}
        onRequestClose={props.optionModalhandler}
        contentLabel="OptionModal"
        closeTimeoutMS={200}
        className='modal'>
        <h3 className='modal__title'>Your Option</h3>
        {props.selectOption && <p className='modal__body'>{props.selectOption}</p>}
        <button onClick={props.optionModalhandler} className='button'>Okay</button>
    </Modal>
);

export default OptionModal;