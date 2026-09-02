"use client";
//components/theme/theme-toggle.tsx
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { PullCord } from "./pull-cord";
import "./pull-cord.css";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-8 w-8" aria-hidden />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <PullCord
      onPull={() => setTheme(isDark ? "light" : "dark")}
      pulled={isDark}
      ariaLabel={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="theme-pullcord"
    />
  );
}