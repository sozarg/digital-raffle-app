import React, { useState } from 'react';

const RaffleSection = () => {
  const [winnersCount, setWinnersCount] = useState(1);
  const [prizeType, setPrizeType] = useState('');
  const [winners, setWinners] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Mismos datos de participantes que en ParticipantsTable (70 participantes)
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

  // Obtener participantes aptos
  const eligibleParticipants = participants.filter(isEligible);

  // Función para generar ganadores
  const generateWinners = () => {
    // Limpiar mensajes previos
    setErrorMessage('');
    setSuccessMessage('');

    if (!prizeType.trim()) {
      setErrorMessage('Por favor, ingrese el tipo de premio');
      return;
    }

    if (winnersCount > eligibleParticipants.length) {
      setErrorMessage(`Solo hay ${eligibleParticipants.length} participantes aptos. No se pueden seleccionar ${winnersCount} ganadores.`);
      return;
    }

    if (winnersCount < 1) {
      setErrorMessage('Debe seleccionar al menos 1 ganador.');
      return;
    }

    setIsLoading(true);

    // Simular delay para el efecto de "generando"
    setTimeout(() => {
      const shuffled = [...eligibleParticipants].sort(() => 0.5 - Math.random());
      const selectedWinners = shuffled.slice(0, winnersCount).map(winner => ({
        ...winner,
        prize: prizeType
      }));

      setWinners(selectedWinners);
      setSuccessMessage(`¡Sorteo completado! Se han seleccionado ${selectedWinners.length} ganador${selectedWinners.length !== 1 ? 'es' : ''}.`);
      setIsLoading(false);
    }, 1500);
  };

  // Función para copiar ganadores
  const copyWinners = () => {
    if (winners.length === 0) return;

    const winnersText = winners.map((winner, index) => 
      `${index + 1}. ${winner.name} - Número: ${winner.number} - Premio: ${winner.prize}`
    ).join('\n');

    const fullText = `GANADORES DEL SORTEO\n${'='.repeat(25)}\n\n${winnersText}\n\nFecha: ${new Date().toLocaleDateString('es-ES')}`;

    navigator.clipboard.writeText(fullText).then(() => {
      setSuccessMessage('¡Ganadores copiados al portapapeles!');
    }).catch(err => {
      console.error('Error al copiar:', err);
      setErrorMessage('Error al copiar al portapapeles');
    });
  };

  // Función para limpiar resultados
  const clearResults = () => {
    setWinners([]);
    setPrizeType('');
    setWinnersCount(1);
    setErrorMessage('');
    setSuccessMessage('');
  };

  // Componente de tarjeta para ganadores en móviles
  const WinnerCard = ({ winner, index }) => (
    <div className="card mb-3 winner-card">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <div>
            <h6 className="card-title mb-0 fw-bold">{winner.name}</h6>
            <small className="text-muted">Ganador #{index + 1}</small>
          </div>
          <span className="badge bg-warning text-dark fs-6">
            {index + 1}°
          </span>
        </div>
        
        <div className="row g-2">
          <div className="col-6">
            <small className="text-muted d-block">Número de Sorteo:</small>
            <span className="badge bg-success fs-6">{winner.number}</span>
          </div>
          <div className="col-6">
            <small className="text-muted d-block">Premio:</small>
            <span className="badge bg-success fs-6">{winner.prize}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="row">
      <div className="col-lg-4">
        {/* Formulario de sorteo */}
        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0">
              <i className="bi bi-gift-fill me-2"></i>
              Configurar Sorteo
            </h5>
          </div>
          <div className="card-body">
            {/* Información de participantes aptos */}
            <div className="alert alert-info mb-3">
              <i className="bi bi-info-circle-fill me-2"></i>
              <strong>Participantes aptos disponibles: {eligibleParticipants.length}</strong>
            </div>

            {/* Mensajes de error/éxito */}
            {errorMessage && (
              <div className="alert alert-danger mb-3">
                <i className="bi bi-exclamation-triangle-fill me-2"></i>
                {errorMessage}
              </div>
            )}

            {successMessage && (
              <div className="alert alert-success mb-3">
                <i className="bi bi-check-circle-fill me-2"></i>
                {successMessage}
              </div>
            )}

            <div className="mb-3">
              <label htmlFor="winnersCount" className="form-label">
                Cantidad de ganadores
              </label>
              <input
                type="number"
                className="form-control"
                id="winnersCount"
                min="1"
                max={eligibleParticipants.length}
                value={winnersCount}
                onChange={(e) => setWinnersCount(parseInt(e.target.value) || 1)}
              />
              <div className="form-text">
                Máximo: {eligibleParticipants.length} participantes aptos
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="prizeType" className="form-label">
                Tipo de premio
              </label>
              <input
                type="text"
                className="form-control"
                id="prizeType"
                placeholder="Ej: Bicicleta, Tablet, Juguete..."
                value={prizeType}
                onChange={(e) => setPrizeType(e.target.value)}
              />
            </div>

            <div className="d-grid gap-2">
              <button
                className="btn btn-primary btn-lg"
                onClick={generateWinners}
                disabled={isLoading || !prizeType.trim()}
              >
                {isLoading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                    Generando...
                  </>
                ) : (
                  <>
                    <i className="bi bi-shuffle me-2"></i>
                    Generar Ganadores
                  </>
                )}
              </button>

              {winners.length > 0 && (
                <button
                  className="btn btn-outline-secondary"
                  onClick={clearResults}
                >
                  <i className="bi bi-arrow-clockwise me-2"></i>
                  Nuevo Sorteo
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-8">
        {/* Resultados del sorteo */}
        {winners.length > 0 && (
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">
                <i className="bi bi-trophy-fill me-2"></i>
                Ganadores Seleccionados
              </h5>
              <button
                className="btn btn-success"
                onClick={copyWinners}
              >
                <i className="bi bi-clipboard me-2"></i>
                Copiar Ganadores
              </button>
            </div>
            <div className="card-body">
              {/* Vista de tabla para desktop */}
              <div className="table-responsive d-none d-md-block">
                <table className="table table-bordered">
                  <thead className="table-success">
                    <tr>
                      <th>Posición</th>
                      <th>Nombre</th>
                      <th>Número de Sorteo</th>
                      <th>Premio</th>
                    </tr>
                  </thead>
                  <tbody>
                    {winners.map((winner, index) => (
                      <tr key={winner.id}>
                        <td className="text-center">
                          <span className="badge bg-warning text-dark fs-6">
                            {index + 1}°
                          </span>
                        </td>
                        <td className="fw-bold">{winner.name}</td>
                        <td className="text-center">
                          <span className="badge bg-success fs-6">{winner.number}</span>
                        </td>
                        <td>
                          <span className="badge bg-success fs-6">{winner.prize}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Vista de tarjetas para móviles */}
              <div className="d-md-none">
                {winners.map((winner, index) => (
                  <WinnerCard key={winner.id} winner={winner} index={index} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mensaje cuando no hay resultados */}
        {winners.length === 0 && !isLoading && (
          <div className="card">
            <div className="card-body text-center py-5">
              <i className="bi bi-gift display-1 text-muted mb-3"></i>
              <h5 className="text-muted">No hay ganadores seleccionados</h5>
              <p className="text-muted mb-0">
                Configure el sorteo y haga clic en "Generar Ganadores" para comenzar
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RaffleSection; 