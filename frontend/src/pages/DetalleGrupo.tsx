import React from 'react';

const members = [
  { id: 1, name: 'Marcus Chen', email: 'm.chen@nexus.corp', role: 'VoltRunner', level: 54, progress: 80, status: 'ACTIVE', initial: 'MC', color: 'bg-primary' },
  { id: 2, name: 'Elena Rodriguez', email: 'e.rod@nexus.corp', role: 'StarGazer', level: 31, progress: 22, status: 'IN RISK', initial: 'ER', color: 'bg-error-container text-on-error-container' },
  { id: 3, name: 'James Wilson', email: 'j.wilson@nexus.corp', role: 'ShieldLink', level: 48, progress: 64, status: 'ON LEAVE', initial: 'JW', color: 'bg-surface-container-highest text-on-surface' },
];

const DetalleGrupo: React.FC = () => {
  return (
    <div className="max-w-[1400px] mx-auto space-y-8">
      {/* Group Header Hero */}
      <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-2xl group">
        <img 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070" 
          alt="Group Background" 
          className="w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
          <div className="flex items-center gap-8 w-full">
            <div className="w-32 h-32 rounded-2xl bg-slate-900 border-4 border-white/10 flex items-center justify-center p-4 shadow-2xl">
              <span className="material-symbols-outlined text-6xl text-primary drop-shadow-[0_0_15px_rgba(12,86,208,0.5)]">bolt</span>
            </div>
            <div className="flex-1">
              <span className="px-3 py-1 bg-primary text-white text-[10px] font-bold rounded-full uppercase tracking-widest mb-3 inline-block">Tier 1 Division</span>
              <h1 className="text-5xl font-black text-white font-headline tracking-tighter">Escuadrón <span className="text-primary">Rayo</span></h1>
              <p className="text-white/70 mt-2 font-medium max-w-xl">High-performance operational unit for nexus deployment and real-time data curation.</p>
            </div>
            <div className="flex gap-3 self-end">
              <button className="px-6 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-lg font-bold text-sm transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">upload</span>
                Upload New Image
              </button>
              <button className="px-6 py-2.5 bg-primary text-white rounded-lg font-bold text-sm hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-lg shadow-primary/30">
                <span className="material-symbols-outlined text-lg">edit</span>
                Edit Group
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Dashboard */}
      <div className="grid grid-cols-4 gap-6">
        <div className="card-curator p-6 hover:-translate-y-1">
          <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1 opacity-60">Total Members</p>
          <div className="flex items-end gap-3 child-last:mb-1">
            <p className="text-3xl font-black text-on-surface font-headline">1,284</p>
            <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded-full">+12%</span>
          </div>
        </div>
        <div className="card-curator p-6 hover:-translate-y-1">
          <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1 opacity-60">Active Members</p>
          <div className="flex items-end gap-3 child-last:mb-1">
            <p className="text-3xl font-black text-on-surface font-headline">942</p>
            <span className="text-[10px] font-medium text-on-surface-variant">73% Active</span>
          </div>
        </div>
        <div className="card-curator p-6 hover:-translate-y-1">
          <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1 opacity-60">Avg. Level</p>
          <div className="flex items-end gap-3 child-last:mb-1">
            <p className="text-3xl font-black text-on-surface font-headline">Lvl 42</p>
            <span className="text-[10px] font-bold text-primary">Elite Tier</span>
          </div>
        </div>
        <div className="card-curator p-6 border-b-primary hover:-translate-y-1">
          <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1 opacity-60">Attendance Rate</p>
          <div className="flex flex-col gap-2">
            <p className="text-3xl font-black text-on-surface font-headline">98.2%</p>
            <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
              <div className="w-[98.2%] h-full bg-primary"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Members Table */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-black text-on-surface font-headline uppercase tracking-tight">Group Members</h2>
              <p className="text-sm text-on-surface-variant font-medium mt-1">Managing the operational roster of Escuadrón Rayo</p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-surface-container rounded-lg text-on-surface-variant text-xs font-bold hover:bg-surface-container-high transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">download</span>
                Export CSV
              </button>
              <button className="px-4 py-2 bg-primary text-white rounded-lg text-xs font-bold hover:bg-primary-dim transition-colors flex items-center gap-2 shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-lg whitespace-nowrap">person_add</span>
                Add Member
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-outline-variant/10 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low/50 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                  <th className="px-6 py-4">Profile</th>
                  <th className="px-6 py-4">App Identity</th>
                  <th className="px-6 py-4">Current Level</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                {members.map(member => (
                  <tr key={member.id} className="hover:bg-surface-container-low/30 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full ${member.color} flex items-center justify-center font-bold text-xs shadow-sm`}>
                          {member.initial}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors">{member.name}</p>
                          <p className="text-[10px] text-on-surface-variant font-medium">{member.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-lg">bolt</span>
                        <span className="text-xs font-medium text-on-surface">{member.role}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1 w-32">
                        <div className="flex justify-between items-end">
                          <span className="text-[10px] font-bold text-on-surface-variant uppercase">Lvl {member.level}</span>
                          <span className="text-[9px] font-bold text-on-surface-variant opacity-60">{member.progress}%</span>
                        </div>
                        <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
                          <div className="h-full bg-primary transition-all duration-1000" style={{ width: `${member.progress}%` }}></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-widest ${
                        member.status === 'ACTIVE' ? 'bg-primary/10 text-primary' : 
                        member.status === 'IN RISK' ? 'bg-error-container text-on-error-container' : 
                        'bg-surface-container-highest text-on-surface-variant'
                      }`}>
                        {member.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 hover:bg-surface-container-high rounded-full transition-colors group-hover:text-primary">
                        <span className="material-symbols-outlined text-lg">more_vert</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="px-6 py-4 bg-surface-container-low/30 border-t border-outline-variant/10 flex justify-between items-center text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
              <span>Showing {members.length} of 1,284 entries</span>
              <div className="flex gap-4">
                <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined text-lg">chevron_left</span></button>
                <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined text-lg">chevron_right</span></button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Metadata */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <div className="card-curator p-6 space-y-6">
            <div>
              <h3 className="text-sm font-black text-on-surface uppercase tracking-widest mb-4">Group Metadata</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-outline-variant/10">
                  <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Creation Date</span>
                  <div className="flex items-center gap-2 text-xs font-bold text-on-surface">
                    <span className="material-symbols-outlined text-primary text-sm">calendar_today</span>
                    Oct 14, 2023
                  </div>
                </div>
                <div className="pb-3 border-b border-outline-variant/10">
                  <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider block mb-3">Assigned Assistant</span>
                  <div className="flex items-center gap-3 p-2 bg-surface-container-low rounded-lg">
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-primary/20">
                      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuNuzwIbEHbOx42OaFa11x-NpdHg7DDZbgjNxkddiVbtRtMP0thXRFAgs8YQDNoW9O-jt2fdWs0ZGw6bL3N6z5RDNqXXk7i1s0-75Q5F2ncA3xNfKfud2KvKR1Gbe03kS_c9rueFxgsFElnbvpqfMtpoYSYSjguA1WbY6nm69I0KAWapRXVMsQRfRabcMJ8SK9bb9URSoaaMsHfYsH-JgPxcd1rfF21-WuvAUVMsr6FXyltvS9DUsDpUOyvK2jJn0fY5HK2UgCZcU" alt="Assistant" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-on-surface">Sarah Jenkins</p>
                      <p className="text-[9px] font-bold text-primary uppercase">Senior Moderator</p>
                    </div>
                  </div>
                </div>
                <div>
                  <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider block mb-3">Integrations</span>
                  <div className="p-3 border border-outline-variant/20 rounded-lg flex items-center justify-between hover:bg-surface-container-low transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-green-600">article</span>
                      <span className="text-[11px] font-bold text-on-surface">Google Sheets Sync</span>
                    </div>
                    <span className="material-symbols-outlined text-sm opacity-30">open_in_new</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-end mb-4">
                <h3 className="text-sm font-black text-on-surface uppercase tracking-widest">Weekly Pulse</h3>
                <span className="text-[9px] font-bold text-on-surface-variant uppercase opacity-60">Last 7 Days</span>
              </div>
              <div className="flex items-end justify-between gap-1 h-32 px-2">
                {[45, 80, 55, 90, 70, 85, 95].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                    <div className="w-full bg-primary/10 rounded-t-sm group-hover:bg-primary/20 transition-all cursor-pointer relative" style={{ height: `${h}%` }}>
                      <div className={`absolute bottom-0 left-0 right-0 ${i === 6 ? 'bg-primary' : 'bg-primary/40'} rounded-t-sm group-hover:h-full transition-all`} style={{ height: '40%' }}></div>
                    </div>
                    <span className={`text-[8px] font-bold uppercase ${i > 4 ? 'text-primary' : 'text-on-surface-variant opacity-60'}`}>{['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex gap-4 child:flex child:items-center child:gap-1 child:text-[8px] child:font-bold child:uppercase child:opacity-60">
                <div><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Present</div>
                <div><span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span> Missed</div>
                <div><span className="w-1.5 h-1.5 rounded-full bg-surface-container-highest"></span> Excused</div>
              </div>
            </div>

            <div className="pt-6 border-t border-outline-variant/10 space-y-3">
              <button className="w-full py-3 bg-surface-container text-on-surface rounded-lg text-xs font-black uppercase tracking-widest hover:bg-surface-container-high transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-lg">mail</span>
                Message All Members
              </button>
              <button className="w-full text-[10px] font-bold text-error hover:underline text-center uppercase tracking-tighter opacity-70">
                Deactivate Group Archive
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalleGrupo;
