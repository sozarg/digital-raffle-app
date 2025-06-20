const STORAGE_KEY = 'raffle_registrations';

// Simulamos una base de datos en memoria
let registrations = [];
let nextTicketNumber = 1;

// Obtener todos los registros
const getAllRegistrations = () => {
  return [...registrations];
};

// Guardar todos los registros
const saveAllRegistrations = (registrations) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(registrations));
};

// Generar número de ticket único
const generateTicketNumber = (registrations) => {
  if (registrations.length === 0) return 1;
  
  const numbers = registrations.map(r => r.ticketNumber);
  return Math.max(...numbers) + 1;
};

// Buscar registro por DNI
export const findRegistrationByDNI = (dni) => {
  return registrations.find(reg => reg.dni === dni);
};

// Guardar nuevo registro
export const saveRegistration = (formData) => {
  // Asignar número de ticket
  const ticketNumber = nextTicketNumber++;
  
  // Crear el registro
  const registration = {
    ...formData,
    ticketNumber,
    registrationDate: new Date()
  };
  
  // Guardar en nuestra "base de datos"
  registrations.push(registration);
  
  return registration;
};

// Obtener total de registros
export const getTotalRegistrations = () => {
  return registrations.length;
};

// Obtener último número asignado
export const getLastTicketNumber = () => {
  if (registrations.length === 0) return 0;
  
  const numbers = registrations.map(r => r.ticketNumber);
  return Math.max(...numbers);
}; 