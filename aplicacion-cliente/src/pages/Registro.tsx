import React from 'react';

const Registro: React.FC = () => {
  return (
    <div className="bg-mesh font-body text-on-surface flex flex-col items-center justify-center py-10">
      <div className="relative w-full max-w-xl">
        {/* Asymmetric Accents */}
        <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-container rounded-xl -z-10 opacity-50"></div>
        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-tertiary-container rounded-full -z-10 opacity-30"></div>
        
        {/* Main Registration Card */}
        <section className="bg-surface-container-lowest p-10 rounded-2xl shadow-xl shadow-on-background/5 border border-outline-variant/10 backdrop-blur-sm bg-opacity-95">
          <div className="mb-10 text-center">
            <h1 className="font-headline text-3xl font-black tracking-tighter text-on-surface mb-2 italic uppercase">
              Alta Administrativa
            </h1>
            <p className="font-label text-[11px] uppercase tracking-[0.2em] text-on-surface-variant font-black">
              Nexus Authority • Personnel Registration
            </p>
          </div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-1.5 col-span-2">
                <label className="block font-label text-[11px] font-black text-on-surface-variant tracking-widest uppercase" htmlFor="full-name">
                  Full Name
                </label>
                <input 
                  className="w-full bg-surface-container-low border-b-2 border-outline-variant py-3 px-4 rounded-lg focus:ring-0 focus:border-primary transition-all placeholder:text-outline-variant/50 text-sm font-bold" 
                  id="full-name" 
                  placeholder="Ej. Mario Efrain" 
                  type="text" 
                />
              </div>

              <div className="space-y-1.5">
                <label className="block font-label text-[11px] font-black text-on-surface-variant tracking-widest uppercase" htmlFor="staff-role">
                   Access Level
                </label>
                <select className="w-full bg-surface-container-low border-b-2 border-outline-variant py-3 px-4 rounded-lg focus:ring-0 focus:border-primary transition-all text-sm font-bold appearance-none">
                   <option>ENCARGADO</option>
                   <option>ASISTENTE</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="block font-label text-[11px] font-black text-on-surface-variant tracking-widest uppercase" htmlFor="phone">
                   Verification Base
                </label>
                <input 
                  className="w-full bg-surface-container-low border-b-2 border-outline-variant py-3 px-4 rounded-lg focus:ring-0 focus:border-primary transition-all text-sm font-bold" 
                  id="phone" 
                  placeholder="+XX XXX XXX XXXX" 
                  type="text" 
                />
              </div>
            </div>

            <button 
              className="editorial-gradient w-full py-4 px-6 rounded-xl text-on-primary font-headline font-black text-lg shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-[0.98] transition-all flex items-center justify-center gap-2 uppercase tracking-wide" 
              type="button"
            >
              Registrar Personal
              <span className="material-symbols-outlined text-xl">security</span>
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Registro;
