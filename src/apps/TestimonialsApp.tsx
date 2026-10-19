import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Award, Quote } from 'lucide-react';

export const TestimonialsApp: React.FC = () => {
  return (
    <div className="space-y-6 max-w-3xl mx-auto py-2">
      <div className="flex items-center space-x-3 border-b border-white/10 pb-4">
        <Award className="w-5 h-5 text-indigo-400" />
        <div>
          <h2 className="text-lg font-bold text-white">Stakeholder Testimonials</h2>
          <p className="text-xs text-slate-400">Professional endorsements and feedback</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PORTFOLIO_DATA.testimonials.map((t, idx) => (
          <div key={idx} className="glass-card p-6 rounded-2xl flex flex-col justify-between space-y-4 relative overflow-hidden group">
            <div className="glass-sheen" />
            <Quote className="absolute top-4 right-4 w-6 h-6 text-cyan-400/10 pointer-events-none" />

            <div className="space-y-3 relative z-10">
              <div className="w-10 h-10 rounded-xl glass-button flex items-center justify-center font-mono font-bold text-cyan-300">
                {t.avatar}
              </div>
              <p className="text-xs text-slate-200 leading-relaxed italic">
                "{t.comment}"
              </p>
            </div>

            <div className="pt-3 border-t border-white/10 relative z-10">
              <div className="text-xs font-bold text-white font-display">{t.name}</div>
              <div className="text-[11px] text-cyan-400 mt-0.5 font-mono">{t.role}</div>
              <div className="text-[10px] text-slate-400 mt-0.5">{t.organization}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
