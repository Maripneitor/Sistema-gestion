export const kpiData = [
  { label: 'Total Personas', value: '1,284', trend: '+12%', color: 'border-primary' },
  { label: 'Activos', value: '942', subValue: '84% del total', color: 'border-on-primary-fixed-variant' },
  { label: 'Fuera', value: '312', trend: 'Inactivos', color: 'border-outline-variant' },
  { label: 'En Riesgo', value: '30', trend: 'Crítico', color: 'border-on-error-container', containerColor: 'bg-error-container' },
];

export const weeklyAttendance = [
  { day: 'Lun', height: 40 },
  { day: 'Mar', height: 65 },
  { day: 'Mié', height: 85, active: true },
  { day: 'Jue', height: 70 },
  { day: 'Vie', height: 45 },
  { day: 'Sáb', height: 30 },
  { day: 'Dom', height: 20 },
];

export const distributionLevels = [
  { label: 'Nivel Inicial', value: 450, percent: 65, color: 'bg-primary' },
  { label: 'Nivel Avanzado', value: 280, percent: 40, color: 'bg-on-primary-fixed-variant' },
  { label: 'Expertos', value: 120, percent: 15, color: 'bg-tertiary' }
];

export const regionalScope = [
  { label: 'México', percent: '24%', color: 'bg-primary' },
  { label: 'Colombia', percent: '18%', color: 'bg-primary-dim' },
  { label: 'Argentina', percent: '12%', color: 'bg-on-primary-fixed-variant' },
  { label: 'Otros', percent: '10%', color: 'bg-outline-variant' }
];

export const riskAlerts = [
  { name: 'Carlos Méndez', time: '16 días inactivo', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80' },
  { name: 'Elena Rivas', time: '21 días inactivo', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80' },
  { name: 'Andrés Soler', time: '15 días inactivo', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80' }
];
