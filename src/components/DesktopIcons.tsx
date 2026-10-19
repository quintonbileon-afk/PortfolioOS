import React from 'react';
import { motion } from 'motion/react';
import { MacIcon } from './MacIcons';

interface DesktopIconsProps {
  onOpenApp: (id: string) => void;
}

const DESKTOP_APPS = [
  { id: 'about', title: 'About', iconName: 'about' },
  { id: 'projects', title: 'Projects', iconName: 'projects' },
  { id: 'resume', title: 'Résumé', iconName: 'resume' },
  { id: 'contact', title: 'Contact', iconName: 'contact' }
];

export const DesktopIcons: React.FC<DesktopIconsProps> = ({ onOpenApp }) => {
  return (
    <div className="absolute top-12 right-6 grid grid-cols-1 gap-6 z-10 select-none">
      {DESKTOP_APPS.map((app, idx) => (
        <motion.button
          key={app.id}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.05 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onDoubleClick={() => onOpenApp(app.id)}
          onClick={() => onOpenApp(app.id)}
          className="flex flex-col items-center p-2 rounded-xl group transition cursor-pointer text-center w-24"
        >
          <div className="w-16 h-16 rounded-2xl shadow-xl overflow-hidden mb-1.5 transition group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]">
            <MacIcon name={app.iconName} size={64} />
          </div>
          <span className="text-[11px] font-medium text-white glass-pill px-2 py-0.5 mt-0.5 group-hover:border-cyan-400/40 group-hover:text-cyan-200 transition">
            {app.title}
          </span>
        </motion.button>
      ))}
    </div>
  );
};
