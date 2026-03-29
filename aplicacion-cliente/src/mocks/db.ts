export interface Member {
  id: string;
  nombre_real: string;
  nombre_app: string;
  telefono: string;
  edad: number;
  pais: string;
  nivel: number;
  faltas_acumuladas: number;
  es_super_fan: boolean;
  estado: 'ACTIVO' | 'INACTIVO' | 'CON_PERMISO' | 'EN_RIESGO_DE_BAJA';
  fecha_registro: string;
  grupo?: string;
}

export const mockMiembros: Member[] = [
  {
    id: '1',
    nombre_real: 'Carlos Ruiz',
    nombre_app: 'Charly ⚡',
    telefono: '+52 555 123 4567',
    edad: 28,
    pais: 'México',
    nivel: 32,
    faltas_acumuladas: 0,
    es_super_fan: true,
    estado: 'ACTIVO',
    fecha_registro: '2025-01-15T10:00:00Z',
    grupo: 'WhatsApp VIP'
  },
  {
    id: '2',
    nombre_real: 'Elena Martínez',
    nombre_app: 'Ele ✨',
    telefono: '+57 321 456 7890',
    edad: 24,
    pais: 'Colombia',
    nivel: 45,
    faltas_acumuladas: 1,
    es_super_fan: true,
    estado: 'ACTIVO',
    fecha_registro: '2025-02-10T09:30:00Z',
    grupo: 'Moderación Beta'
  },
  {
    id: '3',
    nombre_real: 'Roberto García',
    nombre_app: 'RoboBot 🤖',
    telefono: '+54 11 1234 5678',
    edad: 31,
    pais: 'Argentina',
    nivel: 12,
    faltas_acumuladas: 4,
    es_super_fan: false,
    estado: 'EN_RIESGO_DE_BAJA',
    fecha_registro: '2025-03-01T15:00:00Z',
    grupo: 'General'
  },
  {
    id: '4',
    nombre_real: 'Lucía Silva',
    nombre_app: 'Lu 🌸',
    telefono: '+56 9 1234 5678',
    edad: 19,
    pais: 'Chile',
    nivel: 8,
    faltas_acumuladas: 2,
    es_super_fan: false,
    estado: 'ACTIVO',
    fecha_registro: '2025-05-20T11:20:00Z',
    grupo: 'WhatsApp VIP'
  },
  {
    id: '5',
    nombre_real: 'Andrés Mendoza',
    nombre_app: 'Andy 🎮',
    telefono: '+52 555 987 6543',
    edad: 22,
    pais: 'México',
    nivel: 50,
    faltas_acumuladas: 0,
    es_super_fan: true,
    estado: 'ACTIVO',
    fecha_registro: '2024-11-20T10:00:00Z',
    grupo: 'Estratega'
  },
  {
    id: '6',
    nombre_real: 'Sofía Herrera',
    nombre_app: 'Sofi ☁️',
    telefono: '+591 700 12345',
    edad: 26,
    pais: 'Bolivia',
    nivel: 21,
    faltas_acumuladas: 0,
    es_super_fan: false,
    estado: 'CON_PERMISO',
    fecha_registro: '2025-06-01T12:00:00Z',
    grupo: 'General'
  },
  {
    id: '7',
    nombre_real: 'Miguel Torres',
    nombre_app: 'Mike 🎸',
    telefono: '+51 987 654 321',
    edad: 35,
    pais: 'Perú',
    nivel: 2,
    faltas_acumuladas: 6,
    es_super_fan: false,
    estado: 'INACTIVO',
    fecha_registro: '2025-07-15T14:00:00Z'
  },
  {
    id: '8',
    nombre_real: 'Valeria Luna',
    nombre_app: 'Vale 🌙',
    telefono: '+506 8888 8888',
    edad: 20,
    pais: 'Costa Rica',
    nivel: 28,
    faltas_acumuladas: 1,
    es_super_fan: true,
    estado: 'ACTIVO',
    fecha_registro: '2025-01-05T08:00:00Z',
    grupo: 'WhatsApp VIP'
  },
  {
    id: '9',
    nombre_real: 'Daniel Pozos',
    nombre_app: 'Dani 🧩',
    telefono: '+52 555 111 2222',
    edad: 29,
    pais: 'México',
    nivel: 15,
    faltas_acumuladas: 3,
    es_super_fan: false,
    estado: 'EN_RIESGO_DE_BAJA',
    fecha_registro: '2025-04-12T16:00:00Z',
    grupo: 'General'
  },
  {
    id: '10',
    nombre_real: 'Mariana Ríos',
    nombre_app: 'Mary 🔥',
    telefono: '+593 9 1234 567',
    edad: 23,
    pais: 'Ecuador',
    nivel: 39,
    faltas_acumuladas: 1,
    es_super_fan: true,
    estado: 'ACTIVO',
    fecha_registro: '2025-02-28T09:00:00Z',
    grupo: 'WhatsApp VIP'
  }
];

export const mockAsistencias = [
  { fecha: '2026-03-24', total: 120 },
  { fecha: '2026-03-25', total: 145 },
  { fecha: '2026-03-26', total: 160 },
  { fecha: '2026-03-27', total: 110 },
  { fecha: '2026-03-28', total: 90 },
  { fecha: '2026-03-29', total: 70 },
  { fecha: '2026-03-30', total: 40 }
];
