import React, { useState, useEffect } from 'react';

const RegistrationForm = ({ onSubmit, onClose, existingTicket }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    dni: '',
    birthDate: '',
    address: '',
    attendsSchool: 'no',
    schoolName: '',
    email: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'El nombre completo es obligatorio';
    }
    
    if (!formData.dni.trim()) {
      newErrors.dni = 'El DNI es obligatorio';
    } else if (!/^\d{7,8}$/.test(formData.dni)) {
      newErrors.dni = 'El DNI debe tener 7 u 8 dígitos';
    }
    
    if (!formData.birthDate) {
      newErrors.birthDate = 'La fecha de nacimiento es obligatoria';
    }
    
    if (!formData.address.trim()) {
      newErrors.address = 'La dirección es obligatoria';
    }

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        await onSubmit(formData);
      } catch (error) {
        console.error('Error al enviar el formulario:', error);
      }
      setIsSubmitting(false);
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpiar error del campo cuando el usuario empieza a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="modal-overlay">
      <div className="registration-form">
        <button className="close-button" onClick={onClose}>×</button>
        
        {existingTicket ? (
          <div className="existing-ticket-message">
            <h3>¡Ya estás registrado!</h3>
            <p>Tu número de sorteo es:</p>
            <div className="ticket-number">#{existingTicket.toString().padStart(4, '0')}</div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2>Registro para el Sorteo</h2>
            
            <div className="form-group">
              <label htmlFor="fullName">Nombre completo *</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={errors.fullName ? 'error' : ''}
              />
              {errors.fullName && <span className="error-message">{errors.fullName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="dni">DNI *</label>
              <input
                type="number"
                id="dni"
                name="dni"
                value={formData.dni}
                onChange={handleChange}
                className={errors.dni ? 'error' : ''}
              />
              {errors.dni && <span className="error-message">{errors.dni}</span>}
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
              />
              {errors.birthDate && <span className="error-message">{errors.birthDate}</span>}
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
              />
              {errors.address && <span className="error-message">{errors.address}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="attendsSchool">¿Asiste a una escuela en Avellaneda? *</label>
              <select
                id="attendsSchool"
                name="attendsSchool"
                value={formData.attendsSchool}
                onChange={handleChange}
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
                />
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
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Registrarme y obtener mi número'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegistrationForm; 