import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { FileText, Download, CheckCircle2 } from 'lucide-react';

export const ResumeApp: React.FC = () => {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloaded(true);
      const element = document.createElement("a");
      const file = new Blob([
        `CURRICULUM VITAE\n\n${PORTFOLIO_DATA.owner.name} (Alias: ${PORTFOLIO_DATA.owner.alias})\n${PORTFOLIO_DATA.owner.title}\n${PORTFOLIO_DATA.owner.location}\nEmail: ${PORTFOLIO_DATA.owner.email}\n\nEXPERIENCE:\n` +
        PORTFOLIO_DATA.experience.map(e => `${e.period} - ${e.role} @ ${e.organization}\n${e.summary}\n`).join('\n') +
        `\nEDUCATION:\n` +
        PORTFOLIO_DATA.education.map(ed => `${ed.degree} - ${ed.institution}`).join('\n')
      ], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = "Golebileone_Setlamelo_Resume.txt";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }, 1000);
  };

  return (
    <div className="space-y-6 max-w-3xl mx-auto py-2">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center space-x-3">
          <FileText className="w-5 h-5 text-indigo-400" />
          <div>
            <h2 className="text-lg font-bold text-white">Curriculum Vitae</h2>
            <p className="text-xs text-slate-400">Official document view</p>
          </div>
        </div>
        <button
          onClick={handleDownload}
          disabled={downloading}
          className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center space-x-2 transition cursor-pointer disabled:opacity-50 shadow-lg shadow-indigo-600/20"
        >
          {downloading ? (
            <>
              <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Generating...</span>
            </>
          ) : downloaded ? (
            <>
              <CheckCircle2 className="w-4 h-4 text-emerald-300" />
              <span>Downloaded</span>
            </>
          ) : (
            <>
              <Download className="w-4 h-4" />
              <span>Download Résumé</span>
            </>
          )}
        </button>
      </div>

      <div className="glass-card p-8 rounded-2xl space-y-6 font-sans text-xs text-slate-200 relative overflow-hidden">
        <div className="glass-sheen" />
        <div className="border-b border-white/10 pb-6 text-center space-y-1 relative z-10">
          <h1 className="text-2xl font-bold text-white font-display">{PORTFOLIO_DATA.owner.name}</h1>
          <p className="text-cyan-400 font-medium font-mono text-xs">{PORTFOLIO_DATA.owner.title}</p>
          <p className="text-slate-400">{PORTFOLIO_DATA.owner.location} · {PORTFOLIO_DATA.owner.email}</p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xs font-bold text-indigo-300 uppercase tracking-wider">Professional Summary</h2>
          <p className="text-slate-300 leading-relaxed">{PORTFOLIO_DATA.owner.bio}</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xs font-bold text-indigo-300 uppercase tracking-wider">Experience</h2>
          {PORTFOLIO_DATA.experience.map((exp, idx) => (
            <div key={idx} className="space-y-1 pb-3 border-b border-white/5">
              <div className="flex justify-between font-bold text-white">
                <span>{exp.role}</span>
                <span className="text-indigo-400 font-mono">{exp.period}</span>
              </div>
              <div className="text-slate-400">{exp.organization} · {exp.location}</div>
              <p className="text-slate-300 pt-1">{exp.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
