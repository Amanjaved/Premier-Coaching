import React from "react";

/**
 * Playful, energetic educational doodles and stickers inspired by
 * top coaching institute visuals to make the design feel alive and fun.
 */

export function DoodleSparkle({ className = "size-6 text-gold" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
    </svg>
  );
}

export function DoodlePaperPlane({
  className = "w-20 h-12 text-royal/60",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 60"
      fill="none"
      stroke="currentColor"
      className={className}
      aria-hidden="true"
    >
      {/* Dashed flight trail */}
      <path
        d="M5 45 C 25 55, 45 20, 75 35"
        strokeWidth="2"
        strokeDasharray="4 4"
        strokeLinecap="round"
      />
      {/* Paper plane polygon */}
      <g transform="translate(75, 15) rotate(15)">
        <polygon
          points="35,15 0,0 12,20 18,32"
          fill="currentColor"
          fillOpacity="0.15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <line x1="35" y1="15" x2="12" y2="20" stroke="currentColor" strokeWidth="2" />
      </g>
    </svg>
  );
}

export function DoodleLightbulb({ className = "size-10 text-gold" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Rays */}
      <line x1="24" y1="3" x2="24" y2="8" />
      <line x1="9" y1="9" x2="13" y2="13" />
      <line x1="39" y1="9" x2="35" y2="13" />
      <line x1="3" y1="24" x2="8" y2="24" />
      <line x1="45" y1="24" x2="40" y2="24" />
      {/* Bulb body */}
      <path
        d="M16 28 C 14 24, 14 18, 18 14 C 22 10, 26 10, 30 14 C 34 18, 34 24, 32 28 Z"
        fill="currentColor"
        fillOpacity="0.15"
      />
      {/* Base */}
      <line x1="19" y1="34" x2="29" y2="34" />
      <line x1="20" y1="39" x2="28" y2="39" />
      <path d="M22 43 C 23 44, 25 44, 26 43" />
    </svg>
  );
}

export function DoodleCurvedArrow({ className = "w-16 h-10 text-gold" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 30 C 20 5, 45 10, 52 28" />
      <path d="M42 26 L 53 29 L 52 18" />
    </svg>
  );
}

export function DoodleWavyUnderline({
  className = "w-32 h-4 text-orange",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 10 Q 15 2, 27 10 T 51 10 T 75 10 T 99 10 T 117 10" />
    </svg>
  );
}

export function DoodleOpenBook({ className = "w-12 h-9 text-white/80" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M24 10 C 20 6, 8 6, 4 9 V 31 C 8 28, 20 28, 24 32 C 28 28, 40 28, 44 31 V 9 C 40 6, 28 6, 24 10 Z" />
      <line x1="24" y1="10" x2="24" y2="32" />
      <line x1="9" y1="15" x2="19" y2="15" strokeWidth="2" />
      <line x1="9" y1="20" x2="19" y2="20" strokeWidth="2" />
      <line x1="29" y1="15" x2="39" y2="15" strokeWidth="2" />
      <line x1="29" y1="20" x2="39" y2="20" strokeWidth="2" />
    </svg>
  );
}

export function DoodleCrown({ className = "w-8 h-6 text-gold" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M2 20 L 5 7 L 11 14 L 16 3 L 21 14 L 27 7 L 30 20 Z" />
      <circle cx="5" cy="5" r="2" />
      <circle cx="16" cy="2" r="2" />
      <circle cx="27" cy="5" r="2" />
    </svg>
  );
}

export function DoodleUnderlineCurve({ className = "w-72 h-4 text-gold" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 20" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 12 C 60 4, 180 5, 314 9"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M24 15 C 100 11, 230 11, 280 14"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}

export function DoodleGradCap({ className = "size-8 text-navy" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 4 L 2 11 L 16 18 L 30 11 Z" fill="currentColor" fillOpacity="0.15" />
      <path d="M6 14.5 V 21 C 6 25, 11 28, 16 28 C 21 28, 26 25, 26 21 V 14.5" />
      <path d="M30 11 V 22" />
      <circle cx="30" cy="23" r="1.5" fill="currentColor" />
    </svg>
  );
}
