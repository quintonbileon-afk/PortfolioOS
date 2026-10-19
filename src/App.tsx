import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BootSequence } from './components/BootSequence';
import { LoginScreen } from './components/LoginScreen';
import { TopBar } from './components/TopBar';
import { Dock, DOCK_ITEMS } from './components/Dock';
import { Window, WindowBounds } from './components/Window';
import { MobileHome } from './components/MobileHome';
import { ClassicPortfolio } from './components/ClassicPortfolio';
import { SettingsModal } from './components/SettingsModal';
import { SpotlightSearch } from './components/SpotlightSearch';
import { Launchpad } from './components/Launchpad';
import { ErrorBoundary } from './components/ErrorBoundary';
import { MacIcon } from './components/MacIcons';
import { 
  Columns2, 
  Crosshair, 
  Layers, 
  LayoutGrid, 
  X, 
  Scan,
  Sparkles,
  Maximize2
} from 'lucide-react';

import { AboutApp } from './apps/AboutApp';
import { ProjectsApp } from './apps/ProjectsApp';
import { SkillsApp } from './apps/SkillsApp';
import { ExperienceApp } from './apps/ExperienceApp';
import { EducationApp } from './apps/EducationApp';
import { TerminalApp } from './apps/TerminalApp';
import { AiAssistantApp } from './apps/AiAssistantApp';
import { ContactApp } from './apps/ContactApp';
import { ResumeApp } from './apps/ResumeApp';
import { ImpactApp } from './apps/ImpactApp';
import { TestimonialsApp } from './apps/TestimonialsApp';

const MENU_BAR_H = 36;
const DOCK_ZONE_H = 105;
const EDGE_GAP = 20;

