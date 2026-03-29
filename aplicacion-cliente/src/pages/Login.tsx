import React from 'react';

const Login: React.FC = () => {
  return (
    <div className="bg-mesh font-body text-on-surface min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center px-6 py-12">
        <div className="relative w-full max-w-md">
          {/* Asymmetric Accents */}
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-container rounded-xl -z-10 opacity-50"></div>
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-tertiary-container rounded-full -z-10 opacity-30"></div>
          
          {/* Main Login Card */}
          <section className="bg-surface-container-lowest p-10 rounded-xl shadow-2xl shadow-on-background/5 border border-outline-variant/10 backdrop-blur-sm bg-opacity-95">
            {/* Brand Anchor */}
            <div className="mb-10 text-center">
              <h1 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface mb-2">
                Nexus Admin
              </h1>
              <p className="font-label text-sm uppercase tracking-widest text-on-surface-variant font-medium">
                Administrative Authority
              </p>
            </div>
            
            {/* Form */}
            <form action="#" className="space-y-6" method="POST">
              {/* Email Field */}
              <div className="space-y-1.5">
                <label className="block font-label text-sm font-medium text-on-surface-variant tracking-wide" htmlFor="email">
                  Email address
                </label>
                <div className="relative">
                  <input 
                    className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant py-3 px-0 text-on-surface focus:ring-0 focus:border-primary transition-colors placeholder:text-outline-variant/50" 
                    id="email" 
                    name="email" 
                    placeholder="name@authority.nexus" 
                    required 
                    type="email"
                  />
                </div>
              </div>
              
              {/* Password Field */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="block font-label text-sm font-medium text-on-surface-variant tracking-wide" htmlFor="password">
                    Password
                  </label>
                  <a className="text-xs font-semibold text-primary hover:text-primary-dim transition-colors" href="#">
                    Forgot Password?
                  </a>
                </div>
                <div className="relative">
                  <input 
                    className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant py-3 px-0 text-on-surface focus:ring-0 focus:border-primary transition-colors" 
                    id="password" 
                    name="password" 
                    required 
                    type="password"
                  />
                </div>
              </div>
              
              {/* Remember Me */}
              <div className="flex items-center">
                <input className="h-4 w-4 rounded border-outline-variant text-primary focus:ring-primary-fixed transition-all" id="remember-me" name="remember-me" type="checkbox"/>
                <label className="ml-3 block font-body text-sm text-on-secondary-fixed-variant" htmlFor="remember-me">
                  Remember this device
                </label>
              </div>
              
              {/* Sign In Button */}
              <button 
                className="editorial-gradient w-full py-4 px-6 rounded-md text-on-primary font-headline font-bold text-lg shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-[0.98] transition-all flex items-center justify-center gap-2" 
                type="submit"
              >
                Sign In
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </button>
            </form>
            
            {/* Additional Context */}
            <div className="mt-10 pt-8 border-t border-outline-variant/10 text-center">
              <p className="text-sm text-on-surface-variant font-medium">
                New to the curator platform? 
                <a className="text-primary hover:underline font-bold ml-1" href="/registro">Request Access</a>
              </p>
            </div>
          </section>
          
          {/* Status Decoration */}
          <div className="mt-8 flex justify-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-full">
              <span className="w-2 h-2 rounded-full bg-primary-fixed"></span>
              <span className="text-[10px] font-bold uppercase tracking-tighter text-on-secondary-fixed-variant">System Status: Optimal</span>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="flex flex-col md:flex-row justify-between items-center px-12 py-6 w-full bg-slate-50 dark:bg-slate-950 opacity-80 hover:opacity-100 transition-opacity">
        <div className="mb-4 md:mb-0">
          <span className="text-sm font-medium text-slate-500">© 2026 Nexus Admin Authority</span>
        </div>
        <div className="flex space-x-8">
          <a className="text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-400 text-sm font-medium" href="#">Privacy Policy</a>
          <a className="text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-400 text-sm font-medium" href="#">Terms of Service</a>
          <a className="text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-400 text-sm font-medium" href="#">Security</a>
        </div>
      </footer>
    </div>
  );
};

export default Login;
