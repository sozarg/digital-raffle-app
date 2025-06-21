import React, { useState } from 'react';
import { findRegistrationByDNI } from '../services/registrationService';
import RegistrationForm from './RegistrationForm';

const LoginByDNI = ({ onClose, onRegisterClick }) => {
  const [dni, setDni] = useState('');
  const [error, setError] = useState('');
  const [registration, setRegistration] = useState(null);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const validateDNI = (value) => {
    if (!value.trim()) {
      return 'Ingresá un DNI válido para continuar';
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
    setHasSubmitted(true);
    
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
      setError('No encontramos un número para este DNI');
      setRegistration(null);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setDni(value);
    setError('');
    setRegistration(null);
    
    // Validación en tiempo real solo después del primer submit
    if (hasSubmitted) {
      const validationError = validateDNI(value);
      if (validationError) {
        setError(validationError);
      }
    }
  };

  const handleRegisterClick = () => {
    setShowRegistrationForm(true);
  };

  const handleRegistrationClose = () => {
    setShowRegistrationForm(false);
    onClose();
  };

  // Si se está mostrando el formulario de registro
  if (showRegistrationForm) {
    return (
      <RegistrationForm
        mode="button"
        onClose={handleRegistrationClose}
        onSuccess={handleRegistrationClose}
        initialDni={dni}
      />
    );
  }

  return (
    <div className="modal-overlay">
      <div className="dni-lookup-modal">
        <button className="close-button" onClick={onClose}>×</button>
        
        {registration ? (
          <div className="lookup-success">
            <div className="success-icon">✓</div>
            <h3>¡Hola {registration.fullName}!</h3>
            <div className="direct-result">
              <p>Tu número de sorteo es: <span className="ticket-number-inline">#{registration.ticketNumber.toString().padStart(4, '0')}</span> 🎉</p>
            </div>
            <div className="registration-details">
              <p><strong>Registrado el:</strong> {new Date(registration.fechaRegistro).toLocaleDateString()}</p>
              <p><strong>Sorteo:</strong> Domingo, 18 de agosto</p>
            </div>
            <button 
              className="modal-button secondary"
              onClick={onClose}
            >
              Cerrar
            </button>
          </div>
        ) : (
          <div className="lookup-form">
            <div className="modal-header">
              <h2>Consultar mi número</h2>
              <p className="form-description">
                Ingresá tu DNI para ver tu número de sorteo único
              </p>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="dni">Documento de Identidad</label>
                <input
                  type="number"
                  id="dni"
                  value={dni}
                  onChange={handleChange}
                  placeholder="Ej: 12345678 – sin puntos"
                  className={error ? 'error' : ''}
                />
                {error && (
                  <div className="error-container">
                    <span className="error-message">{error}</span>
                    {error === 'No encontramos un número para este DNI' && (
                      <div className="register-suggestion">
                        <p>¿Querés registrarte?</p>
                        <button
                          type="button"
                          className="modal-button primary"
                          onClick={handleRegisterClick}
                        >
                          Registrarme al sorteo
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <button 
                type="submit" 
                className="modal-button primary"
              >
                Buscar mi número
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginByDNI; 