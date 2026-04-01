import React from 'react';

const users = [
  { id: 1, name: 'Ana María G. de la Vega', handle: '𝓐𝓷𝓷𝓲𝓮_𝓛𝓾𝔁', level: 48, groups: ['WA', 'App'], status: 'Activo', tags: ['Súper Fan', 'Club de Fans'], country: 'ES', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTN8UoXIKJ8JCblXA07doWm4rCSbO4rforKBkxLCjINins-OKt1xvNhJ2go-4aM0c9afjp51pe2KvX4j8NxIMVfe7Rkp94Sd3mG5GfqRKzp1Ppt9VVI8uplQDYUrhEQl9NZjuXcUTaHi7_cSLUys8W1noXVl26C6R2OqeToVeQLDeyF7s6BCMace6WMX0FvwqEkwdHGVq7SPNIlSL98KvG6oA6c52sZ6z-sa1mv-PU61mSQT7oGdc4Ja8nLTfqpMDNuTVHRIsWYEk' },
  { id: 2, name: 'Roberto J. Domínguez', handle: '☠️ 🄳🄰🅁🄺_🄺🄽🄸🄶🄸🄷🅃 ☠️', level: 12, groups: ['WA'], status: 'En Riesgo', tags: [], country: 'MX', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0IaC1XF_10XDkDygYSEBjZe6YWICfYyidWst2eOHoXRkUNhxMsrtiEUoWl7X_k3rR9PDIVhOE-JmLIWVEqCj2FvAFGuBd7r5qU-CTRSmHj6ZaolwN7v0QDg33X293Sw00RS7Xsw_eVlgyrrjz73FIC4WfLorvkdgkqoe-IKYQEU9KQ9ZDpuKnntzjzRdEHL2204QqfoKQjXLaF4uvbOrb1jurMkhGx7al08fsxi5GJIahZ1gZ9Ku6b_uWMaAHKqGn-4-kcglrw9I' },
  { id: 3, name: 'Catalina Rossi', handle: '✨ 𝕔𝕒𝕥𝕒.𝕘𝕝𝕚𝕥𝕫 ✨', level: 35, groups: ['App'], status: 'Permiso', tags: ['Club de Fans'], country: 'AR', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXF4EBmdfrxxAXco5xPUlQa7g_BZNbo4fk4kJYtBNKxd8DKDg3ak2JAPExt5CY5PG1Q9W9UBx9Kj5jYNzHzi2QaQt-fU4FBBLkOtZjEOE8YPcuh3v2Xlmn3s-YYfceun-Ex-8v4wwssimGCHB1eBTxwyOFbC5F3yHpM9Z55nDYidYyUUxTiG04H3g18LZaa6Pq2D_4K5AkkoYoHAL5rAga7q2RD1Pcn4uHiFI8iBELymG7yH8xbk42GTV0ROF8bKMuu7dRlfmG3cA' },
  { id: 4, name: 'Juan Pablo Restrepo', handle: '⚡ 𝕵_𝕻𝖆𝖇𝖑𝖔_⚡', level: 5, groups: ['Ninguno'], status: 'Inactivo', tags: [], country: 'CO', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAj3t4B02-jAc-G6hZxFrlUfgco7XaFyhYqe2vLwq0vGZDfNgkNd82L_uBP97W9OPpHy2f_aY6RVbDnptnuwvpsLfFjWkYfRHCv83IMcELVzqmRy1T1HcEjMm-yTYbeZ16yfIoeOGHvd4ymuwgB_7YvowZsdAbLD00iE1M0QNOIOlZUsKwfQ4970fAY4qBbMJw9C_iDm164KrSYHyN0ADTqdtvGRRKNLqA4juvA7VsyUsEGSJ-bQhltm9XA06wtn38ZdOATgePMHJE' },
];

const Directorio: React.FC = () => {
  return (
    <div className="pb-12">
      {/* Header Section */}
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-extrabold text-on-surface tracking-tight mb-2">Directorio de Usuarios</h2>
          <p className="text-on-surface-variant max-w-2xl font-body">Gestión editorial de la comunidad. Supervisión de perfiles de alta visibilidad y control de estados operativos.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-surface-container-high text-on-surface font-semibold rounded-md hover:bg-surface-bright transition-all flex items-center gap-2 text-sm">
            <span className="material-symbols-outlined text-sm">download</span> Exportar CSV
          </button>
          <button className="px-6 py-2 bg-editorial-gradient text-white font-bold rounded-md shadow-lg shadow-primary/20 hover:scale-[0.98] active:opacity-80 transition-all flex items-center gap-2 text-sm">
            <span className="material-symbols-outlined text-sm">person_add</span> Añadir Usuario
          </button>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-surface-container-lowest p-5 rounded-xl mb-6 flex flex-wrap gap-4 items-center shadow-sm">
        <div className="flex-1 flex gap-4 min-w-[500px]">
          <div className="flex-1">
            <label className="block text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-1 ml-1">País</label>
            <select className="w-full bg-surface-container-low border-none border-b-2 border-outline-variant focus:border-primary focus:ring-0 text-sm py-2">
              <option>Todos los países</option>
              <option>España</option>
              <option>México</option>
              <option>Argentina</option>
              <option>Colombia</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-1 ml-1">Nivel</label>
            <select className="w-full bg-surface-container-low border-none border-b-2 border-outline-variant focus:border-primary focus:ring-0 text-sm py-2">
              <option>Cualquier nivel</option>
              <option>1 - 10</option>
              <option>11 - 30</option>
              <option>31 - 50</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-1 ml-1">Estado</label>
            <select className="w-full bg-surface-container-low border-none border-b-2 border-outline-variant focus:border-primary focus:ring-0 text-sm py-2">
              <option>Todos los estados</option>
              <option>Activo</option>
              <option>Inactivo</option>
              <option>Permiso</option>
              <option>En Riesgo</option>
            </select>
          </div>
        </div>
        <button className="mt-4 px-4 py-2 text-primary font-bold hover:bg-surface-bright transition-colors flex items-center gap-2 text-sm">
          <span className="material-symbols-outlined text-sm">filter_list_off</span> Limpiar
        </button>
      </div>

      {/* Data Table Section */}
      <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container text-on-surface-variant border-b border-outline-variant/15">
                <th className="px-6 py-4 text-[11px] uppercase tracking-widest font-bold">Usuario & Identidad</th>
                <th className="px-6 py-4 text-[11px] uppercase tracking-widest font-bold">Nivel</th>
                <th className="px-6 py-4 text-[11px] uppercase tracking-widest font-bold">Grupos</th>
                <th className="px-6 py-4 text-[11px] uppercase tracking-widest font-bold">Estado</th>
                <th className="px-6 py-4 text-[11px] uppercase tracking-widest font-bold">Etiquetas</th>
                <th className="px-6 py-4 text-[11px] uppercase tracking-widest font-bold text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-surface-container-low transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <img className="w-10 h-10 rounded-full object-cover" src={user.img} alt={user.name} />
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-white flex items-center justify-center">
                          <span className="text-[8px] text-white font-bold">{user.country}</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-on-surface tracking-tight">{user.name}</p>
                        <p className="text-xs text-on-surface-variant font-mono">{user.handle}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-bold text-primary">{user.level}</span>
                      <div className="w-24 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                        <div className="h-full bg-editorial-gradient" style={{ width: `${(user.level/50)*100}%` }}></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      {user.groups.map((group, idx) => (
                        <span key={idx} className={`px-2 py-0.5 text-[10px] font-bold rounded uppercase ${group === 'App' ? 'bg-tertiary-container text-on-tertiary-container' : 'bg-secondary-container text-on-secondary-container'}`}>
                          {group}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                      user.status === 'Activo' ? 'bg-primary-fixed text-on-primary-fixed' : 
                      user.status === 'En Riesgo' ? 'bg-error-container text-on-error-container' : 
                      user.status === 'Inactivo' ? 'bg-surface-container-highest text-on-surface-variant opacity-60' : 'bg-secondary-fixed text-on-secondary-fixed'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        user.status === 'Activo' ? 'bg-primary' : 
                        user.status === 'En Riesgo' ? 'bg-error animate-ping' : 
                        user.status === 'Inactivo' ? 'bg-outline' : 'bg-secondary'
                      }`}></span>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-2">
                      {user.tags.length > 0 ? user.tags.map((tag, idx) => (
                        <span key={idx} className="px-2 py-0.5 bg-surface-container-high text-on-surface-variant text-[10px] font-bold rounded-full border border-outline-variant/30">{tag}</span>
                      )) : <span className="px-2 py-0.5 bg-surface-container-high text-on-surface-variant text-[10px] font-bold rounded-full border border-outline-variant/30 italic opacity-50">Sin etiquetas</span>}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:bg-primary-container hover:text-primary rounded-lg transition-all" title="Ver ficha"><span className="material-symbols-outlined text-[20px]">visibility</span></button>
                      <button className="p-2 hover:bg-primary-container hover:text-primary rounded-lg transition-all" title="Editar"><span className="material-symbols-outlined text-[20px]">edit_note</span></button>
                      <button className="p-2 hover:bg-tertiary-container hover:text-tertiary rounded-lg transition-all" title="Generar Reemplazo"><span className="material-symbols-outlined text-[20px]">autorenew</span></button>
                      <button className="p-2 hover:bg-error-container hover:text-error rounded-lg transition-all" title="Eliminar"><span className="material-symbols-outlined text-[20px]">delete_sweep</span></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Table Footer / Pagination */}
        <div className="px-6 py-4 border-t border-outline-variant/15 flex justify-between items-center bg-surface-container-lowest">
          <span className="text-xs text-on-surface-variant font-medium">Mostrando <span className="text-on-surface font-bold">1-4</span> de 1,284 usuarios registrados</span>
          <div className="flex gap-1">
            <button className="p-2 text-on-surface-variant hover:text-primary disabled:opacity-30" disabled>
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-8 h-8 rounded-md bg-primary text-white text-xs font-bold flex items-center justify-center">1</button>
            <button className="w-8 h-8 rounded-md hover:bg-surface-container-high text-on-surface text-xs font-bold flex items-center justify-center transition-colors">2</button>
            <button className="w-8 h-8 rounded-md hover:bg-surface-container-high text-on-surface text-xs font-bold flex items-center justify-center transition-colors">3</button>
            <span className="px-2 flex items-center text-on-surface-variant">...</span>
            <button className="w-8 h-8 rounded-md hover:bg-surface-container-high text-on-surface text-xs font-bold flex items-center justify-center transition-colors">321</button>
            <button className="p-2 text-on-surface-variant hover:text-primary">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* System Stats / Bento Style */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-2 bg-linear-to-br from-slate-900 to-blue-900 p-6 rounded-2xl text-white flex flex-col justify-between min-h-[160px] relative overflow-hidden group">
          <div className="relative z-10">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-300 opacity-80">Salud de la Comunidad</p>
            <h3 className="text-4xl font-black mt-2">94.2%</h3>
            <p className="text-sm mt-1 text-blue-100">Usuarios activos hoy</p>
          </div>
          <div className="relative z-10 mt-4 flex items-center gap-2 text-xs font-bold text-primary-fixed bg-white/10 w-fit px-3 py-1 rounded-full backdrop-blur-md">
            <span className="material-symbols-outlined text-sm">trending_up</span> +3.4% vs semana pasada
          </div>
          <span className="material-symbols-outlined absolute -bottom-6 -right-6 text-[120px] opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-700">insights</span>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/10 flex flex-col justify-between">
          <div>
            <span className="material-symbols-outlined text-error p-2 bg-error-container/30 rounded-lg mb-3 block w-fit">warning</span>
            <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">En Riesgo</p>
            <h3 className="text-2xl font-black text-on-surface mt-1">12</h3>
          </div>
          <a className="text-xs font-bold text-primary hover:underline flex items-center gap-1" href="#">Ver todos <span className="material-symbols-outlined text-xs">arrow_forward</span></a>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/10 flex flex-col justify-between">
          <div>
            <span className="material-symbols-outlined text-primary p-2 bg-primary-container rounded-lg mb-3 block w-fit">workspace_premium</span>
            <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Super Fans</p>
            <h3 className="text-2xl font-black text-on-surface mt-1">458</h3>
          </div>
          <a className="text-xs font-bold text-primary hover:underline flex items-center gap-1" href="#">Ver segmentación <span className="material-symbols-outlined text-xs">arrow_forward</span></a>
        </div>
      </div>
    </div>
  );
};

export default Directorio;
