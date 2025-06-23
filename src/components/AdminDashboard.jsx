import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ParticipantsTable from './ParticipantsTable';
import RaffleSection from './RaffleSection';

const AdminDashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('participants');
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/admin');
  };

  const handleStartRaffle = () => {
    setActiveTab('raffle');
  };

  return (
    <div className="admin-container min-vh-100">
      {/* Navigation Header */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            <i className="bi bi-gear-fill me-2"></i>
            Panel de Administración
          </span>
          <button
            className="btn btn-outline-light"
            onClick={handleLogout}
          >
            <i className="bi bi-box-arrow-right me-2"></i>
            Cerrar Sesión
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-12">
            {/* Tab Navigation */}
            <ul className="nav nav-tabs mb-4">
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === 'participants' ? 'active' : ''}`}
                  onClick={() => setActiveTab('participants')}
                >
                  <i className="bi bi-people-fill me-2"></i>
                  Participantes
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === 'raffle' ? 'active' : ''}`}
                  onClick={() => setActiveTab('raffle')}
                >
                  <i className="bi bi-gift-fill me-2"></i>
                  Realizar Sorteo
                </button>
              </li>
            </ul>

            {/* Tab Content */}
            <div className="tab-content">
              {activeTab === 'participants' && <ParticipantsTable onStartRaffle={handleStartRaffle} />}
              {activeTab === 'raffle' && <RaffleSection />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 