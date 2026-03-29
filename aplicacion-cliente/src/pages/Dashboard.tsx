import React from 'react';
import { mockMiembros, mockAsistencias } from '../mocks/db';

const Dashboard: React.FC = () => {
  // Cálculos dinámicos basados en Mock Data
  const total = mockMiembros.length;
  const activos = mockMiembros.filter(m => m.estado === 'ACTIVO').length;
  const inactivos = mockMiembros.filter(m => m.estado === 'INACTIVO').length;
  const riesgo = mockMiembros.filter(m => m.estado === 'EN_RIESGO_DE_BAJA').length;

  return (
    <div className="space-y-10">
      {/* Welcome Header */}
      <section>
        <h3 className="text-3xl font-extrabold font-headline tracking-tight text-on-surface mb-2 italic">Panel General de Gestión</h3>
        <p className="text-on-surface-variant max-w-2xl font-body leading-relaxed">
          Visualización en tiempo real del ecosistema comunitario. Priorizando eficiencia operativa y alertas de retención.
        </p>
      </section>

      {/* KPI Grid (Asymmetric Precision) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-ambient border-b-2 border-primary group hover:bg-primary transition-all duration-300 cursor-default">
          <p className="text-[10px] font-black text-on-surface-variant group-hover:text-on-primary uppercase tracking-[0.15em] mb-2">Total Personas</p>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-black font-headline group-hover:text-white tracking-tighter">{total.toLocaleString()}</span>
            <span className="text-[10px] text-primary group-hover:text-white/80 font-black">+12%</span>
          </div>
        </div>
        
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-ambient border-b-2 border-primary-fixed-dim group hover:bg-surface-container-low transition-all duration-300">
          <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.15em] mb-2">Activos</p>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-black font-headline text-on-surface tracking-tighter">{activos}</span>
            <span className="text-[10px] text-on-surface-variant font-bold uppercase">{((activos/total)*100).toFixed(0)}% del total</span>
          </div>
        </div>
        
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-ambient border-b-2 border-outline-variant hover:bg-surface-container-low transition-all duration-300">
          <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.15em] mb-2">Fuera</p>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-black font-headline text-on-surface tracking-tighter">{inactivos}</span>
            <span className="text-[10px] text-error font-black uppercase">Inactivos</span>
          </div>
        </div>
        
        <div className="bg-error-container p-6 rounded-xl shadow-ambient border-b-2 border-on-error-container hover:scale-[1.02] transition-all duration-300">
          <p className="text-[10px] font-black text-on-error-container uppercase tracking-[0.15em] mb-2 tracking-widest">En Riesgo</p>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-black font-headline text-on-error-container tracking-tighter">{riesgo}</span>
            <span className="text-[10px] text-on-error-container font-black uppercase">Crítico</span>
          </div>
        </div>
      </div>

      {/* Charts & Risk Alerts (Asymmetric Layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Data Visuals */}
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-ambient border border-outline-variant/5">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h4 className="text-lg font-black font-headline tracking-tight uppercase italic">Asistencia Semanal Promedio</h4>
                <p className="text-[11px] text-on-surface-variant font-bold uppercase tracking-wider">Tendencia de participación en los últimos 7 días</p>
              </div>
              <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
            </div>
            
            <div className="flex items-end justify-between h-48 gap-3">
              {mockAsistencias.map((item, i) => (
                <div 
                  key={i}
                  style={{ height: `${(item.total / 200) * 100}%` }}
                  className={`w-full rounded-t-lg transition-all cursor-pointer relative group ${i === 2 ? 'bg-primary' : 'bg-surface-container hover:bg-primary-fixed-dim'}`}
                >
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-on-surface text-white text-[9px] font-black py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-all shadow-lg whitespace-nowrap">
                    {item.total}p • {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'][i]}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4">
              {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map(day => (
                <span key={day} className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest">{day}</span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {/* Distribution levels */}
             <div className="bg-surface-container p-6 rounded-2xl border border-outline-variant/10">
                <h4 className="text-[11px] font-black font-headline mb-6 tracking-[0.15em] uppercase text-on-surface-variant">Distribución por Niveles</h4>
                <div className="space-y-4">
                  {[
                    { label: 'Nivel Inicial', val: 450, color: 'bg-primary', w: '65%' },
                    { label: 'Nivel Avanzado', val: 280, color: 'bg-on-primary-fixed-variant', w: '40%' },
                    { label: 'Expertos', val: 120, color: 'bg-tertiary', w: '15%' }
                  ].map((lvl, k) => (
                    <div key={k}>
                      <div className="flex justify-between text-[11px] mb-1.5 font-black uppercase tracking-tight">
                        <span>{lvl.label}</span>
                        <span className="text-on-surface-variant">{lvl.val}</span>
                      </div>
                      <div className="w-full bg-surface-container-highest rounded-full h-1.5">
                        <div className={`${lvl.color} h-1.5 rounded-full transition-all duration-1000`} style={{ width: lvl.w }}></div>
                      </div>
                    </div>
                  ))}
                </div>
             </div>

             {/* Regional distribution */}
             <div className="bg-surface-container p-6 rounded-2xl border border-outline-variant/10 relative overflow-hidden group">
                <h4 className="text-[11px] font-black font-headline mb-4 tracking-[0.15em] uppercase text-on-surface-variant">Alcance Latam (Resto)</h4>
                <div className="space-y-3 relative z-10">
                  {['México', 'Colombia', 'Argentina', 'Otros'].map((pais, idx) => (
                    <div key={pais} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${['bg-primary', 'bg-primary-dim', 'bg-on-primary-fixed-variant', 'bg-outline-variant'][idx]}`}></span>
                        <span className="text-[11px] font-bold text-on-surface">{pais}</span>
                      </div>
                      <span className="text-[11px] font-black">[ {['24%', '18%', '12%', '10%'][idx]} ]</span>
                    </div>
                  ))}
                </div>
                <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:scale-110 transition-transform duration-700">
                  <span className="material-symbols-outlined text-[100px]">public</span>
                </div>
             </div>
          </div>
        </div>

        {/* Risk Alerts (Side Section) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-ambient border border-error-container/20">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-error text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
              <h4 className="text-lg font-black font-headline tracking-tight uppercase italic">Alertas de Riesgo</h4>
            </div>
            <p className="text-[11px] text-on-surface-variant font-bold leading-relaxed mb-6 uppercase tracking-tight">
              Usuarios con inactividad &gt; 14 días. Se sugiere baja inmediata o reemplazo.
            </p>
            <div className="space-y-4">
              {mockMiembros.filter(m => m.estado === 'EN_RIESGO_DE_BAJA').slice(0, 3).map((u, i) => (
                <div key={u.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-error-container/5 transition-all border-b border-surface-container group/item">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-error-container/30 flex items-center justify-center text-error font-black text-xs border border-error/10 uppercase">
                      {u.nombre_real.charAt(0)}
                    </div>
                    <div>
                      <p className="text-xs font-black tracking-tight">{u.nombre_real}</p>
                      <p className="text-[10px] text-error font-black uppercase tracking-widest italic">{14 + i} días inactivo</p>
                    </div>
                  </div>
                  <button className="p-2 opacity-0 group-hover/item:opacity-100 hover:bg-error/10 text-error rounded-lg transition-all" title="Ejecutar Baja">
                    <span className="material-symbols-outlined text-sm">person_remove</span>
                  </button>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 bg-surface-container-high text-on-surface text-[10px] font-black rounded-xl hover:bg-surface-container-highest transition-all uppercase tracking-[0.2em] border border-outline-variant/10 shadow-sm active:scale-[0.98]">
               Gestionar Todos ({riesgo})
            </button>
          </div>

          <div className="bg-surface-container p-6 rounded-2xl relative border border-outline-variant/10 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-ambient text-primary group-hover:rotate-12 transition-transform">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>cloud_done</span>
              </div>
              <div>
                <h4 className="text-[11px] font-black uppercase tracking-widest">Sync Health</h4>
                <p className="text-[9px] text-on-surface-variant font-bold uppercase tracking-tighter opacity-70">Google Sheets Integration</p>
              </div>
            </div>
            <div className="bg-white/50 rounded-xl p-3 border border-white/40">
              <div className="flex justify-between text-[10px] font-black mb-1.5 uppercase tracking-tighter">
                <span>Integridad de Datos</span>
                <span className="text-primary font-black">98.2%</span>
              </div>
              <div className="w-full bg-surface-container-highest rounded-full h-1">
                <div className="bg-primary h-1 rounded-full shadow-[0_0_8px_rgba(12,86,208,0.4)]" style={{ width: '98%' }}></div>
              </div>
            </div>
            <p className="mt-4 text-[11px] font-medium text-on-surface-variant leading-relaxed italic">
              Última lectura: Hoy 14:32 PM. No se encontraron discrepancias en el mapeo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
