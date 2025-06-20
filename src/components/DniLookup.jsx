import React, { useState } from 'react';
import { findByDNI } from '../services/raffleService';
import { validateDNI } from '../utils/validators';

const DniLookup = ({ onClose, onRegisterClick }) => {
  const [dni, setDni] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [participant, setParticipant] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validar formato del DNI
    const validationError = validateDNI(dni);
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Buscar participante
      const found = findByDNI(dni);
      
      if (found) {
        setParticipant(found);
      } else {
        setError('No encontramos tu registro');
      }
    } catch (error) {
      setError('Ocurrió un error al buscar tu registro');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setDni(value);
    setError('');
    setParticipant(null);
  };

  return (
    <div className="modal-overlay">
      <div className="dni-lookup-modal">
        <button className="close-button" onClick={onClose}>×</button>

        {participant ? (
          // Mostrar resultado exitoso
          <div className="lookup-success">
            <div className="success-icon">✓</div>
            <h3>¡Hola {participant.fullName}!</h3>
            <p>Tu número de sorteo es:</p>
            <div className="ticket-number">
              #{participant.numeroAsignado}
            </div>
            <div className="registration-details">
              <p>Te registraste el {new Date(participant.fechaRegistro).toLocaleDateString()}</p>
              {participant.escuelaEnAvellaneda && (
                <p>Escuela: {participant.nombreEscuela}</p>
              )}
            </div>
            <button 
              className="secondary-button"
              onClick={onClose}
            >
              Cerrar
            </button>
          </div>
        ) : (
          // Mostrar formulario de búsqueda
          <form onSubmit={handleSubmit} className="lookup-form">
            <h2>Consultar mi número</h2>
            <p className="form-description">
              Ingresá tu DNI para ver tu número de sorteo
            </p>

            <div className="form-group">
              <label htmlFor="dni">DNI</label>
              <input
                type="number"
                id="dni"
                name="dni"
                value={dni}
                onChange={handleChange}
                placeholder="Ej: 30123456"
                className={error ? 'error' : ''}
                disabled={loading}
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
              disabled={loading}
            >
              {loading ? 'Buscando...' : 'Buscar mi número'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default DniLookup; 