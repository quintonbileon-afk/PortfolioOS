import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { Folder, FileCode, CheckCircle2, ExternalLink } from 'lucide-react';

export const ProjectsApp: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProjectId, setSelectedProjectId] = useState<string>(PORTFOLIO_DATA.projects[0].id);
  const [caseStudyActive, setCaseStudyActive] = useState(false);

  const categories = ['All', 'Education', 'Health', 'Identity & Finance', 'Public Sector'];

  const filteredProjects = selectedCategory === 'All'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === selectedCategory);

  const currentProject = PORTFOLIO_DATA.projects.find(p => p.id === selectedProjectId) || PORTFOLIO_DATA.projects[0];

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 h-full min-h-[480px]">
      {/* Glassmorphic Sidebar */}
      <div className="md:col-span-4 glass-card p-4 rounded-2xl flex flex-col space-y-3">
        <div className="text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-wider px-2 pb-1 border-b border-white/10 flex items-center justify-between">
          <span>CATEGORIES</span>
          <span className="text-slate-400 font-normal">FILTER</span>
        </div>
        <div className="space-y-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition cursor-pointer flex items-center space-x-2 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500/25 to-violet-500/25 border border-cyan-400/40 text-cyan-200 shadow-sm'
                  : 'text-slate-300 hover:bg-white/10'
              }`}
            >
              <Folder className="w-4 h-4 opacity-75 text-cyan-400" />
              <span>{cat}</span>
            </button>
          ))}
        </div>

        <div className="pt-2 border-t border-white/10 text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-wider px-2">
          SYSTEMS ({filteredProjects.length})
        </div>
        <div className="space-y-1 flex-1 overflow-y-auto pr-1 scrollbar-thin">
          {filteredProjects.map((proj) => {
            const isSelected = proj.id === selectedProjectId;
            return (
              <button
                key={proj.id}
                onClick={() => setSelectedProjectId(proj.id)}
                className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-medium transition cursor-pointer flex items-center space-x-2.5 ${
                  isSelected
                    ? 'bg-white/15 text-white border border-white/20 shadow-[0_0_15px_rgba(34,211,238,0.15)]'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                <FileCode className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="truncate">{proj.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Glassmorphic Detail Pane */}
      <div className="md:col-span-8 glass-card p-6 rounded-2xl flex flex-col justify-between overflow-y-auto scrollbar-thin">
        <div className="space-y-5">
          <div className="flex justify-between items-start border-b border-white/10 pb-4">
            <div>
              <div className="flex items-center space-x-2 text-xs text-slate-400 font-mono mb-1">
                <span className="text-cyan-300">{currentProject.category}</span>
                <span>·</span>
                <span className="text-emerald-400 flex items-center space-x-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>{currentProject.status}</span>
                </span>
              </div>
              <h2 className="text-2xl font-bold text-white">{currentProject.title}</h2>
              <p className="text-xs text-cyan-300/90 font-mono mt-1">{currentProject.subtitle}</p>
            </div>
          </div>

          <p className="text-sm text-slate-200 leading-relaxed">
            {currentProject.description}
          </p>

          <div className="space-y-3 bg-[#0B101D]/70 p-4 rounded-xl border border-white/10 text-xs backdrop-blur-md">
            <div>
              <span className="font-semibold text-cyan-400 font-mono">Problem Statement:</span>
              <p className="text-slate-300 mt-0.5 leading-relaxed">{currentProject.problem}</p>
            </div>
            <div>
              <span className="font-semibold text-violet-400 font-mono">Architectural Solution:</span>
              <p className="text-slate-300 mt-0.5 leading-relaxed">{currentProject.solution}</p>
            </div>
            <div>
              <span className="font-semibold text-emerald-400 font-mono">Measurable Impact:</span>
              <p className="text-slate-300 mt-0.5 leading-relaxed">{currentProject.metrics}</p>
            </div>
          </div>

          <div>
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2">Tech Stack Architecture</div>
            <div className="flex flex-wrap gap-1.5">
              {currentProject.techStack.map((tech) => (
                <span key={tech} className="glass-pill px-3 py-1 text-slate-200 text-xs font-mono font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex items-center justify-between">
          <span className="text-[11px] font-mono text-cyan-400">
            {caseStudyActive ? '✓ Spec Sheet & Architecture Blueprint Active' : 'Architecture Verified'}
          </span>
          <button
            onClick={() => {
              setCaseStudyActive(true);
              setTimeout(() => setCaseStudyActive(false), 3000);
            }}
            className="px-4 py-2 rounded-xl glass-button text-white text-xs font-semibold flex items-center space-x-2 transition cursor-pointer hover:border-cyan-400/50"
          >
            <span>{caseStudyActive ? 'Blueprint Loaded' : 'View Blueprint'}</span>
            <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>
      </div>
    </div>
  );
};
