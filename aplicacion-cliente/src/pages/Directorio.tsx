import React from 'react';

const users = [
  { id: 1, name: 'Ana María G. de la Vega', handle: '𝓐𝓷𝓷𝓲𝓮_𝓛𝓾𝔁', level: 48, groups: ['WA', 'App'], status: 'Activo', tags: ['Súper Fan', 'Club de Fans'], country: 'ES', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80' },
  { id: 2, name: 'Roberto J. Domínguez', handle: '🄳🄰🅁🄺_🄺🄽🄸🄶🄸🄷🅃', level: 12, groups: ['WA'], status: 'En Riesgo', tags: [], country: 'MX', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80' },
  { id: 3, name: 'Catalina Rossi', handle: '𝕔𝕒𝕥𝕒.𝕘𝕝𝕚𝕥𝕫', level: 35, groups: ['App'], status: 'Permiso', tags: ['Club de Fans'], country: 'AR', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80' },
  { id: 4, name: 'Juan Pablo Restrepo', handle: '𝕵_𝕻𝖆𝖇𝖑𝖔_', level: 5, groups: ['Ninguno'], status: 'Inactivo', tags: [], country: 'CO', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80' },
];

const Directorio: React.FC = () => {
  return (
    <div className="pt-6 px-10 pb-12 min-h-screen">
      {/* Header Section */}
      <div className="mb-10 flex justify-between items-end">
        <div>
          <h2 className="text-4xl font-black text-on-surface tracking-tight mb-2 font-headline uppercase leading-none">Directorio de Usuarios</h2>
          <p className="text-on-surface-variant max-w-2xl font-bold opacity-70 tracking-tight leading-relaxed">
            Gestión editorial de la comunidad. Supervisión de perfiles de alta visibilidad y control de estados operativos en tiempo real.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-white text-on-surface font-black rounded-2xl shadow-premium hover:bg-surface-bright transition-all flex items-center gap-3 text-xs uppercase tracking-widest border border-primary/5">
            <span className="material-symbols-outlined text-lg">download</span> Exportar CSV
          </button>
          <button className="px-8 py-3 bg-editorial-gradient text-white font-black rounded-2xl shadow-[0_8px_20px_-8px_rgba(12,86,208,0.6)] hover:shadow-[0_12px_24px_-8px_rgba(12,86,208,0.7)] hover:translate-y-[-2px] active:scale-95 transition-all flex items-center gap-3 text-xs uppercase tracking-widest">
            <span className="material-symbols-outlined text-lg">person_add</span> Añadir Perfil
          </button>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-white/60 backdrop-blur-md p-6 rounded-[2rem] mb-10 flex flex-wrap gap-6 items-end shadow-premium border border-white/40">
        <div className="flex-1 grid grid-cols-3 gap-6">
          <div className="space-y-3">
            <label className="block text-[10px] uppercase font-black tracking-[0.2em] text-primary opacity-60 ml-1 italic leading-none">País Origen</label>
            <select className="w-full bg-surface-container-low border-none rounded-xl text-xs font-black py-3 px-4 focus:ring-4 focus:ring-primary/10 transition-all text-on-surface cursor-pointer appearance-none shadow-inner">
              <option>Todos los países</option>
              <option>España</option>
              <option>México</option>
              <option>Argentina</option>
              <option>Colombia</option>
            </select>
          </div>
          <div className="space-y-3">
            <label className="block text-[10px] uppercase font-black tracking-[0.2em] text-primary opacity-60 ml-1 italic leading-none">Nivel Escala</label>
            <select className="w-full bg-surface-container-low border-none rounded-xl text-xs font-black py-3 px-4 focus:ring-4 focus:ring-primary/10 transition-all text-on-surface cursor-pointer appearance-none shadow-inner">
              <option>Cualquier nivel</option>
              <option>1 - 10</option>
              <option>11 - 30</option>
              <option>31 - 50</option>
            </select>
          </div>
          <div className="space-y-3">
            <label className="block text-[10px] uppercase font-black tracking-[0.2em] text-primary opacity-60 ml-1 italic leading-none">Estado Operativo</label>
            <select className="w-full bg-surface-container-low border-none rounded-xl text-xs font-black py-3 px-4 focus:ring-4 focus:ring-primary/10 transition-all text-on-surface cursor-pointer appearance-none shadow-inner">
              <option>Todos los estados</option>
              <option>Activo</option>
              <option>Inactivo</option>
              <option>Permiso</option>
              <option>En Riesgo</option>
            </select>
          </div>
        </div>
        <button className="px-6 py-3 text-primary text-xs font-black hover:bg-primary/5 rounded-2xl transition-all flex items-center gap-3 uppercase tracking-widest group">
          <span className="material-symbols-outlined text-lg group-hover:rotate-180 transition-transform duration-700">filter_list_off</span> Limpiar Filtros
        </button>
      </div>

      {/* Data Table Section */}
      <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-premium border border-primary/5">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container/50 backdrop-blur-sm text-on-surface uppercase tracking-[0.15em] font-black border-b border-primary/5">
                <th className="px-8 py-5 text-[10px]">Usuario & Identidad</th>
                <th className="px-8 py-5 text-[10px]">Potencial</th>
                <th className="px-8 py-5 text-[10px]">Ecosistema</th>
                <th className="px-8 py-5 text-[10px]">Estado Atómico</th>
                <th className="px-8 py-5 text-[10px]">Etiquetas</th>
                <th className="px-8 py-5 text-[10px] text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/5">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-primary/[0.02] transition-colors group cursor-default">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-5">
                      <div className="relative group/avatar">
                        <img className="w-12 h-12 rounded-2xl object-cover ring-4 ring-white shadow-lg transition-transform group-hover/avatar:rotate-6 group-hover/avatar:scale-110" src={user.img} alt={user.name} />
                        <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 bg-primary rounded-xl border-4 border-white flex items-center justify-center shadow-md">
                          <span className="text-[9px] text-white font-black">{user.country}</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-black text-on-surface tracking-tighter uppercase leading-none mb-1.5">{user.name}</p>
                        <p className="text-[10px] text-primary font-bold font-mono tracking-widest opacity-60 italic">{user.handle}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex flex-col gap-2">
                      <span className="text-xs font-black text-primary italic leading-none">LVL {user.level}</span>
                      <div className="w-28 h-2 bg-surface-container-highest rounded-full overflow-hidden shadow-inner">
                        <div className="h-full bg-gradient-to-r from-primary to-primary-dim shadow-[0_0_12px_rgba(12,86,208,0.3)] transition-all duration-1000" style={{ width: `${(user.level/50)*100}%` }}></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex gap-2">
                      {user.groups.map((group, idx) => (
                        <span key={idx} className={`px-2.5 py-1 text-[9px] font-black rounded-lg uppercase tracking-tight shadow-sm ${group === 'App' ? 'bg-tertiary-container text-on-tertiary-container' : 'bg-secondary-container text-on-secondary-container'}`}>
                          {group}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm ${
                      user.status === 'Activo' ? 'bg-primary-fixed text-on-primary-fixed' : 
                      user.status === 'En Riesgo' ? 'bg-error-container text-on-error-container' : 'bg-secondary-fixed text-on-secondary-fixed'
                    }`}>
                      <span className={`w-2 h-2 rounded-full ${user.status === 'Activo' ? 'bg-primary' : user.status === 'En Riesgo' ? 'bg-error animate-ping' : 'bg-secondary'}`}></span>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex flex-wrap gap-2">
                      {user.tags.length > 0 ? user.tags.map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-surface-container-high text-on-surface-variant text-[9px] font-bold rounded-xl border border-primary/5 uppercase tracking-tighter shadow-sm">{tag}</span>
                      )) : <span className="text-[10px] text-on-surface-variant italic font-medium opacity-40">Sin Segmentación</span>}
                    </div>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                      <button className="p-2.5 hover:bg-primary/10 text-primary rounded-xl transition-all shadow-sm" title="Inspeccionar"><span className="material-symbols-outlined text-[20px]">visibility</span></button>
                      <button className="p-2.5 hover:bg-primary/10 text-primary rounded-xl transition-all shadow-sm" title="Editar Métricas"><span className="material-symbols-outlined text-[20px]">edit_note</span></button>
                      <button className="p-2.5 hover:bg-tertiary/10 text-tertiary rounded-xl transition-all shadow-sm" title="Ciclo Operativo"><span className="material-symbols-outlined text-[20px]">autorenew</span></button>
                      <button className="p-2.5 hover:bg-error/10 text-error rounded-xl transition-all shadow-sm" title="Dar de Baja"><span className="material-symbols-outlined text-[20px]">delete_sweep</span></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Table Footer */}
        <div className="px-10 py-6 border-t border-primary/5 flex justify-between items-center bg-surface-container-lowest/50 backdrop-blur-sm">
          <span className="text-xs text-on-surface-variant font-bold uppercase tracking-widest opacity-60">Visualizando <span className="text-primary font-black">1-4</span> de 1,284 Registros Administrativos</span>
          <div className="flex gap-2">
            <button className="p-3 text-on-surface-variant hover:text-primary disabled:opacity-30 transition-colors" disabled="">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            {[1, 2, 3].map(page => (
              <button key={page} className={`w-10 h-10 rounded-xl text-xs font-black flex items-center justify-center transition-all ${page === 1 ? 'bg-primary text-white shadow-lg shadow-primary/30 rotate-3 scale-110' : 'hover:bg-primary/10 text-on-surface hover:text-primary rotate-0 hover:-rotate-3 translate-y-0 hover:-translate-y-1'}`}>
                {page}
              </button>
            ))}
            <span className="px-3 flex items-center text-on-surface-variant font-black opacity-30 tracking-[0.2em] italic">...</span>
            <button className="w-10 h-10 rounded-xl hover:bg-primary/10 text-on-surface hover:text-primary text-xs font-black flex items-center justify-center transition-all hover:-translate-y-1">321</button>
            <button className="p-3 text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* Extended Health Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2 bg-gradient-to-br from-slate-900 to-primary-dim p-10 rounded-[3rem] text-white flex flex-col justify-between min-h-[220px] relative overflow-hidden group shadow-[0_20px_40px_-12px_rgba(12,86,208,0.4)]">
          <div className="relative z-10">
            <p className="text-[11px] font-black uppercase tracking-[0.4em] text-primary-fixed opacity-60 italic mb-4">Salud de la Comunidad</p>
            <h3 className="text-6xl font-black font-headline tracking-tighter leading-none mb-4 italic">94.2%</h3>
            <p className="text-sm font-medium opacity-80 max-w-xs tracking-tight">Crecimiento orgánico sostenido con alta retención operativa.</p>
          </div>
          <div className="relative z-10 mt-6 flex items-center gap-3 text-[11px] font-black bg-white/10 w-fit px-5 py-2 rounded-2xl backdrop-blur-xl border border-white/10 shadow-lg group-hover:translate-x-4 transition-transform duration-500">
            <span className="material-symbols-outlined text-sm animate-bounce">trending_up</span> +3.4% Rendimiento Semanal
          </div>
          <span className="material-symbols-outlined absolute -bottom-10 -right-10 text-[200px] opacity-10 rotate-12 group-hover:rotate-0 group-hover:scale-125 transition-all duration-1000 ease-out pointer-events-none">insights</span>
        </div>
        
        <div className="bg-white p-10 rounded-[3rem] shadow-premium border border-primary/5 flex flex-col justify-between group hover:border-error/20 transition-all">
          <div>
            <div className="w-14 h-14 bg-error-container/30 rounded-2xl flex items-center justify-center text-error mb-8 shadow-inner group-hover:rotate-12 transition-transform">
              <span className="material-symbols-outlined text-3xl">warning</span>
            </div>
            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-on-surface-variant opacity-60 mb-2 italic">Alertas Críticas</p>
            <h3 className="text-4xl font-black font-headline text-on-surface leading-none italic">12 Perfiles</h3>
          </div>
          <a className="text-[11px] font-black text-primary hover:underline flex items-center gap-3 uppercase tracking-widest mt-6 group/link" href="#">
            Audit Monitoring <span className="material-symbols-outlined text-sm group-hover/link:translate-x-2 transition-transform">arrow_forward</span>
          </a>
        </div>

        <div className="bg-white p-10 rounded-[3rem] shadow-premium border border-primary/5 flex flex-col justify-between group hover:border-primary/20 transition-all">
          <div>
            <div className="w-14 h-14 bg-primary-container/40 rounded-2xl flex items-center justify-center text-primary mb-8 shadow-inner group-hover:-rotate-12 transition-transform">
              <span className="material-symbols-outlined text-3xl">workspace_premium</span>
            </div>
            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-on-surface-variant opacity-60 mb-2 italic">Membresía Élite</p>
            <h3 className="text-4xl font-black font-headline text-on-surface leading-none italic">458 Súper Fans</h3>
          </div>
          <a className="text-[11px] font-black text-primary hover:underline flex items-center gap-3 uppercase tracking-widest mt-6 group/link" href="#">
            View Analytics <span className="material-symbols-outlined text-sm group-hover/link:translate-x-2 transition-transform">arrow_forward</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Directorio;
