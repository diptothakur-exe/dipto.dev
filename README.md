# Dipto Thakur — Portfolio

Minimal editorial A4-CV portfolio. Next.js + TypeScript + Tailwind.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm run start
```

## Structure

- `app/page.tsx` — assembles the page deck
- `components/deck.tsx` — scroll/keyboard page navigation
- `components/a4-sheet.tsx` — the A4 page surface
- `components/pages/*` — individual page content
- `lib/data.ts` — single source of content (from README)

## Content edits

Edit `lib/data.ts` only — all page copy pulls from there.
