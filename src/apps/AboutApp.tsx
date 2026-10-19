import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  MapPin, 
  Shield, 
  GraduationCap, 
  Award, 
  Cpu, 
  Activity, 
  FolderGit2, 
  FileText, 
  Mail, 
  ArrowRight,
  Code2,
  Database,
  Radio,
  CheckCircle2,
  Clock,
  Briefcase
} from 'lucide-react';

interface AboutAppProps {
  onOpenApp?: (id: string) => void;
}

export const AboutApp: React.FC<AboutAppProps> = ({ onOpenApp }) => {
  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-4">
      {/* Hero Header Glass Card */}
      <div className="glass-card p-6 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-5 relative overflow-hidden border border-white/15 bg-[#0E1526]/85">
        <div className="glass-sheen" />
        <div className="w-20 h-20 rounded-2xl p-[2px] bg-gradient-to-tr from-cyan-400 via-indigo-500 to-violet-500 shadow-[0_0_24px_rgba(34,211,238,0.3)] shrink-0 relative z-10">
          <div className="w-full h-full rounded-[14px] bg-[#0E1526] flex items-center justify-center text-2xl font-bold text-white font-mono tracking-wider">
            GS
          </div>
        </div>
        
        <div className="text-center sm:text-left space-y-1.5 flex-1 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-display">
                {PORTFOLIO_DATA.owner.name}
              </h1>
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-400/35 text-[11px] text-cyan-300 font-mono tracking-wide">
                Alias: {PORTFOLIO_DATA.owner.alias}
              </span>
            </div>
            
            <span className="glass-pill px-3 py-1 text-[11px] text-cyan-200 font-mono w-fit mx-auto sm:mx-0 border border-cyan-500/30 bg-cyan-950/40">
              Mabutsane, Botswana
            </span>
          </div>

          <p className="text-xs sm:text-sm font-semibold text-cyan-300 font-mono tracking-wide">
            {PORTFOLIO_DATA.owner.title}
          </p>

          <div className="flex items-center justify-center sm:justify-start space-x-2.5 text-xs text-slate-200 pt-0.5 font-medium">
            <div className="flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>{PORTFOLIO_DATA.owner.location}</span>
            </div>
            <span>·</span>
            <span className="text-violet-300 font-mono font-semibold">{PORTFOLIO_DATA.owner.experienceYears}</span>
            <span>·</span>
            <span className="text-emerald-400 font-mono">BOCRA UASF</span>
          </div>

          <p className="text-xs sm:text-[13px] text-slate-100 leading-relaxed pt-2 font-normal">
            {PORTFOLIO_DATA.owner.bio}
          </p>
        </div>
      </div>

      {/* High-Contrast Key Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="glass-card p-4 rounded-xl text-center border border-white/10 bg-[#0E1526]/75">
          <div className="text-2xl font-bold text-white font-mono">{PORTFOLIO_DATA.owner.stats.ictYears}+</div>
          <div className="text-xs text-slate-200 font-medium mt-1">Years ICT Experience</div>
        </div>
        <div className="glass-card p-4 rounded-xl text-center border border-white/10 bg-[#0E1526]/75">
          <div className="text-2xl font-bold text-cyan-300 font-mono">{PORTFOLIO_DATA.owner.stats.schoolsServed}</div>
          <div className="text-xs text-slate-200 font-medium mt-1">Schools Connected</div>
        </div>
        <div className="glass-card p-4 rounded-xl text-center border border-white/10 bg-[#0E1526]/75">
          <div className="text-2xl font-bold text-emerald-300 font-mono">{PORTFOLIO_DATA.owner.stats.productsBuilt}</div>
          <div className="text-xs text-slate-200 font-medium mt-1">Production Products</div>
        </div>
        <div className="glass-card p-4 rounded-xl text-center border border-white/10 bg-[#0E1526]/75">
          <div className="text-2xl font-bold text-violet-300 font-mono">{PORTFOLIO_DATA.owner.stats.systemUptime}</div>
          <div className="text-xs text-slate-200 font-medium mt-1">Infrastructure Uptime</div>
        </div>
      </div>

      {/* Two Foundation Cards: Current Assignment & Academic Foundation (High Contrast) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="glass-card p-5 rounded-xl space-y-2.5 border border-white/15 bg-[#0E1526]/85">
          <div className="flex items-center space-x-2 text-xs font-bold text-emerald-400 uppercase tracking-wider font-mono">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>Current Assignment</span>
          </div>
          <p className="text-xs sm:text-[13px] text-slate-100 leading-relaxed font-normal">
            {PORTFOLIO_DATA.owner.currentRole}
          </p>
          <div className="pt-1">
            <span className="inline-block px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-400/35 text-[11px] text-emerald-300 font-mono">
              Universal Access & Service Fund (UASF)
            </span>
          </div>
        </div>

        <div className="glass-card p-5 rounded-xl space-y-2.5 border border-white/15 bg-[#0E1526]/85">
          <div className="flex items-center space-x-2 text-xs font-bold text-violet-400 uppercase tracking-wider font-mono">
            <GraduationCap className="w-4 h-4 text-violet-400" />
            <span>Academic Foundation</span>
          </div>
          <p className="text-xs sm:text-[13px] font-bold text-white">
            {PORTFOLIO_DATA.owner.education}
          </p>
          <p className="text-xs text-slate-200 leading-relaxed font-normal">
            Comprehensive honours degree covering distributed network protocols, high-concurrency software architectures, microservices, and robust cybersecurity.
          </p>
          <div className="pt-1">
            <span className="inline-block px-2.5 py-1 rounded-md bg-violet-500/15 border border-violet-400/35 text-[11px] text-violet-300 font-mono">
              University of Sunderland · UK (2:1 Hons)
            </span>
          </div>
        </div>
      </div>

      {/* Currently Building Ticker / Priority Initiatives Strip */}
      <div className="glass-card p-5 rounded-xl border border-cyan-500/30 bg-[#0E1526]/90 relative overflow-hidden">
        <div className="glass-sheen" />
        <div className="flex items-center justify-between mb-3 relative z-10">
          <div className="flex items-center space-x-2 text-xs font-bold text-cyan-300 font-mono uppercase tracking-wider">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
            <span>Currently Building & Live Initiatives</span>
          </div>
          <span className="text-[10px] font-mono text-slate-300 bg-white/5 px-2 py-0.5 rounded border border-white/10">
            Active 2026
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 relative z-10">
          <div className="p-3.5 rounded-xl bg-white/[0.04] border border-cyan-500/20 hover:border-cyan-400/40 transition">
            <div className="flex items-center justify-between text-xs font-bold text-white mb-1">
              <span>Edu-Suite Ecosystem v2.4</span>
              <span className="text-[10px] text-cyan-400 font-mono">Rollout</span>
            </div>
            <p className="text-[11px] text-slate-200 leading-relaxed">
              Expanding offline-first progressive web sync & smart classroom analytics across 24 remote primary schools.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-white/[0.04] border border-violet-500/20 hover:border-violet-400/40 transition">
            <div className="flex items-center justify-between text-xs font-bold text-white mb-1">
              <span>NexusKYC Biometric Gateway</span>
              <span className="text-[10px] text-violet-400 font-mono">Security</span>
            </div>
            <p className="text-[11px] text-slate-200 leading-relaxed">
              Edge-accelerated national ID OCR & facial liveness verification with zero persistent raw biometric storage.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-white/[0.04] border border-emerald-500/20 hover:border-emerald-400/40 transition">
            <div className="flex items-center justify-between text-xs font-bold text-white mb-1">
              <span>MedTrack BW Cold-Chain IoT</span>
              <span className="text-[10px] text-emerald-400 font-mono">Telemetry</span>
            </div>
            <p className="text-[11px] text-slate-200 leading-relaxed">
              Real-time cellular IoT telemetry monitoring vaccine temperatures and inventory across rural health clinics.
            </p>
          </div>
        </div>
      </div>

      {/* Core Technical Matrix & Competency Strip */}
      <div className="glass-card p-5 rounded-xl border border-white/15 bg-[#0E1526]/85 space-y-3.5">
        <div className="flex items-center space-x-2 text-xs font-bold text-cyan-300 font-mono uppercase tracking-wider">
          <Code2 className="w-4 h-4 text-cyan-400" />
          <span>Core Competencies & Technology Stack</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="space-y-1.5 p-3 rounded-lg bg-black/25 border border-white/10">
            <div className="text-[11px] font-bold text-cyan-300 font-mono">Frontend & User Experience</div>
            <p className="text-xs text-slate-100 font-medium leading-relaxed">
              React 19, TypeScript, Next.js, Tailwind CSS, Progressive Web Apps (PWA), Offline-First Architecture.
            </p>
          </div>

          <div className="space-y-1.5 p-3 rounded-lg bg-black/25 border border-white/10">
            <div className="text-[11px] font-bold text-violet-300 font-mono">Backend & Data Systems</div>
            <p className="text-xs text-slate-100 font-medium leading-relaxed">
              Node.js, Express, Python / FastAPI, PostgreSQL, Redis, RESTful APIs, Secure RBAC.
            </p>
          </div>

          <div className="space-y-1.5 p-3 rounded-lg bg-black/25 border border-white/10">
            <div className="text-[11px] font-bold text-emerald-300 font-mono">Systems & Infrastructure</div>
            <p className="text-xs text-slate-100 font-medium leading-relaxed">
              Docker, Linux Debian/Ubuntu, VSAT & LTE Networks, IoT / MQTT Telemetry, Public Sector IT Compliance.
            </p>
          </div>
        </div>
      </div>

      {/* Career Timeline Highlights */}
      <div className="glass-card p-5 rounded-xl border border-white/15 bg-[#0E1526]/85 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs font-bold text-white font-mono uppercase tracking-wider">
            <Briefcase className="w-4 h-4 text-cyan-400" />
            <span>Career Milestones & Leadership</span>
          </div>
          <span className="text-[11px] text-cyan-300 font-mono">12+ Years Total ICT</span>
        </div>

        <div className="space-y-3">
          <div className="flex items-start space-x-3 pb-3 border-b border-white/10">
            <span className="text-[11px] font-mono text-cyan-300 shrink-0 w-28 pt-0.5 font-semibold">2019 — Present</span>
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-white">
                Information Technology Officer <span className="text-cyan-400 font-mono text-[11px]">@ BOCRA UASF / Ministry of Child Welfare</span>
              </h4>
              <p className="text-xs text-slate-200 leading-relaxed font-normal">
                Directing digital infrastructure and school management solutions across 24 primary schools in Mabutsane District, empowering 4,500+ students.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3 pb-3 border-b border-white/10">
            <span className="text-[11px] font-mono text-violet-300 shrink-0 w-28 pt-0.5 font-semibold">2018 — 2019</span>
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-white">
                Freelance Full-Stack Developer <span className="text-violet-400 font-mono text-[11px]">@ SDK Digital Labs</span>
              </h4>
              <p className="text-xs text-slate-200 leading-relaxed font-normal">
                Architected bespoke enterprise software, e-KYC workflows, and high-concurrency database optimizations for Botswana enterprises.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <span className="text-[11px] font-mono text-emerald-300 shrink-0 w-28 pt-0.5 font-semibold">2014 — 2018</span>
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-white">
                Systems Engineer <span className="text-emerald-400 font-mono text-[11px]">@ Metrotech</span>
              </h4>
              <p className="text-xs text-slate-200 leading-relaxed font-normal">
                Delivered enterprise server administration, network security protocols, hardware diagnostics, and disaster recovery architectures.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recruiter Quick Action Row */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl glass-card border border-cyan-500/30 bg-gradient-to-r from-cyan-950/40 via-indigo-950/30 to-violet-950/40">
        <div className="space-y-0.5">
          <div className="text-xs font-bold text-white">Ready to connect or review work?</div>
          <div className="text-[11px] text-slate-200 font-normal">Review projects, verified code repositories, or initiate direct contact.</div>
        </div>

        <div className="flex items-center space-x-2">
          {onOpenApp && (
            <>
              <button
                onClick={() => onOpenApp('projects')}
                className="px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-200 hover:text-white border border-cyan-400/40 text-xs font-medium transition cursor-pointer flex items-center space-x-1.5 shadow-sm"
              >
                <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>View Projects</span>
              </button>
              <button
                onClick={() => onOpenApp('resume')}
                className="px-3 py-1.5 rounded-lg bg-violet-500/20 hover:bg-violet-500/30 text-violet-200 hover:text-white border border-violet-400/40 text-xs font-medium transition cursor-pointer flex items-center space-x-1.5 shadow-sm"
              >
                <FileText className="w-3.5 h-3.5 text-violet-400" />
                <span>Download CV</span>
              </button>
              <button
                onClick={() => onOpenApp('contact')}
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-medium transition cursor-pointer flex items-center space-x-1.5 shadow-sm"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>Contact</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
