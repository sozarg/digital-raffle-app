import React from 'react'

const AnimatedParticles = ({ section = "hero" }) => {
  return (
    <div className={`particles-container particles-${section}`}>
      <div className="particles-squares">
        <div className="particle-square"></div>
        <div className="particle-square"></div>
        <div className="particle-square"></div>
        <div className="particle-square"></div>
        <div className="particle-square"></div>
        <div className="particle-square"></div>
        <div className="particle-square"></div>
        <div className="particle-square"></div>
        <div className="particle-square"></div>
        <div className="particle-square"></div>
      </div>
    </div>
  )
}

export default AnimatedParticles 