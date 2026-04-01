import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { useLoginController } from './Login.controller';

const LoginView: React.FC = () => {
    const { email, setEmail, password, setPassword, rememberMe, handleToggleRemember, handleSubmit } = useLoginController();

    return (
        <div className="login-body">
            <main className="login-main">
                {/* Subtle Background Elements */}
                <div className="login-bg-accent"></div>
                <div className="login-card-container">
                    {/* Left Column: Branding & Info (Split Screen Style) */}
                    <div className="login-left-panel">
                        <div className="login-left-gradient"></div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-lg bg-on-primary flex items-center justify-center">
                                    <span className="material-symbols-outlined text-primary font-bold">hub</span>
                                </div>
                                <span className="font-headline font-extrabold text-2xl tracking-tight">Nexus Admin</span>
                            </div>
                            <h2 className="text-3xl font-headline font-bold leading-tight mb-4">Autoridad Administrativa Central</h2>
                            <p className="text-on-primary/80 font-body text-sm leading-relaxed">
                                Acceda a la infraestructura crítica de Nexus. Gestione activos digitales y protocolos de seguridad desde una consola unificada.
                            </p>
                        </div>
                        <div className="relative z-10 space-y-4">
                            <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-widest text-on-primary/60">
                                <span className="material-symbols-outlined text-sm">lock</span>
                                Encriptación de Grado Militar Activa
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex -space-x-2">
                                    <div className="w-8 h-8 rounded-full border-2 border-primary bg-on-primary/20 flex items-center justify-center text-[10px] font-bold">JD</div>
                                    <div className="w-8 h-8 rounded-full border-2 border-primary bg-on-primary/20 flex items-center justify-center text-[10px] font-bold">AS</div>
                                    <div className="w-8 h-8 rounded-full border-2 border-primary bg-on-primary/20 flex items-center justify-center text-[10px] font-bold">+12</div>
                                </div>
                                <span className="text-xs font-medium text-on-primary/80">Curadores Activos</span>
                            </div>
                        </div>
                    </div>
                    {/* Right Column: Login Form */}
                    <div className="login-right-panel">
                        <div className="md:hidden mb-10">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                                    <span className="material-symbols-outlined text-on-primary text-xl">hub</span>
                                </div>
                                <h1 className="font-headline text-2xl font-extrabold text-on-surface">Nexus Admin</h1>
                            </div>
                        </div>
                        <div className="mb-8">
                            <h2 className="font-headline text-2xl font-bold text-on-surface mb-1">Iniciar Sesión</h2>
                            <p className="text-on-surface-variant text-sm font-medium">Ingrese sus credenciales corporativas</p>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Email Field */}
                            <div className="space-y-2">
                                <label className="block font-label text-xs font-bold text-on-surface-variant uppercase tracking-wider" htmlFor="email">
                                    Correo electrónico institucional
                                </label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="material-symbols-outlined text-outline text-lg group-focus-within:text-primary transition-colors">alternate_email</span>
                                    </div>
                                    <input 
                                        className="login-input" 
                                        id="email" 
                                        name="email" 
                                        placeholder="usuario@nexus.authority" 
                                        required 
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            {/* Password Field */}
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <label className="block font-label text-xs font-bold text-on-surface-variant uppercase tracking-wider" htmlFor="password">
                                        Contraseña
                                    </label>
                                    <Link className="text-xs font-bold text-primary hover:text-primary-dim transition-colors font-label" to="/recuperar-password">
                                        ¿Olvidó su contraseña?
                                    </Link>
                                </div>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="material-symbols-outlined text-outline text-lg group-focus-within:text-primary transition-colors">lock_open</span>
                                    </div>
                                    <input 
                                        className="login-input" 
                                        id="password" 
                                        name="password" 
                                        required 
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                            {/* Remember Me & Policy */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input 
                                        className="h-4 w-4 rounded border-outline-variant text-primary focus:ring-primary/20 transition-all cursor-pointer" 
                                        id="remember-me" 
                                        name="remember-me" 
                                        type="checkbox"
                                        checked={rememberMe}
                                        onChange={handleToggleRemember}
                                    />
                                    <label className="ml-2.5 block font-body text-sm text-on-secondary-fixed-variant cursor-pointer font-medium" htmlFor="remember-me">
                                        Recordar dispositivo
                                    </label>
                                </div>
                            </div>
                            {/* Sign In Button */}
                            <button className="login-submit-btn" type="submit">
                                Iniciar Sesión
                                <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">login</span>
                            </button>
                        </form>
                        <div className="mt-8 pt-6 border-t border-outline-variant/10">
                            <p className="text-sm text-on-surface-variant font-medium text-center">
                                ¿Nuevo en la plataforma de curadores? 
                                <Link className="text-primary hover:underline font-bold ml-1" to="/registro">Solicitar Acceso</Link>
                            </p>
                        </div>
                        {/* Indicators */}
                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-full border border-green-100">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                <span className="text-[10px] font-bold uppercase tracking-tight text-green-700">Estado del Sistema: En línea</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full border border-blue-100">
                                <span className="material-symbols-outlined text-[14px] text-blue-600">verified_user</span>
                                <span className="text-[10px] font-bold uppercase tracking-tight text-blue-700">SSL v3 Activo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {/* Footer */}
            <footer className="login-footer">
                <div className="mb-4 md:mb-0">
                    <span className="text-xs font-semibold text-on-surface-variant/60 tracking-wider">© 2024 NEXUS ADMIN AUTHORITY • CONFIDENCIAL</span>
                </div>
                <div className="flex space-x-8">
                    <a className="text-on-surface-variant/70 hover:text-primary text-xs font-bold uppercase tracking-widest transition-colors" href="#">Privacidad</a>
                    <a className="text-on-surface-variant/70 hover:text-primary text-xs font-bold uppercase tracking-widest transition-colors" href="#">Términos</a>
                    <a className="text-on-surface-variant/70 hover:text-primary text-xs font-bold uppercase tracking-widest transition-colors" href="#">Soporte</a>
                </div>
            </footer>
        </div>
    );
};

export default LoginView;
