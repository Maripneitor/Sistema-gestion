import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 right-0 left-64 h-16 flex justify-between items-center px-8 z-30 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm dark:shadow-none border-b border-slate-200/15 dark:border-slate-800/15">
      <div className="flex items-center gap-4">
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-sm">search</span>
          <input 
            className="bg-surface-container-lowest border-none border-b-2 border-outline-variant focus:border-primary focus:ring-0 text-sm pl-10 pr-4 py-2 w-64 transition-all" 
            placeholder="Search members..." 
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary-fixed-dim text-lg">sync</span>
          <span className="text-xs font-bold text-blue-700 dark:text-blue-400 tracking-wider">Sync Status</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-surface-bright rounded-full transition-colors relative">
            <span className="material-symbols-outlined text-on-surface-variant text-lg">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-surface"></span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-linear-to-br from-primary to-primary-dim text-white rounded-md text-sm font-semibold shadow-md active:opacity-70 transition-all">
            <span className="material-symbols-outlined text-[18px]">sync</span>
            Sincronizar con Google Sheets
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
