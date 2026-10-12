import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

/**
 * CirculoAuditIcon
 * Bespoke icon for ESG Audit Ledger & Verified Reporting.
 * Features a circular precision gauge with an internal audit ledger balance.
 */
export function CirculoAuditIcon({ className = "text-current", size = 20, strokeWidth = 1.75 }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer precision circular scale */}
      <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth={strokeWidth} />
      {/* Calibration ticks at cardinal points */}
      <line x1="12" y1="2.75" x2="12" y2="4.75" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
      <line x1="12" y1="19.25" x2="12" y2="21.25" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
      <line x1="2.75" y1="12" x2="4.75" y2="12" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
      <line x1="19.25" y1="12" x2="21.25" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
      {/* Internal verified ledger bars */}
      <path 
        d="M8 12.5L10.5 15L16 9" 
        stroke="currentColor" 
        strokeWidth={strokeWidth} 
        strokeLinecap="square" 
        strokeLinejoin="miter" 
      />
    </svg>
  );
}

/**
 * CirculoCustomCraftIcon
 * Bespoke icon for Real-time Mockup, Mold Drafting, and Circular Design.
 * Features drafting crosshairs with an expanding circular contour.
 */
export function CirculoCustomCraftIcon({ className = "text-current", size = 20, strokeWidth = 1.75 }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Circular mold outer outline */}
      <rect x="3.5" y="3.5" width="17" height="17" stroke="currentColor" strokeWidth={strokeWidth} />
      {/* Dynamic circular geometry in center */}
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth={strokeWidth} />
      {/* Architectural drafting marks */}
      <line x1="12" y1="2" x2="12" y2="5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
      <line x1="12" y1="19" x2="12" y2="22" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
      <line x1="2" y1="12" x2="5" y2="12" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
      <line x1="19" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
    </svg>
  );
}

/**
 * CirculoMakersIcon
 * Bespoke icon for the 120+ Artisan Community & Fair Wage Supply Chain.
 * Features interlocking circular threads / woven artisan geometric pattern.
 */
export function CirculoMakersIcon({ className = "text-current", size = 20, strokeWidth = 1.75 }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Interlocking craft circles forming a community knot */}
      <circle cx="8.5" cy="9" r="4.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="15.5" cy="9" r="4.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <path 
        d="M4.5 19.5C4.5 16 8 15 12 15C16 15 19.5 16 19.5 19.5" 
        stroke="currentColor" 
        strokeWidth={strokeWidth} 
        strokeLinecap="square" 
      />
      <line x1="12" y1="15" x2="12" y2="20" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/**
 * CirculoPassIcon
 * Bespoke icon for Evaluator Pass & Instant B2B Demo Access.
 * Replaces generic AI sparkles with an official verified access seal.
 */
export function CirculoPassIcon({ className = "text-current", size = 20, strokeWidth = 1.75 }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Official credential badge geometry */}
      <path 
        d="M5 4H19V16L12 21L5 16V4Z" 
        stroke="currentColor" 
        strokeWidth={strokeWidth} 
        strokeLinejoin="miter" 
      />
      {/* Inner keyhole / verification core */}
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M12 12.5V15.5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
    </svg>
  );
}

/**
 * CirculoLoopIcon
 * Circulo's signature closed-loop circular economy motif.
 * Architectural circular continuous flow.
 */
export function CirculoLoopIcon({ className = "text-current", size = 20, strokeWidth = 1.75 }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={strokeWidth} strokeDasharray="14 4" />
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="12" y1="3" x2="15" y2="3" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
      <line x1="12" y1="21" x2="9" y2="21" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
    </svg>
  );
}
