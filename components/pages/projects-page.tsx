import { A4Sheet } from "@/components/a4-sheet";
import { InlineLink } from "@/components/inline-link";
import { Project, moreProjectsUrl } from "@/lib/data";
//components\pages\projects-page.tsx
export function ProjectsPage({
  title,
  subtitle,
  items,
  showMoreLink,
}: {
  title: string;
  subtitle?: string;
  items: Project[];
  showMoreLink?: boolean;
}) {
  return (
    <A4Sheet>
      <div className="flex h-full flex-col text-left">
        <div>
          <h2
            className="ink-imprint text-ink tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 1rem + 4vw, 2.5rem)", lineHeight: 1.1 }}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className="mt-2 max-w-[38ch] text-ink-soft"
              style={{ fontSize: "clamp(0.85rem, 0.65rem + 0.5vw, 0.95rem)" }}
            >
              {subtitle}
            </p>
          )}
        </div>

        <ul className="flex flex-1 flex-col justify-center gap-5 sm:gap-6">
  {items.map((project, i) => {
    const link = project.url ?? project.repo;
    return (
      <li key={project.name} className="flex gap-3">
        <img
          src="/svg/ink-dot.svg"
          alt=""
          aria-hidden
          className="mt-[0.55em] h-[7px] w-[7px] shrink-0 text-ink-faint"
          style={{ transform: `rotate(${(i % 2 === 0 ? 1 : -1) * 8}deg)` }}
        />
        <p
          className="max-w-[44ch] leading-relaxed text-ink"
          style={{ fontSize: "clamp(0.85rem, 0.65rem + 0.5vw, 0.95rem)" }}
        >
          {project.pre}
          {link ? (
            <InlineLink href={link}>
              <strong className="font-semibold">{project.name}</strong>
            </InlineLink>
          ) : (
            <strong className="font-semibold">{project.name}</strong>
          )}
          {project.post}
        </p>
      </li>
    );
  })}
</ul>

        <div
          className="min-h-[1em] text-ink-soft"
          style={{ fontSize: "clamp(0.8rem, 0.65rem + 0.4vw, 0.9rem)" }}
        >
          {showMoreLink && (
            <p>
              More projects on <InlineLink href={moreProjectsUrl}>GitHub</InlineLink>.
            </p>
          )}
        </div>
      </div>
    </A4Sheet>
  );
}