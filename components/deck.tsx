"use client";

import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Bookmark } from "@/components/bookmark";
//components/deck.tsx
export type DeckPage = {
  label: string;
  node: ReactNode;
  cover?: boolean;
  bookmarkLabel?: string; // group multiple pages under one bookmark tab
};

type DeckProps = {
  pages: DeckPage[];
};

const SHEET_WIDTH = "min(210mm, 92vw, calc((100vh - 180px) * 210 / 297))";
const BOOKMARK_SETTLE_MS = 260;

export function Deck({ pages }: DeckProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [bookmarkIndex, setBookmarkIndex] = useState<number | null>(0);
  const cooldown = useRef(false);

  const goTo = useCallback(
    (next: number) => {
      if (next < 0 || next > pages.length - 1) return;
      setDirection(next > index ? 1 : -1);
      setIndex(next);
    },
    [index, pages.length]
  );

  // bookmark goes null on page change, resolves once transition settles
  useEffect(() => {
    setBookmarkIndex(null);
    const t = setTimeout(() => setBookmarkIndex(index), BOOKMARK_SETTLE_MS);
    return () => clearTimeout(t);
  }, [index]);

  const step = useCallback(
    (delta: 1 | -1) => {
      if (cooldown.current) return;
      cooldown.current = true;
      goTo(index + delta);
      window.setTimeout(() => {
        cooldown.current = false;
      }, 550);
    },
    [goTo, index]
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === "PageDown") {
        e.preventDefault();
        step(1);
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        step(-1);
      }
    }
    window.addEventListener("keydown", onKey, { passive: false });
    return () => window.removeEventListener("keydown", onKey);
  }, [step]);

  useEffect(() => {
    function onWheel(e: WheelEvent) {
      if (Math.abs(e.deltaY) < 12) return;
      e.preventDefault();
      step(e.deltaY > 0 ? 1 : -1);
    }
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [step]);

  const touchStartY = useRef<number | null>(null);
  useEffect(() => {
    function onTouchStart(e: TouchEvent) {
      touchStartY.current = e.touches[0].clientY;
    }
    function onTouchEnd(e: TouchEvent) {
      if (touchStartY.current === null) return;
      const delta = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(delta) > 60) {
        step(delta > 0 ? 1 : -1);
      }
      touchStartY.current = null;
    }
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [step]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-between gap-4 overflow-hidden px-4 py-6 sm:gap-6 sm:py-10">
      <div className="flex w-full max-w-a4 items-center justify-between text-ink-faint">
        <span className="font-mono text-[10px] tracking-wide">
          {String(index + 1).padStart(2, "0")} / {String(pages.length).padStart(2, "0")}
        </span>
        <ThemeToggle />
      </div>

      <div
        className="relative w-full flex-1"
        style={{ ["--sheet-w" as string]: SHEET_WIDTH } as React.CSSProperties}
      >
        {pages.map((page, i) => (
          <div
            key={`${page.label}-${i}`}
            aria-hidden={i !== index}
            className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out"
            style={{
              opacity: i === index ? 1 : 0,
              transform:
                i === index
                  ? "translateY(0)"
                  : `translateY(${direction === 1 ? 10 : -10}px)`,
              pointerEvents: i === index ? "auto" : "none",
              zIndex: i === index ? 1 : 0,
            }}
          >
            {page.node}
          </div>
        ))}

        <Bookmark pages={pages} index={bookmarkIndex} onSelect={goTo} />
      </div>

      <div className="flex w-full max-w-a4 items-center justify-between">
        <button
          type="button"
          onClick={() => step(-1)}
          disabled={index === 0}
          aria-label="Previous page"
          className="flex h-8 w-8 items-center justify-center text-ink-faint transition-colors hover:text-ink disabled:opacity-0 dark:hover:text-paper"
        >
          <ChevronUp size={16} strokeWidth={1.5} />
        </button>

        <span className="font-mono text-[10px] tracking-wide text-ink-faint">
          {pages[index].label}
        </span>

        <button
          type="button"
          onClick={() => step(1)}
          disabled={index === pages.length - 1}
          aria-label="Next page"
          className="flex h-8 w-8 items-center justify-center text-ink-faint transition-colors hover:text-ink disabled:opacity-0 dark:hover:text-paper"
        >
          <ChevronDown size={16} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}