import React, { useState } from 'react';
import LoginByDNI from './LoginByDNI';

const CheckRegistration = ({ onRegisterClick }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleRegisterClick = () => {
    setShowModal(false);
    if (onRegisterClick) {
      onRegisterClick();
    }
  };

  return (
    <>
      <button 
        className="nav-check-button"
        onClick={handleOpenModal}
      >
        Ya me anoté
      </button>

      {showModal && (
        <LoginByDNI
          onClose={handleCloseModal}
          onRegisterClick={handleRegisterClick}
        />
      )}
    </>
  );
};

export default CheckRegistration; 