const STORAGE_KEYS = {
  PARTICIPANTS: 'raffleParticipants',
  COUNTER: 'raffleCounter'
};

/**
 * Obtiene todos los participantes del sorteo
 */
export const getAllParticipants = () => {
  const data = localStorage.getItem(STORAGE_KEYS.PARTICIPANTS);
  return data ? JSON.parse(data) : [];
};

/**
 * Obtiene el próximo número de sorteo disponible
 */
export const getNextNumber = () => {
  const currentCounter = localStorage.getItem(STORAGE_KEYS.COUNTER);
  const nextNumber = currentCounter ? parseInt(currentCounter) + 1 : 1;
  localStorage.setItem(STORAGE_KEYS.COUNTER, nextNumber.toString());
  return nextNumber;
};

/**
 * Busca un participante por DNI
 */
export const findByDNI = (dni) => {
  const participants = getAllParticipants();
  return participants.find(p => p.dni === dni);
};

/**
 * Verifica si un DNI ya está registrado
 */
export const validateUniqueDNI = (dni) => {
  return !findByDNI(dni);
};

/**
 * Guarda un nuevo participante
 */
export const saveParticipant = (participantData) => {
  // Verificar DNI único
  if (!validateUniqueDNI(participantData.dni)) {
    throw new Error('DNI ya registrado');
  }

  // Obtener número de sorteo
  const raffleNumber = getNextNumber();
  
  // Crear registro completo
  const participant = {
    ...participantData,
    numeroAsignado: raffleNumber.toString().padStart(4, '0'),
    fechaRegistro: new Date().toISOString()
  };

  // Guardar en localStorage
  const participants = getAllParticipants();
  participants.push(participant);
  localStorage.setItem(STORAGE_KEYS.PARTICIPANTS, JSON.stringify(participants));

  return participant;
};

/**
 * Formatea un número de sorteo con padding de ceros
 */
export const formatRaffleNumber = (number) => {
  return number.toString().padStart(4, '0');
};

/**
 * Obtiene estadísticas básicas del sorteo
 */
export const getRaffleStats = () => {
  const participants = getAllParticipants();
  return {
    totalParticipants: participants.length,
    schoolParticipants: participants.filter(p => p.escuelaEnAvellaneda).length,
    lastRegistration: participants[participants.length - 1]?.fechaRegistro
  };
};

/**
 * Limpia todos los datos del sorteo (útil para testing)
 */
export const clearRaffleData = () => {
  localStorage.removeItem(STORAGE_KEYS.PARTICIPANTS);
  localStorage.removeItem(STORAGE_KEYS.COUNTER);
}; 