import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Activity, Cpu, Layers } from 'lucide-react';

export const SkillsApp: React.FC = () => {
  return (
    <div className="space-y-6 max-w-3xl mx-auto py-2">
      <div className="flex items-center space-x-3 border-b border-white/10 pb-4">
        <div className="w-9 h-9 rounded-xl glass-button flex items-center justify-center text-cyan-400">
          <Activity className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-white">Technical Competency & Architecture</h2>
          <p className="text-xs text-slate-400">12+ Years Enterprise & Public Sector ICT Experience</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5">
        {PORTFOLIO_DATA.skills.map((cat, idx) => (
          <div key={idx} className="glass-card p-6 rounded-2xl space-y-4 relative overflow-hidden group">
            <div className="glass-sheen" />
            <div className="flex items-center justify-between border-b border-white/10 pb-2 relative z-10">
              <h3 className="text-sm font-semibold text-white tracking-wide font-display">{cat.category}</h3>
              <span className="text-[10px] font-mono text-cyan-400">TELEMETRY_OK</span>
            </div>

            <div className="space-y-4">
              {cat.skills.map((skill, sIdx) => (
                <div key={sIdx} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-slate-200">{skill.name}</span>
                    <span className="text-cyan-400 font-mono font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden border border-white/10 p-[1px]">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-violet-500 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.4)]"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-slate-400">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
