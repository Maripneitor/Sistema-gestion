import React from 'react';

const Settings: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-10">
      <header className="mb-10">
        <h2 className="text-3xl font-extrabold text-on-surface tracking-tight font-headline uppercase leading-none mb-4 italic">Configuración del Sistema</h2>
        <p className="text-on-surface-variant text-lg">Parámetros operativos y preferencias de la interfaz.</p>
      </header>

      <div className="space-y-8">
        <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/10">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">palette</span>
            Apariencia
          </h3>
          <div className="flex items-center justify-between p-4 bg-surface rounded-xl border border-outline-variant/10">
            <div>
              <p className="font-bold">Modo Oscuro</p>
              <p className="text-xs text-on-surface-variant font-medium">Activar interfaz de alto contraste para entornos nocturnos.</p>
            </div>
            <div className="relative inline-flex items-center cursor-pointer">
              <input className="sr-only peer" type="checkbox" />
              <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/10">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">sync</span>
            Sincronización
          </h3>
          <div className="space-y-4">
             <div className="flex items-center justify-between">
                <p className="text-sm font-bold uppercase tracking-widest opacity-60">Status: Conectado</p>
                <button className="text-primary text-[10px] font-black uppercase hover:underline">Reautorizar</button>
             </div>
             <div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
                <p className="text-sm font-medium leading-relaxed">La base de datos se mantiene sincronizada con <strong className="font-black">The Curator Sheet v1.2</strong>.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
