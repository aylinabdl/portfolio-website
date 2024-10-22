import React from 'react';
import './Modal.css';

const Modal = ({ showModal, handleClose, content }) => {
  if (!showModal) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <span className="close" onClick={handleClose}>&times;</span>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default Modal;
