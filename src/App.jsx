import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './components/HomePage'
import AdminLogin from './components/AdminLogin'
import AdminDashboard from './components/AdminDashboard'

function App() {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false)

  const handleAdminLogin = () => {
    setIsAdminAuthenticated(true)
  }

  const handleAdminLogout = () => {
    setIsAdminAuthenticated(false)
  }

  return (
    <Routes>
      {/* Ruta principal */}
      <Route path="/" element={<HomePage />} />
      
      {/* Rutas de administración */}
      <Route 
        path="/admin" 
        element={
          isAdminAuthenticated ? (
            <Navigate to="/admin/dashboard" replace />
          ) : (
            <AdminLogin onLogin={handleAdminLogin} />
          )
        } 
      />
      
      <Route 
        path="/admin/dashboard" 
        element={
          isAdminAuthenticated ? (
            <AdminDashboard onLogout={handleAdminLogout} />
          ) : (
            <Navigate to="/admin" replace />
          )
        } 
      />
      
      {/* Ruta por defecto - redirige al home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
