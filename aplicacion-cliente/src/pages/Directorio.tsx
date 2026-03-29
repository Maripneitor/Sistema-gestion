import React, { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';
import { mockMiembros } from '../mocks/db';
import type { Member } from '../mocks/db';

const Directorio: React.FC = () => {
  const [miembros] = useState<Member[]>(mockMiembros);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMiembros = miembros.filter(m => 
    m.nombre_real.toLowerCase().includes(searchTerm.toLowerCase()) || 
    m.nombre_app.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-surface font-body text-on-surface min-h-screen">
      <Sidebar />
      <Header />
      
      <main className="ml-64 pt-24 px-8 pb-12">
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-extrabold text-on-surface tracking-tight mb-2 font-headline">Directorio de Usuarios</h2>
            <p className="text-on-surface-variant max-w-2xl font-body">Gestión editorial de la comunidad. Supervisión de perfiles de alta visibilidad y control de estados operativos.</p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-surface-container-high text-on-surface font-semibold rounded-md hover:bg-surface-bright transition-all flex items-center gap-2 text-sm">
              <span className="material-symbols-outlined text-sm">download</span> Exportar
            </button>
            <button className="px-6 py-2 bg-primary text-on-primary font-bold rounded-md shadow-lg shadow-primary/20 hover:scale-[0.98] active:opacity-80 transition-all flex items-center gap-2 text-sm">
              <span className="material-symbols-outlined text-sm">person_add</span> Añadir Usuario
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6 relative max-w-md">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
          <input 
            type="text"
            placeholder="Buscar por nombre o alias..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-surface-container-low border-b-2 border-outline-variant py-2.5 pl-10 pr-4 text-sm focus:border-primary focus:ring-0 transition-all outline-none"
          />
        </div>

        {/* Dynamic Table Section */}
        <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant/10">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container text-on-surface-variant border-b border-outline-variant/15">
                  <th className="px-6 py-4 text-[11px] uppercase tracking-widest font-bold">Usuario & Identidad</th>
                  <th className="px-6 py-4 text-[11px] uppercase tracking-widest font-bold">Nivel</th>
                  <th className="px-6 py-4 text-[11px] uppercase tracking-widest font-bold">Estado</th>
                  <th className="px-6 py-4 text-[11px] uppercase tracking-widest font-bold">Grupo</th>
                  <th className="px-6 py-4 text-[11px] uppercase tracking-widest font-bold text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                {filteredMiembros.map((miembro) => (
                  <tr key={miembro.id} className="hover:bg-surface-container-low transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-primary font-bold font-headline">
                            {miembro.nombre_real.charAt(0)}
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-white flex items-center justify-center">
                            <span className="text-[8px] text-white font-bold">{miembro.pais === 'México' ? 'MX' : 'CO'}</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-on-surface tracking-tight">{miembro.nombre_real}</p>
                          <p className="text-xs text-on-surface-variant font-mono">{miembro.nombre_app}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-bold text-primary">Nivel {miembro.nivel}</span>
                        <div className="w-24 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary" 
                            style={{ width: `${(miembro.nivel / 50) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold ${
                        miembro.estado === 'ACTIVO' ? 'bg-green-100 text-green-700' :
                        miembro.estado === 'EN_RIESGO_DE_BAJA' ? 'bg-error-container text-on-error-container' :
                        miembro.estado === 'INACTIVO' ? 'bg-slate-100 text-slate-500' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          miembro.estado === 'ACTIVO' ? 'bg-green-500' :
                          miembro.estado === 'EN_RIESGO_DE_BAJA' ? 'bg-error' :
                          miembro.estado === 'INACTIVO' ? 'bg-slate-400' :
                          'bg-blue-500'
                        }`}></span>
                        {miembro.estado.replace(/_/g, ' ')}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs font-medium text-on-surface-variant bg-surface-container px-2 py-1 rounded">
                        {miembro.grupo || 'Ninguno'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 hover:bg-primary-container hover:text-primary rounded-lg transition-all" title="Ver ficha">
                          <span className="material-symbols-outlined text-[20px]">visibility</span>
                        </button>
                        <button className="p-2 hover:bg-primary-container hover:text-primary rounded-lg transition-all" title="Editar">
                          <span className="material-symbols-outlined text-[20px]">edit_note</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 border-t border-outline-variant/15 bg-surface-container-lowest">
            <span className="text-xs text-on-surface-variant font-medium">Mostrando <span className="text-on-surface font-bold">{filteredMiembros.length}</span> miembros registrados</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Directorio;
