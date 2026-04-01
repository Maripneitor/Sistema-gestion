import React from 'react';
import './Dashboard.css';
import { useDashboardController } from './Dashboard.controller';

const DashboardView: React.FC = () => {
  const {
    kpiData,
    weeklyAttendance,
    distributionLevels,
    regionalScope,
    riskAlerts,
    lastSync,
    handleAction,
    handleRemoveUser,
  } = useDashboardController();

  return (
    <div className="dashboard-container">
      {/* Welcome Header */}
      <section className="dashboard-header">
        <h3 className="dashboard-title">Panel General de Gestión</h3>
        <p className="dashboard-subtitle">Visualización en tiempo real del ecosistema comunitario. Priorizando eficiencia operativa y alertas de retención.</p>
      </section>

      {/* KPI Grid */}
      <div className="dashboard-kpi-grid">
        {kpiData.map((kpi, idx) => (
          <div 
            key={idx} 
            className={`dashboard-kpi-card ${kpi.containerColor || 'bg-surface-container-lowest'} ${kpi.color} group hover:bg-primary transition-all duration-300 cursor-pointer`}
            onClick={() => handleAction(kpi.label)}
          >
            <p className={`text-[10px] font-black group-hover:text-on-primary uppercase tracking-[0.2em] mb-2 ${kpi.containerColor ? 'text-on-error-container' : 'text-on-surface-variant'}`}>{kpi.label}</p>
            <div className="flex items-baseline gap-2">
              <span className={`text-4xl font-black font-headline group-hover:text-white ${kpi.containerColor ? 'text-on-error-container' : 'text-on-surface'}`}>{kpi.value}</span>
              {kpi.trend && <span className={`text-xs font-bold tracking-tighter group-hover:text-white/80 ${kpi.containerColor ? 'text-on-error-container' : 'text-primary'}`}>{kpi.trend}</span>}
              {kpi.subValue && <span className="text-[10px] text-on-surface-variant font-bold uppercase opacity-60 group-hover:text-white/60">{kpi.subValue}</span>}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Access Section */}
      <section className="mb-10">
        <h4 className="text-[11px] font-black font-headline mb-4 tracking-[0.2em] uppercase opacity-70">Accesos Directos</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button 
            onClick={() => handleAction('Total Personas')}
            className="flex items-center gap-4 p-4 bg-surface-container-lowest rounded-xl border border-primary/10 hover:border-primary hover:bg-primary/5 transition-all group overflow-hidden relative"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-symbols-outlined text-xl">group</span>
            </div>
            <div className="text-left">
              <p className="text-xs font-black uppercase tracking-tight">Directorio</p>
              <p className="text-[9px] text-on-surface-variant font-bold uppercase opacity-60">Gestionar Miembros</p>
            </div>
            <span className="material-symbols-outlined absolute -right-2 -bottom-2 text-4xl opacity-5 group-hover:opacity-10 transition-opacity">group</span>
          </button>

          <button 
            onClick={() => handleAction('En Riesgo')}
            className="flex items-center gap-4 p-4 bg-surface-container-lowest rounded-xl border border-primary/10 hover:border-primary hover:bg-primary/5 transition-all group overflow-hidden relative"
          >
            <div className="w-10 h-10 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary group-hover:bg-tertiary group-hover:text-white transition-all">
              <span className="material-symbols-outlined text-xl">rule_folder</span>
            </div>
            <div className="text-left">
              <p className="text-xs font-black uppercase tracking-tight">Asistencias</p>
              <p className="text-[9px] text-on-surface-variant font-bold uppercase opacity-60">Control de Pase</p>
            </div>
            <span className="material-symbols-outlined absolute -right-2 -bottom-2 text-4xl opacity-5 group-hover:opacity-10 transition-opacity">rule_folder</span>
          </button>

          <button 
            onClick={() => handleAction('FAB')}
            className="flex items-center gap-4 p-4 bg-surface-container-lowest rounded-xl border border-primary/10 hover:border-primary hover:bg-primary/5 transition-all group overflow-hidden relative"
          >
            <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
              <span className="material-symbols-outlined text-xl">person_add</span>
            </div>
            <div className="text-left">
              <p className="text-xs font-black uppercase tracking-tight">Registro</p>
              <p className="text-[9px] text-on-surface-variant font-bold uppercase opacity-60">Alta de Curadores</p>
            </div>
            <span className="material-symbols-outlined absolute -right-2 -bottom-2 text-4xl opacity-5 group-hover:opacity-10 transition-opacity">person_add</span>
          </button>

          <button 
            onClick={() => handleAction('Settings')}
            className="flex items-center gap-4 p-4 bg-surface-container-lowest rounded-xl border border-primary/10 hover:border-primary hover:bg-primary/5 transition-all group overflow-hidden relative"
          >
            <div className="w-10 h-10 rounded-lg bg-primary-fixed/10 flex items-center justify-center text-primary-fixed group-hover:bg-primary-fixed group-hover:text-white transition-all">
              <span className="material-symbols-outlined text-xl">settings</span>
            </div>
            <div className="text-left">
              <p className="text-xs font-black uppercase tracking-tight">Ajustes</p>
              <p className="text-[9px] text-on-surface-variant font-bold uppercase opacity-60">Configuración</p>
            </div>
            <span className="material-symbols-outlined absolute -right-2 -bottom-2 text-4xl opacity-5 group-hover:opacity-10 transition-opacity">settings</span>
          </button>
        </div>
      </section>


      {/* Charts & Risk Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Data Visuals */}
        <div className="lg:col-span-8 space-y-8">
          {/* Weekly Attendance Chart */}
          <div className="dashboard-card-elevated">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h4 className="text-lg font-black font-headline uppercase tracking-tight">Asistencia Semanal Promedio</h4>
                <p className="text-xs text-on-surface-variant font-bold opacity-60 tracking-wide">Tendencia de participación en los últimos 7 días</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary group transition-all">
               <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">trending_up</span>
              </div>
            </div>
            
            <div className="dashboard-chart-container">
              {weeklyAttendance.map((item, i) => (
                <div 
                  key={i} 
                  className={`dashboard-chart-bar ${item.active ? 'bg-primary' : ''}`} 
                  style={{ height: `${item.height}%` }}
                >
                  <span className={`absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-widest transition-opacity ${item.active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                    {item.day}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Distribution by Levels */}
            <div className="bg-surface-container p-8 rounded-2xl border border-primary/5">
              <h4 className="text-[11px] font-black font-headline mb-8 tracking-[0.2em] uppercase opacity-70">Distribución por Niveles</h4>
              <div className="space-y-6">
                {distributionLevels.map((level, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-[11px] font-black uppercase tracking-widest mb-2">
                      <span>{level.label}</span>
                      <span className="text-primary">{level.value}</span>
                    </div>
                    <div className="w-full bg-surface-container-highest rounded-full h-1.5 shadow-inner">
                      <div className={`${level.color} h-full rounded-full transition-all duration-1000 shadow-lg`} style={{ width: `${level.percent}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Regional Scope */}
            <div className="bg-surface-container p-8 rounded-2xl relative overflow-hidden border border-primary/5">
              <h4 className="text-[11px] font-black font-headline mb-6 tracking-[0.2em] uppercase opacity-70">Alcance Latam (Resto)</h4>
              <div className="space-y-4 relative z-10">
                {regionalScope.map((region, i) => (
                  <div key={i} className="flex items-center justify-between group cursor-default">
                    <div className="flex items-center gap-3">
                      <span className={`w-2 h-2 rounded-full ${region.color} group-hover:scale-150 transition-transform`}></span>
                      <span className="text-[11px] font-black uppercase tracking-widest opacity-80">{region.label}</span>
                    </div>
                    <span className="text-xs font-black text-primary">{region.percent}</span>
                  </div>
                ))}
              </div>
              <div className="absolute -right-4 -bottom-4 opacity-5 rotate-12">
                <span className="material-symbols-outlined text-[100px]">public</span>
              </div>
            </div>
          </div>
        </div>

        {/* Risk Alerts (Side Section) */}
        <div className="dashboard-section-sidebar">
          <div className="dashboard-risk-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-error/5 flex items-center justify-center text-error border border-error/10">
                <span className="material-symbols-outlined text-xl">warning</span>
              </div>
              <h4 className="text-lg font-black font-headline uppercase tracking-tight">Alertas de Riesgo</h4>
            </div>
            <p className="text-[11px] text-on-surface-variant font-bold opacity-60 mb-5 leading-relaxed">Usuarios con inactividad &gt; 14 días. Se sugiere baja inmediata o reemplazo.</p>
            
            <div className="space-y-4">
              {riskAlerts.map((user, i) => (
                <div key={i} className="dashboard-risk-item">
                  <div className="flex items-center gap-4">
                    <img className="w-10 h-10 rounded-xl object-cover shadow-sm group-hover:rotate-3 transition-transform" src={user.img} alt={user.name} />
                    <div>
                      <p className="text-xs font-black uppercase tracking-tight">{user.name}</p>
                      <p className="text-[9px] text-error font-black uppercase tracking-[0.05em] mt-0.5">{user.time}</p>
                    </div>
                  </div>
                  <button onClick={() => handleRemoveUser(user.name)} className="p-2 hover:bg-error text-error hover:text-white rounded-lg transition-all shadow-sm">
                    <span className="material-symbols-outlined text-sm">person_remove</span>
                  </button>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-8 py-3 bg-surface-container-high text-on-surface text-[10px] font-black rounded-xl hover:bg-on-surface hover:text-white transition-all uppercase tracking-[0.2em] shadow-sm">
              Gestionar Todos (30)
            </button>
          </div>

          {/* Sync Health Card */}
          <div className="dashboard-sync-card">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-premium text-primary border border-primary/5 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>cloud_done</span>
              </div>
              <div>
                <h4 className="text-[11px] font-black uppercase tracking-[0.1em]">Sync Health</h4>
                <p className="text-[9px] text-on-surface-variant font-bold uppercase opacity-50">Google Sheets Integration</p>
              </div>
            </div>
            <div className="bg-white/40 backdrop-blur-sm rounded-xl p-4 border border-white/40">
              <div className="flex justify-between text-[9px] font-black mb-2 uppercase tracking-tight">
                <span>Integridad de Datos</span>
                <span className="text-primary">98.2%</span>
              </div>
              <div className="w-full bg-surface-container-highest rounded-full h-1">
                <div className="bg-primary h-full rounded-full shadow-[0_0_8px_rgba(12,86,208,0.4)]" style={{ width: '98.2%' }}></div>
              </div>
            </div>
            <p className="mt-5 text-[10px] text-on-surface-variant font-medium leading-relaxed opacity-70 italic">
              Último escaneo: {lastSync}. No se encontraron discrepancias operativas.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Administrative Note */}
      <footer className="dashboard-footer">
        <p>© 2024 Admin Curator System • Operational Authority Level: <span className="text-primary">FULL_ACCESS</span></p>
        <div className="flex gap-6">
          <a className="hover:text-primary transition-colors" href="#">Audit Logs</a>
          <a className="hover:text-primary transition-colors" href="#">System Health</a>
        </div>
      </footer>

      {/* FAB */}
      <button className="dashboard-fab" onClick={() => handleAction('FAB')}>
        <span className="material-symbols-outlined text-2xl group-hover:rotate-90 transition-transform">add</span>
      </button>
    </div>
  );
};

export default DashboardView;
