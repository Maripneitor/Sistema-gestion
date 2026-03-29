import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Dashboard', icon: 'dashboard' },
  { path: '/directorio', label: 'User Directory', icon: 'group' },
  { path: '/asistencias', label: 'Attendance Control', icon: 'rule_folder' },
  { path: '/registro', label: 'Staff Enrollment', icon: 'how_to_reg' },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 z-40 bg-slate-100 flex flex-col border-r border-slate-200/50">
      <div className="p-6">
        <h1 className="text-xl font-black font-headline tracking-tight text-primary uppercase leading-tight">THE CURATOR</h1>
        <p className="text-[10px] text-on-surface-variant mt-1 font-bold tracking-[0.2em] uppercase opacity-70">Community Admin</p>
      </div>

      <nav className="flex-1 mt-4">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `
              flex items-center gap-4 px-6 py-4 transition-all duration-300 group
              ${isActive 
                ? 'text-primary font-bold border-r-4 border-primary bg-slate-200/50' 
                : 'text-on-surface-variant hover:bg-slate-200/40 hover:text-on-surface'
              }
            `}
          >
            <span className="material-symbols-outlined transition-transform group-hover:scale-110" style={{ fontVariationSettings: "'FILL' 0" }}>
              {item.icon}
            </span>
            <span className="text-xs uppercase tracking-[0.1em] font-black">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-6 border-t border-slate-200/50">
        <div className="flex items-center gap-3 p-3 bg-white rounded-2xl shadow-premium border border-primary/5">
          <div className="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center text-primary font-black shadow-inner">
            A
          </div>
          <div className="overflow-hidden">
            <p className="text-[11px] font-black font-headline text-on-surface uppercase truncate tracking-tight">Admin Avatar</p>
            <p className="text-[9px] text-primary font-bold uppercase tracking-widest opacity-60 italic">Encargado</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
