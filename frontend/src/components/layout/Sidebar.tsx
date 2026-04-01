import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Dashboard', icon: 'dashboard' },
  { path: '/directorio', label: 'User Directory', icon: 'group' },
  { path: '/asistencias', label: 'Attendance Control', icon: 'rule_folder' },
  { path: '/grupos/1', label: 'Group Detail', icon: 'hub' },
  { path: '/usuarios/1', label: 'User Profile', icon: 'person_search' },
  { path: '/registro', label: 'New Registration', icon: 'person_add' },
  { path: '/settings', label: 'Settings', icon: 'settings' },
  { path: '/recuperar-password', label: 'Reset Password', icon: 'lock_reset' },
  { path: '/login', label: 'Login', icon: 'login' },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-slate-100 dark:bg-slate-900 z-40 flex flex-col">
      <div className="p-6 flex flex-col gap-1">
        <span className="text-xl font-bold tracking-tight text-blue-700 dark:text-blue-400">The Curator</span>
        <span className="text-xs font-medium text-on-surface-variant opacity-70 tracking-[0.05em]">Community Admin</span>
      </div>
      <nav className="flex-1 mt-4">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `
              flex items-center gap-3 px-4 py-3 transition-all duration-300
              ${isActive 
                ? 'text-blue-700 dark:text-blue-400 font-bold border-r-4 border-blue-700 dark:border-blue-400 bg-slate-200/50 dark:bg-slate-800/50' 
                : 'text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
              }
            `}
          >
            {({ isActive }) => (
              <>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>
                  {item.icon}
                </span>
                <span className="font-medium tracking-[0.05em]">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
      <div className="p-6 mt-auto flex items-center gap-3 bg-slate-200/30 dark:bg-slate-800/30">
        <div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden">
          <img 
            alt="Admin Avatar" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuNuzwIbEHbOx42OaFa11x-NpdHg7DDZbgjNxkddiVbtRtMP0thXRFAgs8YQDNoW9O-jt2fdWs0ZGw6bL3N6z5RDNqXXk7i1s0-75Q5F2ncA3xNfKfud2KvKR1Gbe03kS_c9rueFxgsFElnbvpqfMtpoYSYSjguA1WbY6nm69I0KAWapRXVMsQRfRabcMJ8SK9bb9URSoaaMsHfYsH-JgPxcd1rfF21-WuvAUVMsr6FXyltvS9DUsDpUOyvK2jJn0fY5HK2UgCZcU" 
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-on-surface">Admin Curator</span>
          <span className="text-xs text-on-surface-variant">System Master</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
