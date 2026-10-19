import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const MacIcon: React.FC<{ name: string; size?: number; className?: string }> = ({ name, size = 56, className = "" }) => {
  switch (name) {
    case 'about':
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
          <defs>
            <linearGradient id="about-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4A90E2" />
              <stop offset="100%" stopColor="#1C52A0" />
            </linearGradient>
            <linearGradient id="about-inner" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect width="64" height="64" rx="14" fill="url(#about-grad)" />
          <rect width="64" height="64" rx="14" fill="url(#about-inner)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          {/* User Profile Glyph */}
          <circle cx="32" cy="24" r="10" fill="white" fillOpacity="0.95" />
          <path d="M14 50C14 41.1634 21.1634 34 30 34H34C42.8366 34 50 41.1634 50 50V52H14V50Z" fill="white" fillOpacity="0.95" />
        </svg>
      );

    case 'projects':
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
          <defs>
            <linearGradient id="proj-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#4C1D95" />
            </linearGradient>
          </defs>
          <rect width="64" height="64" rx="14" fill="url(#proj-grad)" />
          <rect width="64" height="64" rx="14" fill="url(#about-inner)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          {/* Folder Glyph */}
          <path d="M14 20C14 17.7909 15.7909 16 18 16H27L31 21H46C48.2091 21 50 22.7909 50 25V46C50 48.2091 48.2091 50 46 50H18C15.7909 50 14 48.2091 14 46V20Z" fill="white" fillOpacity="0.92" />
        </svg>
      );

    case 'skills':
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
          <defs>
            <linearGradient id="skill-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
          </defs>
          <rect width="64" height="64" rx="14" fill="url(#skill-grad)" />
          <rect width="64" height="64" rx="14" fill="url(#about-inner)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          {/* Activity Chart Glyph */}
          <path d="M14 40L24 28L32 36L44 20L50 26" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="50" cy="26" r="4" fill="white" />
        </svg>
      );

    case 'experience':
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
          <defs>
            <linearGradient id="exp-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>
          </defs>
          <rect width="64" height="64" rx="14" fill="url(#exp-grad)" />
          <rect width="64" height="64" rx="14" fill="url(#about-inner)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          {/* Clock Glyph */}
          <circle cx="32" cy="32" r="16" stroke="white" strokeWidth="4" />
          <path d="M32 20V32H40" stroke="white" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );

    case 'education':
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
          <defs>
            <linearGradient id="edu-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0369A1" />
            </linearGradient>
          </defs>
          <rect width="64" height="64" rx="14" fill="url(#edu-grad)" />
          <rect width="64" height="64" rx="14" fill="url(#about-inner)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          {/* Graduation Cap Glyph */}
          <path d="M32 16L12 26L32 36L52 26L32 16Z" fill="white" />
          <path d="M20 32V42C20 46 26 48 32 48C38 48 44 46 44 42V32" stroke="white" strokeWidth="3" strokeLinecap="round" />
          <path d="M48 28V40" stroke="white" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    case 'terminal':
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
          <defs>
            <linearGradient id="term-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>
          </defs>
          <rect width="64" height="64" rx="14" fill="url(#term-grad)" />
          <rect width="64" height="64" rx="14" fill="url(#about-inner)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          {/* Terminal Prompt Glyph */}
          <path d="M20 22L32 32L20 42" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M36 42H44" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );

    case 'ai':
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
          <defs>
            <linearGradient id="ai-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
          <rect width="64" height="64" rx="14" fill="url(#ai-grad)" />
          <rect width="64" height="64" rx="14" fill="url(#about-inner)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          {/* Sparkles Glyph */}
          <path d="M32 14L36 26L48 30L36 34L32 46L28 34L16 30L28 26L32 14Z" fill="white" />
        </svg>
      );

    case 'impact':
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
          <defs>
            <linearGradient id="imp-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F43F5E" />
              <stop offset="100%" stopColor="#be123c" />
            </linearGradient>
          </defs>
          <rect width="64" height="64" rx="14" fill="url(#imp-grad)" />
          <rect width="64" height="64" rx="14" fill="url(#about-inner)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          {/* Bar Chart Glyph */}
          <rect x="16" y="32" width="8" height="16" rx="2" fill="white" />
          <rect x="28" y="22" width="8" height="26" rx="2" fill="white" />
          <rect x="40" y="16" width="8" height="32" rx="2" fill="white" />
        </svg>
      );

    case 'testimonials':
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
          <defs>
            <linearGradient id="test-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#EAB308" />
              <stop offset="100%" stopColor="#A16207" />
            </linearGradient>
          </defs>
          <rect width="64" height="64" rx="14" fill="url(#test-grad)" />
          <rect width="64" height="64" rx="14" fill="url(#about-inner)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          {/* Award Ribbon Glyph */}
          <circle cx="32" cy="26" r="10" fill="white" />
          <path d="M24 38L20 50L32 44L44 50L40 38" fill="white" />
        </svg>
      );

    case 'resume':
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
          <defs>
            <linearGradient id="res-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#64748B" />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>
          </defs>
          <rect width="64" height="64" rx="14" fill="url(#res-grad)" />
          <rect width="64" height="64" rx="14" fill="url(#about-inner)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          {/* Document Glyph */}
          <path d="M20 16H36L44 24V48C44 50.2091 42.2091 52 40 52H20C17.7909 52 16 50.2091 16 48V20C16 17.7909 17.7909 16 20 16Z" fill="white" fillOpacity="0.9" />
          <path d="M36 16V24H44" stroke="#334155" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 30H38" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
          <path d="M22 38H38" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'contact':
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
          <defs>
            <linearGradient id="cont-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0EA5E9" />
              <stop offset="100%" stopColor="#0369A1" />
            </linearGradient>
          </defs>
          <rect width="64" height="64" rx="14" fill="url(#cont-grad)" />
          <rect width="64" height="64" rx="14" fill="url(#about-inner)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          {/* Mail Envelope Glyph */}
          <rect x="14" y="20" width="36" height="24" rx="4" fill="white" />
          <path d="M14 24L32 36L50 24" stroke="#0369A1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'settings':
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
          <defs>
            <linearGradient id="set-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#475569" />
              <stop offset="100%" stopColor="#1E293B" />
            </linearGradient>
          </defs>
          <rect width="64" height="64" rx="14" fill="url(#set-grad)" />
          <rect width="64" height="64" rx="14" fill="url(#about-inner)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          <circle cx="32" cy="32" r="10" stroke="white" strokeWidth="4" />
        </svg>
      );

    case 'launchpad':
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
          <defs>
            <linearGradient id="launch-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#9333EA" />
              <stop offset="100%" stopColor="#581C87" />
            </linearGradient>
          </defs>
          <rect width="64" height="64" rx="14" fill="url(#launch-grad)" />
          <rect width="64" height="64" rx="14" fill="url(#about-inner)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          <circle cx="24" cy="24" r="5" fill="white" />
          <circle cx="40" cy="24" r="5" fill="white" />
          <circle cx="24" cy="40" r="5" fill="white" />
          <circle cx="40" cy="40" r="5" fill="white" />
        </svg>
      );

    default:
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
          <rect width="64" height="64" rx="14" fill="#6C7CFF" />
        </svg>
      );
  }
};
