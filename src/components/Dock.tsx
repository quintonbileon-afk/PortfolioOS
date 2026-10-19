import React from 'react';
import { motion } from 'motion/react';
import { MacIcon } from './MacIcons';

export interface DockItem {
  id: string;
  title: string;
  label?: string;
  iconName: string;
}

interface DockProps {
  openWindows: string[];
  minimizedWindows: string[];
  activeWindowId: string | null;
  onOpenApp: (id: string) => void;
  onOpenLaunchpad: () => void;
  onOpenSettings: () => void;
}

export const DOCK_ITEMS: DockItem[] = [
  { id: 'about', title: 'About Golebileone Setlamelo', label: 'About', iconName: 'about' },
  { id: 'projects', title: 'Projects', label: 'Projects', iconName: 'projects' },
  { id: 'skills', title: 'Skills', label: 'Skills', iconName: 'skills' },
  { id: 'experience', title: 'Experience', label: 'Experience', iconName: 'experience' },
  { id: 'education', title: 'Education', label: 'Education', iconName: 'education' },
  { id: 'terminal', title: 'Terminal', label: 'Terminal', iconName: 'terminal' },
  { id: 'ai', title: 'AI Assistant', label: 'AI Assist', iconName: 'ai' },
  { id: 'impact', title: 'Impact Metrics', label: 'Impact', iconName: 'impact' },
  { id: 'testimonials', title: 'Testimonials', label: 'Reviews', iconName: 'testimonials' },
  { id: 'resume', title: 'Résumé', label: 'Résumé', iconName: 'resume' },
  { id: 'contact', title: 'Contact', label: 'Contact', iconName: 'contact' }
];

export const Dock: React.FC<DockProps> = ({
  openWindows,
  minimizedWindows,
  activeWindowId,
  onOpenApp,
  onOpenLaunchpad,
  onOpenSettings
}) => {
  const [isVisible, setIsVisible] = React.useState(true);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 2000);
  };

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div 
      className="absolute bottom-2 left-1/2 -translate-x-1/2 z-45 flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: isVisible ? 0 : 50, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="aurora-dock px-3 pt-2 pb-1.5 rounded-2xl flex items-center space-x-2 max-w-[96vw] overflow-x-auto scrollbar-none relative"
      >
        {/* Specular Dock Glass Sheen */}
        <div className="glass-sheen" />

        {/* Launchpad Icon */}
        <div className="relative group flex flex-col items-center flex-shrink-0 min-w-[46px]">
          <div className="absolute -top-10 px-2.5 py-0.5 bg-black/80 backdrop-blur-xl border border-white/20 text-[10px] text-white font-sans rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl z-30">
            Launchpad
          </div>
          <motion.button
            whileHover={{ scale: 1.18, y: -4 }}
            whileTap={{ scale: 0.92 }}
            onClick={onOpenLaunchpad}
            className="w-11 h-11 rounded-xl flex items-center justify-center transition cursor-pointer relative shadow-lg"
          >
            <MacIcon name="launchpad" size={44} />
          </motion.button>
          <span className="text-[10px] leading-tight font-medium text-slate-300 group-hover:text-cyan-200 mt-1 transition-colors select-none tracking-tight">
            Launchpad
          </span>
        </div>

        <div className="h-8 w-[1px] bg-white/20 mx-0.5 self-center" />

        {DOCK_ITEMS.map((item) => {
          const isOpen = openWindows.includes(item.id);
          const isMinimized = minimizedWindows.includes(item.id);
          const isActive = activeWindowId === item.id && !isMinimized;

          return (
            <div key={item.id} className="relative group flex flex-col items-center flex-shrink-0 min-w-[48px] max-w-[58px]">
              {/* Tooltip on hover */}
              <div className="absolute -top-10 px-2.5 py-0.5 bg-black/80 backdrop-blur-xl border border-white/20 text-[10px] text-white font-sans rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl z-30">
                {item.title}
              </div>

              <motion.button
                whileHover={{ scale: 1.4, y: -10 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                whileTap={{ scale: 0.92 }}
                onClick={() => onOpenApp(item.id)}
                className="w-11 h-11 rounded-xl flex items-center justify-center transition cursor-pointer relative shadow-lg group-hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]"
              >
                <MacIcon name={item.iconName} size={44} />

                {/* Running indicator dot */}
                {isOpen && (
                  <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full ${isActive ? 'bg-cyan-400 shadow-[0_0_8px_#22D3EE]' : 'bg-white/70'}`} />
                )}
              </motion.button>

              {/* Small label below icon */}
              <span className={`text-[10px] leading-tight mt-1 font-medium tracking-tight text-center truncate w-full select-none transition-colors ${
                isActive ? 'text-cyan-300 font-semibold drop-shadow-[0_0_6px_rgba(34,211,238,0.4)]' : 'text-slate-300 group-hover:text-white'
              }`}>
                {item.label || item.title}
              </span>
            </div>
          );
        })}

        <div className="h-8 w-[1px] bg-white/20 mx-0.5 self-center" />

        {/* Settings Icon */}
        <div className="relative group flex flex-col items-center flex-shrink-0 min-w-[46px]">
          <div className="absolute -top-10 px-2.5 py-0.5 bg-black/80 backdrop-blur-xl border border-white/20 text-[10px] text-white font-sans rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl z-30">
            Settings
          </div>
          <motion.button
            whileHover={{ scale: 1.18, y: -4 }}
            whileTap={{ scale: 0.92 }}
            onClick={onOpenSettings}
            className="w-11 h-11 rounded-xl flex items-center justify-center transition cursor-pointer relative shadow-lg"
          >
            <MacIcon name="settings" size={44} />
          </motion.button>
          <span className="text-[10px] leading-tight font-medium text-slate-300 group-hover:text-cyan-200 mt-1 transition-colors select-none tracking-tight">
            Settings
          </span>
        </div>
      </motion.div>
    </div>
  );
};
