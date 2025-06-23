import React, { useState } from 'react';

const ParticipantsTable = ({ onStartRaffle }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // 70 participantes hardcodeados
  const participants = [
    { id: 1, name: "Juan Pérez", number: 1001, residesInAvellaneda: true, attendsSchoolInAvellaneda: false },
    { id: 2, name: "María González", number: 1002, residesInAvellaneda: false, attendsSchoolInAvellaneda: true },
    { id: 3, name: "Carlos Rodríguez", number: 1003, residesInAvellaneda: true, attendsSchoolInAvellaneda: true },
    { id: 4, name: "Ana Martínez", number: 1004, residesInAvellaneda: false, attendsSchoolInAvellaneda: false },
    { id: 5, name: "Pedro López", number: 1005, residesInAvellaneda: true, attendsSchoolInAvellaneda: false },
    { id: 6, name: "Laura Fernández", number: 1006, residesInAvellaneda: false, attendsSchoolInAvellaneda: true },
    { id: 7, name: "Miguel Sánchez", number: 1007, residesInAvellaneda: true, attendsSchoolInAvellaneda: true },
    { id: 8, name: "Sofía Díaz", number: 1008, residesInAvellaneda: false, attendsSchoolInAvellaneda: false },
    { id: 9, name: "Roberto García", number: 1009, residesInAvellaneda: true, attendsSchoolInAvellaneda: false },
    { id: 10, name: "Carmen Ruiz", number: 1010, residesInAvellaneda: false, attendsSchoolInAvellaneda: true },
    { id: 11, name: "Diego Morales", number: 1011, residesInAvellaneda: true, attendsSchoolInAvellaneda: true },
    { id: 12, name: "Valentina Silva", number: 1012, residesInAvellaneda: false, attendsSchoolInAvellaneda: false },
    { id: 13, name: "Fernando Torres", number: 1013, residesInAvellaneda: true, attendsSchoolInAvellaneda: false },
    { id: 14, name: "Isabella Castro", number: 1014, residesInAvellaneda: false, attendsSchoolInAvellaneda: true },
    { id: 15, name: "Joaquín Herrera", number: 1015, residesInAvellaneda: true, attendsSchoolInAvellaneda: true },
    { id: 16, name: "Camila Vargas", number: 1016, residesInAvellaneda: false, attendsSchoolInAvellaneda: false },
    { id: 17, name: "Mateo Jiménez", number: 1017, residesInAvellaneda: true, attendsSchoolInAvellaneda: false },
    { id: 18, name: "Lucia Medina", number: 1018, residesInAvellaneda: false, attendsSchoolInAvellaneda: true },
    { id: 19, name: "Santiago Ortiz", number: 1019, residesInAvellaneda: true, attendsSchoolInAvellaneda: true },
    { id: 20, name: "Emilia Rojas", number: 1020, residesInAvellaneda: false, attendsSchoolInAvellaneda: false },
    { id: 21, name: "Nicolás Mendoza", number: 1021, residesInAvellaneda: true, attendsSchoolInAvellaneda: false },
    { id: 22, name: "Antonella Cruz", number: 1022, residesInAvellaneda: false, attendsSchoolInAvellaneda: true },
    { id: 23, name: "Tomás Flores", number: 1023, residesInAvellaneda: true, attendsSchoolInAvellaneda: true },
    { id: 24, name: "Martina Guerrero", number: 1024, residesInAvellaneda: false, attendsSchoolInAvellaneda: false },
    { id: 25, name: "Benjamín Peña", number: 1025, residesInAvellaneda: true, attendsSchoolInAvellaneda: false },
    { id: 26, name: "Agustina Ramírez", number: 1026, residesInAvellaneda: false, attendsSchoolInAvellaneda: true },
    { id: 27, name: "Thiago Moreno", number: 1027, residesInAvellaneda: true, attendsSchoolInAvellaneda: true },
    { id: 28, name: "Renata Campos", number: 1028, residesInAvellaneda: false, attendsSchoolInAvellaneda: false },
    { id: 29, name: "Gael Vega", number: 1029, residesInAvellaneda: true, attendsSchoolInAvellaneda: false },
    { id: 30, name: "Delfina Soto", number: 1030, residesInAvellaneda: false, attendsSchoolInAvellaneda: true },
    { id: 31, name: "Ian Molina", number: 1031, residesInAvellaneda: true, attendsSchoolInAvellaneda: true },
    { id: 32, name: "Julieta Paredes", number: 1032, residesInAvellaneda: false, attendsSchoolInAvellaneda: false },
    { id: 33, name: "Lautaro Reyes", number: 1033, residesInAvellaneda: true, attendsSchoolInAvellaneda: false },
    { id: 34, name: "Pilar Contreras", number: 1034, residesInAvellaneda: false, attendsSchoolInAvellaneda: true },
    { id: 35, name: "Felipe Cortés", number: 1035, residesInAvellaneda: true, attendsSchoolInAvellaneda: true },
    { id: 36, name: "Guadalupe Navarro", number: 1036, residesInAvellaneda: false, attendsSchoolInAvellaneda: false },
    { id: 37, name: "Matías Aguirre", number: 1037, residesInAvellaneda: true, attendsSchoolInAvellaneda: false },
    { id: 38, name: "Catalina Espinoza", number: 1038, residesInAvellaneda: false, attendsSchoolInAvellaneda: true },
    { id: 39, name: "Bruno Cabrera", number: 1039, residesInAvellaneda: true, attendsSchoolInAvellaneda: true },
    { id: 40, name: "Olivia Gallardo", number: 1040, residesInAvellaneda: false, attendsSchoolInAvellaneda: false },
    { id: 41, name: "Ignacio Delgado", number: 1041, residesInAvellaneda: true, attendsSchoolInAvellaneda: false },
    { id: 42, name: "Emma Fuentes", number: 1042, residesInAvellaneda: false, attendsSchoolInAvellaneda: true },
    { id: 43, name: "Lucas Ríos", number: 1043, residesInAvellaneda: true, attendsSchoolInAvellaneda: true },
    { id: 44, name: "Mía Sandoval", number: 1044, residesInAvellaneda: false, attendsSchoolInAvellaneda: false },
    { id: 45, name: "Axel Domínguez", number: 1045, residesInAvellaneda: true, attendsSchoolInAvellaneda: false },
    { id: 46, name: "Zoe León", number: 1046, residesInAvellaneda: false, attendsSchoolInAvellaneda: true },
    { id: 47, name: "Dante Herrera", number: 1047, residesInAvellaneda: true, attendsSchoolInAvellaneda: true },
    { id: 48, name: "Alma Blanco", number: 1048, residesInAvellaneda: false, attendsSchoolInAvellaneda: false },
    { id: 49, name: "Enzo Serrano", number: 1049, residesInAvellaneda: true, attendsSchoolInAvellaneda: false },
    { id: 50, name: "Nina Iglesias", number: 1050, residesInAvellaneda: false, attendsSchoolInAvellaneda: true },
    { id: 51, name: "Adrián Pacheco", number: 1051, residesInAvellaneda: true, attendsSchoolInAvellaneda: true },
    { id: 52, name: "Helena Mendez", number: 1052, residesInAvellaneda: false, attendsSchoolInAvellaneda: false },
    { id: 53, name: "Adriel Castillo", number: 1053, residesInAvellaneda: true, attendsSchoolInAvellaneda: false },
    { id: 54, name: "Aitana Ibáñez", number: 1054, residesInAvellaneda: false, attendsSchoolInAvellaneda: true },
    { id: 55, name: "Maximo Ruiz", number: 1055, residesInAvellaneda: true, attendsSchoolInAvellaneda: true },
    { id: 56, name: "Victoria Romero", number: 1056, residesInAvellaneda: false, attendsSchoolInAvellaneda: false },
    { id: 57, name: "Esteban Acosta", number: 1057, residesInAvellaneda: true, attendsSchoolInAvellaneda: false },
    { id: 58, name: "Clara Guerrero", number: 1058, residesInAvellaneda: false, attendsSchoolInAvellaneda: true },
    { id: 59, name: "Sebastián Pereira", number: 1059, residesInAvellaneda: true, attendsSchoolInAvellaneda: true },
    { id: 60, name: "Ariana Valdez", number: 1060, residesInAvellaneda: false, attendsSchoolInAvellaneda: false },
    { id: 61, name: "Gabriel Salinas", number: 1061, residesInAvellaneda: true, attendsSchoolInAvellaneda: false },
    { id: 62, name: "Maite Cordero", number: 1062, residesInAvellaneda: false, attendsSchoolInAvellaneda: true },
    { id: 63, name: "Alexis Pardo", number: 1063, residesInAvellaneda: true, attendsSchoolInAvellaneda: true },
    { id: 64, name: "Gabriela Morales", number: 1064, residesInAvellaneda: false, attendsSchoolInAvellaneda: false },
    { id: 65, name: "Kevin Herrera", number: 1065, residesInAvellaneda: true, attendsSchoolInAvellaneda: false },
    { id: 66, name: "Paloma Jiménez", number: 1066, residesInAvellaneda: false, attendsSchoolInAvellaneda: true },
    { id: 67, name: "Joshua Vásquez", number: 1067, residesInAvellaneda: true, attendsSchoolInAvellaneda: true },
    { id: 68, name: "Esperanza Silva", number: 1068, residesInAvellaneda: false, attendsSchoolInAvellaneda: false },
    { id: 69, name: "Christopher Ramos", number: 1069, residesInAvellaneda: true, attendsSchoolInAvellaneda: false },
    { id: 70, name: "Daniela Montenegro", number: 1070, residesInAvellaneda: false, attendsSchoolInAvellaneda: true }
  ];

  // Función para determinar si es apto para el sorteo
  const isEligible = (participant) => {
    return participant.residesInAvellaneda || participant.attendsSchoolInAvellaneda;
  };

  // Estadísticas
  const totalParticipants = participants.length;
  const eligibleParticipants = participants.filter(isEligible).length;

  // Paginación
  const totalPages = Math.ceil(totalParticipants / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentParticipants = participants.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleStartRaffle = () => {
    if (onStartRaffle) {
      onStartRaffle();
    }
  };

  // Componente de tarjeta para móviles
  const ParticipantCard = ({ participant }) => (
    <div className="card mb-3 participant-card">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h6 className="card-title mb-0 fw-bold">{participant.name}</h6>
          <span className="badge bg-success">{participant.number}</span>
        </div>
        
        <div className="row g-2">
          <div className="col-6">
            <small className="text-muted d-block">Reside en Avellaneda:</small>
            <div>
              {participant.residesInAvellaneda ? (
                <span className="text-success">
                  <i className="bi bi-check-circle-fill me-1"></i>
                  Sí
                </span>
              ) : (
                <span className="text-danger">
                  <i className="bi bi-x-circle-fill me-1"></i>
                  No
                </span>
              )}
            </div>
          </div>
          <div className="col-6">
            <small className="text-muted d-block">Asiste a escuela:</small>
            <div>
              {participant.attendsSchoolInAvellaneda ? (
                <span className="text-success">
                  <i className="bi bi-check-circle-fill me-1"></i>
                  Sí
                </span>
              ) : (
                <span className="text-danger">
                  <i className="bi bi-x-circle-fill me-1"></i>
                  No
                </span>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-2 pt-2 border-top">
          <div className="d-flex justify-content-between align-items-center">
            <small className="text-muted">Estado del sorteo:</small>
            {isEligible(participant) ? (
              <span className="badge bg-success">
                <i className="bi bi-check-circle-fill me-1"></i>
                Apto
              </span>
            ) : (
              <span className="badge bg-danger">
                <i className="bi bi-x-circle-fill me-1"></i>
                No Apto
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title mb-0">
          <i className="bi bi-people-fill me-2"></i>
          Participantes Registrados
        </h5>
      </div>
      <div className="card-body">
        {/* Estadísticas redesigned */}
        <div className="row mb-4">
          <div className="col-md-6">
            <div className="d-flex align-items-center">
              <span className="text-success me-2" style={{ fontSize: '1.2rem', fontFamily: 'Nexa-Heavy' }}>
                Total de Participantes:
              </span>
              <span className="text-success" style={{ fontSize: '2.5rem', fontFamily: 'Nexa-Heavy', fontWeight: '900' }}>
                {totalParticipants}
              </span>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex align-items-center">
              <span className="text-success me-2" style={{ fontSize: '1.2rem', fontFamily: 'Nexa-Heavy' }}>
                Aptos para Sorteo:
              </span>
              <span className="text-success" style={{ fontSize: '2.5rem', fontFamily: 'Nexa-Heavy', fontWeight: '900' }}>
                {eligibleParticipants}
              </span>
            </div>
          </div>
        </div>

        {/* Vista de tabla para desktop */}
        <div className="table-responsive d-none d-md-block">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>Nombre</th>
                <th>Número de Sorteo</th>
                <th>¿Reside en Avellaneda?</th>
                <th>¿Asiste a escuela de Avellaneda?</th>
                <th>¿Apto para sorteo?</th>
              </tr>
            </thead>
            <tbody>
              {currentParticipants.map((participant) => (
                <tr key={participant.id}>
                  <td className="fw-bold">{participant.name}</td>
                  <td>
                    <span className="badge bg-success">{participant.number}</span>
                  </td>
                  <td>
                    {participant.residesInAvellaneda ? (
                      <span className="text-success">
                        <i className="bi bi-check-circle-fill me-1"></i>
                        Sí
                      </span>
                    ) : (
                      <span className="text-danger">
                        <i className="bi bi-x-circle-fill me-1"></i>
                        No
                      </span>
                    )}
                  </td>
                  <td>
                    {participant.attendsSchoolInAvellaneda ? (
                      <span className="text-success">
                        <i className="bi bi-check-circle-fill me-1"></i>
                        Sí
                      </span>
                    ) : (
                      <span className="text-danger">
                        <i className="bi bi-x-circle-fill me-1"></i>
                        No
                      </span>
                    )}
                  </td>
                  <td>
                    {isEligible(participant) ? (
                      <span className="badge bg-success">
                        <i className="bi bi-check-circle-fill me-1"></i>
                        Apto
                      </span>
                    ) : (
                      <span className="badge bg-danger">
                        <i className="bi bi-x-circle-fill me-1"></i>
                        No Apto
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Vista de tarjetas para móviles */}
        <div className="d-md-none">
          {currentParticipants.map((participant) => (
            <ParticipantCard key={participant.id} participant={participant} />
          ))}
        </div>

        {/* Paginación */}
        <div className="d-flex justify-content-between align-items-center mt-4">
          <div>
            <small className="text-muted">
              Mostrando {startIndex + 1} a {Math.min(endIndex, totalParticipants)} de {totalParticipants} participantes
            </small>
          </div>
          <nav>
            <ul className="pagination pagination-sm mb-0">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button 
                  className="page-link"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Anterior
                </button>
              </li>
              
              {[...Array(totalPages)].map((_, index) => {
                const page = index + 1;
                return (
                  <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                    <button 
                      className="page-link"
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </button>
                  </li>
                );
              })}
              
              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button 
                  className="page-link"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Siguiente
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Botón de Hacer Sorteo */}
        <div className="d-flex justify-content-end mt-4">
          <button 
            className="btn btn-success btn-lg"
            onClick={handleStartRaffle}
          >
            <i className="bi bi-shuffle me-2"></i>
            Hacer Sorteo
          </button>
        </div>
      </div>
    </div>
  );
};

export default ParticipantsTable; 