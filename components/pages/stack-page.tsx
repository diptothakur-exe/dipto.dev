import { A4Sheet } from "@/components/a4-sheet";
import { techGroups } from "@/lib/data";
//components\pages\stack-page.tsx
export function StackPage() {
  return (
    <A4Sheet>
      <div className="flex h-full flex-col text-left">
        <div>
          <h2
            className="ink-imprint text-ink tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 1rem + 4vw, 2.5rem)", lineHeight: 1.1 }}
          >
            Stack
          </h2>
          <p
            className="mt-2 max-w-[38ch] text-ink-soft"
            style={{ fontSize: "clamp(0.85rem, 0.65rem + 0.5vw, 0.95rem)" }}
          >
            Tools I build with, by area.
          </p>
        </div>

        <div className="flex flex-1 flex-col justify-center gap-6 sm:gap-7">
          {techGroups.map((group) => (
            <div key={group.label}>
              <p
                className="font-mono tracking-[0.08em] text-ink-faint"
                style={{ fontSize: "clamp(0.65rem, 0.55rem + 0.3vw, 0.7rem)" }}
              >
                {group.label}
              </p>
              <p
                className="mt-1.5 max-w-[46ch] leading-relaxed text-ink"
                style={{ fontSize: "clamp(0.85rem, 0.65rem + 0.5vw, 0.95rem)" }}
              >
                {group.items.join(", ")}.
              </p>
            </div>
          ))}
        </div>
      </div>
    </A4Sheet>
  );
}