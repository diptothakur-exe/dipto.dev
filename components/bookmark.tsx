"use client";
//components/bookmark.tsx
export type BookmarkPage = { label: string; cover?: boolean; bookmarkLabel?: string };

type BookmarkProps = {
  pages: BookmarkPage[];
  index: number | null;
  onSelect: (i: number) => void;
};

type BookmarkEntry = { label: string; start: number; end: number };

function buildEntries(pages: BookmarkPage[]): BookmarkEntry[] {
  const entries: BookmarkEntry[] = [];
  pages.forEach((page, i) => {
    if (page.cover) return;
    const label = page.bookmarkLabel ?? page.label;
    const last = entries[entries.length - 1];
    if (last && last.label === label) {
      last.end = i;
    } else {
      entries.push({ label, start: i, end: i });
    }
  });
  return entries;
}

export function Bookmark({ pages, index, onSelect }: BookmarkProps) {
  const entries = buildEntries(pages);

  return (
<div
  className="pointer-events-none absolute top-0 z-20 hidden h-full flex-col items-start justify-center gap-3 sm:flex"
  style={{ left: "calc(50% + var(--sheet-w) / 2)" }}
>
      {entries.map((entry) => {
        const active = index !== null && index >= entry.start && index <= entry.end;
        return (
          <button
            key={entry.label}
            type="button"
            onClick={() => onSelect(entry.start)}
            aria-label={`Go to ${entry.label}`}
            aria-current={active}
            className="pointer-events-auto -ml-px flex items-center whitespace-nowrap rounded-r-sm border border-l-0 px-2.5 py-1 transition-all duration-300"
            style={{
              transform: active ? "translateX(0)" : "translateX(4px)",
              backgroundColor: active ? "#F3F1EA" : "#1B1A17",
              borderColor: active ? "#C9C4B8" : "#1B1A17",
              boxShadow: active
                ? "1px 1px 3px rgba(27,26,23,0.06)"
                : "1px 2px 6px rgba(27,26,23,0.18)",
            }}
          >
<span
  className="font-hand text-[13px] normal-case tracking-normal transition-colors duration-300"
  style={{ color: active ? "#6E6A60" : "#F3F1EA" }}
>
  {entry.label}
</span>
          </button>
        );
      })}
    </div>
  );
}