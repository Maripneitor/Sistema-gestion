import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
    navigate('/');
  };

  return (
    <div className="bg-surface font-body text-on-surface min-h-screen flex flex-col relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-primary/5 blur-[200px] -mr-96 -mt-96 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-primary/10 blur-[150px] -ml-72 -mb-72"></div>

      <main className="flex-grow flex items-center justify-center px-6 py-12 relative z-10">
        <div className="w-full max-w-lg">
          {/* Main Card */}
          <section className="bg-white/80 backdrop-blur-2xl p-12 rounded-[3rem] shadow-premium border border-primary/5 relative group hover:border-primary/10 transition-all duration-700">
            {/* Logo Section */}
            <div className="mb-14 text-center">
              <div className="w-20 h-20 bg-primary mx-auto mb-8 rounded-3xl flex items-center justify-center shadow-2xl shadow-primary/30 group-hover:rotate-12 transition-transform duration-700 ease-out">
                <span className="material-symbols-outlined text-4xl text-white" style={{ fontVariationSettings: "'FILL' 1" }}>admin_panel_settings</span>
              </div>
              <h1 className="font-headline text-5xl font-black tracking-tighter text-on-surface italic uppercase leading-none">
                Nexus<span className="text-primary">.</span>Admin
              </h1>
              <div className="h-1.5 w-16 bg-primary mx-auto mt-6 rounded-full shadow-[0_0_12px_rgba(12,86,208,0.4)] transition-all group-hover:w-24 duration-700"></div>
              <p className="mt-6 font-black text-[10px] uppercase tracking-[0.4em] text-primary/60 opacity-70">
                Acceso Nexus Admin Protocol
              </p>
            </div>
            
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest ml-2 italic opacity-60" htmlFor="email">
                  Identidad Digital
                </label>
                <div className="relative group/input">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 material-symbols-outlined text-primary/40 text-xl group-focus-within/input:text-primary transition-colors">alternate_email</span>
                  <input 
                    className="w-full bg-surface-container-low border border-primary/5 rounded-[1.5rem] py-5 pl-14 pr-8 text-sm font-black text-on-surface focus:bg-white focus:border-primary/20 focus:ring-8 focus:ring-primary/5 outline-none transition-all placeholder:text-primary/20 uppercase tracking-widest shadow-inner group-focus-within/input:shadow-lg" 
                    id="email" 
                    placeholder="ADMIN@AUTHORITY.NEXUS" 
                    required 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center ml-2">
                  <label className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest italic opacity-60" htmlFor="password">
                    Clave de Seguridad
                  </label>
                  <a className="text-[9px] font-black text-primary hover:underline transition-all uppercase tracking-tighter opacity-70" href="#">
                    ¿Pérdida de credencial?
                  </a>
                </div>
                <div className="relative group/input">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 material-symbols-outlined text-primary/40 text-xl group-focus-within/input:text-primary transition-colors">lock_person</span>
                  <input 
                    className="w-full bg-surface-container-low border border-primary/5 rounded-[1.5rem] py-5 pl-14 pr-8 text-sm font-black text-on-surface focus:bg-white focus:border-primary/20 focus:ring-8 focus:ring-primary/5 outline-none transition-all shadow-inner group-focus-within/input:shadow-lg" 
                    id="password" 
                    required 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="flex items-center gap-4 ml-2 group/check">
                <div className="relative flex items-center">
                  <input className="peer h-6 w-6 opacity-0 absolute cursor-pointer z-10" id="remember-me" type="checkbox"/>
                  <div className="h-6 w-6 bg-surface-container-high border border-primary/10 rounded-xl peer-checked:bg-primary peer-checked:border-primary transition-all flex items-center justify-center shadow-inner group-hover/check:scale-110">
                    <span className="material-symbols-outlined text-base text-white scale-0 peer-checked:scale-100 transition-transform font-black">done</span>
                  </div>
                </div>
                <label className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.1em] cursor-pointer opacity-70 group-hover/check:opacity-100 transition-opacity" htmlFor="remember-me">
                  Persistir Identidad en este Terminal
                </label>
              </div>
              
              <button 
                className="celeste-gradient w-full py-6 rounded-[2rem] text-white font-black text-xs shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-5 uppercase tracking-[0.4em] relative overflow-hidden group/btn" 
                type="submit"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
                AUTORIZAR ACCESO 
                <span className="material-symbols-outlined text-2xl group-hover/btn:translate-x-2 transition-transform">security</span>
              </button>
            </form>
            
            <div className="mt-14 pt-8 border-t border-primary/5 text-center">
              <p className="text-[10px] text-on-surface-variant font-black uppercase tracking-widest opacity-60">
                ¿Nueva Entidad Administrativa? 
                <a className="text-primary hover:underline ml-3 opacity-100" href="/registro">Solicitar Protocolo</a>
              </p>
            </div>
          </section>
        </div>
      </main>
      
      <footer className="px-12 py-10 w-full bg-white/40 backdrop-blur-xl border-t border-primary/5 flex flex-col md:flex-row justify-between items-center relative z-10 gap-8">
        <span className="text-[10px] font-black text-primary/40 uppercase tracking-[0.4em] italic leading-none">© 2024 Admin Curator System • v3.0.0-STITCH</span>
        <div className="flex gap-12">
          {['Privacidad', 'Protocolos', 'Soporte'].map(link => (
            <a key={link} className="text-[10px] font-black text-primary/40 hover:text-primary transition-all uppercase tracking-[0.3em] relative group" href="#">
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Login;
