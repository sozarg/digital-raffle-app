const STORAGE_KEY = 'digital-reward-chest-registrations';
const LAST_TICKET_KEY = 'digital-reward-chest-last-ticket';

export const getRegistrations = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const getLastTicketNumber = () => {
  const lastTicket = localStorage.getItem(LAST_TICKET_KEY);
  return lastTicket ? parseInt(lastTicket) : 0;
};

export const findRegistrationByDNI = (dni) => {
  const registrations = getRegistrations();
  return registrations.find(reg => reg.dni === dni);
};

export const saveRegistration = (formData) => {
  const registrations = getRegistrations();
  const lastTicket = getLastTicketNumber();
  const newTicketNumber = lastTicket + 1;
  
  const registration = {
    ...formData,
    ticketNumber: newTicketNumber,
    registrationDate: new Date().toISOString()
  };
  
  registrations.push(registration);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(registrations));
  localStorage.setItem(LAST_TICKET_KEY, newTicketNumber.toString());
  
  return registration;
}; 