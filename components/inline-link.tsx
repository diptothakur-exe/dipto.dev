import { ReactNode } from "react";
//components\inline-link.tsx
export function InlineLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="ink-link transition-colors hover:text-ink"
    >
      {children}
    </a>
  );
}