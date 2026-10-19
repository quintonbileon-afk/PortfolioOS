import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Clock, MapPin } from 'lucide-react';

export const ExperienceApp: React.FC = () => {
  return (
    <div className="space-y-6 max-w-3xl mx-auto py-2">
      <div className="flex items-center space-x-3 border-b border-white/10 pb-4">
        <div className="w-9 h-9 rounded-xl glass-button flex items-center justify-center text-cyan-400">
          <Clock className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-white">Professional Experience</h2>
          <p className="text-xs text-slate-400">Career timeline & leadership roles</p>
        </div>
      </div>

      <div className="space-y-6 relative pl-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-cyan-400 before:via-violet-500 before:to-pink-500/20">
        {PORTFOLIO_DATA.experience.map((exp, idx) => (
          <div key={idx} className="relative pl-6 space-y-3">
            <div className="absolute -left-6 top-2 w-3.5 h-3.5 rounded-full bg-cyan-400 border-2 border-[#0E1526] shadow-[0_0_12px_#22D3EE]" />

            <div className="glass-card p-6 rounded-2xl space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <h3 className="text-base font-bold text-white font-display">{exp.role}</h3>
                <span className="glass-pill px-3 py-0.5 text-xs font-mono text-cyan-300 w-fit mt-1 sm:mt-0">
                  {exp.period}
                </span>
              </div>

              <div className="text-xs text-slate-400 flex items-center space-x-2">
                <span className="font-semibold text-cyan-300">{exp.organization}</span>
                <span>·</span>
                <span className="flex items-center space-x-1">
                  <MapPin className="w-3 h-3 text-slate-400" />
                  <span>{exp.location}</span>
                </span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {exp.summary}
              </p>

              <div className="space-y-1.5 pt-2 border-t border-white/10">
                {exp.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-start space-x-2 text-xs text-slate-300">
                    <span className="text-cyan-400">›</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {exp.skills.map((s, sIdx) => (
                  <span key={sIdx} className="glass-pill px-2.5 py-0.5 text-slate-300 text-[11px] font-mono">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
