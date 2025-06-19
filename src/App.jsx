import React from 'react'
import Chest from './Chest'

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
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img src="/logoavellaneda.png" alt="Logo Avellaneda" style={{ height: 40, width: 'auto', display: 'block' }} />
            <h2>🎁 Sorteo Digital</h2>
          </div>
          <div className="nav-links">
            <a href="#sorteo">Sorteo</a>
            <a href="#como-participar">Cómo Participar</a>
            <a href="#premios">Premios</a>
            <a href="#contacto">Contacto</a>
          </div>
        </div>
      </nav>

      {/* Sección principal del sorteo */}
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section" id="sorteo" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: 100 }}>
          <h1 style={{ textAlign: 'center' }}>¡Participa en el Sorteo del Dia del Niño!</h1>
          <p className="hero-description" style={{ textAlign: 'center' }}>
            Haz clic en el cofre para obtener tu número de sorteo único
          </p>
          <div className="hero-flex-row">
            <div className="sorteo-info sorteo-info-horizontal same-size-cards">
              <div className="info-card">
                <h3>📅 Fecha del Sorteo</h3>
                <p>domingo, 10 de agosto</p>
              </div>
              <div className="info-card">
                <h3>📍 Ubicación</h3>
                <p>la estacion</p>
              </div>
              <div className="info-card">
                <h3>🏆 Premios</h3>
                <p>¡Increíbles sorpresas!</p>
              </div>
            </div>
            <div className="chest-with-arrow-static">
              <div className="cofre-arrow-text-static">
                <div className="arrow-down" />
                <Chest size={350} staticChest />
                <div className="arrow-label">Toca el Cofre para abrirlo</div>
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