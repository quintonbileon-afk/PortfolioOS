import React from 'react';
import { DOCK_ITEMS } from './Dock';
import { MacIcon } from './MacIcons';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Wifi, BatteryCharging, Sparkles, ArrowLeft } from 'lucide-react';

interface MobileHomeProps {
  activeAppId: string | null;
  onOpenApp: (id: string) => void;
  onCloseApp: () => void;
  onOpenClassic: () => void;
  children: React.ReactNode;
}

export const MobileHome: React.FC<MobileHomeProps> = ({
  activeAppId,
  onOpenApp,
  onCloseApp,
  onOpenClassic,
  children
}) => {
  return (
    <div className="fixed inset-0 bg-[#06080F] flex flex-col z-50 select-none overflow-hidden text-slate-100 relative">
      {/* Background Refraction Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/3 w-[350px] h-[350px] bg-cyan-500/15 rounded-full blur-[120px] aurora-orb-1" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-600/15 rounded-full blur-[130px] aurora-orb-2" />
        <div className="absolute inset-0 cyber-grid opacity-20" />
      </div>

      {/* Mobile Glass Status Bar */}
      <div className="h-10 aurora-menubar px-4 flex items-center justify-between text-xs font-sans relative z-10">
        <div className="flex items-center space-x-2">
          {activeAppId && (
            <button
              onClick={onCloseApp}
              className="p-1 px-2 rounded-lg glass-button text-cyan-300 hover:text-white flex items-center space-x-1 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
          )}
          <span className="text-white font-bold font-mono tracking-tight">PortfolioOS Mobile</span>
        </div>

        <div className="flex items-center space-x-3 text-cyan-400">
          <button onClick={onOpenClassic} className="text-[10px] glass-pill px-2.5 py-0.5 text-cyan-300 font-mono">
            Classic
          </button>
          <Wifi className="w-3.5 h-3.5 text-emerald-400" />
          <BatteryCharging className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Main Container */}
      <div className="flex-1 overflow-y-auto p-4 relative z-10 scrollbar-thin">
        {activeAppId ? (
          <div className="h-full flex flex-col glass-panel rounded-2xl overflow-hidden shadow-2xl relative">
            <div className="glass-sheen" />
            <div className="p-3 bg-white/[0.04] border-b border-white/10 flex justify-between items-center relative z-10">
              <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider">
                // {activeAppId}
              </span>
              <button
                onClick={onCloseApp}
                className="px-2.5 py-1 text-xs rounded-lg glass-button text-rose-300 border-rose-500/30 cursor-pointer"
              >
                Close App
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 relative z-10">
              {children}
            </div>
          </div>
        ) : (
          <div className="space-y-6 py-4">
            {/* Owner Header Glass Card */}
            <div className="glass-card p-5 rounded-2xl flex items-center space-x-4 relative overflow-hidden">
              <div className="glass-sheen" />
              <div className="w-16 h-16 rounded-2xl p-[2px] bg-gradient-to-tr from-cyan-400 via-indigo-500 to-violet-500 shadow-lg shrink-0 relative z-10">
                <div className="w-full h-full rounded-[14px] bg-[#0E1526]/90 backdrop-blur-xl flex items-center justify-center text-lg font-bold text-white font-mono">
                  QS
                </div>
              </div>
              <div className="relative z-10">
                <h1 className="text-base font-bold text-white font-display">{PORTFOLIO_DATA.owner.name}</h1>
                <p className="text-[11px] text-cyan-300 font-medium mt-0.5">{PORTFOLIO_DATA.owner.title}</p>
                <p className="text-[10px] text-slate-400 mt-1 font-mono">{PORTFOLIO_DATA.owner.location}</p>
              </div>
            </div>

            {/* App Grid */}
            <div>
              <div className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider mb-3 px-1">
                Applications
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3.5">
                {DOCK_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onOpenApp(item.id)}
                    className="flex flex-col items-center p-3 rounded-2xl glass-card transition group cursor-pointer"
                  >
                    <div className="w-14 h-14 rounded-2xl shadow-md overflow-hidden mb-2 group-hover:scale-105 transition">
                      <MacIcon name={item.iconName} size={56} />
                    </div>
                    <span className="text-[11px] font-medium text-slate-200 group-hover:text-cyan-200 text-center truncate w-full">
                      {item.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Frosted Glass Bottom Navigation */}
      <div className="h-14 aurora-menubar border-t border-white/10 px-6 flex items-center justify-around relative z-10">
        <button onClick={onCloseApp} className="text-xs font-sans text-cyan-400 hover:text-white flex flex-col items-center cursor-pointer">
          <Sparkles className="w-4 h-4 mb-0.5" />
          <span>Home</span>
        </button>
        <button onClick={() => onOpenApp('terminal')} className="text-xs font-sans text-cyan-400 hover:text-white flex flex-col items-center cursor-pointer">
          <span className="text-base font-mono font-bold">&gt;_</span>
          <span>Terminal</span>
        </button>
        <button onClick={() => onOpenApp('contact')} className="text-xs font-sans text-cyan-400 hover:text-white flex flex-col items-center cursor-pointer">
          <span className="text-base font-bold">@</span>
          <span>Contact</span>
        </button>
      </div>
    </div>
  );
};
