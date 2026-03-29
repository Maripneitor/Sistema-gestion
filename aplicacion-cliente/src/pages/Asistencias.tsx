import React from 'react';
import { mockMiembros, mockAsistencias } from '../mocks/db';

const Asistencias: React.FC = () => {
  return (
    <div className="space-y-8">
      <section className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/10">
        <h2 className="text-3xl font-black font-headline tracking-tighter text-on-surface mb-2 italic">Control de Asistencias</h2>
        <p className="text-on-surface-variant font-medium text-sm">Registro de participación semanal y control de presencia en tiempo real.</p>
        
        <div className="grid grid-cols-7 gap-4 mt-8">
          {mockAsistencias.map((item, index) => (
            <div key={index} className="flex flex-col items-center bg-surface-container-low p-4 rounded-xl border border-outline-variant/10 hover:border-primary/20 transition-all cursor-default">
              <span className="text-[10px] uppercase font-black text-on-surface-variant mb-2">{['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'][index]}</span>
              <div className="w-12 h-12 rounded-full bg-primary-fixed-dim/30 flex items-center justify-center text-primary font-black mb-2 border border-primary/20">
                {item.total}
              </div>
              <span className="text-[10px] font-bold text-on-surface-variant">Presentes</span>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm border border-outline-variant/10 mt-8">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container text-on-surface-variant border-b border-outline-variant/15">
                <th className="px-6 py-4 text-[11px] uppercase tracking-widest font-black">Miembro</th>
                <th className="px-6 py-4 text-[11px] uppercase tracking-widest font-black text-center">Faltas</th>
                <th className="px-6 py-4 text-[11px] uppercase tracking-widest font-black">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10">
              {mockMiembros.slice(0, 5).map((m) => (
                <tr key={m.id} className="hover:bg-surface-container-low transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-xs font-black">{m.nombre_real.charAt(0)}</div>
                      <span className="text-sm font-bold">{m.nombre_real}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`text-xs font-black px-2 py-1 rounded-md ${m.faltas_acumuladas > 3 ? 'bg-error-container text-error' : 'bg-surface-container-highest text-on-surface-variant'}`}>
                      {m.faltas_acumuladas}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-black rounded-md hover:bg-green-200 transition-colors">PRESENT</button>
                      <button className="px-3 py-1 bg-red-100 text-red-700 text-[10px] font-black rounded-md hover:bg-red-200 transition-colors">ABSENT</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Asistencias;
