import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';

const RegistrationButton = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleRegistrationSuccess = (registration) => {
    // El formulario manejará la visualización del éxito
    // y se cerrará automáticamente después
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  return (
    <>
      <button 
        className="register-button"
        onClick={handleOpenModal}
      >
        Registrarme al sorteo
      </button>

      {showModal && (
        <RegistrationForm
          mode="button"
          onClose={handleCloseModal}
          onSuccess={handleRegistrationSuccess}
        />
      )}
    </>
  );
};

export default RegistrationButton; 