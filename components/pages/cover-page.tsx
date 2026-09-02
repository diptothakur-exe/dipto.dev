import { A4Sheet } from "@/components/a4-sheet";
import { InlineLink } from "@/components/inline-link";
import { profile } from "@/lib/data";
import Image from "next/image";

export function CoverPage() {
  return (
    <A4Sheet>
      <div className="flex h-full flex-col items-center text-center">
        <div className="flex flex-1 flex-col items-center justify-center gap-10 sm:gap-12">
          <div className="flex flex-col items-center gap-3 sm:gap-4">
            <Image
              src="/pic.png"
              alt={profile.name}
              width={96}
              height={96}
              priority
              className="h-[4.5rem] w-[4.5rem] rounded-full object-cover grayscale sm:h-24 sm:w-24"
            />
            <h1
              className="ink-imprint text-ink tracking-tight"
              style={{ fontSize: "clamp(2rem, 1rem + 5vw, 2.25rem)", lineHeight: 1.05 }}
            >
              {profile.name}
            </h1>
            <p
              className="max-w-[30ch] italic text-ink-soft"
              style={{ fontSize: "clamp(0.9rem, 0.6rem + 1vw, 0.15rem)" }}
            >
              {profile.role}
            </p>
          </div>

          <p
            className="max-w-[38ch] text-ink"
            style={{ fontSize: "clamp(0.85rem, 0.65rem + 0.6vw, 1rem)" }}
          >
            {profile.about}
          </p>

          <p
            className="max-w-[38ch] text-ink-soft"
            style={{ fontSize: "clamp(0.68rem, 0.6rem + 0.3vw, 0.78rem)" }}
          >
            {profile.location} ~ {profile.experience} exp.~ {profile.available}
          </p>

        </div>

        <div
          className="flex items-center justify-center gap-6 pb-1 text-ink-soft sm:gap-8"
          style={{ fontSize: "clamp(0.75rem, 0.65rem + 0.4vw, 0.9rem)" }}
        >
          <InlineLink href={`mailto:${profile.email}`}>Email</InlineLink>
          <InlineLink href={profile.links.linkedin}>LinkedIn</InlineLink>
          <InlineLink href={profile.links.github}>GitHub</InlineLink>
        </div>
      </div>
    </A4Sheet>
  );
}
