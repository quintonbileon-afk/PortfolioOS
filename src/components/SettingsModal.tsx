import React from 'react';
import { X, Monitor, Sun, Moon } from 'lucide-react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  wallpaper: string;
  setWallpaper: (w: string) => void;
  theme: 'dark' | 'light';
  setTheme: (t: 'dark' | 'light') => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  wallpaper,
  setWallpaper,
  theme,
  setTheme
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xl p-4" onClick={onClose}>
      <div 
        className="aurora-window w-full max-w-md rounded-3xl p-6 space-y-6 shadow-2xl relative overflow-hidden border border-white/20"
        onClick={e => e.stopPropagation()}
      >
        <div className="glass-sheen" />

        <div className="flex justify-between items-center border-b border-white/10 pb-4 relative z-10">
          <div className="flex items-center space-x-2">
            <Monitor className="w-5 h-5 text-cyan-400" />
            <h2 className="text-base font-bold text-white font-display">PortfolioOS Settings</h2>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full glass-button flex items-center justify-center text-slate-300 hover:text-white transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Theme Settings */}
        <div className="space-y-3 relative z-10">
          <label className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider">Appearance</label>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setTheme('dark')}
              className={`p-3 rounded-xl border flex items-center space-x-3 transition cursor-pointer ${
                theme === 'dark' ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-[0_0_15px_rgba(34,211,238,0.25)]' : 'glass-card border-white/10 text-slate-300'
              }`}
            >
              <Moon className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-medium font-mono">Dark Mode</span>
            </button>
            <button
              onClick={() => setTheme('light')}
              className={`p-3 rounded-xl border flex items-center space-x-3 transition cursor-pointer ${
                theme === 'light' ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-[0_0_15px_rgba(34,211,238,0.25)]' : 'glass-card border-white/10 text-slate-300'
              }`}
            >
              <Sun className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-medium font-mono">Light Mode</span>
            </button>
          </div>
        </div>

        {/* Wallpaper Settings */}
        <div className="space-y-3 relative z-10">
          <label className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider">Atmospheric Wallpaper</label>
          <div className="grid grid-cols-3 gap-3">
            {[
              { id: 'wallpaper-1', name: 'Deep Indigo', className: 'wallpaper-1' },
              { id: 'wallpaper-2', name: 'Ocean Teal', className: 'wallpaper-2' },
              { id: 'wallpaper-3', name: 'Velvet Dusk', className: 'wallpaper-3' }
            ].map((w) => (
              <button
                key={w.id}
                onClick={() => setWallpaper(w.className)}
                className={`h-20 rounded-xl border-2 overflow-hidden relative transition cursor-pointer ${w.className} ${
                  wallpaper === w.className ? 'border-cyan-400 ring-2 ring-cyan-400/40 shadow-[0_0_15px_rgba(34,211,238,0.3)]' : 'border-white/10 opacity-75 hover:opacity-100 hover:border-white/30'
                }`}
              >
                <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] flex items-end p-2">
                  <span className="text-[10px] font-mono font-bold text-white drop-shadow">{w.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-white/10 flex justify-end relative z-10">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold transition cursor-pointer shadow-lg shadow-cyan-500/25 font-mono"
          >
            Save & Close
          </button>
        </div>
      </div>
    </div>
  );
};
