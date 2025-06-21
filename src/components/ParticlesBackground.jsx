import React from 'react';

const ParticlesBackground = () => {
  // Generar 100 partículas con distribución procedural completa
  const particles = Array.from({ length: 100 }, (_, i) => {
    const size = Math.random() * 20 + 6; // Tamaño entre 6-26px
    const duration = (20000 + Math.random() * 30000); // Duración 20-50s (más lento para efecto continuo)
    const delay = Math.random() * duration; // Delay aleatorio hasta la duración completa
    
    // Distribución procedural en los 4 sentidos
    const direction = Math.floor(Math.random() * 4); // 0: izq->der, 1: der->izq, 2: arriba->abajo, 3: abajo->arriba
    let startX, endX, startY, endY;
    
    switch (direction) {
      case 0: // Izquierda a Derecha
        startX = Math.random() * -30 - 10; // -40 a -10
        endX = Math.random() * 30 + 110; // 110 a 140
        startY = Math.random() * 100; // 0 a 100vh
        endY = startY + (Math.random() * 40 - 20); // Variación vertical ±20vh
        break;
        
      case 1: // Derecha a Izquierda
        startX = Math.random() * 30 + 110; // 110 a 140
        endX = Math.random() * -30 - 10; // -40 a -10
        startY = Math.random() * 100; // 0 a 100vh
        endY = startY + (Math.random() * 40 - 20); // Variación vertical ±20vh
        break;
        
      case 2: // Arriba a Abajo
        startX = Math.random() * 100; // 0 a 100vw
        endX = startX + (Math.random() * 40 - 20); // Variación horizontal ±20vw
        startY = Math.random() * -30 - 10; // -40 a -10vh
        endY = Math.random() * 30 + 110; // 110 a 140vh
        break;
        
      case 3: // Abajo a Arriba
        startX = Math.random() * 100; // 0 a 100vw
        endX = startX + (Math.random() * 40 - 20); // Variación horizontal ±20vw
        startY = Math.random() * 30 + 110; // 110 a 140vh
        endY = Math.random() * -30 - 10; // -40 a -10vh
        break;
    }
    
    return {
      id: i,
      size,
      duration,
      delay,
      startX,
      endX,
      startY,
      endY,
      direction,
      animationDelay: Math.random() * 4000 // Delay para animación interna
    };
  });

  return (
    <div className="particles-background">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle-container"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}ms`,
            animationDelay: `${particle.delay}ms`,
            '--start-x': `${particle.startX}vw`,
            '--end-x': `${particle.endX}vw`,
            '--start-y': `${particle.startY}vh`,
            '--end-y': `${particle.endY}vh`,
          }}
        >
          <div
            className="particle-circle"
            style={{
              animationDelay: `${particle.animationDelay}ms`
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ParticlesBackground; 