export default function App() {
  const [viewState, setViewState] = useState<'boot' | 'login' | 'os' | 'classic'>('boot');
  const [openWindows, setOpenWindows] = useState<string[]>(['about']);
  const [minimizedWindows, setMinimizedWindows] = useState<string[]>([]);
  const [activeWindowId, setActiveWindowId] = useState<string>('about');
  const [zIndexMap, setZIndexMap] = useState<Record<string, number>>({ about: 10 });
  const [topZ, setTopZ] = useState(10);
  
  const [wallpaper, setWallpaper] = useState<string>('wallpaper-1');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isLaunchpadOpen, setIsLaunchpadOpen] = useState(false);
  const [isSpotlightOpen, setIsSpotlightOpen] = useState(false);
  const [isExposeOpen, setIsExposeOpen] = useState(false);
  const [aiThinking, setAiThinking] = useState(false);

  // Layout map storing positions for each window
  const [windowLayoutMap, setWindowLayoutMap] = useState<Record<string, WindowBounds>>({});

  const [isMobile, setIsMobile] = useState(false);
  const [mobileActiveAppId, setMobileActiveAppId] = useState<string | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    }
  }, [theme]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Handle bounds change reported by a window
  const handleBoundsChange = (id: string, bounds: WindowBounds) => {
    setWindowLayoutMap(prev => ({ ...prev, [id]: bounds }));
  };

  const handleOpenApp = (id: string) => {
    if (isMobile) {
      setMobileActiveAppId(id);
      return;
    }

    if (!openWindows.includes(id)) {
      setOpenWindows(prev => [...prev, id]);
    }

    if (minimizedWindows.includes(id)) {
      setMinimizedWindows(prev => prev.filter(wId => wId !== id));
    }

    const newZ = topZ + 1;
    setTopZ(newZ);
    setZIndexMap(prev => ({ ...prev, [id]: newZ }));
    setActiveWindowId(id);

    if (id === 'ai') {
      setAiThinking(true);
      setTimeout(() => setAiThinking(false), 2000);
    }
  };

  const handleCloseWindow = (id: string) => {
    setOpenWindows(prev => prev.filter(wId => wId !== id));
    setMinimizedWindows(prev => prev.filter(wId => wId !== id));
    setWindowLayoutMap(prev => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });

    if (activeWindowId === id) {
      const remaining = openWindows.filter(wId => wId !== id);
      if (remaining.length > 0) {
        setActiveWindowId(remaining[remaining.length - 1]);
      } else {
        setActiveWindowId('');
      }
    }
  };

  const handleMinimizeWindow = (id: string) => {
    if (!minimizedWindows.includes(id)) {
      setMinimizedWindows(prev => [...prev, id]);
    }
  };

  const handleFocusWindow = (id: string) => {
    const newZ = topZ + 1;
    setTopZ(newZ);
    setZIndexMap(prev => ({ ...prev, [id]: newZ }));
    setActiveWindowId(id);
  };

  // Multi-Window Layout: Center All Open Windows
  const handleCenterAll = () => {
    const visible = openWindows.filter(id => !minimizedWindows.includes(id));
    if (visible.length === 0) return;

    const usableTop = MENU_BAR_H + 16;
    const usableBottom = window.innerHeight - DOCK_ZONE_H;
    const usableHeight = Math.max(340, usableBottom - usableTop);
    const usableWidth = Math.max(420, window.innerWidth - EDGE_GAP * 2);
    const width = Math.min(1060, Math.round(usableWidth * 0.82));
    const height = Math.min(680, Math.round(usableHeight * 0.94));
    const x = Math.max(EDGE_GAP, Math.round((window.innerWidth - width) / 2));
    const y = Math.max(usableTop, Math.round(usableTop + (usableHeight - height) / 2));

    const updated: Record<string, WindowBounds> = {};
    visible.forEach(id => {
      updated[id] = { x, y, width, height };
    });
    setWindowLayoutMap(prev => ({ ...prev, ...updated }));
  };

  // Multi-Window Layout: Tile Side-by-Side (Split) or Grid
  const handleTileSplit = () => {
    const visible = openWindows.filter(id => !minimizedWindows.includes(id));
    if (visible.length === 0) return;

    const usableTop = MENU_BAR_H + 16;
    const usableBottom = window.innerHeight - DOCK_ZONE_H;
    const usableHeight = Math.max(320, usableBottom - usableTop);
    const usableWidth = window.innerWidth - EDGE_GAP * 2;

    const updated: Record<string, WindowBounds> = {};

    if (visible.length === 1) {
      const width = Math.min(1060, Math.round(usableWidth * 0.82));
      const height = Math.min(680, Math.round(usableHeight * 0.94));
      updated[visible[0]] = {
        x: Math.round((window.innerWidth - width) / 2),
        y: Math.round(usableTop + (usableHeight - height) / 2),
        width,
        height
      };
    } else if (visible.length === 2) {
      const halfWidth = Math.floor((usableWidth - 14) / 2);
      updated[visible[0]] = {
        x: EDGE_GAP,
        y: usableTop,
        width: halfWidth,
        height: usableHeight
      };
      updated[visible[1]] = {
        x: EDGE_GAP + halfWidth + 14,
        y: usableTop,
        width: halfWidth,
        height: usableHeight
      };
    } else if (visible.length === 3) {
      const halfWidth = Math.floor((usableWidth - 14) / 2);
      const halfHeight = Math.floor((usableHeight - 12) / 2);
      updated[visible[0]] = {
        x: EDGE_GAP,
        y: usableTop,
        width: halfWidth,
        height: usableHeight
      };
      updated[visible[1]] = {
        x: EDGE_GAP + halfWidth + 14,
        y: usableTop,
        width: halfWidth,
        height: halfHeight
      };
      updated[visible[2]] = {
        x: EDGE_GAP + halfWidth + 14,
        y: usableTop + halfHeight + 12,
        width: halfWidth,
        height: halfHeight
      };
    } else {
      const halfWidth = Math.floor((usableWidth - 14) / 2);
      const halfHeight = Math.floor((usableHeight - 12) / 2);
      visible.forEach((id, idx) => {
        const col = idx % 2;
        const row = Math.floor(idx / 2) % 2;
        updated[id] = {
          x: EDGE_GAP + col * (halfWidth + 14),
          y: usableTop + row * (halfHeight + 12),
          width: halfWidth,
          height: halfHeight
        };
      });
    }

    setWindowLayoutMap(prev => ({ ...prev, ...updated }));
  };

  // Multi-Window Layout: Staggered Cascade
  const handleCascade = () => {
    const visible = openWindows.filter(id => !minimizedWindows.includes(id));
    if (visible.length === 0) return;

    const usableTop = MENU_BAR_H + 16;
    const usableBottom = window.innerHeight - DOCK_ZONE_H;
    const usableHeight = Math.max(300, usableBottom - usableTop);
    const usableWidth = window.innerWidth - EDGE_GAP * 2;
    const width = Math.min(960, Math.round(usableWidth * 0.76));
    const height = Math.min(620, Math.round(usableHeight * 0.86));

    const updated: Record<string, WindowBounds> = {};
    visible.forEach((id, idx) => {
      const offset = (idx % 6) * 36;
      updated[id] = {
        x: Math.min(EDGE_GAP + offset, window.innerWidth - width - EDGE_GAP),
        y: Math.min(usableTop + offset, usableBottom - height),
        width,
        height
      };
    });
    setWindowLayoutMap(prev => ({ ...prev, ...updated }));
  };

  // Minimize Other Windows except currently active
  const handleMinimizeOthers = () => {
    if (!activeWindowId) return;
    const others = openWindows.filter(id => id !== activeWindowId);
    setMinimizedWindows(prev => Array.from(new Set([...prev, ...others])));
  };

  // Minimize all windows to show desktop
  const handleMinimizeAll = () => {
    setMinimizedWindows([...openWindows]);
  };

  // Close all open windows
  const handleCloseAll = () => {
    setOpenWindows([]);
    setMinimizedWindows([]);
    setActiveWindowId('');
    setWindowLayoutMap({});
  };

  const renderAppContent = (id: string) => {
    switch (id) {
      case 'about': return <AboutApp onOpenApp={handleOpenApp} />;
      case 'projects': return <ProjectsApp />;
      case 'skills': return <SkillsApp />;
      case 'experience': return <ExperienceApp />;
      case 'education': return <EducationApp />;
      case 'terminal': return <TerminalApp />;
      case 'ai': return <AiAssistantApp />;
      case 'contact': return <ContactApp />;
      case 'resume': return <ResumeApp />;
      case 'impact': return <ImpactApp />;
      case 'testimonials': return <TestimonialsApp />;
      default: return <div>App not found</div>;
    }
  };

  const visibleWindows = openWindows.filter(id => !minimizedWindows.includes(id));

  return (
    <ErrorBoundary>
      {viewState === 'boot' && (
        <BootSequence
          onComplete={() => setViewState('login')}
          onSkip={() => setViewState('login')}
        />
      )}

      {viewState === 'login' && (
        <LoginScreen
          onLogin={() => setViewState('os')}
          onOpenClassic={() => setViewState('classic')}
        />
      )}

      {viewState === 'classic' && (
        <ClassicPortfolio onReturnToOS={() => setViewState('os')} />
      )}

      {viewState === 'os' && isMobile && (
        <MobileHome
          activeAppId={mobileActiveAppId}
          onOpenApp={handleOpenApp}
          onCloseApp={() => setMobileActiveAppId(null)}
          onOpenClassic={() => setViewState('classic')}
        >
          {mobileActiveAppId && renderAppContent(mobileActiveAppId)}
        </MobileHome>
      )}

      {viewState === 'os' && !isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`h-screen w-screen ${wallpaper} flex flex-col overflow-hidden relative select-none`}
          style={{ '--mouse-x': `${mousePos.x}px`, '--mouse-y': `${mousePos.y}px` } as React.CSSProperties}
        >
          {/* Living Aurora Background Orbs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[160px] aurora-orb-1" />
            <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-violet-600/15 rounded-full blur-[180px] aurora-orb-2" />
            <div className="absolute top-1/2 right-1/3 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[150px] aurora-orb-3" />
            <div className="absolute inset-0 dot-grid opacity-60" />
            
            {/* Cursor Reactive Lighting */}
            <div className="absolute inset-0 z-10 bg-[radial-gradient(600px_at_var(--mouse-x)_var(--mouse-y),rgba(34,211,238,0.08),transparent_80%)]" />
          </div>

          {/* Top Menu Bar */}
          <TopBar
            activeWindowTitle={DOCK_ITEMS.find(d => d.id === activeWindowId)?.title}
            onOpenClassic={() => setViewState('classic')}
            onLock={() => setViewState('login')}
            onOpenSettings={() => setIsSettingsOpen(true)}
            onOpenLaunchpad={() => setIsLaunchpadOpen(true)}
            onOpenSpotlight={() => setIsSpotlightOpen(true)}
            onOpenApp={handleOpenApp}
            theme={theme}
            setTheme={setTheme}
            aiThinking={aiThinking}
            openWindowsCount={visibleWindows.length}
            onCenterAll={handleCenterAll}
            onTileSplit={handleTileSplit}
            onCascade={handleCascade}
            onToggleExpose={() => setIsExposeOpen(!isExposeOpen)}
            onMinimizeAll={handleMinimizeAll}
            onCloseAll={handleCloseAll}
          />

          {/* Desktop Workspace */}
          <div className="flex-1 relative overflow-hidden z-10">

            {/* Windows with Center-by-Default and Window Management */}
            {openWindows.map((id, index) => {
              const item = DOCK_ITEMS.find(d => d.id === id);
              if (!item) return null;
              return (
                <Window
                  key={id}
                  id={id}
                  title={item.title}
                  isOpen={openWindows.includes(id)}
                  isMinimized={minimizedWindows.includes(id)}
                  isActive={activeWindowId === id}
                  zIndex={zIndexMap[id] || 10}
                  onClose={handleCloseWindow}
                  onMinimize={handleMinimizeWindow}
                  onFocus={handleFocusWindow}
                  windowIndex={index}
                  layoutBounds={windowLayoutMap[id] || null}
                  onBoundsChange={handleBoundsChange}
                >
                  {renderAppContent(id)}
                </Window>
              );
            })}


          </div>

          {/* Bottom Dock */}
          <Dock
            openWindows={openWindows}
            minimizedWindows={minimizedWindows}
            activeWindowId={activeWindowId}
            onOpenApp={handleOpenApp}
            onOpenLaunchpad={() => setIsLaunchpadOpen(true)}
            onOpenSettings={() => setIsSettingsOpen(true)}
          />

          {/* Mission Control / Exposé Fullscreen Window Matrix Modal */}
          <AnimatePresence>
            {isExposeOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-2xl flex flex-col p-8 select-none"
                onClick={() => setIsExposeOpen(false)}
              >
                <div className="flex items-center justify-between mb-8 max-w-6xl mx-auto w-full">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-400/30">
                      <LayoutGrid className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold font-sans text-white tracking-wide flex items-center space-x-2">
                        <span>Mission Control</span>
                        <span className="text-xs font-mono text-cyan-400 font-normal px-2 py-0.5 rounded bg-cyan-950/50 border border-cyan-500/30">
                          {openWindows.length} ACTIVE
                        </span>
                      </h2>
                      <p className="text-xs font-mono text-cyan-400/70">
                        Click any window to bring to front and center, or choose an arrangement
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2" onClick={e => e.stopPropagation()}>
                    <button
                      onClick={() => { handleTileSplit(); setIsExposeOpen(false); }}
                      className="px-3.5 py-2 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-xs text-cyan-200 transition flex items-center space-x-1.5 cursor-pointer shadow-sm"
                    >
                      <Columns2 className="w-4 h-4 text-cyan-400" />
                      <span>Tile Side-by-Side</span>
                    </button>
                    <button
                      onClick={() => { handleCenterAll(); setIsExposeOpen(false); }}
                      className="px-3.5 py-2 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-xs text-cyan-200 transition flex items-center space-x-1.5 cursor-pointer shadow-sm"
                    >
                      <Crosshair className="w-4 h-4 text-cyan-400" />
                      <span>Center All</span>
                    </button>
                    <button
                      onClick={() => { handleCascade(); setIsExposeOpen(false); }}
                      className="px-3.5 py-2 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-xs text-cyan-200 transition flex items-center space-x-1.5 cursor-pointer shadow-sm"
                    >
                      <Layers className="w-4 h-4 text-cyan-400" />
                      <span>Cascade</span>
                    </button>
                    <button
                      onClick={() => setIsExposeOpen(false)}
                      className="p-2 rounded-xl bg-white/10 hover:bg-rose-500/20 border border-white/15 text-slate-300 hover:text-white transition cursor-pointer"
                      title="Exit Mission Control (Esc)"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Window Matrix Grid */}
                <div className="flex-1 max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto p-2 scrollbar-none items-center justify-center">
                  {openWindows.map(id => {
                    const item = DOCK_ITEMS.find(d => d.id === id);
                    if (!item) return null;
                    const isActive = activeWindowId === id;
                    const isMin = minimizedWindows.includes(id);

                    return (
                      <motion.div
                        key={id}
                        whileHover={{ scale: 1.03, y: -4 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleFocusWindow(id);
                          if (isMin) {
                            setMinimizedWindows(prev => prev.filter(wId => wId !== id));
                          }
                          setIsExposeOpen(false);
                        }}
                        className={`glass-card p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between h-56 relative group ${
                          isActive 
                            ? 'border-cyan-400/80 shadow-[0_0_35px_rgba(34,211,238,0.35)] bg-cyan-950/40 ring-1 ring-cyan-400/50' 
                            : 'border-white/15 hover:border-cyan-400/40 bg-slate-900/60'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shadow-md">
                              <MacIcon name={item.iconName} size={36} />
                            </div>
                            <div>
                              <h3 className="font-bold text-white text-sm tracking-wide">{item.title}</h3>
                              <span className="text-[10px] font-mono text-cyan-400/80 uppercase">
                                {isMin ? 'MINIMIZED' : isActive ? 'ACTIVE WINDOW' : 'BACKGROUND'}
                              </span>
                            </div>
                          </div>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCloseWindow(id);
                            }}
                            className="w-7 h-7 rounded-lg bg-rose-500/10 hover:bg-rose-500/30 border border-rose-500/20 text-rose-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                            title="Close Window"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="my-2 p-3 rounded-xl bg-black/40 border border-white/5 flex-1 flex flex-col justify-center text-xs text-slate-300 font-mono">
                          <span className="text-cyan-300/80 mb-0.5 text-[11px]">// PROCESS_STATUS</span>
                          <span className="text-slate-400 text-[11px] truncate">App ID: quantum.{id}.runtime</span>
                          <span className="text-emerald-400 text-[11px] flex items-center space-x-1 mt-1 font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block mr-1 shadow-[0_0_6px_#34d399]" />
                            ONLINE / RESPONSIVE
                          </span>
                        </div>

                        <div className="flex items-center justify-between text-xs text-cyan-300 group-hover:text-cyan-200">
                          <span className="font-medium text-[11px]">Click to Bring to Front</span>
                          <span className="text-[10px] font-mono bg-cyan-500/20 px-2 py-0.5 rounded border border-cyan-400/30">
                            SELECT ↵
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Modals */}
          <SettingsModal
            isOpen={isSettingsOpen}
            onClose={() => setIsSettingsOpen(false)}
            wallpaper={wallpaper}
            setWallpaper={setWallpaper}
            theme={theme}
            setTheme={setTheme}
          />

          <SpotlightSearch
            isOpen={isSpotlightOpen}
            onClose={() => setIsSpotlightOpen(false)}
            onOpenApp={handleOpenApp}
          />

          <Launchpad
            isOpen={isLaunchpadOpen}
            onClose={() => setIsLaunchpadOpen(false)}
            onOpenApp={handleOpenApp}
          />
        </motion.div>
      )}
    </ErrorBoundary>
  );
}
