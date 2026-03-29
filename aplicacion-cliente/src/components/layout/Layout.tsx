import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout: React.FC = () => {
  return (
    <div className="bg-surface min-h-screen font-body text-on-surface">
      {/* Sidebar - Componente de Navegación Lateral */}
      <Sidebar />
      
      <div className="ml-64 flex flex-col min-h-screen">
        {/* Header - Barra superior */}
        <Header />
        
        {/* Contenido Principal */}
        <main className="pt-24 p-8 grow min-h-screen">
          <Outlet />
        </main>
        
        {/* Footer simple integrado en el layout */}
        <footer className="mt-auto py-6 px-12 border-t border-outline-variant/10 text-[11px] text-on-surface-variant flex justify-between items-center opacity-70">
          <p>© 2026 Nexus Admin System • SPA Audit Mode: <span className="text-primary font-bold">MOCK_ENABLED</span></p>
          <div className="flex gap-4">
            <span className="cursor-help hover:text-primary transition-colors">Audit Logs</span>
            <span className="cursor-help hover:text-primary transition-colors">System Health: OK</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
