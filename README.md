# iSound Website

Built from `website.yml` — Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, Lucide icons.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Images — what to replace

Two placeholder images are already in `public/` so the site builds and runs immediately. Swap them with your real files (same filenames, same folder):

| File | Used for | Recommended size |
|---|---|---|
| `public/og-image.png` | Social share preview (Discord embeds, Twitter/X cards, link previews) | 1200×630px |
| `public/favicon.ico` | Browser tab icon | Multi-size .ico (16/32/48/64px), or swap for a .png and update `icons.icon` in `src/app/layout.tsx` |

Optional, not yet wired up (upload if you want them added):
- **Logo mark** — currently just the "iSound" wordmark in the Audiowide font (navbar + footer). Send a logo/icon and I'll swap it in.
- **Now Playing banner screenshot** — the spec's "Now Playing Banner" feature card currently uses an icon only; a real 800×270 banner screenshot from the bot would look great there.
- **Bot avatar** — could go in the hero or navbar if you have one.

Just upload whatever you've got and tell me which slot each one goes in.
