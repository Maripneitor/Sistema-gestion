import React from 'react';
import { useAuthStore } from '../../store/authStore';

const Header: React.FC = () => {
  const logout = useAuthStore((state) => state.logout);

  return (
    <header className="fixed top-0 right-0 left-64 h-16 flex justify-between items-center px-8 z-30 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/5 shadow-sm">
      <div className="flex items-center gap-6 flex-1">
        <div className="relative w-full max-w-sm group">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
          <input 
            className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm py-2 pl-10 pr-4 transition-all focus:ring-2 focus:ring-blue-600/20 outline-none" 
            placeholder="Comando rápido (⌘K)..." 
            type="text" 
          />
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-blue-600/10 rounded-full border border-blue-600/20">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
          <span className="text-[10px] font-black text-blue-700 uppercase tracking-tighter">Audit Mode: Mock Active</span>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="p-2 text-slate-500 hover:text-blue-600 transition-colors relative">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        
        <button className="p-2 text-slate-500 hover:text-blue-600 transition-colors">
          <span className="material-symbols-outlined">sync</span>
        </button>
        
        <div className="h-6 w-px bg-slate-200 mx-2"></div>

        <button 
          onClick={() => logout?.()}
          className="p-2 text-slate-500 hover:text-error transition-colors flex items-center gap-2 group"
          title="Cerrar Sesión"
        >
          <span className="material-symbols-outlined font-bold">logout</span>
          <span className="text-[11px] font-black uppercase opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Sign Out</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
