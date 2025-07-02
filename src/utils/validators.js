/**
 * Valida el formato del DNI
 * @returns {string} Mensaje de error o string vacío si es válido
 */
export const validateDNI = (dni) => {
  if (!dni) return 'El DNI es obligatorio';
  if (!/^\d+$/.test(dni)) return 'El DNI debe contener solo números';
  if (dni.length < 7 || dni.length > 8) return 'El DNI debe tener 7 u 8 dígitos';
  return '';
};

/**
 * Valida el nombre completo
 * @returns {string} Mensaje de error o string vacío si es válido
 */
export const validateFullName = (name) => {
  if (!name) return 'El nombre completo es obligatorio';
  if (name.length < 3) return 'El nombre debe tener al menos 3 caracteres';
  if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(name)) return 'El nombre solo puede contener letras';
  return '';
};

/**
 * Calcula la edad a partir de una fecha
 * @returns {number} Edad en años
 */
export const calculateAge = (birthDate) => {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  
  return age;
};

/**
 * Valida la edad según los requisitos (2-16 años)
 * @returns {string} Mensaje de error o string vacío si es válido
 */
export const validateAge = (birthDate) => {
  if (!birthDate) return 'La fecha de nacimiento es obligatoria';
  
  const age = calculateAge(birthDate);
  if (age < 2) return 'Debe tener al menos 2 años para participar';
  if (age > 16) return 'Debe ser menor de 16 años para participar';
  
  return '';
};

/**
 * Valida el formato de email
 * @returns {string} Mensaje de error o string vacío si es válido
 */
export const validateEmail = (email) => {
  if (!email) return ''; // El email es opcional
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return 'El formato del email no es válido';
  
  return '';
};

/**
 * Valida la dirección
 * @returns {string} Mensaje de error o string vacío si es válido
 */
export const validateAddress = (address) => {
  if (!address) return 'La dirección es obligatoria';
  if (address.length < 5) return 'La dirección debe tener al menos 5 caracteres';
  return '';
};

/**
 * Valida el nombre de la escuela cuando corresponde
 * @returns {string} Mensaje de error o string vacío si es válido
 */
export const validateSchoolName = (name, attendsSchool) => {
  if (attendsSchool === 'yes' && !name) {
    return 'El nombre de la escuela es obligatorio';
  }
  return '';
};

/**
 * Valida el nombre completo del adulto responsable
 * @returns {string} Mensaje de error o string vacío si es válido
 */
export const validateGuardianName = (name) => {
  if (!name) return 'El nombre del adulto responsable es obligatorio';
  if (name.length < 3) return 'El nombre debe tener al menos 3 caracteres';
  if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(name)) return 'El nombre solo puede contener letras';
  return '';
};

/**
 * Valida el DNI del adulto responsable
 * @returns {string} Mensaje de error o string vacío si es válido
 */
export const validateGuardianDNI = (dni) => {
  if (!dni) return 'El DNI del adulto responsable es obligatorio';
  if (!/^\d+$/.test(dni)) return 'El DNI debe contener solo números';
  if (dni.length < 7 || dni.length > 8) return 'El DNI debe tener 7 u 8 dígitos';
  return '';
};

/**
 * Valida el teléfono/celular del adulto responsable
 * @returns {string} Mensaje de error o string vacío si es válido
 */
export const validateGuardianPhone = (phone) => {
  if (!phone) return 'El teléfono del adulto responsable es obligatorio';
  
  // Remover espacios, guiones y paréntesis para validar solo números
  const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
  
  if (!/^\d+$/.test(cleanPhone)) return 'El teléfono debe contener solo números';
  if (cleanPhone.length < 8 || cleanPhone.length > 15) return 'El teléfono debe tener entre 8 y 15 dígitos';
  
  return '';
};

/**
 * Valida el formulario completo
 * @returns {Object} Objeto con errores por campo
 */
export const validateForm = (formData) => {
  const errors = {};
  
  const dniError = validateDNI(formData.dni);
  if (dniError) errors.dni = dniError;
  
  const nameError = validateFullName(formData.fullName);
  if (nameError) errors.fullName = nameError;
  
  const ageError = validateAge(formData.birthDate);
  if (ageError) errors.birthDate = ageError;
  
  const addressError = validateAddress(formData.address);
  if (addressError) errors.address = addressError;
  
  const emailError = validateEmail(formData.email);
  if (emailError) errors.email = emailError;
  
  const schoolNameError = validateSchoolName(formData.schoolName, formData.attendsSchool);
  if (schoolNameError) errors.schoolName = schoolNameError;
  
  // Validaciones del adulto responsable
  const guardianNameError = validateGuardianName(formData.guardianName);
  if (guardianNameError) errors.guardianName = guardianNameError;
  
  const guardianDNIError = validateGuardianDNI(formData.guardianDNI);
  if (guardianDNIError) errors.guardianDNI = guardianDNIError;
  
  const guardianPhoneError = validateGuardianPhone(formData.guardianPhone);
  if (guardianPhoneError) errors.guardianPhone = guardianPhoneError;
  
  return errors;
}; 