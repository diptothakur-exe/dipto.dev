"use client";

import { useId } from "react";

/**
 * High-gsm paper grain: fine tooth + coarse fiber clumping, tinted ink,
 * composited with multiply so it reads as texture in the paper, not a layer on it.
 */
export function PaperTexture() {
  const uid = useId().replace(/[:]/g, "");
  const filterId = `paper-grain-${uid}`;

  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{ mixBlendMode: "multiply", opacity: 0.6 }}
    >
      <defs>
        <filter id={filterId} x="-5%" y="-5%" width="110%" height="110%">
          {/* fine paper tooth */}
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="2"
            seed="7"
            result="tooth"
          />
          {/* coarse fiber clumping, uneven density across the sheet */}
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012"
            numOctaves="4"
            seed="23"
            result="fiber"
          />
          {/* recolor both to ink, keep only alpha noise */}
          <feColorMatrix
            in="tooth"
            type="matrix"
            values="0 0 0 0 0.106  0 0 0 0 0.102  0 0 0 0 0.090  0 0 0 0.05 0"
            result="toothInk"
          />
          <feColorMatrix
            in="fiber"
            type="matrix"
            values="0 0 0 0 0.106  0 0 0 0 0.102  0 0 0 0 0.090  0 0 0 0.045 0"
            result="fiberInk"
          />
          <feMerge>
            <feMergeNode in="fiberInk" />
            <feMergeNode in="toothInk" />
          </feMerge>
        </filter>
      </defs>
      <rect width="100%" height="100%" filter={`url(#${filterId})`} />
    </svg>
  );
}