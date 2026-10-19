import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  X, 
  Minus, 
  Square, 
  PanelLeft, 
  PanelRight, 
  Crosshair, 
  Maximize2, 
  Minimize2,
  GripHorizontal
} from 'lucide-react';

export interface WindowBounds {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface WindowProps {
  id: string;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  isActive: boolean;
  zIndex: number;
  onClose: (id: string) => void;
  onMinimize: (id: string) => void;
  onFocus: (id: string) => void;
  children: React.ReactNode;
  windowIndex?: number;
  layoutBounds?: WindowBounds | null;
  onBoundsChange?: (id: string, bounds: WindowBounds) => void;
}

const MENU_BAR_H = 36;
const DOCK_ZONE_H = 105;
const EDGE_GAP = 20;

export const Window: React.FC<WindowProps> = ({
  id,
  title,
  isOpen,
  isMinimized,
  isActive,
  zIndex,
  onClose,
  onMinimize,
  onFocus,
  children,
  windowIndex = 0,
  layoutBounds,
  onBoundsChange
}) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [prevBounds, setPrevBounds] = useState<WindowBounds | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Computes dead-center position in the usable viewport
  const getCenterBounds = (customWidth?: number, customHeight?: number): WindowBounds => {
    const usableTop = MENU_BAR_H + 16;
    const usableBottom = window.innerHeight - DOCK_ZONE_H;
    const usableHeight = Math.max(340, usableBottom - usableTop);
    const usableWidth = Math.max(420, window.innerWidth - EDGE_GAP * 2);

    const width = customWidth || Math.min(1060, Math.round(usableWidth * 0.82));
    const height = customHeight || Math.min(680, Math.round(usableHeight * 0.94));

    // ALWAYS strictly centered
    const x = Math.max(EDGE_GAP, Math.round((window.innerWidth - width) / 2));
    const y = Math.max(usableTop, Math.round(usableTop + (usableHeight - height) / 2));

    return { x, y, width, height };
  };

  const [bounds, setBounds] = useState<WindowBounds>(() => layoutBounds || getCenterBounds());

  // Whenever a window opens or is initialized, center it!
  useEffect(() => {
    if (layoutBounds) {
      setBounds(layoutBounds);
    } else {
      const centered = getCenterBounds();
      setBounds(centered);
      onBoundsChange?.(id, centered);
    }
  }, [id]);

  // When external window layout manager pushes new coordinates
  useEffect(() => {
    if (layoutBounds) {
      setBounds(layoutBounds);
    }
  }, [layoutBounds]);

  // Keep window in bounds on viewport resize
  useEffect(() => {
    const handleResize = () => {
      if (!isMaximized) {
        setBounds(prev => {
          const usableTop = MENU_BAR_H + 16;
          const usableBottom = window.innerHeight - DOCK_ZONE_H;
          const usableHeight = Math.max(320, usableBottom - usableTop);
          const usableWidth = Math.max(400, window.innerWidth - EDGE_GAP * 2);
          const width = Math.min(prev.width, usableWidth);
          const height = Math.min(prev.height, usableHeight);
          const x = Math.max(EDGE_GAP, Math.min(window.innerWidth - width - EDGE_GAP, prev.x));
          const y = Math.max(usableTop, Math.min(usableBottom - height, prev.y));
          return { x, y, width, height };
        });
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMaximized]);

  // Dragging by Titlebar with screen boundary constraints
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest('button')) return;
    if (isMaximized) return;

    onFocus(id);
    setIsDragging(true);

    const startX = e.clientX;
    const startY = e.clientY;
    const startBounds = { ...bounds };

    const handlePointerMove = (ev: PointerEvent) => {
      const deltaX = ev.clientX - startX;
      const deltaY = ev.clientY - startY;

      const usableTop = MENU_BAR_H + 4;
      const usableBottom = window.innerHeight - DOCK_ZONE_H;
      const minX = -startBounds.width + 120;
      const maxX = window.innerWidth - 120;

      const nextX = Math.max(minX, Math.min(maxX, startBounds.x + deltaX));
      const nextY = Math.max(usableTop, Math.min(usableBottom - 40, startBounds.y + deltaY));

      const updated = {
        ...startBounds,
        x: nextX,
        y: nextY
      };
      setBounds(updated);
      onBoundsChange?.(id, updated);
    };

    const handlePointerUp = () => {
      setIsDragging(false);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
  };

  // Snapping actions
  const snapLeft = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMaximized(false);
    const usableTop = MENU_BAR_H + 16;
    const usableBottom = window.innerHeight - DOCK_ZONE_H;
    const usableWidth = window.innerWidth - EDGE_GAP * 2;
    const usableHeight = usableBottom - usableTop;
    const halfWidth = Math.floor((usableWidth - 12) / 2);

    const newBounds: WindowBounds = {
      x: EDGE_GAP,
      y: usableTop,
      width: halfWidth,
      height: usableHeight
    };
    setBounds(newBounds);
    onBoundsChange?.(id, newBounds);
  };

