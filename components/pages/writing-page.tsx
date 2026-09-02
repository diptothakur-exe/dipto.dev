import { A4Sheet } from "@/components/a4-sheet";
import { InlineLink } from "@/components/inline-link";
import { resources, writing } from "@/lib/data";
//components\pages\writing-page.tsx
export function WritingPage() {
  return (
    <A4Sheet>
      <div className="flex h-full flex-col justify-center gap-10 text-left sm:gap-12">
        <div>
          <h2
            className="ink-imprint text-ink tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 1rem + 4vw, 2.5rem)", lineHeight: 1.1 }}
          >
            Writing
          </h2>
          <div className="mt-3 flex flex-col gap-2">
            {writing.map((piece) => (
              <p
                key={piece.title}
                className="max-w-[46ch] leading-relaxed text-ink"
                style={{ fontSize: "clamp(0.85rem, 0.65rem + 0.5vw, 0.95rem)" }}
              >
                <InlineLink href={piece.url}>{piece.title}</InlineLink>
                <span className="text-ink-soft"> Published on {piece.outlet}.</span>
              </p>
            ))}
          </div>
        </div>

        <div>
          <h2
            className="ink-imprint text-ink tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 1rem + 4vw, 2.5rem)", lineHeight: 1.1 }}
          >
            Resources
          </h2>
          <div className="mt-3 flex flex-col gap-2">
            {resources.map((item) => (
              <p
                key={item.name}
                className="max-w-[46ch] leading-relaxed text-ink"
                style={{ fontSize: "clamp(0.85rem, 0.65rem + 0.5vw, 0.95rem)" }}
              >
                <InlineLink href={item.url}>{item.name}</InlineLink>
                <span className="text-ink-soft">. {item.description}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </A4Sheet>
  );
}