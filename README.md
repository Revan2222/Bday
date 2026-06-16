# A Birthday Surprise 🎁

A fun, animated, Shinchan-inspired birthday adventure website built with React + Vite + plain CSS.

## Quick start

```bash
npm install
npm run dev
```

Open the printed local URL in your browser. Click "Open Gift 🎁" to enter the experience.

To build for production:

```bash
npm run build
```

This outputs a static site into `dist/`, which you can deploy anywhere (Vercel, Netlify, GitHub Pages, etc).

## The only file you need to edit

**`src/config/siteConfig.js`** — everything personal lives here:

- `name` — the birthday girl's name (used in the mission reveal, the NASA star scene, and the cake finale)
- `musicSrc` — path to a background music file (see below)
- `clues` — the three mission clue cards on Page 1
- `memories` — the memory cards on Memory Street (Page 2). Each one supports a `photo` field
- `guests` — the "guest joined the party" lines on Page 4
- `birthdayMessage` — your heartfelt message on the finale page
- `finalFunnyLine` — the silly closing line after the confetti button is clicked

## Adding background music

1. Drop an mp3 file into `src/assets/`, e.g. `src/assets/bg-music.mp3`
2. At the top of `src/config/siteConfig.js` add:
   ```js
   import musicFile from '../assets/bg-music.mp3';
   ```
3. Set `musicSrc: musicFile` in the config object.

The floating music button in the bottom-right corner will then toggle playback.

## Adding photos to memory cards

In `siteConfig.js`:

```js
import photo1 from '../assets/memory1.jpg';

// inside memories array:
{ id: 1, type: 'slide', title: 'First Conversation', text: '...', photo: photo1 }
```

If `photo` is left as `null`, a cute placeholder box is shown instead so the layout never breaks.

## Page-by-page structure

| File | What it is |
|---|---|
| `src/pages/GiftEntry.jsx` | The full-screen gift box opening intro |
| `src/pages/MissionPage.jsx` | Page 1 — Shinchan's Birthday Mission, scroll-driven progress bar + clues + name reveal |
| `src/pages/MemoryStreetPage.jsx` | Page 2 — Memory Street, houses revealing memory cards as you scroll |
| `src/pages/SpacePage.jsx` + `src/components/SpaceScene.jsx` | Page 3 — NASA Secret Surprise, a React Three Fiber star field that morphs into her name |
| `src/pages/FinalePage.jsx` | Page 4 — Birthday Celebration Finale, cake, guests, confetti, and the "DO NOT CLICK" button |

Shared bits: `src/components/GuideCharacter.jsx` (the cartoon guide + speech bubble), `src/components/Doodles.jsx` (stars/hearts/balloons/clouds), `src/hooks/useScrollAnimation.js` (scroll-reveal + scroll-progress hooks), `src/utils/textToPoints.js` (turns text into star coordinates for Page 3).

## Notes on the design

- The guide character is an original cheeky-kid design (round head, single eyebrow tuft, big grin) inspired by the brief's "Shinchan-style" tone, not a reproduction of the copyrighted character — safe to keep or restyle further.
- The NASA scene uses `@react-three/fiber` + `three` directly (no external 3D assets) — stars start scattered and lerp into the shape of the name once the trigger zone scrolls into view.
- All animation is done with Framer Motion; GSAP is installed and ready if you want to add more elaborate scroll timelines later (e.g. with `ScrollTrigger`).
- Confetti uses `react-confetti`, fired for real on the Page 4 "DO NOT CLICK" button.
- Reduced-motion preference is respected globally via a CSS media query in `src/styles/variables.css`.

Have a great birthday surprise! 🎂
