import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 right-0 left-64 h-16 flex justify-between items-center px-8 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
      <div className="flex items-center gap-8">
        <h2 className="text-lg font-black text-on-surface font-headline uppercase tracking-tighter italic">Admin Curator</h2>
        <div className="relative group">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-sm group-focus-within:text-primary transition-colors">search</span>
          <input 
            className="pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-lg text-xs w-72 focus:ring-4 focus:ring-primary/10 transition-all font-bold text-on-surface placeholder:opacity-50" 
            placeholder="Buscar métricas o usuarios..." 
            type="text" 
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 px-4 py-1.5 bg-primary-fixed rounded-full shadow-sm border border-primary/5">
          <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>sync</span>
          <span className="text-[10px] font-black text-on-primary-fixed tracking-widest uppercase">Sync Status: 2m ago</span>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-primary/5 rounded-xl transition-all relative group">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-error rounded-full border-2 border-white group-hover:scale-125 transition-transform"></span>
          </button>
          
          <button className="p-1 pr-3 flex items-center gap-2 text-on-surface-variant hover:text-primary hover:bg-primary/5 rounded-xl transition-all group">
            <div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary border border-primary/5 group-hover:rotate-12 transition-transform">
              <span className="material-symbols-outlined">account_circle</span>
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest">Perfil</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
