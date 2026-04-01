import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { kpiData, weeklyAttendance, distributionLevels, regionalScope, riskAlerts } from './Dashboard.model';

export const useDashboardController = () => {
  const navigate = useNavigate();
  // State could go here if we were fetching live data
  const [lastSync, setLastSync] = useState('Hoy 14:32 PM');

  const handleAction = (type: string) => {
    console.log(`Action triggered: ${type}`);
    switch (type) {
      case 'Total Personas':
      case 'Activos':
      case 'Fuera':
        navigate('/directorio');
        break;
      case 'En Riesgo':
      case 'Alertas de Riesgo':
        navigate('/asistencias');
        break;
      case 'FAB':
      case 'New Registration':
        navigate('/registro');
        break;
      case 'Settings':
        navigate('/settings');
        break;
      default:
        console.warn(`No route defined for action: ${type}`);
    }
  };

  const handleRemoveUser = (name: string) => {
    console.log(`Removing user: ${name}`);
    // En un caso real aquí llamaríamos a la API
    alert(`Gestionando baja de: ${name}`);
  };

  return {
    kpiData,
    weeklyAttendance,
    distributionLevels,
    regionalScope,
    riskAlerts,
    lastSync,
    handleAction,
    handleRemoveUser,
  };
};

