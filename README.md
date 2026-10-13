# Arahaus Website

Website for **Arahaus Creative Studio**, a design and print company (*Family + Events*). It presents the studio's services, selected works and rate card, and includes an interactive puzzle game.

## Pages

| Route | What it is |
|---|---|
| `/` | Home: intro loader, hero, rotating image grid, About and Services sections |
| `/works` | Selected works, with a **Feed** view (hover a project to reveal two more images) and a **Full** view (large card with a looping image) |
| `/rate-card` | Services pricelist with tabs for Small business, Large business and International clients, a Packages dropdown, and printing information |
| `/game` | "Solve the puzzle": three puzzle pieces open the same puzzle with different images |
| any other address | Custom 404 page |

The navbar's **About** and **Services** links scroll to those sections on the home page, and **Contact Us** scrolls to the footer.

## Tech stack

- [Next.js](https://nextjs.org) 16 (App Router, Turbopack)
- React and TypeScript
- [Tailwind CSS](https://tailwindcss.com) v4. Design tokens live in `app/globals.css`
- [lucide-react](https://lucide.dev) for icons
- Neue Haas Grotesk Display Pro, loaded with `next/font/local` (see [Fonts](#fonts))

## Getting started

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

| Command | What it does |
|---|---|
| `npm run dev` | Development server with live reload |
| `npm run build` | Production build. Also type-checks and lints, so it must pass before deploying |
| `npm run start` | Serves the last production build |
| `npm run lint` | Runs ESLint |

**Testing on a phone:** the dev server blocks other devices by default. Add your computer's IP address to `allowedDevOrigins` in `next.config.ts`, restart the server, then open `http://YOUR-IP:3000` on the phone (same Wi-Fi).

## Project structure

```
app/
  fonts/                 Neue Haas Grotesk font files
  game/page.tsx          /game
  rate-card/page.tsx     /rate-card
  works/page.tsx         /works
  globals.css            Tailwind setup, colour tokens, keyframe animations
  layout.tsx             Root layout: fonts, metadata, Loader, Navbar, Footer
  not-found.tsx          Custom 404 page
  page.tsx               Home page
  opengraph-image.jpg    Link preview image
  twitter-image.jpg      Link preview image for X (Twitter)
  favicon.ico

components/
  game/
    puzzle/PuzzleBuilder.tsx   The puzzle itself (one component, any image or colours)
    GameStage.tsx              "Solve the puzzle" headline and the three letter buttons
    PuzzleLetter.tsx           One clickable coloured letter with its pulsing piece
    PuzzleModal.tsx            Popup that holds the puzzle
  rate-card/                   Tabs and table, Packages dropdown, Printing Services
  works/                       Gallery with tabs, Feed row, Full card
  About.tsx  Footer.tsx  Hero.tsx  HeroGrid.tsx
  Loader.tsx  Navbar.tsx  RateCardButton.tsx  Services.tsx

lib/
  puzzle.ts              Which image and colours each puzzle uses
  rate-card.ts           All rate card data
  works.ts               Works projects and their images

public/                  Images (see below)
```

## Editing content

| To change | Edit |
|---|---|
| Prices, services and packages | `lib/rate-card.ts` (one data object per tab) |
| Works projects | `lib/works.ts` (each project needs a main, left and right image) |
| Puzzle images and colours | `lib/puzzle.ts` |
| Hero grid images and the order they appear | `images` and `SEQUENCE` in `components/HeroGrid.tsx` |
| Navbar links | `components/Navbar.tsx` |
| Footer links, phone numbers, email, social links | `components/Footer.tsx` |
| Colours | the `@theme` block in `app/globals.css` |
| Site title and description | `metadata` in `app/layout.tsx` |
| A page's own title | `metadata` in that page's `page.tsx` (write just the page name, since the layout adds " \| Arahaus") |

## Images

Images live in `public/` and are referenced without the `public` part, for example `public/hero/01-stickers.jpg` is `/hero/01-stickers.jpg` in code.

| Folder | Contents |
|---|---|
| `public/hero/` | The 12 images in the home page grid |
| `public/about/` | Sticker collage, BFCP and magazine images |
| `public/works/` | Three images per project: `name-main.jpg`, `name-left.jpg`, `name-right.jpg` |
| `public/game/` | The coloured letter shapes (outline and filled) and the three puzzle-piece icons |
| `public/game/puzzle/` | The puzzle images |
| `public/icons/` | Extra icons (for example WhatsApp) |
| `public/` | Logos (`logo-white`, `logo-black`, `logo-color`) and `footer-wordmark.png` |

File names must match the code exactly: lowercase, hyphens, no spaces. Export the Works **main** images about 1800px wide, because they also fill the background of the Full view.

## Design tokens

Defined in `app/globals.css` and used as Tailwind classes, for example `bg-charcoal` or `text-rust`.

| Token | Value |
|---|---|
| `accent` | `#FBBA09` |
| `gold` | `#F5BF26` |
| `rust` | `#AF4C0F` |
| `umber` | `#492006` |
| `maroon` | `#A53621` |
| `ink` | `#0F0F0F` |
| `charcoal` | `#1E1E1E` |
| `muted` | `#5E5E5E` |
| `mist` | `#D9D9D9` |

## Fonts

The site uses **Neue Haas Grotesk Display Pro**, loaded in `app/layout.tsx` from `app/fonts/`. It is a commercial font: make sure its licence covers web use, and keep in mind that the font files are part of this repository before making it public.

## Animations

- **Loader** (`components/Loader.tsx`, keyframes in `app/globals.css`): a maroon curtain with the logo sliding up, holding for a second, then exiting. It lasts about 3.4 seconds on a full page load.
- **Play button** (navbar), **puzzle pieces** and **coloured letters** (game page): CSS keyframes in `app/globals.css`, all looped.
- **Hero grid** (`components/HeroGrid.tsx`): a scripted sequence of image groups, which waits 3 seconds for the loader.
- Animations respect `prefers-reduced-motion`.

## Link preview

`app/opengraph-image.jpg` and `app/twitter-image.jpg` (1200 × 630) are used when a link is shared. Before launch, set `metadataBase` in `app/layout.tsx` to the real domain.

## Deployment

Any host that supports Next.js will work. Before deploying:

1. Run `npm run build` and make sure it passes.
2. Set `metadataBase` in `app/layout.tsx` to the production domain.
3. Check the host's terms allow commercial use, since this is a business website.

## To review

- The International tab's packages still show naira prices (placeholders).
- Some image `alt` text on the hero, About and Works is based on file names and should be made descriptive.

## Contact

arahauscompany@gmail.com

All content, designs and brand assets belong to Arahaus Creative Studio. All rights reserved.
