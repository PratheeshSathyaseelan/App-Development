// LoginModal.js
import React from 'react';

const LoginModal = ({ isOpen, onClose }) => {
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        {/* Your login form or content goes here */}
      </div>
    </div>
  );
};

export default LoginModal;
