import React, { useRef, useState } from "react";
import Lottie from "lottie-react";
import chestAnimation from "./chest.json";
import RegistrationForm from "./components/RegistrationForm";
import { findRegistrationByDNI, saveRegistration } from "./services/registrationService";

function randomInt(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

/**
 * Componente del cofre que maneja:
 * - Carga del modelo 3D chest.glb
 * - Reproducción de la animación "Open" al hacer clic
 * - Formulario de registro
 * - Generación y visualización del número de sorteo
 * - Animación flotante del texto del número
 */
const Chest = ({ size = 250 }) => {
  const lottieRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [ticket, setTicket] = useState(null);
  const [showAnim, setShowAnim] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [existingTicket, setExistingTicket] = useState(null);

  const handleChestClick = () => {
    if (isOpen) return;
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
  const startTop = size * 0.68;
  const startLeft = size / 2;
  const endTop = size * 0.13;
  const endLeft = size * 0.92;

  return (
    <>
      <div
        style={{
          width: size,
          height: size + 80,
          margin: "0 auto",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
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
          className={`chest-container ${isOpen ? 'chest-opening' : 'cursor-pointer'}`}
          style={{
            position: "absolute",
            left: size * 0.08,
            top: 0,
            width: size,
            height: size,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
            cursor: isOpen ? 'default' : 'pointer',
          }}
        >
          <Lottie
            lottieRef={lottieRef}
            animationData={chestAnimation}
            loop={false}
            autoplay={false}
            style={{ width: size, height: size, background: "transparent" }}
          />
        </div>
        <button 
          className="chest-action-btn" 
          onClick={handleChestClick} 
          type="button"
          disabled={isOpen}
        >
          ¡Abrir mi número!
        </button>
      </div>

      {showForm && (
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