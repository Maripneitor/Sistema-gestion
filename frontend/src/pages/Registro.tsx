import React from 'react';

const Registro: React.FC = () => {
  return (
    <div className="pt-6 px-10 pb-12 min-h-screen flex flex-col items-center justify-center">
      <div className="relative w-full max-w-3xl">
        {/* Luminous Ambience */}
        <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/10 rounded-full -z-10 blur-[100px] animate-pulse"></div>
        <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-primary/5 rounded-full -z-10 blur-[120px]"></div>
        
        {/* Main Enrollment Card */}
        <section className="bg-white/80 backdrop-blur-2xl p-12 rounded-[3.5rem] shadow-premium border border-primary/5 relative overflow-hidden group hover:border-primary/10 transition-all duration-700">
          <div className="absolute top-0 left-0 w-full h-2 bg-editorial-gradient transition-all group-hover:h-3 duration-500"></div>
          
          <div className="mb-14 text-center">
            <div className="w-20 h-20 bg-primary/5 mx-auto mb-8 rounded-[1.5rem] flex items-center justify-center text-primary group-hover:rotate-12 transition-transform duration-700 shadow-inner border border-primary/5">
              <span className="material-symbols-outlined text-4xl">how_to_reg</span>
            </div>
            <h1 className="font-headline text-5xl font-black tracking-tighter text-on-surface mb-4 italic uppercase leading-none">
              Alta Operativa
            </h1>
            <div className="h-1.5 w-16 bg-primary mx-auto mt-6 rounded-full shadow-[0_0_12px_rgba(12,86,208,0.4)] transition-all group-hover:w-24 duration-700"></div>
            <p className="font-black text-[10px] uppercase tracking-[0.4em] text-primary/60 mt-8 opacity-70 italic">
              Nexus Authority • Protocolo de Incorporación de Personal v2.4
            </p>
          </div>
          
          <form className="space-y-12">
            <div className="grid grid-cols-2 gap-10">
              <div className="space-y-4 col-span-2 group/input">
                <label className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em] ml-2 group-focus-within/input:text-primary transition-colors italic opacity-60" htmlFor="full-name">
                  Identidad Civil Completa
                </label>
                <div className="relative">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 material-symbols-outlined text-primary/30 text-xl group-focus-within/input:text-primary transition-colors">badge</span>
                  <input 
                    className="w-full bg-surface-container-low border border-primary/5 rounded-[1.5rem] py-5 pl-14 pr-8 text-sm font-black text-on-surface focus:bg-white focus:border-primary/20 focus:ring-8 focus:ring-primary/5 transition-all outline-none placeholder:text-primary/10 uppercase tracking-widest shadow-inner group-focus-within/input:shadow-lg" 
                    id="full-name" 
                    placeholder="INTRODUCIR NOMBRE COMPLETO..." 
                    type="text" 
                  />
                </div>
              </div>

              <div className="space-y-4 group/input">
                <label className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em] ml-2 group-focus-within/input:text-primary transition-colors italic opacity-60" htmlFor="staff-role">
                   Rango de Acceso
                </label>
                <div className="relative">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 material-symbols-outlined text-primary/30 text-xl group-focus-within/input:text-primary transition-colors">verified_user</span>
                  <select className="w-full bg-surface-container-low border border-primary/5 rounded-[1.5rem] py-5 pl-14 pr-8 text-sm font-black text-on-surface focus:bg-white focus:border-primary/20 focus:ring-8 focus:ring-primary/5 transition-all outline-none appearance-none cursor-pointer uppercase tracking-widest leading-tight shadow-inner group-focus-within/input:shadow-lg">
                     <option>ENCARGADO DE SECTOR</option>
                     <option>ASISTENTE TÉCNICO</option>
                     <option>STAFF OPERATIVO</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2 text-primary/40 pointer-events-none text-xl">unfold_more</span>
                </div>
              </div>

              <div className="space-y-4 group/input">
                <label className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em] ml-2 group-focus-within/input:text-primary transition-colors italic opacity-60" htmlFor="phone">
                   Vínculo de Comunicación
                </label>
                <div className="relative">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 material-symbols-outlined text-primary/30 text-xl group-focus-within/input:text-primary transition-colors">connectivity_mobile</span>
                  <input 
                    className="w-full bg-surface-container-low border border-primary/5 rounded-[1.5rem] py-5 pl-14 pr-8 text-sm font-black text-on-surface focus:bg-white focus:border-primary/20 focus:ring-8 focus:ring-primary/5 transition-all outline-none placeholder:text-primary/10 shadow-inner group-focus-within/input:shadow-lg" 
                    id="phone" 
                    placeholder="+XX XXX XXX XXXX" 
                    type="text" 
                  />
                </div>
              </div>
            </div>

            <div className="pt-8 relative">
              <button 
                className="celeste-gradient w-full py-6 rounded-[2rem] text-white font-black text-xs shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-5 uppercase tracking-[0.4em] relative overflow-hidden group/btn" 
                type="button"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
                AUTORIZAR ALTA EN SISTEMA
                <span className="material-symbols-outlined text-2xl group-hover/btn:translate-x-2 transition-transform">shield_person</span>
              </button>
            </div>
            
            <div className="flex items-center justify-center gap-5 py-6 border-t border-primary/5 mt-10">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_12px_rgba(12,86,208,0.6)]"></span>
              <p className="text-[10px] text-primary font-black uppercase tracking-[0.2em] italic opacity-50">
                PROTOCOL SEC-001 • ENCRIPTACIÓN DE DATOS ACTIVA
              </p>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Registro;
