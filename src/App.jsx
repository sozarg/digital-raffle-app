import React, { useState } from 'react'
import Chest from './components/Chest'
import RegistrationButton from './components/RegistrationButton'
import CheckRegistration from './components/CheckRegistration'

/**
 * Componente principal de la aplicación de sorteo
 * Estructura completa de página web con:
 * - Navbar superior
 * - Sección hero con información del sorteo
 * - Cofre 3D libre flotando sin contenedores ni controles
 * - Información adicional
 * - Footer
 */
function App() {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false)

  const handleRegisterClick = () => {
    setShowRegistrationForm(true)
  }

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img src="/logoavellaneda.png" alt="Logo Avellaneda" style={{ height: 40, width: 'auto', display: 'block' }} />
          </div>
          <div className="nav-links">
            <a href="#sorteo">Sorteo</a>
            <a href="#como-participar">Cómo Participar</a>
            <a href="#premios">Premios</a>
            <a href="#contacto">Contacto</a>
            <CheckRegistration onRegisterClick={handleRegisterClick} />
            <RegistrationButton />
          </div>
        </div>
      </nav>

      {/* Sección principal del sorteo */}
      <main className="main-content">
        {/* Sección Principal del Sorteo */}
        <section className="hero-section" id="sorteo">
          <div className="container">
            <div className="row">
              {/* Columna Izquierda - Tarjetas */}
              <div className="col-md-6">
                <div className="cards-container">
                  {/* Tarjeta Fecha */}
                  <div className="info-card shadow-sm">
                    <div className="card-content">
                      <div className="card-icon">📅</div>
                      <div className="card-info">
                        <h5 className="card-title">Fecha del Sorteo</h5>
                        <p className="card-text">Domingo, 18 de agosto</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Tarjeta Ubicación */}
                  <div className="info-card shadow-sm">
                    <div className="card-content">
                      <div className="card-icon">📍</div>
                      <div className="card-info">
                        <h5 className="card-title">Ubicación</h5>
                        <p className="card-text">La Estación – Parque Municipal<br/>Gral. Güemes 700, B1870 Avellaneda</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Tarjeta Premios */}
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

              {/* Columna Derecha - Cofre */}
              <div className="col-md-6">
                <div className="chest-container">
                  <h1 className="hero-title">¡Participa en el Sorteo del Día del Niño!</h1>
                  <p className="hero-subtitle">Haz clic en el cofre para obtener tu número de sorteo único</p>
                  <div className="chest-wrapper">
                    <Chest size={280} staticChest />
                  </div>
                  <button className="btn btn-success btn-lg chest-button">Abrir Cofre</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de información adicional */}
        <section className="info-section" id="como-participar">
          <div className="info-container">
            <h2>¿Cómo Participar?</h2>
            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Haz Clic en el Cofre</h3>
                <p>Interactúa con el cofre animado para obtener tu número único</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Guarda tu Número</h3>
                <p>Anota tu número de sorteo</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Espera el Sorteo</h3>
                <p>El 10 de agosto anunciaremos los números ganadores</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Nuevo Footer estilo Avellaneda */}
      <footer className="footer-avellaneda">
        <div className="footer-emergencias">
          <div className="footer-emergencia-item">
            <div className="footer-emergencia-icon">+</div>
            <div className="footer-emergencia-num">0800-333-3218</div>
            <div className="footer-emergencia-label">Defensa Civil / Emergencia Vial</div>
          </div>
          <div className="footer-emergencia-item">
            <div className="footer-emergencia-icon">👮‍♂️</div>
            <div className="footer-emergencia-num">911</div>
            <div className="footer-emergencia-label">Policía</div>
          </div>
          <div className="footer-emergencia-item">
            <div className="footer-emergencia-icon">🚒</div>
            <div className="footer-emergencia-num">Bomberos</div>
            <div className="footer-emergencia-label">Listado de Cuarteles</div>
          </div>
          <div className="footer-emergencia-item">
            <div className="footer-emergencia-icon">🚨</div>
            <div className="footer-emergencia-num">144</div>
            <div className="footer-emergencia-label">Violencia de Género</div>
          </div>
          <div className="footer-emergencia-item">
            <div className="footer-emergencia-icon">📞</div>
            <div className="footer-emergencia-num">107</div>
            <div className="footer-emergencia-label">SAME</div>
          </div>
        </div>
        <div className="footer-avellaneda-main">
          <div className="footer-avellaneda-logo">
            <img src="/logoavellaneda.png" alt="Logo Avellaneda" style={{ width: 100, height: 100, borderRadius: '50%', background: '#fff' }} />
            <div className="footer-avellaneda-title">avellaneda</div>
            <div className="footer-avellaneda-socials">
              <a href="#" aria-label="Facebook">&#xf09a;</a>
              <a href="#" aria-label="Twitter">&#xf099;</a>
              <a href="#" aria-label="Instagram">&#xf16d;</a>
              <a href="#" aria-label="YouTube">&#xf167;</a>
            </div>
            <div className="footer-avellaneda-dir">
              <b>Municipalidad de Avellaneda</b><br />Güemes 835
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App 