  const snapCenter = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMaximized(false);
    const newBounds = getCenterBounds();
    setBounds(newBounds);
    onBoundsChange?.(id, newBounds);
  };

  const snapRight = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMaximized(false);
    const usableTop = MENU_BAR_H + 16;
    const usableBottom = window.innerHeight - DOCK_ZONE_H;
    const usableWidth = window.innerWidth - EDGE_GAP * 2;
    const usableHeight = usableBottom - usableTop;
    const halfWidth = Math.floor((usableWidth - 12) / 2);

    const newBounds: WindowBounds = {
      x: EDGE_GAP + halfWidth + 12,
      y: usableTop,
      width: halfWidth,
      height: usableHeight
    };
    setBounds(newBounds);
    onBoundsChange?.(id, newBounds);
  };

  const toggleMaximize = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const usableTop = MENU_BAR_H + 10;
    const usableBottom = window.innerHeight - DOCK_ZONE_H + 18;
    const usableWidth = window.innerWidth - EDGE_GAP * 2;
    const usableHeight = usableBottom - usableTop;

    if (!isMaximized) {
      setPrevBounds(bounds);
      const newBounds: WindowBounds = {
        x: EDGE_GAP,
        y: usableTop,
        width: usableWidth,
        height: usableHeight
      };
      setBounds(newBounds);
      setIsMaximized(true);
      onBoundsChange?.(id, newBounds);
    } else {
      const restore = prevBounds || getCenterBounds();
      setBounds(restore);
      setIsMaximized(false);
      onBoundsChange?.(id, restore);
    }
  };

  if (!isOpen || isMinimized) return null;

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0, filter: 'blur(10px)' }}
      animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
      exit={{ scale: 0.95, opacity: 0, filter: 'blur(10px)' }}
      transition={{ type: 'spring', damping: 26, stiffness: 320 }}
      style={{
        zIndex,
        position: 'absolute',
        left: `${bounds.x}px`,
        top: `${bounds.y}px`,
        width: `${bounds.width}px`,
        height: `${bounds.height}px`,
      }}
      onClick={() => onFocus(id)}
      className={`aurora-window flex flex-col overflow-hidden transition-[box-shadow,opacity,border-color] duration-200 hud-corner-tl hud-corner-tr ${
        isActive 
          ? 'ring-1 ring-cyan-400/60 shadow-[0_30px_90px_rgba(0,0,0,0.85),0_0_30px_rgba(34,211,238,0.2)]' 
          : 'opacity-88 saturate-90 hover:opacity-98 ring-1 ring-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.65)]'
      }`}
    >
      {/* Specular Physical Glass Sheen Reflection */}
      <div className="glass-sheen" />

      {/* Window Titlebar with glass HUD styling and drag functionality */}
      <div 
        onPointerDown={handlePointerDown}
        onDoubleClick={toggleMaximize}
        className={`h-11 px-4 flex items-center justify-between select-none shrink-0 border-b border-white/12 relative overflow-hidden bg-white/[0.04] backdrop-blur-md transition-colors ${
          isDragging ? 'cursor-grabbing bg-cyan-950/30' : 'cursor-grab hover:bg-white/[0.06]'
        }`}
        title="Double click to toggle Maximize. Click & drag to move window."
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent pointer-events-none" />

        {/* Traffic Light Controls */}
        <div className="flex items-center space-x-2.5 z-10">
          <button
            onClick={(e) => { e.stopPropagation(); onClose(id); }}
            className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] border border-[#E0443E] flex items-center justify-center transition cursor-pointer group shadow-sm"
            title="Close Window"
          >
            <X className="w-2.5 h-2.5 text-black opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onMinimize(id); }}
            className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] border border-[#DEA123] flex items-center justify-center transition cursor-pointer group shadow-sm"
            title="Minimize to Dock"
          >
            <Minus className="w-2.5 h-2.5 text-black opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          <button
            onClick={toggleMaximize}
            className="w-3.5 h-3.5 rounded-full bg-[#27C93F] border border-[#1AAB29] flex items-center justify-center transition cursor-pointer group shadow-sm"
            title={isMaximized ? "Restore Size" : "Maximize Screen"}
          >
            {isMaximized ? (
              <Minimize2 className="w-2.5 h-2.5 text-black opacity-0 group-hover:opacity-100 transition-opacity" />
            ) : (
              <Square className="w-2 h-2 text-black opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
          </button>
        </div>

        {/* Centered Monospace Technical Title + Drag Indicator */}
        <div className="flex items-center space-x-2 truncate z-10 px-2 pointer-events-none">
          <GripHorizontal className="w-3.5 h-3.5 text-cyan-400/40 hidden sm:inline" />
          <span className={`text-xs font-mono font-bold tracking-wider truncate transition-colors ${
            isActive ? 'text-cyan-200 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]' : 'text-slate-400'
          }`}>
            // {title.toUpperCase()}
          </span>
          {isActive && (
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee] animate-pulse" />
          )}
        </div>

        {/* Window Snapping & Placement Controls */}
        <div className="flex items-center space-x-1.5 z-10">
          <div className="flex items-center bg-black/30 border border-white/10 rounded-lg p-0.5">
            <button
              onClick={snapLeft}
              className="p-1 rounded text-cyan-400/70 hover:text-cyan-200 hover:bg-cyan-500/20 transition cursor-pointer"
              title="Snap to Left 50%"
            >
              <PanelLeft className="w-3 h-3" />
            </button>
            <button
              onClick={snapCenter}
              className="p-1 rounded text-cyan-400/70 hover:text-cyan-200 hover:bg-cyan-500/20 transition cursor-pointer"
              title="Center on Screen"
            >
              <Crosshair className="w-3 h-3" />
            </button>
            <button
              onClick={snapRight}
              className="p-1 rounded text-cyan-400/70 hover:text-cyan-200 hover:bg-cyan-500/20 transition cursor-pointer"
              title="Snap to Right 50%"
            >
              <PanelRight className="w-3 h-3" />
            </button>
          </div>

          <div className="hidden sm:inline-block text-[9px] font-mono tracking-widest text-cyan-400/60 uppercase px-1.5 py-0.5 rounded border border-cyan-500/20 bg-cyan-950/20">
            {isActive ? 'ACTIVE' : 'READY'}
          </div>
        </div>
      </div>

      {/* Content Area with strict flex and internal scrolling */}
      <div className="flex-1 min-h-0 overflow-y-auto p-6 text-slate-100 relative scrollbar-thin">
        {children}
      </div>
    </motion.div>
  );
};
