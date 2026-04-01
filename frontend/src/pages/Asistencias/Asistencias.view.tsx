import React from 'react';
import './Asistencias.css';
import { useAsistenciasController } from './Asistencias.controller';
import { queueItems } from './Asistencias.model';

const AsistenciasView: React.FC = () => {
  const {
    members,
    currentWeek,
    handleMarkPermission,
    handlePromote,
    handleFilter,
    handleMonthlyView
  } = useAsistenciasController();

  return (
    <div className="asistencias-container">
      {/* Left Column: Attendance Grid (Priority) */}
      <div className="asistencias-left-col">
        <div className="asistencias-header">
          <div>
            <h1 className="asistencias-title">Control de Asistencias</h1>
            <p className="asistencias-subtitle">Semana Actual: {currentWeek}</p>
          </div>
          <div className="asistencias-actions-bar">
            <button onClick={handleMonthlyView} className="px-4 py-2 bg-surface-container-high text-on-surface rounded-md text-sm font-medium hover:bg-surface-bright transition-colors">Vista Mensual</button>
            <button onClick={handleFilter} className="px-4 py-2 bg-surface-container-high text-on-surface rounded-md text-sm font-medium hover:bg-surface-bright transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">filter_list</span>
              Filtrar
            </button>
          </div>
        </div>

        {/* Bento-style Data Grid */}
        <div className="asistencias-table-container">
          <table className="asistencias-table">
            <thead>
              <tr className="asistencias-table-header">
                <th className="px-6 py-4">Miembro</th>
                <th className="px-2 py-4 text-center">Lun</th>
                <th className="px-2 py-4 text-center">Mar</th>
                <th className="px-2 py-4 text-center">Mié</th>
                <th className="px-2 py-4 text-center">Jue</th>
                <th className="px-2 py-4 text-center">Vie</th>
                <th className="px-2 py-4 text-center text-slate-400">Sáb</th>
                <th className="px-2 py-4 text-center text-slate-400">Dom</th>
                <th className="px-4 py-4 text-right">Faltas</th>
                <th className="px-6 py-4 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/15">
              {members.map((member) => (
                <tr key={member.id} className="asistencias-row-hover">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-full ${member.color} flex items-center justify-center font-bold text-xs text-on-surface`}>
                        {member.initial}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-on-surface">{member.name}</p>
                        <p className={`text-[10px] font-bold uppercase tracking-wider ${member.risk === 'En Riesgo' ? 'text-error' : 'text-on-surface-variant'}`}>{member.risk}</p>
                      </div>
                    </div>
                  </td>
                  {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                    <td key={i} className="px-2 py-4 text-center">
                      {i < 5 ? (
                        member.attendance[i] === true ? (
                          <button className="asistencias-attendance-btn bg-primary text-white text-xs font-black">X</button>
                        ) : member.attendance[i] === 'permiso' ? (
                          <div className="asistencias-attendance-btn bg-secondary-fixed-dim text-on-secondary-fixed-variant">
                            <span className="material-symbols-outlined text-sm">description</span>
                          </div>
                        ) : (
                          <button className="asistencias-attendance-btn bg-surface-container-highest border border-dashed border-outline-variant/30 hover:border-primary"></button>
                        )
                      ) : (
                        <button className="asistencias-attendance-btn bg-surface-container-low opacity-50 cursor-not-allowed"></button>
                      )}
                    </td>
                  ))}
                  <td className="px-4 py-4 text-right">
                    <span className={`asistencias-status-badge ${member.fails === '4/5' ? 'bg-error-container text-on-error-container' : 'bg-surface-container-highest text-on-surface-variant'}`}>
                      {member.fails}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    {member.attendance.includes('permiso') ? (
                      <span className="text-[10px] font-bold text-secondary uppercase tracking-tighter">Permiso OK</span>
                    ) : (
                      <button onClick={() => handleMarkPermission(member.id)} className="text-primary text-xs font-bold hover:underline">Marcar Permiso</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Summary */}
        <div className="asistencias-summary-grid">
          <div className="asistencias-summary-card bg-primary-fixed">
            <div className="w-10 h-10 bg-on-primary-fixed-variant/10 rounded-full flex items-center justify-center text-on-primary-fixed-variant">
              <span className="material-symbols-outlined">person_check</span>
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-on-primary-fixed-variant opacity-70">Presentes Hoy</p>
              <p className="text-xl font-black text-on-primary-fixed">42 Miembros</p>
            </div>
          </div>
          <div className="asistencias-summary-card bg-error-container/50">
            <div className="w-10 h-10 bg-error/10 rounded-full flex items-center justify-center text-error">
              <span className="material-symbols-outlined">warning</span>
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-on-error-container opacity-70">En Riesgo</p>
              <p className="text-xl font-black text-on-error-container">3 Miembros</p>
            </div>
          </div>
          <div className="asistencias-summary-card bg-surface-container">
            <div className="w-10 h-10 bg-on-surface-variant/10 rounded-full flex items-center justify-center text-on-surface-variant">
              <span className="material-symbols-outlined">schedule</span>
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-on-surface-variant opacity-70">Asistencia Promedio</p>
              <p className="text-xl font-black text-on-surface">88%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Queue & Replacement */}
      <div className="asistencias-right-col">
        <div className="asistencias-queue-card">
          <div>
            <h2 className="text-lg font-bold text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">hourglass_empty</span>
              Cola de Reemplazo
            </h2>
            <p className="text-xs text-on-surface-variant font-medium mt-1">Usuarios listos para el onboarding.</p>
          </div>
          <div className="space-y-4 flex-1">
            {queueItems.map((item, idx) => (
              <div key={idx} className={`asistencias-queue-item ${item.color}`}>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-bold text-on-surface">{item.name}</p>
                    <p className="text-[10px] text-on-surface-variant font-medium">Espera: {item.wait}</p>
                  </div>
                  {item.tag && (
                    <span className="px-2 py-0.5 bg-primary-fixed text-on-primary-fixed text-[9px] font-bold rounded uppercase">{item.tag}</span>
                  )}
                </div>
                {item.tag ? (
                  <button onClick={() => handlePromote(item.name)} className="mt-3 w-full py-1.5 border border-primary text-primary text-[10px] font-bold rounded hover:bg-primary hover:text-white transition-colors uppercase">
                    Promover Ahora
                  </button>
                ): (
                  <button className="mt-3 w-full py-1.5 border border-outline-variant text-on-surface-variant text-[10px] font-bold rounded hover:bg-surface-container-high transition-colors uppercase">
                    Ver Perfil
                  </button>
                )}
              </div>
            ))}
          </div>
          {/* Replace Action Area */}
          <div className="mt-auto pt-6 border-t border-outline-variant/20">
            <div className="bg-error-container/20 p-4 rounded-lg">
              <p className="text-[11px] font-bold text-on-error-container flex items-center gap-1 mb-2">
                <span className="material-symbols-outlined text-sm">info</span>
                ALERTA OPERATIVA
              </p>
              <p className="text-[10px] leading-relaxed text-on-error-container">Hay <strong>2 vacantes críticas</strong> potenciales debido a inasistencias acumuladas. La cola tiene 8 candidatos calificados.</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAB Contextual */}
      <button className="asistencias-fab">
        <span className="material-symbols-outlined text-2xl">add</span>
        <span className="absolute right-full mr-4 px-3 py-1 bg-on-surface text-surface text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-bold tracking-widest">Añadir Miembro</span>
      </button>
    </div>
  );
};

export default AsistenciasView;
