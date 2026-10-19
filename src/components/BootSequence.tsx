import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Apple } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface BootSequenceProps {
  onComplete: () => void;
  onSkip: () => void;
}

export const BootSequence: React.FC<BootSequenceProps> = ({ onComplete, onSkip }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          const next = prev + 5;
          return next > 100 ? 100 : next;
        }
        clearInterval(progressInterval);
        return 100;
      });
    }, 120);

    const timer = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 w-screen h-screen min-h-screen min-h-[100dvh] z-50 bg-[#06080F] text-white flex flex-col items-center justify-center p-6 select-none overflow-hidden">
      {/* Aurora Orbs for Glass Refraction */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[150px] pointer-events-none aurora-orb-1" />
      <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-violet-600/15 rounded-full blur-[150px] pointer-events-none aurora-orb-2" />
      <div className="absolute inset-0 cyber-grid opacity-25 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="glass-panel p-10 rounded-3xl flex flex-col items-center space-y-7 max-w-sm w-full relative z-10 overflow-hidden"
      >
        <div className="glass-sheen" />

        <div className="w-20 h-20 rounded-2xl glass-button flex items-center justify-center text-cyan-400 relative z-10 shadow-[0_0_25px_rgba(34,211,238,0.25)]">
          <Apple className="w-10 h-10 text-cyan-300" />
        </div>

        <div className="text-center space-y-1 relative z-10">
          <h1 className="text-xl font-bold tracking-tight text-white font-display">{PORTFOLIO_DATA.owner.name}</h1>
          <p className="text-xs text-cyan-300 font-mono">PortfolioOS Initializing...</p>
        </div>

        <div className="w-56 h-1.5 bg-black/50 border border-white/10 rounded-full overflow-hidden p-[1px] relative z-10">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-pink-500 rounded-full shadow-[0_0_10px_#22D3EE]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <button
          onClick={onSkip}
          className="text-xs text-slate-400 hover:text-cyan-300 transition cursor-pointer pt-2 relative z-10 font-mono"
        >
          Skip Intro →
        </button>
      </motion.div>
    </div>
  );
};
