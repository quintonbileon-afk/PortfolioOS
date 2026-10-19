import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, Award, ShieldCheck } from 'lucide-react';

export const EducationApp: React.FC = () => {
  return (
    <div className="space-y-6 max-w-3xl mx-auto py-2">
      <div className="flex items-center space-x-3 border-b border-white/10 pb-4">
        <div className="w-9 h-9 rounded-xl glass-button flex items-center justify-center text-cyan-400">
          <GraduationCap className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-white font-display">Academic Qualifications & Certifications</h2>
          <p className="text-xs text-slate-400">Formal education and industry accreditations</p>
        </div>
      </div>

      <div className="space-y-4">
        {PORTFOLIO_DATA.education.map((edu, idx) => (
          <div key={idx} className="glass-card p-6 rounded-2xl relative overflow-hidden space-y-3 group">
            <div className="glass-sheen" />
            <div className="flex items-center space-x-2 relative z-10">
              <span className="glass-pill px-3 py-0.5 text-cyan-300 font-mono text-xs">
                {edu.period}
              </span>
              <span className="text-xs text-emerald-400 font-medium flex items-center space-x-1 font-mono">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Credential</span>
              </span>
            </div>

            <h3 className="text-lg font-bold text-white font-display relative z-10">{edu.degree}</h3>
            <div className="text-sm font-medium text-cyan-300 relative z-10 font-mono">{edu.institution}</div>
            <p className="text-xs text-slate-300 leading-relaxed max-w-2xl relative z-10">
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
