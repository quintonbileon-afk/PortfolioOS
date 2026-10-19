import React, { useState, useEffect } from 'react';
import { Wifi, Search, Sun, Moon, Sparkles, Send, Bot, X, Shield, Cpu, Type, LayoutGrid, Columns2, Layers, Crosshair, ChevronDown } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface TopBarProps {
  activeWindowTitle?: string;
  onOpenClassic: () => void;
  onLock: () => void;
  onOpenSettings: () => void;
  onOpenLaunchpad: () => void;
  onOpenSpotlight: () => void;
  onOpenApp?: (id: string) => void;
  theme: 'dark' | 'light';
  setTheme: (t: 'dark' | 'light') => void;
  aiThinking: boolean;
  openWindowsCount?: number;
  onCenterAll?: () => void;
  onTileSplit?: () => void;
  onCascade?: () => void;
  onToggleExpose?: () => void;
  onMinimizeAll?: () => void;
  onCloseAll?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  activeWindowTitle,
  onOpenClassic,
  onLock,
  onOpenSettings,
  onOpenLaunchpad,
  onOpenSpotlight,
  onOpenApp,
  theme,
  setTheme,
  aiThinking,
  openWindowsCount = 0,
  onCenterAll,
  onTileSplit,
  onCascade,
  onToggleExpose,
  onMinimizeAll,
  onCloseAll
}) => {
  const [timeStr, setTimeStr] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowMenuOpen, setWindowMenuOpen] = useState(false);
  const [auroraPopoverOpen, setAuroraPopoverOpen] = useState(false);
  const [popoverQuery, setPopoverQuery] = useState('');
  const [popoverReply, setPopoverReply] = useState('Quantum neural copilot online. Ask anything...');
  const [navFont, setNavFont] = useState<'space' | 'rajdhani' | 'mono'>('space');

  const fontClass = navFont === 'space'
    ? 'font-nav tracking-wide'
    : navFont === 'rajdhani'
      ? 'font-rajdhani tracking-wider font-semibold text-[13px]'
      : 'font-mono text-xs';

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTimeStr(now.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' }) + ' ' + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleAuroraAsk = (e: React.FormEvent) => {
    e.preventDefault();
    if (!popoverQuery.trim()) return;
    const q = popoverQuery.toLowerCase();
    setPopoverQuery('');
    if (q.includes('built') || q.includes('projects')) {
      setPopoverReply("Golebileone Setlamelo (Quinton) engineered Edu-Suite, NexusKYC, MedTrack BW, ElectroShield, FastaID, HealthLink-BW, and BidReady360.");
    } else if (q.includes('hire') || q.includes('contact')) {
      setPopoverReply(`Email Golebileone directly at ${PORTFOLIO_DATA.owner.email} or use the Contact app.`);
    } else {
      setPopoverReply(`Golebileone Setlamelo (Alias: Quinton) is a Full-Stack Developer & Digital Transformation Specialist in Mabutsane, Botswana with 12+ years ICT experience.`);
    }
  };

  return (
    <div className="relative">
      <div className={`h-9 aurora-menubar px-4 flex items-center justify-between ${fontClass} z-40 relative select-none`}>
        {/* Left Menu Zone */}
        <div className="flex items-center space-x-4 relative">
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center hover:bg-cyan-500/20 px-2.5 py-1 rounded-md transition cursor-pointer border border-cyan-500/30 text-cyan-300"
            >
              <span className="font-bold tracking-widest text-[11px]">PORTFOLIO.OS</span>
            </button>

            {menuOpen && (
              <div className="absolute left-0 top-9 w-64 aurora-window rounded-xl p-2 shadow-2xl border border-cyan-500/40 z-50 text-xs space-y-1 overflow-hidden">
                <div className="glass-sheen" />
                <button
                  onClick={() => { setMenuOpen(false); onOpenSettings(); }}
                  className="w-full text-left px-3 py-1.5 rounded-lg hover:bg-cyan-500/20 hover:text-cyan-200 transition cursor-pointer flex items-center justify-between"
                >
                  <span className="font-medium">System Specification</span>
                  <span className="text-[10px] text-cyan-400 font-mono">QUANTUM v2.4</span>
                </button>
                <button
                  onClick={() => { setMenuOpen(false); onOpenSettings(); }}
                  className="w-full text-left px-3 py-1.5 rounded-lg hover:bg-cyan-500/20 hover:text-cyan-200 transition cursor-pointer"
                >
                  Quantum Settings...
                </button>
                <button
                  onClick={() => { setMenuOpen(false); onOpenLaunchpad(); }}
                  className="w-full text-left px-3 py-1.5 rounded-lg hover:bg-cyan-500/20 hover:text-cyan-200 transition cursor-pointer"
                >
                  Module Launchpad
                </button>

                {/* Typography Selector Section */}
                <div className="h-[1px] bg-cyan-500/20 my-1" />
                <div className="px-2 pt-1 pb-0.5 text-[10px] text-cyan-400 font-mono uppercase tracking-wider flex items-center justify-between">
                  <span>Top Nav Typography</span>
                  <span className="text-slate-400">{navFont.toUpperCase()}</span>
                </div>
                <div className="grid grid-cols-3 gap-1 px-1 py-1">
                  <button
                    onClick={() => setNavFont('space')}
                    className={`px-2 py-1 text-[11px] rounded transition cursor-pointer font-nav text-center ${
                      navFont === 'space' ? 'bg-cyan-500/30 text-cyan-200 border border-cyan-400/50 shadow-sm' : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    Space
                  </button>
                  <button
                    onClick={() => setNavFont('rajdhani')}
                    className={`px-2 py-1 text-[12px] rounded transition cursor-pointer font-rajdhani font-bold text-center ${
                      navFont === 'rajdhani' ? 'bg-cyan-500/30 text-cyan-200 border border-cyan-400/50 shadow-sm' : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    Rajdhani
                  </button>
                  <button
                    onClick={() => setNavFont('mono')}
                    className={`px-2 py-1 text-[11px] rounded transition cursor-pointer font-mono text-center ${
                      navFont === 'mono' ? 'bg-cyan-500/30 text-cyan-200 border border-cyan-400/50 shadow-sm' : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    Mono
                  </button>
                </div>

                <div className="h-[1px] bg-cyan-500/20 my-1" />
                <button
                  onClick={() => { setMenuOpen(false); onOpenClassic(); }}
                  className="w-full text-left px-3 py-1.5 rounded-lg hover:bg-cyan-500/20 hover:text-cyan-200 transition cursor-pointer"
                >
                  Switch to Classic View
                </button>
                <button
                  onClick={() => { setMenuOpen(false); onLock(); }}
                  className="w-full text-left px-3 py-1.5 rounded-lg hover:bg-rose-500/20 hover:text-rose-300 transition cursor-pointer text-rose-400"
                >
                  Lock Secure Terminal
                </button>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.7)]" />
            <span className="font-bold tracking-widest text-cyan-200 text-[11px] uppercase">
              {activeWindowTitle ? `// ${activeWindowTitle}` : '// QUANTUM_DESKTOP'}
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-1.5 text-slate-300 font-medium text-xs tracking-wider">
            <button
              onClick={() => onOpenApp?.('about')}
              className="px-2.5 py-1 rounded-md hover:bg-cyan-500/15 hover:text-cyan-300 transition cursor-pointer text-slate-300 border border-transparent hover:border-cyan-500/30"
            >
              About
            </button>
            <button
              onClick={() => onOpenApp?.('projects')}
              className="px-2.5 py-1 rounded-md hover:bg-cyan-500/15 hover:text-cyan-300 transition cursor-pointer text-slate-300 border border-transparent hover:border-cyan-500/30"
            >
              Projects
            </button>
            <button
              onClick={() => onOpenApp?.('resume')}
              className="px-2.5 py-1 rounded-md hover:bg-cyan-500/15 hover:text-cyan-300 transition cursor-pointer text-slate-300 border border-transparent hover:border-cyan-500/30"
            >
              Résumé
            </button>
            <button
              onClick={() => onOpenApp?.('contact')}
              className="px-2.5 py-1 rounded-md hover:bg-cyan-500/15 hover:text-cyan-300 transition cursor-pointer text-slate-300 border border-transparent hover:border-cyan-500/30"
            >
              Contact
            </button>

            {/* Multi-Window Layout Dropdown Menu */}
            {openWindowsCount > 0 && (
              <div className="relative">
                <button
                  onClick={() => setWindowMenuOpen(!windowMenuOpen)}
                  className={`px-2.5 py-1 rounded-md transition cursor-pointer flex items-center space-x-1.5 border ${
                    windowMenuOpen 
                      ? 'bg-cyan-500/25 text-cyan-200 border-cyan-400/50 shadow-sm' 
                      : 'text-cyan-300 hover:bg-cyan-500/15 border-cyan-500/30'
                  }`}
                  title="Window Layout Management"
                >
                  <Columns2 className="w-3 h-3 text-cyan-400" />
                  <span>Window ({openWindowsCount})</span>
                  <ChevronDown className="w-2.5 h-2.5 opacity-60" />
                </button>

                {windowMenuOpen && (
                  <div className="absolute left-0 top-8 w-60 aurora-window rounded-xl p-2 shadow-2xl border border-cyan-500/40 z-50 text-xs space-y-1 overflow-hidden">
                    <div className="glass-sheen" />
                    <div className="px-2.5 py-1 text-[10px] font-mono text-cyan-400 uppercase tracking-wider flex items-center justify-between border-b border-white/10 pb-1.5 mb-1">
                      <span>Multi-Window Layout</span>
                      <span className="text-slate-400">{openWindowsCount} Open</span>
                    </div>

                    <button
                      onClick={() => { setWindowMenuOpen(false); onCenterAll?.(); }}
                      className="w-full text-left px-3 py-1.5 rounded-lg hover:bg-cyan-500/20 hover:text-cyan-200 transition cursor-pointer flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-2">
                        <Crosshair className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Center All Windows</span>
                      </div>
                      <span className="text-[10px] font-mono text-cyan-400/60">CENTER</span>
                    </button>

                    <button
                      onClick={() => { setWindowMenuOpen(false); onTileSplit?.(); }}
                      className="w-full text-left px-3 py-1.5 rounded-lg hover:bg-cyan-500/20 hover:text-cyan-200 transition cursor-pointer flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-2">
                        <Columns2 className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Tile Side-by-Side</span>
                      </div>
                      <span className="text-[10px] font-mono text-cyan-400/60">SPLIT</span>
                    </button>

                    <button
                      onClick={() => { setWindowMenuOpen(false); onCascade?.(); }}
                      className="w-full text-left px-3 py-1.5 rounded-lg hover:bg-cyan-500/20 hover:text-cyan-200 transition cursor-pointer flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-2">
                        <Layers className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Cascade Windows</span>
                      </div>
                      <span className="text-[10px] font-mono text-cyan-400/60">CASCADE</span>
                    </button>

                    <button
                      onClick={() => { setWindowMenuOpen(false); onToggleExpose?.(); }}
                      className="w-full text-left px-3 py-1.5 rounded-lg hover:bg-cyan-500/20 hover:text-cyan-200 transition cursor-pointer flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-2">
                        <LayoutGrid className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Mission Control (Exposé)</span>
                      </div>
                      <span className="text-[10px] font-mono text-cyan-400/60">GRID</span>
                    </button>

                    <div className="h-[1px] bg-white/10 my-1" />

                    <button
                      onClick={() => { setWindowMenuOpen(false); onMinimizeAll?.(); }}
                      className="w-full text-left px-3 py-1.5 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition cursor-pointer"
                    >
                      Minimize All (Show Desktop)
                    </button>

                    <button
                      onClick={() => { setWindowMenuOpen(false); onCloseAll?.(); }}
                      className="w-full text-left px-3 py-1.5 rounded-lg hover:bg-rose-500/20 text-rose-400 hover:text-rose-300 transition cursor-pointer"
                    >
                      Close All Windows
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right Status Zone */}
        <div className="flex items-center space-x-3 relative">
          {/* AI Status Orb */}
          <div className="relative">
            <button
              onClick={() => setAuroraPopoverOpen(!auroraPopoverOpen)}
              className="flex items-center space-x-1.5 bg-cyan-950/40 border border-cyan-500/30 hover:border-cyan-400 px-3 py-1 rounded-full transition cursor-pointer"
              title="Quantum AI Copilot Status"
            >
              <span className={`w-2.5 h-2.5 rounded-full ${aiThinking ? 'bg-amber-400 animate-ping' : 'bg-cyan-400 animate-pulse'}`} />
              <span className="text-[10px] font-bold tracking-widest text-cyan-300">QUANTUM_AI</span>
            </button>

            {auroraPopoverOpen && (
              <div className="absolute right-0 top-9 w-72 aurora-window rounded-2xl p-4 shadow-2xl border border-cyan-500/40 z-50 space-y-3 overflow-hidden">
                <div className="glass-sheen" />
                <div className="flex justify-between items-center border-b border-cyan-500/20 pb-2 relative z-10">
                  <div className="flex items-center space-x-2 text-cyan-400 font-bold text-xs tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>QUANTUM NEURAL COPILOT</span>
                  </div>
                  <button onClick={() => setAuroraPopoverOpen(false)} className="text-slate-400 hover:text-white cursor-pointer">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="glass-card p-3 rounded-xl text-xs text-cyan-200 relative z-10 font-sans">
                  {popoverReply}
                </div>

                <form onSubmit={handleAuroraAsk} className="flex items-center space-x-2 relative z-10">
                  <input
                    type="text"
                    value={popoverQuery}
                    onChange={e => setPopoverQuery(e.target.value)}
                    placeholder="Query quantum AI..."
                    className="flex-1 glass-input px-3 py-1.5 text-xs text-cyan-100 placeholder:text-slate-500 focus:outline-none"
                  />
                  <button type="submit" className="p-1.5 rounded-lg bg-cyan-500 text-black font-bold hover:bg-cyan-400 cursor-pointer shadow-md shadow-cyan-500/25">
                    <Send className="w-3 h-3" />
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Quick Font Style Switcher Button */}
          <button
            onClick={() => setNavFont(curr => curr === 'space' ? 'rajdhani' : curr === 'rajdhani' ? 'mono' : 'space')}
            className="hover:bg-cyan-500/20 px-2 py-1 rounded-md transition cursor-pointer text-cyan-300 hover:text-cyan-100 border border-cyan-500/20 flex items-center space-x-1"
            title={`Top Bar Font: ${navFont.toUpperCase()} (Click to toggle style)`}
          >
            <Type className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-[10px] uppercase font-bold tracking-wider hidden lg:inline">
              {navFont === 'space' ? 'Space' : navFont === 'rajdhani' ? 'Rajdhani' : 'Mono'}
            </span>
          </button>

          {/* Mission Control Overview Quick Button */}
          {openWindowsCount > 0 && (
            <button
              onClick={onToggleExpose}
              className="hover:bg-cyan-500/20 px-2 py-1 rounded-md transition cursor-pointer text-cyan-300 hover:text-cyan-100 border border-cyan-500/20 flex items-center space-x-1"
              title="Mission Control: Window Switcher & Matrix View"
            >
              <LayoutGrid className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-[10px] uppercase font-bold tracking-wider hidden xl:inline">
                Exposé
              </span>
            </button>
          )}

          <button
            onClick={onOpenSpotlight}
            className="hover:bg-cyan-500/20 p-1.5 rounded-md transition cursor-pointer text-cyan-300 hover:text-cyan-100 border border-cyan-500/20"
            title="Spotlight Search (Cmd+K)"
          >
            <Search className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="hover:bg-cyan-500/20 p-1.5 rounded-md transition cursor-pointer text-cyan-300 hover:text-cyan-100 border border-cyan-500/20"
            title="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-300" /> : <Moon className="w-3.5 h-3.5 text-cyan-600" />}
          </button>

          <div className="flex items-center space-x-1.5 bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider text-emerald-300" title="Secure Encrypted Link">
            <Shield className="w-3 h-3 text-emerald-400" />
            <span>SECURE_UPLINK</span>
          </div>

          <div className="text-[11px] text-cyan-200 bg-cyan-950/40 px-2.5 py-0.5 rounded border border-cyan-500/20 tracking-wider tabular-nums font-mono">
            {timeStr || 'Mon Oct 15 04:07'}
          </div>
        </div>
      </div>

      {/* Thin animated gradient line under menu bar pulsing when AI Assistant is thinking */}
      {aiThinking && (
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#22D3EE] to-transparent animate-pulse z-45" />
      )}
    </div>
  );
};
