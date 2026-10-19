import React, { useEffect, useState } from 'react';
import { BarChart3, Users, ShieldCheck, Zap } from 'lucide-react';
import { motion, useAnimation } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const Counter: React.FC<{ end: number; suffix?: string; duration?: number }> = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / end));
    const timer = setInterval(() => {
      start += Math.ceil(end / 100);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [end, duration]);

  return <>{count.toLocaleString()}{suffix}</>;
};

export const ImpactApp: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="space-y-6 max-w-3xl mx-auto py-2">
      <div className="flex items-center space-x-3 border-b border-white/10 pb-4">
        <BarChart3 className="w-5 h-5 text-indigo-400" />
        <div>
          <h2 className="text-lg font-bold text-white">Impact Metrics & Quantitative Outcomes</h2>
          <p className="text-xs text-slate-400">Measurable public sector delivery</p>
        </div>
      </div>

      <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div variants={item} className="glass-card p-6 rounded-2xl space-y-3 relative overflow-hidden group">
          <div className="glass-sheen" />
          <div className="w-10 h-10 rounded-xl glass-button flex items-center justify-center text-cyan-300 relative z-10">
            <Users className="w-5 h-5" />
          </div>
          <div className="text-3xl font-bold font-mono text-white relative z-10"><Counter end={4500} suffix="+" /></div>
          <div className="text-xs text-cyan-300 font-medium font-mono relative z-10">Students Empowered</div>
          <p className="text-xs text-slate-300 leading-relaxed relative z-10">
            Connected across 24 Mabutsane District primary schools through Edu-Suite digital management and learning tools.
          </p>
        </motion.div>

        <motion.div variants={item} className="glass-card p-6 rounded-2xl space-y-3 relative overflow-hidden group">
          <div className="glass-sheen" />
          <div className="w-10 h-10 rounded-xl glass-button flex items-center justify-center text-violet-300 relative z-10">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="text-3xl font-bold font-mono text-white relative z-10"><Counter end={12000} suffix="+" /></div>
          <div className="text-xs text-violet-300 font-medium font-mono relative z-10">Secure Verifications</div>
          <p className="text-xs text-slate-300 leading-relaxed relative z-10">
            Processed via NexusKYC identity verification gateway with zero raw biometric data persistence.
          </p>
        </motion.div>

        <motion.div variants={item} className="glass-card p-6 rounded-2xl space-y-3 relative overflow-hidden group">
          <div className="glass-sheen" />
          <div className="w-10 h-10 rounded-xl glass-button flex items-center justify-center text-emerald-300 relative z-10">
            <Zap className="w-5 h-5" />
          </div>
          <div className="text-3xl font-bold font-mono text-white relative z-10"><Counter end={34} suffix="%" /></div>
          <div className="text-xs text-emerald-300 font-medium font-mono relative z-10">Stockout Reduction</div>
          <p className="text-xs text-slate-300 leading-relaxed relative z-10">
            Achieved across rural clinic supply chains through MedTrack BW real-time IoT cold-chain telemetry.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};
