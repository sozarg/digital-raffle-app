import React, { useState, useEffect } from 'react';
import { saveRegistration, findRegistrationByDNI } from '../services/registrationService';
import { validateForm } from '../utils/validators';

const RegistrationForm = ({ 
  mode = 'button', // 'button' o 'chest'
  onClose,
  onSuccess,
  initialDni = '' // Para pre-cargar el DNI si viene de la consulta
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    dni: initialDni,
    birthDate: '',
    address: '',
    attendsSchool: 'no',
    schoolName: '',
    email: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [existingRegistration, setExistingRegistration] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  // Validar DNI existente cuando cambia
  useEffect(() => {
    if (formData.dni.length >= 7) {
      const existing = findRegistrationByDNI(formData.dni);
      if (existing) {
        setExistingRegistration(existing);
      } else {
        setExistingRegistration(null);
      }
    }
  }, [formData.dni]);

  const validateField = (name, value) => {
    const testData = { ...formData, [name]: value };
    const fieldErrors = validateForm(testData);
    return fieldErrors[name] || '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Actualizar el valor
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Limpiar error del campo
    setErrors(prev => ({
      ...prev,
      [name]: ''
    }));

    // Validar en tiempo real
    const fieldError = validateField(name, value);
    if (fieldError) {
      setErrors(prev => ({
        ...prev,
        [name]: fieldError
      }));
    }

    // Limpiar nombre de escuela si cambia a "no"
    if (name === 'attendsSchool' && value === 'no') {
      setFormData(prev => ({
        ...prev,
        schoolName: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validar todo el formulario
    const formErrors = validateForm(formData);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Verificar registro existente
    if (existingRegistration) {
      setShowSuccess(true);
      return;
    }

    setIsSubmitting(true);

    try {
      // Guardar participante
      const registration = await saveRegistration(formData);
      
      // Mostrar éxito
      setShowSuccess(true);
      
      // Notificar al padre
      if (onSuccess) {
        onSuccess(registration);
      }
    } catch (error) {
      setErrors({
        submit: 'Ocurrió un error al guardar tu registro'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Si hay registro existente o éxito, mostrar mensaje
  if (showSuccess || existingRegistration) {
    const registration = existingRegistration || formData;
    return (
      <div className="modal-overlay">
        <div className="registration-modal">
          <button className="close-button" onClick={onClose}>×</button>
          <div className="registration-success">
            <div className="success-icon">✓</div>
            <h3>¡Hola {registration.fullName}!</h3>
            <p>Tu número de sorteo es:</p>
            <div className="ticket-number">
              #{registration.numeroAsignado}
            </div>
            {existingRegistration && (
              <p className="existing-note">
                Ya estabas registrado desde el {new Date(registration.fechaRegistro).toLocaleDateString()}
              </p>
            )}
            <button 
              className="secondary-button"
              onClick={onClose}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="modal-overlay">
      <div className="registration-modal">
        <button className="close-button" onClick={onClose}>×</button>
        
        <form onSubmit={handleSubmit} className="registration-form">
          <h2>Registro para el sorteo</h2>
          <p className="form-description">
            Completá tus datos para participar
          </p>

          <div className="form-group">
            <label htmlFor="fullName">Nombre completo *</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={errors.fullName ? 'error' : ''}
              disabled={isSubmitting}
            />
            {errors.fullName && (
              <span className="error-message">{errors.fullName}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="dni">DNI *</label>
            <input
              type="number"
              id="dni"
              name="dni"
              value={formData.dni}
              onChange={handleChange}
              placeholder="Ej: 30123456"
              className={errors.dni ? 'error' : ''}
              disabled={isSubmitting}
            />
            {errors.dni && (
              <span className="error-message">{errors.dni}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="birthDate">Fecha de nacimiento *</label>
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              className={errors.birthDate ? 'error' : ''}
              disabled={isSubmitting}
            />
            {errors.birthDate && (
              <span className="error-message">{errors.birthDate}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="address">Dirección *</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className={errors.address ? 'error' : ''}
              disabled={isSubmitting}
            />
            {errors.address && (
              <span className="error-message">{errors.address}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="attendsSchool">¿Asiste a una escuela en Avellaneda? *</label>
            <select
              id="attendsSchool"
              name="attendsSchool"
              value={formData.attendsSchool}
              onChange={handleChange}
              disabled={isSubmitting}
            >
              <option value="no">No</option>
              <option value="yes">Sí</option>
            </select>
          </div>

          {formData.attendsSchool === 'yes' && (
            <div className="form-group">
              <label htmlFor="schoolName">Nombre de la escuela</label>
              <input
                type="text"
                id="schoolName"
                name="schoolName"
                value={formData.schoolName}
                onChange={handleChange}
                className={errors.schoolName ? 'error' : ''}
                disabled={isSubmitting}
              />
              {errors.schoolName && (
                <span className="error-message">{errors.schoolName}</span>
              )}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email (opcional)</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
              disabled={isSubmitting}
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          {errors.submit && (
            <div className="error-message submit-error">
              {errors.submit}
            </div>
          )}

          <button 
            type="submit" 
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Registrando...' : 'Registrarme y obtener mi número'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm; 