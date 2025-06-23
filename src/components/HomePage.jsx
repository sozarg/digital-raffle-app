import React, { useState } from 'react'
import Chest from './Chest'
import RegistrationButton from './RegistrationButton'
import CheckRegistration from './CheckRegistration'
import AnimatedParticles from './AnimatedParticles'

function HomePage() {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false)

  const handleRegisterClick = () => {
    setShowRegistrationForm(true)
  }

  return (
    <div className="app" id="sorteo">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <a href="/">
              <img src="/logoavellaneda.png" alt="Logo Avellaneda" />
            </a>
          </div>
          <div className="nav-links">
            <a href="#sorteo">Sorteo</a>
            <a href="#como-participar">Cómo Participar</a>
            <a href="#contacto">Contacto</a>
            <CheckRegistration onRegisterClick={handleRegisterClick} />
            <RegistrationButton />
          </div>
        </div>
      </nav>

      {/* Contenido principal */}
      <main className="main-content">
        {/* Sección del sorteo */}
        <section className="hero-section">
          <AnimatedParticles section="hero" />
          <div className="container">
            <div className="row align-items-center d-flex flex-row">
              {/* Columnas invisibles izquierdas */}
              <div className="col-md-2"></div>
              
              {/* Columna izquierda: cofre */}
              <div className="col-md-4 d-flex justify-content-center">
                <div className="chest-container px-2 text-center">
                  {/* Sección del título y subtítulo - alineada con la primera card */}
                  <div className="hero-text-section">
                    <h1 className="hero-title">¡Participá en el Sorteo del Día del Niño!</h1>
                    <p className="hero-subtitle">Hacé clic en el cofre para obtener tu número de sorteo único</p>
                  </div>
                  
                  {/* Sección del cofre - alineada con la segunda card */}
                  <div className="chest-section">
                    <div className="chest-wrapper">
                      <Chest size={500} staticChest={false} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Columna derecha: tarjetas */}
              <div className="col-md-4 d-flex justify-content-center">
                <div className="cards-container px-2">
                  {/* Nodos del timeline - posicionables */}
                  <div className="timeline-node timeline-node-1"></div>
                  <div className="timeline-node timeline-node-2"></div>
                  <div className="timeline-node timeline-node-3"></div>
                  
                  {/* Primera card - Fecha del Sorteo */}
                  <div className="cards-section">
                    <div className="info-card shadow-sm">
                      <div className="card-content">
                        <div className="card-icon">📅</div>
                        <div className="card-info">
                          <h5 className="card-title">Fecha del Sorteo</h5>
                          <p className="card-text">Domingo, 18 de agosto</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Segunda card - Ubicación */}
                  <div className="cards-section">
                    <div className="info-card shadow-sm">
                      <div className="card-content">
                        <div className="card-icon">📍</div>
                        <div className="card-info">
                          <h5 className="card-title">Ubicación</h5>
                          <p className="card-text">La Estación – Güemes 700, Avellaneda</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Tercera card - Premios */}
                  <div className="cards-section">
                    <div className="info-card shadow-sm">
                      <div className="card-content">
                        <div className="card-icon">🏆</div>
                        <div className="card-info">
                          <h5 className="card-title">Premios</h5>
                          <p className="card-text">¡Bicicletas, tablets, juguetes y más!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Columnas invisibles derechas */}
              <div className="col-md-2"></div>
            </div>
          </div>
        </section>

        {/* Sección de información adicional */}
        <section className="info-section" id="como-participar">
          <AnimatedParticles section="info" />
          <div className="info-container">
            <h2>¿Cómo Participar?</h2>
            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Hacé Clic en el Cofre</h3>
                <p>Interactuá con el cofre animado para obtener tu número único</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Guardá tu Número</h3>
                <p>Anotá tu número de sorteo</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Esperá el Sorteo</h3>
                <p>El 10 de agosto anunciaremos los números ganadores</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer institucional */}
      <footer className="footer-avellaneda" id="contacto">
        <div className="footer-avellaneda-main">
          <div className="footer-avellaneda-logo">
            <img src="/logoavellaneda.png" alt="Logo Avellaneda" style={{ width: 140, height: 140, borderRadius: '50%', background: '#fff' }} />
            <div className="footer-avellaneda-title">avellaneda</div>
            <div className="footer-avellaneda-dir">
              <b>Municipalidad de Avellaneda</b><br />Güemes 835
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage 