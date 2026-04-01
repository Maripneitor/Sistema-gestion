import React from 'react';
import './Registro.css';
import { useRegistroController } from './Registro.controller';
import { countryOptions, availabilityDays } from './Registro.model';

const RegistroView: React.FC = () => {
  const {
    formData,
    validationErrors,
    handleChange,
    handleToggleStreamer,
    handleSubmit,
    handleDiscard
  } = useRegistroController();

  return (
    <div className="registro-container">
      {/* Header Section */}
      <header className="registro-header">
        <div className="registro-breadcrumb">
          <span>Directorio</span>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span>Nuevo Registro</span>
        </div>
        <h2 className="registro-title">Alta de Curador Junior</h2>
        <p className="registro-description">
          Complete la ficha técnica del usuario siguiendo los protocolos de cumplimiento del sistema. Los campos marcados con <span className="text-primary font-bold">⚡</span> son obligatorios.
        </p>
      </header>

      <div className="registro-main-grid">
        {/* Main Form Section */}
        <div className="registro-form-container">
          <div className="registro-card">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Section: Identidad */}
              <section>
                <div className="registro-section-title">
                  <div className="w-1 h-6 bg-primary rounded-full"></div>
                  <h3 className="text-xl font-bold text-on-surface">Identidad Digital</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="registro-input-group">
                    <label className="registro-label">Nombre App ⚡</label>
                    <div className="relative">
                      <input 
                        name="appName"
                        className="registro-input border-primary rounded-t-md font-body text-on-surface" 
                        placeholder="Ej: AdminName⚡" 
                        type="text" 
                        value={formData.appName}
                        onChange={handleChange}
                      />
                      <div className="registro-success-alert">
                        <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        Formato correcto: Finaliza con rayo.
                      </div>
                    </div>
                  </div>
                  <div className="registro-input-group">
                    <label className="registro-label">Nombre Real</label>
                    <input 
                      name="realName"
                      className="registro-input" 
                      placeholder="Nombre completo" 
                      type="text" 
                      value={formData.realName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </section>

              {/* Section: Restricciones de Acceso */}
              <section className="bg-surface-container-low/50 -mx-8 px-8 py-8">
                <div className="registro-section-title">
                  <div className="w-1 h-6 bg-primary rounded-full"></div>
                  <h3 className="text-xl font-bold text-on-surface">Restricciones y Cumplimiento</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="registro-input-group">
                      <label className="registro-label">Edad Requerida (&gt;18)</label>
                      <input 
                        name="age"
                        className="registro-input registro-input-error" 
                        type="number" 
                        value={formData.age}
                        onChange={handleChange}
                      />
                      {formData.age < 18 && (
                        <div className="registro-error-alert">
                          <span className="material-symbols-outlined text-[16px]">warning</span>
                          <span>RECHAZADO: El usuario debe ser mayor de 18 años para operar.</span>
                        </div>
                      )}
                    </div>
                    <div className="registro-input-group">
                      <label className="registro-label">País de Residencia</label>
                      <div className="relative">
                        <select 
                          name="country"
                          className="registro-input registro-input-error appearance-none"
                          value={formData.country}
                          onChange={handleChange}
                        >
                          {countryOptions.map(opt => (
                            <option key={opt.value} value={opt.label}>{opt.label}</option>
                          ))}
                        </select>
                        <div className="registro-error-alert mt-2">
                          <span className="material-symbols-outlined text-[16px]">block</span>
                          <span>BLOQUEADO: Jurisdicción no permitida temporalmente.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="p-4 rounded-xl border border-outline-variant/20 bg-surface-container-lowest space-y-4 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-bold text-on-surface text-sm">Perfil Streamer</p>
                          <p className="text-xs text-on-surface-variant">¿Crea contenido en vivo?</p>
                        </div>
                        <div className="registro-toggle-wrapper">
                          <input 
                            checked={formData.isStreamer} 
                            onChange={handleToggleStreamer}
                            className="sr-only peer" 
                            type="checkbox" 
                          />
                          <div className="registro-toggle-slider"></div>
                        </div>
                      </div>
                      {formData.isStreamer && (
                        <div className="flex items-start gap-2 text-[11px] leading-tight text-on-error-container bg-error-container/10 p-2 rounded-md font-medium">
                          <span className="material-symbols-outlined text-[14px] shrink-0">info</span>
                          <p>INCOMPATIBILIDAD: Los curadores con perfil de Streamer activo no pueden gestionar auditorías de asistencia.</p>
                        </div>
                      )}
                    </div>
                    <div className="registro-input-group">
                      <label className="registro-label">Disponibilidad Operativa</label>
                      <div className="flex flex-wrap gap-2">
                        {availabilityDays.map((d, i) => {
                          const isActive = formData.availability.includes(d);
                          return (
                            <button 
                              key={i} 
                              className={`w-8 h-8 rounded-full text-xs font-bold ${isActive ? 'bg-primary text-on-primary' : 'bg-surface-container-high text-on-surface-variant opacity-40 cursor-default'}`} 
                              type="button"
                            >
                              {d}
                            </button>
                          );
                        })}
                      </div>
                      <p className="text-[10px] text-on-surface-variant italic mt-1 font-bold">Requisito obligatorio: Fines de semana completos.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section: Contacto */}
              <section>
                <div className="registro-section-title">
                  <div className="w-1 h-6 bg-primary rounded-full"></div>
                  <h3 className="text-xl font-bold text-on-surface">Canales de Comunicación</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="registro-input-group">
                    <label className="registro-label">WhatsApp</label>
                    <div className="flex items-center bg-surface-container-low rounded-t-md px-3 border-b-2 border-outline-variant">
                      <span className="text-on-surface-variant text-sm pr-2 border-r border-outline-variant/30">+34</span>
                      <input 
                        name="whatsapp"
                        className="bg-transparent border-none outline-none p-3 w-full text-on-surface font-body font-bold" 
                        placeholder="600 000 000" 
                        type="text" 
                        value={formData.whatsapp}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="registro-input-group">
                    <label className="registro-label">Discord Tag</label>
                    <input 
                      name="discord"
                      className="registro-input font-bold" 
                      placeholder="User#0000" 
                      type="text" 
                      value={formData.discord}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="registro-input-group">
                    <label className="registro-label">Instagram</label>
                    <input 
                      name="instagram"
                      className="registro-input font-bold" 
                      placeholder="@usuario" 
                      type="text" 
                      value={formData.instagram}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </section>

              {/* Actions */}
              <div className="pt-8 border-t border-outline-variant/10 flex justify-end gap-4">
                <button 
                  onClick={handleDiscard}
                  className="px-6 py-2.5 rounded-md font-bold text-on-surface-variant hover:bg-surface-container-high transition-colors" 
                  type="button"
                >
                  DESCARTAR
                </button>
                <button className="registro-submit-btn" type="submit">
                  <span className="material-symbols-outlined">save</span>
                  REGISTRAR EXPEDIENTE
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Secondary Column / Info Cards */}
        <div className="registro-sidebar">
          {/* Status Card */}
          <div className="registro-validation-card">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-error" style={{ fontVariationSettings: "'FILL' 1" }}>cancel</span>
              <h4 className="font-extrabold text-on-surface text-lg">Validación Fallida</h4>
            </div>
            <ul className="space-y-3">
              {validationErrors.map((error, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-on-error-container font-bold">
                  <span className="material-symbols-outlined text-[18px] mt-0.5">chevron_right</span>
                  <span>{error}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Guidelines Card */}
          <div className="registro-guidelines-card">
            <div className="absolute -top-10 -right-10 opacity-5 group-hover:scale-110 transition-transform duration-700">
              <span className="material-symbols-outlined text-[120px]">shield</span>
            </div>
            <h4 className="font-bold text-on-surface mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[20px]">verified_user</span>
              Guía Editorial
            </h4>
            <div className="space-y-4 relative z-10">
              <p className="text-xs text-on-surface-variant leading-relaxed font-medium">
                El proceso de registro requiere la validación de tres pilares fundamentales: **Identidad, Disponibilidad y Neutralidad**.
              </p>
              <div className="bg-surface p-3 rounded-lg space-y-2 shadow-inner">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-on-surface-variant uppercase">Completitud</span>
                  <span className="text-[10px] font-black text-primary">85%</span>
                </div>
                <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-[85%] transition-all duration-1000 shadow-[0_0_10px_rgba(12,86,208,0.3)]"></div>
                </div>
              </div>
              <p className="text-[10px] text-on-surface-variant/80 italic font-medium">
                * Una vez registrado, el perfil pasará a fase de "Shadow Audit" durante 14 días naturales.
              </p>
            </div>
          </div>

          {/* Map Location Detail */}
          <div className="registro-map-container">
            <div className="absolute inset-0 bg-blue-900/5 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
            <img 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkKMjiuA546OuAAdsCa-0b9lwrwoKHMXAHCrDEenPf9izps0a13po1P_MrUZ8YxqyXdn5qaNuHlIJ1z3TRFCfxIP4SVVHZk0Zoi6K1e47FdohN_vg0nmBUKImpw0HtIjahI26ppryIbYPU3vBje7fJf7o3GYD8HJFYuiLlGgamQMOYA6D7sQS1dSsyhYCu1s-VfY9qp_o1qcoN6wf6Ghi0exGOtFE5X_fyf7heqPTUtwlbvMroje-tMe_kwoDLRGR-3oUIhMDA944" 
              alt="Location context"
            />
            <div className="absolute bottom-3 left-3 z-20 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm border border-white/20">
              <span className="material-symbols-outlined text-primary text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              <span className="text-[10px] font-bold text-on-surface">Detección: Madrid, ES (Rechazado)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistroView;
