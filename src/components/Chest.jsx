import React, { useRef, useState } from "react";
import Lottie from "lottie-react";
import chestAnimation from "../assets/optimized-chest.json";
import RegistrationForm from "./RegistrationForm";
import { findRegistrationByDNI, saveRegistration } from "../services/registrationService";

function randomInt(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

const Chest = ({ size = 250, staticChest = false }) => {
  const lottieRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [ticket, setTicket] = useState(null);
  const [showAnim, setShowAnim] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [existingTicket, setExistingTicket] = useState(null);

  const handleChestClick = () => {
    if (isOpen || staticChest) return;
    setShowForm(true);
  };

  const handleFormSubmit = async (formData) => {
    // Verificar si ya existe un registro con ese DNI
    const existing = findRegistrationByDNI(formData.dni);
    if (existing) {
      setExistingTicket(existing.ticketNumber);
      return;
    }

    // Guardar el registro y obtener el número de ticket
    const registration = saveRegistration(formData);
    
    // Cerrar el formulario
    setShowForm(false);
    
    // Animar el cofre y mostrar el número
    setIsOpen(true);
    lottieRef.current.play();
    
    // Mostrar el número con animación
    setTicket(registration.ticketNumber);
    setShowAnim(false);
    setTimeout(() => setShowAnim(true), 500);
    setTimeout(() => setIsOpen(false), 2000);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setExistingTicket(null);
  };

  // Posición inicial (cerradura) y final (arriba a la derecha del cofre)
  const startTop = staticChest ? size * 0.68 - 20 : size * 0.68;
  const startLeft = staticChest ? (size / 2) - 8 : size / 2;
  const endTop = staticChest ? size * 0.13 - 20 : size * 0.13;
  const endLeft = staticChest ? (size * 0.92) - 8 : size * 0.92;

  return (
    <>
      {/* Contenedor del cofre - SIN estilos hardcodeados */}
      <div className="chest-main-container">
        
        {/* Aura detrás del cofre */}
        <div
          className="chest-aura"
          style={{
            width: size * 1.25,
            height: size * 1.25,
            left: `calc(50% - ${((size * 1.25) / 2)}px)`,
            top: `calc(50% - ${((size * 1.25) / 2)}px)`,
          }}
        />
        
        {/* Número animado: sale del cofre y se queda arriba a la derecha */}
        {ticket !== null && (
          <span
            className={"ticket-fly" + (showAnim ? " ticket-fly-anim" : "")}
            style={{
              left: showAnim ? endLeft : startLeft,
              top: showAnim ? endTop : startTop,
            }}
          >
            #{ticket.toString().padStart(4, '0')}
          </span>
        )}
        
        {/* Contenedor clickable del cofre */}
        <div
          onClick={handleChestClick}
          className={`chest-lottie-container ${staticChest ? 'static' : ''} ${isOpen ? 'chest-opening' : 'cursor-pointer'}`}
        >
          <Lottie
            lottieRef={lottieRef}
            animationData={chestAnimation}
            autoplay={true}
            loop={false}
            initialSegment={staticChest ? [0, 1] : undefined}
            style={{ 
              width: size, 
              height: size,
              transform: 'scale(1.4) translate(-3%, -5%)',
              transformOrigin: 'center center'
            }}
          />
        </div>
        
        {!staticChest && (
          <button 
            className="chest-action-btn" 
            onClick={handleChestClick} 
            type="button"
            disabled={isOpen}
          >
            ¡Abrir mi número!
          </button>
        )}
      </div>

      {showForm && !staticChest && (
        <RegistrationForm
          onSubmit={handleFormSubmit}
          onClose={handleFormClose}
          existingTicket={existingTicket}
        />
      )}
    </>
  );
};

export default Chest; 