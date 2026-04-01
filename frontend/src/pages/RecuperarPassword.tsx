import React from 'react';
import { Link } from 'react-router-dom';

const RecuperarPassword: React.FC = () => {
  return (
    <div className="bg-[#0f172a] text-slate-200 min-h-screen flex flex-col relative overflow-hidden font-inter">
      {/* Dynamic Background Effects */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px]"></div>
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <main className="grow flex items-center justify-center px-6 py-12 relative z-10">
        <div className="w-full max-w-[440px]">
          {/* Main Card */}
          <section className="bg-slate-900/40 backdrop-blur-3xl p-10 rounded-[2.5rem] border border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)]">
            {/* Logo area */}
            <div className="mb-12 text-center space-y-3">
              <div className="w-16 h-16 bg-surface-container-low mx-auto rounded-full flex items-center justify-center shadow-lg border border-white/5">
                <span className="material-symbols-outlined text-blue-500 text-3xl font-bold">lock_reset</span>
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-white font-manrope">Password Recovery</h1>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed px-4">
                Enter your institutional email to initiate the secure credential restoration process.
              </p>
            </div>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2 group">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1 group-focus-within:text-blue-400 transition-colors" htmlFor="email">
                  Institutional Email
                </label>
                <div className="relative">
                  <input
                    className="w-full bg-slate-800/50 border border-white/5 rounded-2xl py-4 px-5 text-sm font-medium text-white placeholder:text-slate-600 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 transition-all shadow-inner"
                    id="email"
                    placeholder="name@nexus-admin.org"
                    required
                    type="email"
                  />
                  <span className="absolute right-5 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-600 text-lg">alternate_email</span>
                </div>
              </div>

              <button
                className="w-full bg-blue-600 hover:bg-blue-500 py-4.5 rounded-2xl text-white font-black text-sm uppercase tracking-[0.2em] shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 active:scale-[0.98] transition-all flex items-center justify-center gap-4 relative overflow-hidden group/btn"
                type="submit"
              >
                <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 pointer-events-none"></div>
                Send Reset Link
                <span className="material-symbols-outlined text-xl group-hover/btn:translate-x-1 transition-transform">mail</span>
              </button>
            </form>

            <div className="mt-12 text-center">
              <Link 
                className="inline-flex items-center gap-2 text-[11px] font-black text-slate-500 hover:text-blue-500 uppercase tracking-widest transition-all group/link" 
                to="/login"
              >
                <span className="material-symbols-outlined text-lg group-hover/link:-translate-x-1 transition-transform">arrow_back</span>
                Return to Authority Access
              </Link>
            </div>
          </section>

          {/* Security Badge Decoration */}
          <div className="mt-10 flex justify-center items-center gap-6 opacity-30">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">shield</span>
              <span className="text-[9px] font-black uppercase tracking-widest">End-to-End Encryption</span>
            </div>
            <div className="h-4 w-px bg-white/20"></div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">verified_user</span>
              <span className="text-[9px] font-black uppercase tracking-widest">Nexus Hub Verified</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 relative z-20">
         <p className="text-[10px] font-black uppercase tracking-[0.2em]">© 2024 Nexus Admin Authority • Operational Command</p>
         <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest">
            <a className="hover:text-blue-500 transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-blue-500 transition-colors" href="#">Terms of Service</a>
            <a className="hover:text-blue-500 transition-colors" href="#">Security Protocols</a>
         </div>
      </footer>
    </div>
  );
};

export default RecuperarPassword;
