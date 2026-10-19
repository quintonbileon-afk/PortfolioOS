import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Lock, Type, Camera } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useProfilePhoto } from '../utils/profilePhoto';

interface LoginScreenProps {
  onLogin: () => void;
  onOpenClassic: () => void;
}

type TypographyId = 'space' | 'syne' | 'rajdhani';

interface TypographyOption {
  id: TypographyId;
  label: string;
  fontFamily: string;
  containerClass: string;
  nameClass: string;
  subtitleClass: string;
}

const TYPOGRAPHIES: Record<TypographyId, TypographyOption> = {
  space: {
    id: 'space',
    label: 'Space Grotesk',
    fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif",
    containerClass: "font-['Space_Grotesk',sans-serif]",
    nameClass: "font-['Space_Grotesk',sans-serif] tracking-[-0.03em]",
    subtitleClass: "font-['Space_Grotesk',sans-serif] uppercase tracking-[0.22em]",
  },
  syne: {
    id: 'syne',
    label: 'Syne',
    fontFamily: "'Syne', -apple-system, BlinkMacSystemFont, sans-serif",
    containerClass: "font-['Syne',sans-serif]",
    nameClass: "font-['Syne',sans-serif] tracking-tight font-extrabold",
    subtitleClass: "font-['Syne',sans-serif] uppercase tracking-[0.18em]",
  },
  rajdhani: {
    id: 'rajdhani',
    label: 'Rajdhani',
    fontFamily: "'Rajdhani', -apple-system, BlinkMacSystemFont, sans-serif",
    containerClass: "font-['Rajdhani',sans-serif]",
    nameClass: "font-['Rajdhani',sans-serif] tracking-wider uppercase font-bold",
    subtitleClass: "font-['Rajdhani',sans-serif] tracking-[0.25em] uppercase font-semibold",
  },
};

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin, onOpenClassic }) => {
  const [selectedTypography, setSelectedTypography] = useState<TypographyId>('space');
  const currentType = TYPOGRAPHIES[selectedTypography];
  const { photoUrl, setCustomPhoto, resetPhoto, isCustom } = useProfilePhoto();

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        setCustomPhoto(result);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="fixed inset-0 w-screen h-screen min-h-screen min-h-[100dvh] z-50 bg-[#06080F] flex items-center justify-center p-4 sm:p-6 md:p-8 select-none overflow-hidden">
      {/* Living Aurora Orbs for glass refraction */}
      <div className="absolute top-1/4 left-1/3 w-[550px] h-[550px] bg-cyan-500/20 rounded-full blur-[140px] pointer-events-none aurora-orb-1" />
      <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[150px] pointer-events-none aurora-orb-2" />
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="glass-panel w-full max-w-md min-h-[520px] sm:min-h-[560px] p-8 sm:p-10 rounded-3xl relative text-center z-10 overflow-hidden flex flex-col justify-between items-center shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7),0_0_40px_rgba(34,211,238,0.12)] border border-white/15"
      >
        {/* Profile Card Header & Details - Direct child 1 matching focus selector */}
        <div
          className={`login-profile-header flex flex-col items-center relative z-10 w-full my-auto py-2 transition-all duration-150 ${currentType.containerClass}`}
          style={{ fontFamily: currentType.fontFamily }}
        >
          <div className="relative mb-5 group">
            <div className="w-28 h-28 rounded-full p-[2.5px] bg-gradient-to-tr from-cyan-400 via-violet-500 to-pink-500 shadow-[0_0_35px_rgba(34,211,238,0.4)] relative overflow-hidden">
              <img
                src={photoUrl}
                alt={PORTFOLIO_DATA.owner.name}
                referrerPolicy="no-referrer"
                className="w-full h-full rounded-full object-cover bg-[#0E1424]"
              />
              <label
                htmlFor="login-photo-upload"
                title="Click to upload your photo"
                className="absolute inset-0 rounded-full bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center cursor-pointer text-white text-[10px] font-mono tracking-tight text-center px-1"
              >
                <Camera className="w-4 h-4 text-cyan-300 mb-0.5" />
                <span>Change Photo</span>
              </label>
              <input
                id="login-photo-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handlePhotoUpload}
              />
            </div>
            <div className="absolute bottom-1 right-1 w-7 h-7 rounded-full bg-emerald-500 border-2 border-[#06080F] flex items-center justify-center shadow-lg" title="Active in Production">
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
            </div>
          </div>
          {isCustom && (
            <button
              onClick={resetPhoto}
              className="text-[10px] text-cyan-400/80 hover:text-cyan-300 font-mono underline cursor-pointer -mt-3 mb-2"
            >
              Reset to default portrait
            </button>
          )}

          <h1 className={`text-3xl sm:text-[32px] font-bold text-white transition-all ${currentType.nameClass}`}>
            {PORTFOLIO_DATA.owner.name}
          </h1>

          <div className="mt-1.5 flex items-center justify-center gap-2">
            <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-400/35 text-cyan-300 font-mono tracking-wide">
              Alias: Quinton
            </span>
          </div>

          <p className={`text-xs text-cyan-300 font-semibold mt-2 transition-all ${currentType.subtitleClass}`}>
            {PORTFOLIO_DATA.owner.title}
          </p>

          <div className="flex items-center space-x-2 text-xs text-slate-300 mt-3 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 tracking-wide">
            <span>{PORTFOLIO_DATA.owner.location}</span>
            <span>·</span>
            <span className="text-cyan-400 font-semibold tracking-wider">12+ YRS ICT</span>
          </div>

          <div className="mt-3.5 flex items-center gap-2 text-xs text-slate-300/90 font-medium tracking-tight">
            <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22D3EE]" />
            <span>Digital Transformation Specialist & Lead Engineer</span>
          </div>

          {/* Typography Selector Pills */}
          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-center gap-1.5 w-full">
            <div className="flex items-center gap-1 text-[11px] text-slate-400 font-mono mr-1">
              <Type className="w-3 h-3 text-cyan-400" />
              <span>Typography:</span>
            </div>
            {(['space', 'syne', 'rajdhani'] as const).map(typeKey => (
              <button
                key={typeKey}
                type="button"
                onClick={() => setSelectedTypography(typeKey)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition cursor-pointer ${
                  selectedTypography === typeKey
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-[0_0_12px_rgba(34,211,238,0.25)]'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {TYPOGRAPHIES[typeKey].label}
              </button>
            ))}
          </div>
        </div>

        {/* Action Controls & Options */}
        <div className="mt-6 space-y-4 relative z-10 w-full">
          <button
            onClick={onLogin}
            className="w-full py-4 px-5 rounded-2xl glass-button text-white font-medium text-sm flex items-center justify-center space-x-2.5 shadow-xl transition cursor-pointer group hover:scale-[1.02] active:scale-[0.98] border border-cyan-500/30 hover:border-cyan-400/60"
          >
            <span className="font-semibold tracking-wide">Enter PortfolioOS Desktop</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-cyan-400" />
          </button>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <button
              onClick={onOpenClassic}
              className="text-xs text-slate-400 hover:text-cyan-300 flex items-center space-x-1.5 transition cursor-pointer px-2 py-1 rounded-lg hover:bg-white/5"
            >
              <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
              <span>Classic View</span>
            </button>
            <div className="text-[11px] text-slate-400 font-mono flex items-center space-x-1.5 px-2 py-1">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Quantum Secure</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
