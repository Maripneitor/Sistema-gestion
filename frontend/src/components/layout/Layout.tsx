import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout: React.FC = () => {
  return (
    <div className="bg-surface min-h-screen font-body text-on-surface">
      <Sidebar />
      
      <div className="ml-64 flex flex-col min-h-screen">
        <Header />
        
        <main className="pt-24 p-8 grow">
          <Outlet />
        </main>
        
        <footer className="py-6 px-12 border-t border-slate-200/50 text-[11px] text-on-surface-variant flex justify-between items-center bg-white/50 dark:bg-slate-900/50">
          <p>© 2026 Nexus Admin System • Local Mode: <span className="text-primary font-bold">DOCKER_ACTIVE</span></p>
          <div className="flex gap-4">
            <span className="hover:text-primary transition-colors cursor-pointer">Registros de Auditoría</span>
            <span className="hover:text-primary transition-colors cursor-pointer">Estado: Óptimo</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;

