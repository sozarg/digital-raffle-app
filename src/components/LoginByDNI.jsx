import React, { useState } from 'react';
import { findRegistrationByDNI } from '../services/registrationService';

const LoginByDNI = ({ onClose, onRegisterClick }) => {
  const [dni, setDni] = useState('');
  const [error, setError] = useState('');
  const [registration, setRegistration] = useState(null);

  const validateDNI = (value) => {
    if (!value.trim()) {
      return 'El DNI es obligatorio';
    }
    if (!/^\d+$/.test(value)) {
      return 'El DNI debe contener solo números';
    }
    if (value.length < 7 || value.length > 8) {
      return 'El DNI debe tener 7 u 8 dígitos';
    }
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateDNI(dni);
    
    if (validationError) {
      setError(validationError);
      return;
    }

    const found = findRegistrationByDNI(dni);
    if (found) {
      setRegistration(found);
      setError('');
    } else {
      setError('No encontramos tu registro');
      setRegistration(null);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setDni(value);
    setError('');
    setRegistration(null);
  };

  return (
    <div className="modal-overlay">
      <div className="login-dni-form">
        <button className="close-button" onClick={onClose}>×</button>
        
        {registration ? (
          <div className="success-message">
            <h3>¡Hola {registration.fullName}!</h3>
            <p>Tu número de sorteo es:</p>
            <div className="ticket-number">
              #{registration.ticketNumber.toString().padStart(4, '0')}
            </div>
            <button 
              className="secondary-button"
              onClick={onClose}
            >
              Cerrar
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2>Consultar mi número</h2>
            <p className="form-description">
              Ingresá tu DNI para ver tu número de sorteo
            </p>
            
            <div className="form-group">
              <label htmlFor="dni">DNI</label>
              <input
                type="number"
                id="dni"
                value={dni}
                onChange={handleChange}
                placeholder="Ej: 30123456"
                className={error ? 'error' : ''}
              />
              {error && (
                <div className="error-container">
                  <span className="error-message">{error}</span>
                  {error === 'No encontramos tu registro' && (
                    <button
                      type="button"
                      className="register-link"
                      onClick={onRegisterClick}
                    >
                      ¿Querés registrarte?
                    </button>
                  )}
                </div>
              )}
            </div>

            <button 
              type="submit" 
              className="submit-button"
            >
              Buscar mi número
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginByDNI; 