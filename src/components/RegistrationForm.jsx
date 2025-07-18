import React, { useState, useEffect } from 'react';
import { saveRegistration, findRegistrationByDNI } from '../services/registrationService';
import { validateForm } from '../utils/validators';

const RegistrationForm = ({ 
  mode = 'button', // 'button' o 'chest'
  onClose,
  onSuccess,
  initialDni = '', // Para pre-cargar el DNI si viene de la consulta
  fromChest = false // Nueva prop para animación desde el cofre
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    dni: initialDni,
    birthDate: '',
    address: '',
    attendsSchool: 'no',
    schoolName: '',
    email: '',
    guardianName: '',
    guardianDNI: '',
    guardianPhone: ''
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
      <div className={`modal-overlay ${fromChest ? 'from-chest' : ''}`}>
        <div className={`registration-modal ${fromChest ? 'from-chest-animation' : ''}`}>
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
              className="modal-button secondary"
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
    <div className={`modal-overlay ${fromChest ? 'from-chest' : ''}`}>
      <div className={`registration-modal ${fromChest ? 'from-chest-animation' : ''}`}>
        <button className="close-button" onClick={onClose}>×</button>
        
        <form onSubmit={handleSubmit} className="registration-form">
          <div className="modal-header">
            <h2>Registro para el sorteo</h2>
            <p className="form-description">
              ¡Completá el formulario para participar del gran sorteo del Día del Niño!
            </p>
          </div>

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
            <label htmlFor="dni">Documento de Identidad *</label>
            <input
              type="number"
              id="dni"
              name="dni"
              value={formData.dni}
              onChange={handleChange}
              placeholder="Ej: 12345678 – sin puntos"
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

          {/* Sección del adulto responsable */}
          <div className="form-section">
            <h3 className="section-title">Datos del adulto responsable</h3>
            <p className="section-description">
              Padre, madre o tutor que acompañará al menor en caso de resultar ganador
            </p>

            <div className="form-group">
              <label htmlFor="guardianName">Nombre completo del adulto responsable *</label>
              <input
                type="text"
                id="guardianName"
                name="guardianName"
                value={formData.guardianName}
                onChange={handleChange}
                className={errors.guardianName ? 'error' : ''}
                disabled={isSubmitting}
                placeholder="Ej: María García"
              />
              {errors.guardianName && (
                <span className="error-message">{errors.guardianName}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="guardianDNI">DNI del adulto responsable *</label>
              <input
                type="number"
                id="guardianDNI"
                name="guardianDNI"
                value={formData.guardianDNI}
                onChange={handleChange}
                placeholder="Ej: 12345678 – sin puntos"
                className={errors.guardianDNI ? 'error' : ''}
                disabled={isSubmitting}
              />
              {errors.guardianDNI && (
                <span className="error-message">{errors.guardianDNI}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="guardianPhone">Teléfono/Celular del adulto responsable *</label>
              <input
                type="tel"
                id="guardianPhone"
                name="guardianPhone"
                value={formData.guardianPhone}
                onChange={handleChange}
                placeholder="Ej: 11-1234-5678"
                className={errors.guardianPhone ? 'error' : ''}
                disabled={isSubmitting}
              />
              {errors.guardianPhone && (
                <span className="error-message">{errors.guardianPhone}</span>
              )}
            </div>
          </div>

          {/* Leyenda importante */}
          <div className="important-notice">
            <div className="notice-icon">⚠️</div>
            <p className="notice-text">
              <strong>Importante:</strong> La entrega de los elementos sorteados se realizará al ganador acompañado por un adulto responsable.
            </p>
          </div>

          {errors.submit && (
            <div className="error-message submit-error">
              {errors.submit}
            </div>
          )}

          <button 
            type="submit" 
            className="modal-button primary"
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