import React from 'react';
import { motion } from 'motion/react';
import { DOCK_ITEMS } from './Dock';
import { MacIcon } from './MacIcons';
import { X, Search } from 'lucide-react';

interface LaunchpadProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenApp: (id: string) => void;
}

export const Launchpad: React.FC<LaunchpadProps> = ({ isOpen, onClose, onOpenApp }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-[#06080F]/80 backdrop-blur-3xl flex flex-col items-center justify-between p-8 select-none relative overflow-hidden"
    >
      {/* Aurora Orbs for refraction through Launchpad blur */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-[160px] pointer-events-none aurora-orb-1" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-violet-600/15 rounded-full blur-[170px] pointer-events-none aurora-orb-2" />

      <div className="w-full max-w-xl flex justify-between items-center pt-4 relative z-10">
        <div className="relative w-full max-w-xs mx-auto">
          <Search className="absolute left-3.5 top-2.5 w-4 h-4 text-cyan-400" />
          <input
            type="text"
            placeholder="Search applications..."
            className="w-full glass-input rounded-full pl-10 pr-4 py-2 text-xs text-white placeholder:text-slate-400 focus:outline-none"
          />
        </div>
        <button
          onClick={onClose}
          className="p-2.5 rounded-full glass-button text-white transition cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 max-w-4xl my-auto">
        {DOCK_ITEMS.map((item) => (
          <motion.button
            key={item.id}
            whileHover={{ scale: 1.08, y: -4 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              onOpenApp(item.id);
              onClose();
            }}
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="w-20 h-20 rounded-2xl shadow-2xl overflow-hidden mb-3 transition group-hover:shadow-indigo-500/30">
              <MacIcon name={item.id} size={80} />
            </div>
            <span className="text-xs font-medium text-slate-200 group-hover:text-white drop-shadow">
              {item.title}
            </span>
          </motion.button>
        ))}
      </div>

      <div className="text-xs text-slate-500 font-mono pb-2">
        Press ESC or click close to exit Launchpad
      </div>
    </motion.div>
  );
};
