import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Lottie from "lottie-react";
import chestAnimation from "../assets/optimized-chest.json";
import RegistrationForm from "./RegistrationForm";

const Chest = ({ size = 250, staticChest = false }) => {
  const lottieRef = useRef();
  const [showModal, setShowModal] = useState(false);
  const [isChestOpen, setIsChestOpen] = useState(false);

  const handleChestClick = () => {
    if (staticChest || isChestOpen) return;
    
    // Abrir el cofre
    setIsChestOpen(true);
    // Reproducir animación de apertura
    if (lottieRef.current) {
      lottieRef.current.setDirection(1); // Dirección normal
      lottieRef.current.setSpeed(1); // Velocidad normal
      lottieRef.current.play();
    }
    
    // Mostrar el modal (exactamente igual que el nav)
    setShowModal(true);
  };

  const closeChest = () => {
    // Cerrar el cofre con animación en reversa
    setIsChestOpen(false);
    if (lottieRef.current) {
      lottieRef.current.setDirection(-1); // Dirección reversa
      lottieRef.current.setSpeed(1); // Velocidad normal
      lottieRef.current.play();
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    // Cerrar el cofre con animación cuando se cierra el modal
    setTimeout(() => {
      closeChest();
    }, 100); // Pequeño delay para que se vea la transición del modal
  };

  const handleRegistrationSuccess = (registration) => {
    // El formulario manejará la visualización del éxito
    // y se cerrará automáticamente después (igual que el nav)
    setTimeout(() => {
      setShowModal(false);
      // Cerrar el cofre también con animación
      setTimeout(() => {
        closeChest();
      }, 100);
    }, 3000);
  };

  return (
    <>
      {/* Contenedor del cofre */}
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
        
        {/* Contenedor clickable del cofre */}
        <div
          onClick={handleChestClick}
          className={`chest-lottie-container ${staticChest ? 'static' : 'cursor-pointer'} ${isChestOpen ? 'chest-open' : ''}`}
        >
          <Lottie
            lottieRef={lottieRef}
            animationData={chestAnimation}
            autoplay={false}
            loop={false}
            style={{ 
              width: size, 
              height: size,
              transform: 'scale(1.4) translate(-3%, -5%)',
              transformOrigin: 'center center'
            }}
          />
        </div>
      </div>

      {/* Renderizar el modal usando Portal para que esté al mismo nivel que el nav */}
      {showModal && !staticChest && ReactDOM.createPortal(
        <RegistrationForm
          mode="button"
          onClose={handleCloseModal}
          onSuccess={handleRegistrationSuccess}
        />,
        document.body
      )}
    </>
  );
};

export default Chest; 