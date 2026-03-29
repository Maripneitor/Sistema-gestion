import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Dashboard', icon: 'dashboard' },
  { path: '/directorio', label: 'User Directory', icon: 'group' },
  { path: '/asistencias', label: 'Attendance Control', icon: 'rule_folder' },
  { path: '/registro', label: 'Administrative Staff', icon: 'person_add' },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 z-40 bg-slate-100 dark:bg-slate-900 flex flex-col overflow-y-auto border-r border-slate-200/50">
      <div className="px-6 py-8">
        <h1 className="text-xl font-black tracking-tighter text-blue-700 dark:text-blue-400 font-headline uppercase italic"> Nexus Admin </h1>
        <p className="text-[10px] font-bold text-slate-500 mt-1 uppercase tracking-widest opacity-60">Authority Panel • v1.0</p>
      </div>
      
      <nav className="flex-1 px-4 mt-6 space-y-1">
        {navItems.map((item) => (
          <NavLink 
            key={item.path}
            to={item.path}
            className={({ isActive }) => `flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all group ${
              isActive 
                ? 'bg-blue-600/10 text-blue-700 dark:text-blue-400 font-black shadow-sm border border-blue-600/15' 
                : 'text-slate-500 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 hover:text-slate-700'
            }`}
          >
            <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">
              {item.icon}
            </span>
            <span className="text-[13px] font-bold tracking-tight">{item.label}</span>
          </NavLink>
        ))}
      </nav>
      
      <div className="p-4 mt-auto">
        <div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur rounded-2xl border border-slate-200/40">
          <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">M</div>
          <div className="overflow-hidden">
            <p className="text-[11px] font-black truncate leading-none mb-1">Mock User</p>
            <p className="text-[9px] text-blue-600 uppercase font-black">Admin Mode</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
