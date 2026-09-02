import { ReactNode } from "react";
import { PaperTexture } from "@/components/paper-texture";
//components\a4-sheet.tsx
export function A4Sheet({ children }: { children: ReactNode }) {
  return (
    <div
      className="sheet relative mx-auto flex flex-col overflow-hidden"
      style={{
        aspectRatio: "210 / 297",
        width: "var(--sheet-w)",
        boxShadow: "0 1px 2px rgba(27,26,23,0.04), 0 12px 40px rgba(27,26,23,0.08)",
      }}
    >
      <PaperTexture />
      <div className="relative z-10 flex h-full w-full flex-col px-[9%] py-[10%] sm:px-[11%] sm:py-[12%]">
        {children}
      </div>
    </div>
  );
}