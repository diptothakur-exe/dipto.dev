import { A4Sheet } from "@/components/a4-sheet";
import { InlineLink } from "@/components/inline-link";
import { profile } from "@/lib/data";
//components\pages\contact-page.tsx
const links = [
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "LinkedIn", href: profile.links.linkedin },
  { label: "GitHub", href: profile.links.github },
  { label: "Medium", href: profile.links.medium },
  { label: "X", href: profile.links.x },
  { label: "Instagram", href: profile.links.instagram },
  { label: "Dev.to", href: profile.links.devto },
];

export function ContactPage() {
  return (
    <A4Sheet>
      <div className="flex h-full flex-col justify-center text-left">
        <h2
          className="ink-imprint text-ink tracking-tight"
          style={{ fontSize: "clamp(1.75rem, 1rem + 4vw, 2.5rem)", lineHeight: 1.1 }}
        >
          Connect
        </h2>
        <div className="mt-5 flex flex-col gap-2.5">
          {links.map((link) => (
            <p
              key={link.label}
              className="text-ink"
              style={{ fontSize: "clamp(0.85rem, 0.65rem + 0.5vw, 0.95rem)" }}
            >
              <InlineLink href={link.href}>{link.label}</InlineLink>
            </p>
          ))}
        </div>
      </div>
    </A4Sheet>
  );
}