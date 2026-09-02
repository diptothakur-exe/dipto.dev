"use client";
//components/theme/pull-cord.tsx
import { useCallback, useEffect, useRef, useState } from "react";

type PullCordConfig = {
  restLength: number;
  maxStretch: number;
  actuateAt: number; // fraction of maxStretch that fires onPull
  stiffness: number;
  damping: number;
  sleepThreshold: number;
};

const DEFAULT_CONFIG: PullCordConfig = {
  restLength: 46,
  maxStretch: 34,
  actuateAt: 0.62,
  stiffness: 0.18,
  damping: 0.78,
  sleepThreshold: 0.03,
};

type PullCordProps = {
  onPull: () => void;
  pulled?: boolean;
  ariaLabel?: string;
  noEntrance?: boolean;
  config?: Partial<PullCordConfig>;
  className?: string;
};

export function PullCord({
  onPull,
  pulled = false,
  ariaLabel = "Toggle",
  noEntrance = false,
  config,
  className = "",
}: PullCordProps) {
  const cfg = { ...DEFAULT_CONFIG, ...config };
  const [mounted, setMounted] = useState(false);

  const knobRef = useRef<HTMLSpanElement>(null);
  const ropeRef = useRef<SVGLineElement>(null);

  const stretch = useRef(0);
  const velocity = useRef(0);
  const dragging = useRef(false);
  const dragStartY = useRef(0);
  const dragStartStretch = useRef(0);
  const firedThisPull = useRef(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => setMounted(true), []);

  const applyTransform = useCallback(
    (s: number) => {
      const length = cfg.restLength + s;
      ropeRef.current?.setAttribute("y2", String(length));
      if (knobRef.current) knobRef.current.style.transform = `translateY(${length}px)`;
    },
    [cfg.restLength]
  );

  const tick = useCallback(() => {
    const force = -stretch.current * cfg.stiffness;
    velocity.current = (velocity.current + force) * cfg.damping;
    stretch.current += velocity.current;

    if (stretch.current < 0) {
      stretch.current = 0;
      velocity.current = 0;
    }

    applyTransform(stretch.current);

    if (Math.abs(velocity.current) > cfg.sleepThreshold || stretch.current > 0.05) {
      rafId.current = requestAnimationFrame(tick);
    } else {
      stretch.current = 0;
      applyTransform(0);
      rafId.current = null;
    }
  }, [applyTransform, cfg.damping, cfg.sleepThreshold, cfg.stiffness]);

  const startLoop = useCallback(() => {
    if (rafId.current === null) rafId.current = requestAnimationFrame(tick);
  }, [tick]);

  useEffect(
    () => () => {
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    },
    []
  );

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    dragging.current = true;
    firedThisPull.current = false;
    dragStartY.current = e.clientY;
    dragStartStretch.current = stretch.current;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
  }, []);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragging.current) return;
      const delta = e.clientY - dragStartY.current;
      const next = Math.min(cfg.maxStretch, Math.max(0, dragStartStretch.current + delta));
      stretch.current = next;
      velocity.current = 0;
      applyTransform(next);

      if (!firedThisPull.current && next >= cfg.maxStretch * cfg.actuateAt) {
        firedThisPull.current = true;
        onPull();
      }
    },
    [applyTransform, cfg.actuateAt, cfg.maxStretch, onPull]
  );

  const handlePointerUp = useCallback(() => {
    dragging.current = false;
    startLoop();
  }, [startLoop]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onPull();
        stretch.current = cfg.maxStretch * 0.4;
        velocity.current = 0;
        startLoop();
      }
    },
    [cfg.maxStretch, onPull, startLoop]
  );

  const totalHeight = cfg.restLength + cfg.maxStretch + 14;

  return (
    <div
      className={`pullcord-root ${mounted && !noEntrance ? "pullcord-enter" : ""} ${className}`}
      style={{ height: totalHeight }}
    >
      <svg className="pullcord-rope" width="2" height={totalHeight} aria-hidden>
        <line ref={ropeRef} x1="1" y1="0" x2="1" y2={cfg.restLength} />
      </svg>
      <span
        ref={knobRef}
        role="switch"
        tabIndex={0}
        aria-checked={pulled}
        aria-label={ariaLabel}
        className="pullcord-knob"
        style={{ transform: `translateY(${cfg.restLength}px)` }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}