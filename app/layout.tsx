//app/layout.tsx
import type { Metadata } from "next";
import "@fontsource/spectral/400.css";
import "@fontsource/spectral/500.css";
import "@fontsource/spectral/600.css";
import "@fontsource/spectral/400-italic.css";
import "@fontsource/courier-prime/400.css";
import "@fontsource/architects-daughter/400.css";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";

export const metadata: Metadata = {
  title: "Dipto Thakur",
  description: "Full-stack developer, AI engineer, automation builder.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-serif antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}