import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { 
  Monitor, 
  Mail, 
  MapPin, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles,
  Shield,
  Layers,
  ArrowRight
} from 'lucide-react';

interface ClassicPortfolioProps {
  onReturnToOS: () => void;
}

export const ClassicPortfolio: React.FC<ClassicPortfolioProps> = ({ onReturnToOS }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProjects = selectedCategory === 'All'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#06080F] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black relative overflow-x-hidden">
      {/* Living Aurora Orbs for Glass Refraction */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[10%] left-[15%] w-[650px] h-[650px] bg-cyan-500/12 rounded-full blur-[170px] aurora-orb-1" />
        <div className="absolute top-[40%] right-[10%] w-[700px] h-[700px] bg-violet-600/14 rounded-full blur-[180px] aurora-orb-2" />
        <div className="absolute bottom-[10%] left-[25%] w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[160px] aurora-orb-3" />
        <div className="absolute inset-0 cyber-grid opacity-20" />
      </div>

      {/* Frosted Glass Sticky Top Banner */}
      <header className="aurora-menubar px-6 py-3.5 flex items-center justify-between sticky top-0 z-50 select-none">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-xl glass-button flex items-center justify-center font-mono font-bold text-cyan-300 shadow-md">
            GS
          </div>
          <div>
            <span className="text-sm font-bold text-white font-display">{PORTFOLIO_DATA.owner.name}</span>
            <span className="text-xs text-cyan-400 font-mono hidden sm:inline ml-2.5">// PortfolioOS Classic View</span>
          </div>
        </div>
        <button
          onClick={onReturnToOS}
          className="px-4 py-2 rounded-xl glass-button text-cyan-300 hover:text-white transition flex items-center space-x-2 text-xs font-mono cursor-pointer shadow-lg hover:border-cyan-400/50"
        >
          <Monitor className="w-4 h-4 text-cyan-400" />
          <span>Launch PortfolioOS</span>
        </button>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28 text-center relative z-10">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-pill text-cyan-300 text-xs font-mono mb-6 shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>{PORTFOLIO_DATA.owner.experienceYears} · {PORTFOLIO_DATA.owner.location}</span>
        </div>

        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-white mb-3 font-display">
          Golebileone <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400">Setlamelo</span>
        </h1>

        <div className="mb-6 flex justify-center items-center">
          <span className="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/35 text-xs text-cyan-300 font-mono tracking-wide">
            Alias: Quinton
          </span>
        </div>

        <p className="text-lg md:text-2xl text-cyan-200/90 max-w-3xl mx-auto font-mono mb-8 leading-relaxed">
          {PORTFOLIO_DATA.owner.title}
        </p>

        <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base mb-10 leading-relaxed font-sans">
          {PORTFOLIO_DATA.owner.currentRole}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold font-mono text-xs flex items-center space-x-2 shadow-lg shadow-cyan-500/25 transition cursor-pointer"
          >
            <span>Explore Systems</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="px-6 py-3.5 rounded-xl glass-button text-white font-medium text-xs hover:border-cyan-400/50 transition cursor-pointer"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Frosted Glass Stats Row */}
      <section className="max-w-6xl mx-auto px-6 py-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass-card p-6 rounded-2xl text-center group">
            <div className="glass-sheen" />
            <div className="text-3xl md:text-4xl font-extrabold text-white font-mono relative z-10">{PORTFOLIO_DATA.owner.stats.ictYears}+</div>
            <div className="text-xs text-slate-400 mt-1 relative z-10 font-mono">Years ICT Experience</div>
          </div>
          <div className="glass-card p-6 rounded-2xl text-center group">
            <div className="glass-sheen" />
            <div className="text-3xl md:text-4xl font-extrabold text-cyan-400 font-mono relative z-10">{PORTFOLIO_DATA.owner.stats.schoolsServed}</div>
            <div className="text-xs text-slate-400 mt-1 relative z-10 font-mono">Primary Schools Served</div>
          </div>
          <div className="glass-card p-6 rounded-2xl text-center group">
            <div className="glass-sheen" />
            <div className="text-3xl md:text-4xl font-extrabold text-emerald-400 font-mono relative z-10">{PORTFOLIO_DATA.owner.stats.productsBuilt}</div>
            <div className="text-xs text-slate-400 mt-1 relative z-10 font-mono">Public Sector Systems</div>
          </div>
          <div className="glass-card p-6 rounded-2xl text-center group">
            <div className="glass-sheen" />
            <div className="text-3xl md:text-4xl font-extrabold text-violet-400 font-mono relative z-10">{PORTFOLIO_DATA.owner.stats.systemUptime}</div>
            <div className="text-xs text-slate-400 mt-1 relative z-10 font-mono">System Reliability SLA</div>
          </div>
        </div>
      </section>

      {/* Projects Section with Frosted Glass Cards */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center mb-12">
          <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2">PORTFOLIO ARCHITECTURE</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 font-display">Featured Systems & Software</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            Scalable, mission-critical digital products engineered for Botswana's public sector, healthcare logistics, and identity infrastructure.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {['All', 'Education', 'Health', 'Identity & Finance', 'Public Sector'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-black font-bold shadow-lg shadow-cyan-500/30'
                    : 'glass-pill text-slate-300 hover:text-white hover:border-cyan-400/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project: Project) => (
            <div key={project.id} className="glass-card p-7 rounded-3xl flex flex-col justify-between group">
              <div className="glass-sheen" />
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <span className="glass-pill px-3 py-1 text-cyan-300 font-mono text-[10px]">
                    {project.category}
                  </span>
                  <span className="text-xs text-emerald-400 font-mono flex items-center space-x-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{project.status}</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1 font-display group-hover:text-cyan-300 transition-colors">{project.title}</h3>
                <p className="text-xs text-cyan-400 font-mono mb-3">{project.subtitle}</p>
                <p className="text-sm text-slate-200 mb-5 leading-relaxed">{project.description}</p>

                <div className="bg-[#0B101D]/75 p-4 rounded-2xl border border-white/10 space-y-2 mb-5 text-xs backdrop-blur-md">
                  <div><strong className="text-cyan-400 font-mono">Problem:</strong> <span className="text-slate-300">{project.problem}</span></div>
                  <div><strong className="text-violet-400 font-mono">Solution:</strong> <span className="text-slate-300">{project.solution}</span></div>
                  <div><strong className="text-emerald-400 font-mono">Outcome:</strong> <span className="text-slate-300">{project.metrics}</span></div>
                </div>
              </div>

              <div className="relative z-10 pt-2 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="glass-pill px-2.5 py-0.5 text-slate-300 text-[10px] font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="max-w-4xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center mb-12">
          <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2">CAREER TIMELINE</div>
          <h2 className="text-3xl font-bold text-white mb-3 font-display">Professional Experience</h2>
          <p className="text-slate-400 text-sm">12+ years of ICT leadership and enterprise systems engineering.</p>
        </div>

        <div className="space-y-6">
          {PORTFOLIO_DATA.experience.map((exp, idx) => (
            <div key={idx} className="glass-card p-7 rounded-3xl relative overflow-hidden group">
              <div className="glass-sheen" />
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white font-display">{exp.role}</h3>
                  <span className="glass-pill text-xs font-mono text-cyan-300 px-3 py-1 w-fit mt-1 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <div className="text-sm font-semibold text-violet-300 mb-3 font-mono">{exp.organization} // {exp.location}</div>
                <p className="text-sm text-slate-200 mb-4 leading-relaxed">{exp.summary}</p>
                
                <ul className="space-y-1.5 mb-5 text-xs text-slate-300">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="text-cyan-400 font-bold">›</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                  {exp.skills.map(s => (
                    <span key={s} className="glass-pill px-2.5 py-0.5 text-slate-300 text-[10px] font-mono">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-20 relative z-10">
        <div className="glass-card p-8 md:p-14 rounded-3xl text-center relative overflow-hidden group">
          <div className="glass-sheen" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">Let's Build the Future Together</h2>
            <p className="text-slate-300 max-w-xl mx-auto text-sm mb-8 leading-relaxed">
              Available for digital transformation consulting, mission-critical full-stack software development, or public sector systems engineering.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 text-xs font-mono text-cyan-300">
              <div className="flex items-center justify-center space-x-2.5 glass-card px-5 py-3 rounded-xl">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{PORTFOLIO_DATA.owner.email}</span>
              </div>
              <div className="flex items-center justify-center space-x-2.5 glass-card px-5 py-3 rounded-xl">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{PORTFOLIO_DATA.owner.location}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-xs text-slate-500 font-mono relative z-10">
        © {new Date().getFullYear()} Golebileone Quinton Setlamelo. All rights reserved. PortfolioOS Classic View.
      </footer>
    </div>
  );
};
