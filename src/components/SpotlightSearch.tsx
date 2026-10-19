import React, { useState, useEffect } from 'react';
import { Search, FolderGit2, User, Activity, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface SpotlightSearchProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenApp: (appId: string) => void;
}

export const SpotlightSearch: React.FC<SpotlightSearchProps> = ({ isOpen, onClose, onOpenApp }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const matches = query.trim() === '' ? [] : [
    { title: 'About Golebileone Setlamelo', type: 'App', id: 'about', icon: User },
    { title: 'Projects & Systems', type: 'App', id: 'projects', icon: FolderGit2 },
    { title: 'Skills Telemetry', type: 'App', id: 'skills', icon: Activity },
    { title: 'Résumé & CV', type: 'App', id: 'resume', icon: FileText },
    ...PORTFOLIO_DATA.projects
      .filter(p => p.title.toLowerCase().includes(query.toLowerCase()) || p.description.toLowerCase().includes(query.toLowerCase()))
      .map(p => ({ title: p.title, type: 'Project', id: 'projects', icon: FolderGit2 }))
  ].filter((item, idx, arr) => arr.findIndex(i => i.title === item.title) === idx).slice(0, 6);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 bg-black/60 backdrop-blur-2xl p-4" onClick={onClose}>
      <div 
        className="aurora-window w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl border border-white/20 relative"
        onClick={e => e.stopPropagation()}
      >
        <div className="glass-sheen" />

        <div className="flex items-center px-4 py-3.5 border-b border-white/10 space-x-3 relative z-10 bg-white/[0.02]">
          <Search className="w-5 h-5 text-cyan-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Spotlight Search (Search apps, projects, skills...)"
            className="w-full bg-transparent text-sm focus:outline-none placeholder:text-slate-500 font-sans text-white"
            autoFocus
          />
          <span className="text-[10px] font-mono px-2 py-0.5 rounded glass-pill text-cyan-300">ESC</span>
        </div>

        {query.trim() !== '' && (
          <div className="p-2 space-y-1 max-h-80 overflow-y-auto relative z-10 scrollbar-thin">
            {matches.length === 0 ? (
              <div className="text-center py-8 text-xs text-slate-400">No results found for "{query}"</div>
            ) : (
              matches.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      onOpenApp(item.id);
                      onClose();
                    }}
                    className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-white/10 border border-transparent hover:border-cyan-400/30 flex items-center justify-between transition cursor-pointer group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg glass-button flex items-center justify-center text-cyan-300">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-cyan-300">{item.title}</div>
                        <div className="text-[10px] text-slate-400 font-mono">{item.type}</div>
                      </div>
                    </div>
                    <span className="text-xs text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity font-mono">Launch →</span>
                  </button>
                );
              })
            )}
          </div>
        )}
      </div>
    </div>
  );
};
