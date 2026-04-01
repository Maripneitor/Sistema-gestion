import React from 'react';

const attendanceGrid = [
  { week: '08', days: ['X', 'X', 'X', '-', 'X', 'X', 'X'] },
  { week: '09', days: ['X', 'X', 'X', 'X', 'X', 'X', 'X'] },
  { week: '10', days: ['X', 'X', '-', 'X', 'X', 'X', 'X'] },
  { week: '11', days: ['X', 'X', 'X', 'X', 'X', 'X', 'X'] },
];

const DetalleUsuario: React.FC = () => {
  return (
    <div className="max-w-[1400px] mx-auto flex gap-8 min-h-[calc(100vh-14rem)]">
      {/* Left Sidebar: Detailed Profile Info */}
      <div className="w-[380px] space-y-6">
        <div className="card-curator p-8 text-center flex flex-col items-center">
          <div className="relative mb-6">
            <div className="w-48 h-48 rounded-3xl bg-slate-900 border-[6px] border-surface-container-highest shadow-2xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1974" 
                alt="Marcus Chen" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary/40 border-4 border-white">
              <span className="material-symbols-outlined text-xl">bolt</span>
            </div>
          </div>
          <h1 className="text-3xl font-black text-on-surface font-headline tracking-tighter uppercase">Marcus Chen</h1>
          <p className="text-primary font-black text-[10px] uppercase tracking-widest mt-1">VoltRunner • Senior</p>
          
          <div className="mt-8 space-y-4 w-full child:flex child:items-center child:gap-4 child:text-sm child:font-medium child:text-on-surface-variant">
            <div className="flex gap-4 items-center">
              <span className="material-symbols-outlined opacity-40">alternate_email</span>
              <span className="text-on-surface font-bold">@mchen_nexus</span>
            </div>
            <div className="flex gap-4 items-center">
              <span className="material-symbols-outlined opacity-40">call</span>
              <span className="text-on-surface font-bold">+1 (555) 928-1022</span>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-outline-variant/10 w-full space-y-4">
            <button className="w-full py-3 bg-surface-container-low text-on-surface-variant rounded-xl text-xs font-black uppercase tracking-widest hover:bg-primary/10 hover:text-primary transition-all flex items-center gap-4 px-6 group">
              <span className="material-symbols-outlined group-hover:scale-110 transition-transform">person</span>
              Overview
            </button>
            <button className="w-full py-3 bg-primary text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-xl shadow-primary/20 flex items-center gap-4 px-6">
              <span className="material-symbols-outlined">rule_folder</span>
              Attendance
            </button>
            <button className="w-full py-3 bg-surface-container-low text-on-surface-variant rounded-xl text-xs font-black uppercase tracking-widest hover:bg-primary/10 hover:text-primary transition-all flex items-center gap-4 px-6">
              <span className="material-symbols-outlined">history</span>
              Activity
            </button>
            <button className="w-full py-3 bg-surface-container-low text-on-surface-variant rounded-xl text-xs font-black uppercase tracking-widest hover:bg-primary/10 hover:text-primary transition-all flex items-center gap-4 px-6">
              <span className="material-symbols-outlined">group</span>
              Groups
            </button>
            <button className="w-full py-3 bg-surface-container-low text-on-surface-variant rounded-xl text-xs font-black uppercase tracking-widest hover:bg-primary/10 hover:text-primary transition-all flex items-center gap-4 px-6">
              <span className="material-symbols-outlined">settings_suggest</span>
              Settings
            </button>
          </div>
        </div>

        <div className="card-curator p-6 bg-editorial-gradient text-white flex flex-col gap-4">
          <div className="flex justify-between items-start">
            <p className="text-[10px] font-black uppercase tracking-widest opacity-80">Export Profile</p>
            <span className="material-symbols-outlined text-xl">open_in_new</span>
          </div>
          <p className="text-xs font-bold leading-relaxed">Download a complete architectural audit of this user's contributions and performance.</p>
          <button className="mt-2 w-full py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-lg font-bold text-[10px] uppercase tracking-widest transition-all">Download PDF Report</button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 space-y-6">
        <div className="flex justify-between items-end mb-4">
          <nav className="flex items-center gap-2 text-xs font-bold text-on-surface-variant uppercase tracking-widest opacity-60">
            <span>Members</span>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <span className="text-primary opacity-100">Marcus Chen</span>
          </nav>
          <div className="flex gap-3">
             <button className="px-4 py-2 bg-surface-container rounded-lg text-xs font-bold text-on-surface hover:bg-surface-container-high transition-all flex items-center gap-2">
               <span className="material-symbols-outlined text-lg">edit</span>
               Edit Profile
             </button>
             <button className="px-4 py-2 bg-primary text-white rounded-lg text-xs font-bold hover:bg-primary-dim transition-all flex items-center gap-2 shadow-lg shadow-primary/20">
               <span className="material-symbols-outlined text-lg">assignment_add</span>
               Assign Task
             </button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-8 card-curator p-8 space-y-10">
            <div className="flex justify-between items-center bg-surface-container-low/50 p-6 rounded-2xl border border-outline-variant/10">
              <div className="space-y-4 flex-1 pr-6 border-r border-outline-variant/10">
                <div className="flex justify-between items-end">
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest opacity-60">Level Progression</p>
                  <p className="text-sm font-black text-primary font-headline">Level 54</p>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-3 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-primary shadow-[0_0_10px_rgba(12,86,208,0.4)]" style={{ width: '65%' }}></div>
                  </div>
                  <div className="flex justify-between items-center text-[9px] font-bold text-on-surface-variant uppercase tracking-tighter">
                    <span>1,540 / 2,000 XP to next level</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[12px] text-primary">emoji_events</span> Top 5% in Community</span>
                  </div>
                </div>
              </div>
              <div className="pl-6 flex flex-col items-end gap-2">
                 <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest opacity-60">Performance</p>
                 <div className="flex flex-col items-end">
                    <p className="text-4xl font-black text-on-surface font-headline leading-none">98%</p>
                    <p className="text-[8px] font-bold text-primary uppercase mt-1">Attendance Scale</p>
                 </div>
                 <div className="flex items-center gap-1 text-[9px] text-on-surface-variant font-medium mt-1">
                   <span className="material-symbols-outlined text-sm text-green-600">show_chart</span>
                   <span>Only 2 missed sessions in 6 months</span>
                 </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-end">
                 <h2 className="text-lg font-black text-on-surface font-headline uppercase tracking-tight">Attendance History</h2>
                 <div className="flex gap-4 child:flex child:items-center child:gap-1 child:text-[9px] child:font-bold child:uppercase child:opacity-60">
                    <div><span className="w-1.5 h-1.5 rounded-sm bg-primary"></span> Present</div>
                    <div><span className="w-1.5 h-1.5 rounded-sm bg-surface-container-highest"></span> Absent</div>
                 </div>
              </div>
              
              <div className="bg-surface-container-low/30 rounded-2xl p-6 border border-outline-variant/10">
                <div className="grid grid-cols-8 gap-1 mb-4 text-[9px] font-bold text-on-surface-variant uppercase tracking-widest text-center">
                  <div>Week</div>
                  <div>Mon</div>
                  <div>Tue</div>
                  <div>Wed</div>
                  <div>Thu</div>
                  <div>Fri</div>
                  <div>Sat</div>
                  <div>Sun</div>
                </div>
                <div className="space-y-2">
                  {attendanceGrid.map((row, i) => (
                    <div key={i} className="grid grid-cols-8 gap-2 items-center">
                      <div className="text-[10px] font-black text-on-surface opacity-40 text-center">{row.week}</div>
                      {row.days.map((day, d) => (
                        <div key={d} className={`h-12 rounded-lg flex items-center justify-center font-black text-xs transition-all cursor-pointer hover:scale-105 active:scale-95 ${
                          day === 'X' ? 'bg-primary text-white shadow-sm' : 'bg-surface-container-highest text-on-surface-variant opacity-30'
                        }`}>
                          {day}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-outline-variant/10">
               <h3 className="text-sm font-black text-on-surface uppercase tracking-widest mb-6">Meta Information</h3>
               <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-6">
                     <div>
                        <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest opacity-60 mb-1">Date Joined</p>
                        <p className="text-sm font-bold text-on-surface uppercase">November 12, 2023</p>
                     </div>
                     <div>
                        <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest opacity-60 mb-2">Assigned Assistant</p>
                        <div className="flex items-center gap-3">
                           <div className="w-6 h-6 rounded-full bg-primary/20 overflow-hidden ring-2 ring-primary ring-offset-2">
                             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuNuzwIbEHbOx42OaFa11x-NpdHg7DDZbgjNxkddiVbtRtMP0thXRFAgs8YQDNoW9O-jt2fdWs0ZGw6bL3N6z5RDNqXXk7i1s0-75Q5F2ncA3xNfKfud2KvKR1Gbe03kS_c9rueFxgsFElnbvpqfMtpoYSYSjguA1WbY6nm69I0KAWapRXVMsQRfRabcMJ8SK9bb9URSoaaMsHfYsH-JgPxcd1rfF21-WuvAUVMsr6FXyltvS9DUsDpUOyvK2jJn0fY5HK2UgCZcU" alt="Assistant" />
                           </div>
                           <span className="text-sm font-bold text-on-surface">Sarah Jenkins</span>
                        </div>
                     </div>
                  </div>
                  <div className="p-6 bg-surface-container rounded-2xl flex items-center justify-between border-l-4 border-primary">
                    <div className="space-y-1">
                      <p className="text-xs font-black text-on-surface uppercase">Super Fan</p>
                      <p className="text-[9px] font-bold text-on-surface-variant leading-tight">Priority support enabled and special badge visible.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
               </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 space-y-6">
            <div className="card-curator p-6">
              <h3 className="text-sm font-black text-on-surface uppercase tracking-widest mb-6">Current Group</h3>
              <div className="flex items-center gap-4 group cursor-pointer hover:bg-surface-container-low p-2 rounded-xl transition-all">
                <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                   <span className="material-symbols-outlined text-2xl">bolt</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-on-surface">Escuadrón <span className="text-primary font-black">Rayo</span></p>
                  <p className="text-[9px] text-on-surface-variant font-medium uppercase tracking-widest">Active since Jan 2024</p>
                </div>
                <span className="material-symbols-outlined text-primary text-sm">arrow_forward</span>
              </div>
            </div>

            <div className="card-curator p-6 border-l-4 border-primary">
               <h3 className="text-xs font-black text-on-surface-variant uppercase tracking-widest mb-4 opacity-70">Administrative Role</h3>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-black text-xl font-headline">E</div>
                  <div>
                    <p className="text-sm font-bold text-on-surface">Elite Member</p>
                    <p className="text-[9px] font-bold text-on-surface-variant opacity-60 uppercase tracking-tighter">Verified Contributor</p>
                  </div>
               </div>
            </div>

            <div className="card-curator p-6 space-y-4">
               <h3 className="text-xs font-black text-on-surface-variant uppercase tracking-widest mb-2 opacity-70">Member Actions</h3>
               <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-low transition-all group">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined opacity-40 group-hover:text-primary transition-colors">move_up</span>
                    <span className="text-[11px] font-bold text-on-surface tracking-wider">Move Group</span>
                  </div>
                  <span className="material-symbols-outlined text-sm opacity-20">chevron_right</span>
               </button>
               <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-low transition-all group">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined opacity-40 group-hover:text-primary transition-colors">event_repeat</span>
                    <span className="text-[11px] font-bold text-on-surface tracking-wider">Grant Leave</span>
                  </div>
                  <span className="material-symbols-outlined text-sm opacity-20">chevron_right</span>
               </button>
               <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-low transition-all group">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined opacity-40 group-hover:text-primary transition-colors">receipt_long</span>
                    <span className="text-[11px] font-bold text-on-surface tracking-wider">Export Activity Log</span>
                  </div>
                  <span className="material-symbols-outlined text-sm opacity-20">download</span>
               </button>
               
               <div className="pt-6 mt-2 border-t border-error/10">
                  <button className="w-full p-4 bg-error-container/20 hover:bg-error-container/40 text-on-error-container rounded-xl flex items-center gap-3 transition-all group border border-error/5">
                     <span className="material-symbols-outlined text-error opacity-60 group-hover:scale-110 transition-transform">person_off</span>
                     <span className="text-[10px] font-black uppercase tracking-widest">Deactivate Member</span>
                  </button>
                  <p className="text-[8px] text-center mt-3 text-on-surface-variant opacity-60 font-medium px-4">This will immediately revoke all access keys and notify the member of their suspension.</p>
               </div>
            </div>

            <div className="card-curator p-6 space-y-4">
               <h3 className="text-xs font-black text-on-surface-variant uppercase tracking-widest opacity-70">Last Active Note</h3>
               <div className="p-4 bg-surface-container-low rounded-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-2 opacity-5">
                    <span className="material-symbols-outlined text-4xl">format_quote</span>
                  </div>
                  <p className="text-[10px] italic font-medium leading-relaxed text-on-surface-variant">"Marcus requested access to the premium lounge area for the upcoming community meet-up."</p>
                  <div className="mt-4 flex justify-between items-center child:text-[8px] child:font-bold child:uppercase">
                    <span className="text-primary opacity-60">Assigned to Sarah</span>
                    <span className="opacity-40">2 hours ago</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalleUsuario;
