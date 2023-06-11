import React from 'react';
import './Modal.css';
import Close from '../../images/Close.png';

export default function Modal({ open, children, onClose }) {
    if (!open) return null;

    return (
        <>
            <div className='modal-block-overlay-style' />
            <div className='modal-block'>
                <div className='modal-block-close'>
                    <button onClick={onClose} className='modal-block-close-btn' ><img className='modal-block-close-img' src={Close} alt='Close' /></button>
                </div>
                {children}
            </div>
        </>
    );

}

