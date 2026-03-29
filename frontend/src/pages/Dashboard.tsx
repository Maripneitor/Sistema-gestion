import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="pt-6 p-8 min-h-screen">
      {/* Welcome Header */}
      <section className="mb-10">
        <h3 className="text-3xl font-extrabold font-headline tracking-tight text-on-surface mb-2">Panel General de Gestión</h3>
        <p className="text-on-surface-variant max-w-2xl font-medium">Visualización en tiempo real del ecosistema comunitario. Priorizando eficiencia operativa y alertas de retención.</p>
      </section>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-premium border-b-2 border-primary group hover:bg-primary transition-all duration-300 cursor-pointer">
          <p className="text-[10px] font-black text-on-surface-variant group-hover:text-on-primary uppercase tracking-[0.2em] mb-2">Total Personas</p>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-black font-headline group-hover:text-white">1,284</span>
            <span className="text-xs text-primary group-hover:text-white/80 font-bold tracking-tighter">+12%</span>
          </div>
        </div>
        
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-premium border-b-2 border-on-primary-fixed-variant group hover:translate-y-[-4px] transition-all">
          <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em] mb-2">Activos</p>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-black font-headline text-on-surface">942</span>
            <span className="text-[10px] text-on-surface-variant font-bold uppercase opacity-60">84% del total</span>
          </div>
        </div>
        
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-premium border-b-2 border-outline-variant group hover:translate-y-[-4px] transition-all">
          <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em] mb-2">Fuera</p>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-black font-headline text-on-surface">312</span>
            <span className="text-[10px] text-error font-black uppercase tracking-wider">Inactivos</span>
          </div>
        </div>
        
        <div className="bg-error-container p-6 rounded-xl shadow-premium border-b-2 border-on-error-container group hover:scale-[1.02] transition-all cursor-pointer">
          <p className="text-[10px] font-black text-on-error-container uppercase tracking-[0.2em] mb-2">En Riesgo</p>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-black font-headline text-on-error-container">30</span>
            <span className="text-[10px] text-on-error-container font-black uppercase tracking-wider">Crítico</span>
          </div>
        </div>
      </div>

      {/* Charts & Risk Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Data Visuals */}
        <div className="lg:col-span-8 space-y-8">
          {/* Weekly Attendance Chart Placeholder */}
          <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-premium border border-primary/5">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h4 className="text-lg font-black font-headline uppercase tracking-tight">Asistencia Semanal Promedio</h4>
                <p className="text-xs text-on-surface-variant font-bold opacity-60 tracking-wide">Tendencia de participación en los últimos 7 días</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary group transition-all">
               <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">trending_up</span>
              </div>
            </div>
            
            <div className="flex items-end justify-between h-48 gap-3">
              {[40, 65, 85, 70, 45, 30, 20].map((height, i) => (
                <div key={i} className={`w-full rounded-t-xl transition-all cursor-pointer relative group ${i === 2 ? 'bg-primary' : 'bg-surface-container hover:bg-primary/20'}`} style={{ height: `${height}%` }}>
                  <span className={`absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-widest transition-opacity ${i === 2 ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                    {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Levels & Geo Distribution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Distribution by Levels */}
            <div className="bg-surface-container p-8 rounded-2xl border border-primary/5">
              <h4 className="text-[11px] font-black font-headline mb-8 tracking-[0.2em] uppercase opacity-70">Distribución por Niveles</h4>
              <div className="space-y-6">
                {[
                  { label: 'Nivel Inicial', value: 450, percent: 65, color: 'bg-primary' },
                  { label: 'Nivel Avanzado', value: 280, percent: 40, color: 'bg-on-primary-fixed-variant' },
                  { label: 'Expertos', value: 120, percent: 15, color: 'bg-tertiary' }
                ].map((level, i) => (
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
                {[
                  { label: 'México', percent: '24%', color: 'bg-primary' },
                  { label: 'Colombia', percent: '18%', color: 'bg-primary-dim' },
                  { label: 'Argentina', percent: '12%', color: 'bg-on-primary-fixed-variant' },
                  { label: 'Otros', percent: '10%', color: 'bg-outline-variant' }
                ].map((region, i) => (
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
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-premium border border-error-container/20 overflow-hidden relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-error/5 flex items-center justify-center text-error border border-error/10">
                <span className="material-symbols-outlined text-xl">warning</span>
              </div>
              <h4 className="text-lg font-black font-headline uppercase tracking-tight">Alertas de Riesgo</h4>
            </div>
            <p className="text-[11px] text-on-surface-variant font-bold opacity-60 mb-5 leading-relaxed">Usuarios con inactividad &gt; 14 días. Se sugiere baja inmediata o reemplazo.</p>
            
            <div className="space-y-4">
              {[
                { name: 'Carlos Méndez', time: '16 días inactivo', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80' },
                { name: 'Elena Rivas', time: '21 días inactivo', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80' },
                { name: 'Andrés Soler', time: '15 días inactivo', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80' }
              ].map((user, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-error/5 transition-all group border border-transparent hover:border-error/10">
                  <div className="flex items-center gap-4">
                    <img className="w-10 h-10 rounded-xl object-cover shadow-sm group-hover:rotate-3 transition-transform" src={user.img} alt={user.name} />
                    <div>
                      <p className="text-xs font-black uppercase tracking-tight">{user.name}</p>
                      <p className="text-[9px] text-error font-black uppercase tracking-[0.05em] mt-0.5">{user.time}</p>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-error text-error hover:text-white rounded-lg transition-all shadow-sm">
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
          <div className="bg-surface-container p-6 rounded-2xl relative border border-primary/5 overflow-hidden group">
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
                <div className="bg-primary h-full rounded-full transition-all duration-1000 shadow-[0_0_8px_rgba(12,86,208,0.4)]" style={{ width: '98.2%' }}></div>
              </div>
            </div>
            <p className="mt-5 text-[10px] text-on-surface-variant font-medium leading-relaxed opacity-70 italic">
              Último escaneo: Hoy 14:32 PM. No se encontraron discrepancias operativas.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Administrative Note */}
      <footer className="mt-12 pt-8 border-t border-slate-200/50 flex justify-between items-center text-[10px] text-on-surface-variant font-bold uppercase tracking-widest opacity-50">
        <p>© 2024 Admin Curator System • Operational Authority Level: <span className="text-primary">FULL_ACCESS</span></p>
        <div className="flex gap-6">
          <a className="hover:text-primary transition-colors" href="#">Audit Logs</a>
          <a className="hover:text-primary transition-colors" href="#">System Health</a>
        </div>
      </footer>

      {/* FAB */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-editorial-gradient text-white rounded-2xl shadow-[0_8px_24px_-8px_rgba(12,86,208,0.6)] hover:shadow-[0_12px_32px_-8px_rgba(12,86,208,0.7)] hover:translate-y-[-4px] transition-all active:scale-95 flex items-center justify-center group z-50">
        <span className="material-symbols-outlined text-2xl group-hover:rotate-90 transition-transform">add</span>
      </button>
    </div>
  );
};

export default Dashboard;
