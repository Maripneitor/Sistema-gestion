import type { Member, QueueItem } from '../../models/types';

export const members: Member[] = [
  { id: 1, name: 'Ricardo Alarcón', risk: 'En Riesgo', initial: 'RA', attendance: [true, true, null, null, null], fails: '4/5', color: 'bg-secondary-fixed' },
  { id: 2, name: 'Mariana Solis', risk: 'Activo', initial: 'MS', attendance: [true, true, true, true, null], fails: '1/5', color: 'bg-tertiary-fixed' },
  { id: 3, name: 'Jorge Luna', risk: 'Activo', initial: 'JL', attendance: [true, 'permiso', true, true, true], fails: '0/5', color: 'bg-secondary-fixed-dim' },
  { id: 4, name: 'Sofía Vargas', risk: 'Activo', initial: 'SV', attendance: [null, null, null, true, true], fails: '3/5', color: 'bg-slate-300' },
];

export const queueItems = [
  { name: 'Daniela K.', wait: '12 días', tag: 'Top Tier', color: 'border-primary' },
  { name: 'Carlos Ruiz', wait: '8 días', tag: null, color: 'border-outline-variant' },
  { name: 'Elena Gomez', wait: '4 días', tag: null, color: 'border-outline-variant opacity-70' },
];
