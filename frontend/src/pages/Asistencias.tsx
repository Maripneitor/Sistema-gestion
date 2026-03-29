import React from 'react';

const members = [
  { id: 1, name: 'Ricardo Alarcón', risk: 'En Riesgo', initial: 'RA', attendance: [true, true, null, null, null], days: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie'], fails: '4/5', color: 'bg-secondary-fixed' },
  { id: 2, name: 'Mariana Solis', risk: 'Activo', initial: 'MS', attendance: [true, true, true, true, null], days: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie'], fails: '1/5', color: 'bg-tertiary-fixed' },
  { id: 3, name: 'Jorge Luna', risk: 'Activo', initial: 'JL', attendance: [true, 'permiso', true, true, true], days: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie'], fails: '0/5', color: 'bg-secondary-fixed-dim' },
  { id: 4, name: 'Sofía Vargas', risk: 'Activo', initial: 'SV', attendance: [null, null, null, true, true], days: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie'], fails: '3/5', color: 'bg-slate-300' },
];

const Asistencias: React.FC = () => {
  return (
    <div className="pt-6 px-10 pb-12 min-h-screen">
      <div className="max-w-[1600px] mx-auto grid grid-cols-12 gap-10">
        
        {/* Left Column: Attendance Grid (Priority) */}
        <div className="col-span-12 lg:col-span-9 space-y-10">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-4xl font-black tracking-tight text-on-surface font-headline uppercase leading-none mb-3">Control de Asistencias</h1>
              <p className="text-[11px] text-primary font-black uppercase tracking-[0.3em] italic opacity-60">Semana Actual Operativa: 15 May - 21 May, 2024</p>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-white text-on-surface rounded-[1.25rem] text-[10px] uppercase font-black tracking-widest hover:bg-surface-bright transition-all shadow-premium border border-primary/5">Vista Mensual</button>
              <button className="px-6 py-3 bg-white text-on-surface rounded-[1.25rem] text-[10px] uppercase font-black tracking-widest hover:bg-surface-bright transition-all shadow-premium flex items-center gap-3 border border-primary/5 group">
                <span className="material-symbols-outlined text-sm group-hover:rotate-12 transition-transform">filter_list</span> Filtrar Auditoría
              </button>
            </div>
          </div>

          {/* Bento-style Data Grid */}
          <div className="bg-white rounded-[3rem] shadow-premium overflow-hidden border border-primary/5">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-surface-container/50 backdrop-blur-md text-on-surface text-[10px] uppercase tracking-[0.2em] font-black border-b border-primary/5">
                  <th className="px-10 py-6">Miembro</th>
                  {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map(day => (
                    <th key={day} className={`px-2 py-6 text-center ${day === 'Sáb' || day === 'Dom' ? 'text-slate-400 opacity-40 italic' : ''}`}>{day}</th>
                  ))}
                  <th className="px-6 py-6 text-right">Faltas</th>
                  <th className="px-10 py-6 text-center">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary/5">
                {members.map((member) => (
                  <tr key={member.id} className="hover:bg-primary/[0.02] transition-colors group cursor-default">
                    <td className="px-10 py-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-2xl ${member.color} flex items-center justify-center font-black text-xs text-on-surface shadow-inner rotate-3 group-hover:rotate-0 transition-transform`}>
                          {member.initial}
                        </div>
                        <div>
                          <p className="text-sm font-black text-on-surface uppercase tracking-tight leading-none mb-1">{member.name}</p>
                          <p className={`text-[9px] font-black uppercase tracking-widest italic ${member.risk === 'En Riesgo' ? 'text-error animate-pulse' : 'text-on-surface-variant opacity-50'}`}>{member.risk}</p>
                        </div>
                      </div>
                    </td>
                    {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                      <td key={i} className="px-2 py-6 text-center">
                        {i < 5 ? (
                          member.attendance[i] === true ? (
                            <button className="w-10 h-10 rounded-xl bg-editorial-gradient flex items-center justify-center text-white text-xs font-black shadow-lg shadow-primary/20 rotate-12 group-hover:rotate-0 transition-transform">X</button>
                          ) : member.attendance[i] === 'permiso' ? (
                            <div className="w-10 h-10 rounded-xl bg-secondary-fixed-dim border border-primary/20 flex items-center justify-center text-on-secondary-fixed-variant shadow-inner scale-90">
                              <span className="material-symbols-outlined text-lg">description</span>
                            </div>
                          ) : (
                            <button className="w-10 h-10 rounded-xl bg-surface-container-highest border border-dashed border-primary/20 hover:border-primary hover:bg-primary/5 transition-all shadow-inner"></button>
                          )
                        ) : (
                          <button className="w-10 h-10 rounded-xl bg-surface-container-low opacity-30 cursor-not-allowed border border-primary/5"></button>
                        )}
                      </td>
                    ))}
                    <td className="px-6 py-6 text-right">
                      <span className={`px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase shadow-sm ${member.fails === '0/5' ? 'bg-surface-container-highest text-on-surface-variant' : member.fails === '4/5' ? 'bg-error-container text-on-error-container' : 'bg-yellow-100/50 text-yellow-800'}`}>
                        {member.fails}
                      </span>
                    </td>
                    <td className="px-10 py-6 text-center">
                      {member.attendance.includes('permiso') ? (
                        <span className="text-[10px] font-black text-primary uppercase tracking-tighter italic flex items-center justify-center gap-1">
                          <span className="material-symbols-outlined text-xs">verified</span> PERMISO OK
                        </span>
                      ) : (
                        <button className="text-primary text-[10px] font-black uppercase tracking-widest hover:underline hover:scale-105 transition-all">Marcar Permiso</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer Summary Cards */}
          <div className="grid grid-cols-3 gap-8">
            <div className="px-8 py-6 bg-primary-fixed rounded-[2rem] flex items-center gap-6 shadow-premium group hover:rotate-1 transition-transform">
              <div className="w-14 h-14 bg-on-primary-fixed-variant/10 rounded-2xl flex items-center justify-center text-on-primary-fixed-variant shadow-inner group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">person_check</span>
              </div>
              <div>
                <p className="text-[10px] uppercase font-black text-on-primary-fixed-variant opacity-60 italic mb-1">Presentes Hoy</p>
                <p className="text-3xl font-black text-on-primary-fixed font-headline uppercase italic">42 Miembros</p>
              </div>
            </div>
            
            <div className="px-8 py-6 bg-error-container/40 rounded-[2rem] flex items-center gap-6 shadow-premium group hover:-rotate-1 transition-transform">
              <div className="w-14 h-14 bg-error/10 rounded-2xl flex items-center justify-center text-error shadow-inner group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">warning</span>
              </div>
              <div>
                <p className="text-[10px] uppercase font-black text-on-error-container opacity-60 italic mb-1">En Alerta</p>
                <p className="text-3xl font-black text-on-error-container font-headline uppercase italic">3 Miembros</p>
              </div>
            </div>
            
            <div className="px-8 py-6 bg-surface-container rounded-[2rem] flex items-center gap-6 shadow-premium group hover:rotate-1 transition-transform border border-primary/5">
              <div className="w-14 h-14 bg-on-surface-variant/10 rounded-2xl flex items-center justify-center text-on-surface-variant shadow-inner group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">schedule</span>
              </div>
              <div>
                <p className="text-[10px] uppercase font-black text-on-surface-variant opacity-60 italic mb-1">Rendimiento</p>
                <p className="text-3xl font-black text-on-surface font-headline uppercase italic">88% Promedio</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Queue & Replacement */}
        <div className="col-span-12 lg:col-span-3 space-y-8">
          <div className="bg-white rounded-[3rem] p-10 min-h-[600px] flex flex-col gap-8 shadow-premium border border-primary/5 relative overflow-hidden group">
            <div className="relative z-10">
              <h2 className="text-xl font-black text-on-surface flex items-center gap-3 font-headline uppercase italic leading-none mb-2">
                <span className="material-symbols-outlined text-primary text-2xl group-hover:rotate-180 transition-transform duration-1000">hourglass_empty</span>
                Cola de Reemplazo
              </h2>
              <p className="text-[10px] text-on-surface-variant font-black uppercase tracking-widest opacity-50 italic">Candidatos listos para Onboarding.</p>
            </div>

            <div className="space-y-5 flex-1 relative z-10">
              {[
                { name: 'Daniela K.', wait: '12 días', tag: 'Top Tier', color: 'border-primary' },
                { name: 'Carlos Ruiz', wait: '8 días', tag: null, color: 'border-outline-variant' },
                { name: 'Elena Gómez', wait: '4 días', tag: null, color: 'border-outline-variant opacity-60' }
              ].map((item, idx) => (
                <div key={idx} className={`p-6 bg-surface-container-lowest rounded-3xl border-l-8 ${item.color} shadow-premium hover:translate-x-4 transition-all cursor-pointer group/item relative overflow-hidden`}>
                  <div className="flex justify-between items-start relative z-10">
                    <div>
                      <p className="text-sm font-black text-on-surface uppercase tracking-tighter leading-none mb-2">{item.name}</p>
                      <p className="text-[9px] text-on-surface-variant font-black uppercase tracking-widest opacity-60 italic">Espera: {item.wait}</p>
                    </div>
                    {item.tag && (
                      <span className="px-3 py-1 bg-primary text-white text-[8px] font-black rounded-lg uppercase tracking-widest shadow-lg shadow-primary/20 rotate-12 group-hover/item:rotate-0 transition-transform">{item.tag}</span>
                    )}
                  </div>
                  {item.tag && (
                    <button className="mt-6 w-full py-3 bg-editorial-gradient text-white text-[9px] font-black rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20 uppercase tracking-[0.2em] relative z-10">
                      Promover Ahora
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Replace Action Area */}
            <div className="mt-auto pt-8 border-t border-primary/5 relative z-10">
              <div className="bg-error-container/10 p-5 rounded-[2rem] border border-error/5 relative overflow-hidden group/alert">
                <p className="text-[10px] font-black text-error flex items-center gap-2 mb-3 uppercase tracking-widest italic">
                  <span className="material-symbols-outlined text-sm animate-ping">info</span>
                  ALERTA OPERATIVA
                </p>
                <p className="text-[10px] leading-relaxed text-on-error-container font-medium">
                  Hay <strong className="font-black">2 vacantes críticas</strong> potenciales. La cola tiene 8 candidatos calificados.
                </p>
                <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-6xl text-error opacity-5 group-hover/alert:scale-150 transition-transform">report_problem</span>
              </div>
            </div>
            {/* Background design element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[5rem] -mr-10 -mt-10"></div>
          </div>
        </div>
      </div>

      {/* FAB Contextual */}
      <button className="fixed bottom-10 right-10 w-16 h-16 bg-editorial-gradient text-white rounded-[1.5rem] shadow-[0_12px_40px_-10px_rgba(12,86,208,0.7)] hover:shadow-[0_16px_48px_-10px_rgba(12,86,208,0.8)] hover:scale-110 active:scale-90 transition-all group z-50 flex items-center justify-center">
        <span className="material-symbols-outlined text-3xl group-hover:rotate-180 transition-transform duration-500">add</span>
        <div className="absolute right-full mr-6 px-5 py-2 bg-on-surface text-white text-[9px] font-black uppercase tracking-[0.3em] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-premium italic border border-white/10">Añadir Miembro</div>
      </button>
    </div>
  );
};

export default Asistencias;
