# Portfolio Handoff — Session 2

> Updated: 2026-06-18. Supersedes Session 1. Do not delete — canonical context for the next session.

---

## ⚠️ PENDING FIXES — do these first next session

These five items are **not yet done** and must be applied before any other work:

1. **Add Bebas Neue font** — `layout.tsx` needs a new `Bebas_Neue` import + CSS variable `--font-bebas`. `globals.css` needs it in `@theme inline`. `tailwind.config.ts` needs `bebas` added to fontFamily. Bebas Neue is available from Google Fonts (`weight: 400` only, like Press Start 2P).

2. **Hero h1 font** — Both h1 elements ("HEY, I'M" and "MAYANK MAMGAIN.") currently use `var(--font-press-start)` at `clamp(1.6rem, 3vw, 2.8rem)`. Change to `var(--font-bebas)` at `clamp(4rem, 7vw, 7rem)`, `lineHeight: "1.0"`, `fontWeight: "400"`. Remove `textTransform: "uppercase"` — Bebas Neue is already all-caps by design.

3. **ENGINEER sticker position** — Currently `top: "-20px"`. Change to `top: "16px"` so it sits inside (not above) the browser frame edge.

4. **Orange panel padding** — Right column panel currently has `padding: "24px"` + `paddingBottom: "80px"` as separate props. Replace with a single `padding: "20px"` (all sides) and keep `paddingBottom: "80px"` for the social button clearance.

5. **Experience Journey heading font** — The `EXPERIENCE JOURNEY` h2 inside the orange panel currently uses `.section-heading` (Space Grotesk). Change to `var(--font-bebas)` inline, `fontSize: "clamp(3rem, 5vw, 5rem)"`, `fontWeight: "400"`, `letterSpacing: "0.04em"`, `color: "#000000"`. Keep the `marginBottom: "48px"`.

---

## Stack & versions

| Package | Version |
|---|---|
| Next.js | 16.2.9 (App Router, Turbopack) |
| React | 19.2.4 |
| Tailwind CSS | 4.3.1 (CSS-first, `@import "tailwindcss"` + `@theme inline`) |
| Framer Motion | ^12.40.0 |
| Lucide React | ^1.21.0 |
| TypeScript | ^5 |

**Critical:** Next.js 16 App Router treats every file as a Server Component by default. Any file using Framer Motion (`motion.*`), React hooks (`useState`, `useEffect`), or browser APIs **must** have `"use client"` as its first line. Missing this causes a build-time prerender crash.

**Lucide React v1.21.0 does NOT export `Github` or `Linkedin`.** Social icons must be inlined SVG paths. This has burned us once — don't import those names.

---

## Files — complete current state

### `app/layout.tsx` — DO NOT TOUCH (except to add Bebas Neue — see pending fixes)

Currently loads **three** Google Fonts as CSS variables:
- `--font-inter` via `Inter`
- `--font-space-grotesk` via `Space_Grotesk`
- `--font-press-start` via `Press_Start_2P` (weight: 400 only)

**`--font-bebas` is NOT yet added.** When adding: import `Bebas_Neue` from `next/font/google`, weight `"400"`, subsets `["latin"]`, assign to `variable: "--font-bebas"`, add to `<html>` className.

All font variables applied to `<html>` via className. Body font default is `var(--font-inter)`.

---

### `app/globals.css` — editable (do NOT touch keyframes)

Tailwind v4 entry point. Full current state:

```css
@import "tailwindcss";

:root {
  --black: #111111;
  --black-card: #1a1a1a;
  --black-border: #1a1a1a;
  --white: #f0f0f0;
  --accent-yellow: #ff9d00;
  --accent-cyan: #00FFFF;
  --accent-orange: #ff9d00;
  --border-thick: 2px solid #f0f0f0;
  --border-card: 2px solid #2a2a2a;
}

@theme inline {
  --color-black: var(--black);
  --color-card: var(--black-card);
  --color-accent: var(--accent-yellow);
  --color-cyan: var(--accent-cyan);
  --color-orange: var(--accent-orange);
  --font-space: var(--font-space-grotesk);
  --font-inter: var(--font-inter);
  --font-bungee: var(--font-bungee);   /* legacy token — not used in components */
  --font-mono: monospace;
  /* TODO: add --font-bebas: var(--font-bebas); once layout.tsx is updated */
}
```

Key utility classes (current values — not historical):

```
.portfolio-section  padding: 120px 0  (80px 0 at ≤640px)
.container          max-width: 1200px, margin: 0 auto, padding: 0 24px
.section-divider    border-top: 1px solid #1a1a1a

.brut-card          background: #1c1c1c, border: 2px solid #000000,
                    border-radius: 4px, box-shadow: 6px 6px 0px #000000
.brut-card:hover    border-color: #ff9d00, box-shadow: 8px 8px 0px #000000,
                    transform: translateY(-3px) translateX(-1px)

.brut-tag           inline-block, background: #ff9d00, color: #000,
                    font: var(--font-press-start) 0.55rem, padding: 4px 10px,
                    border-radius: 2px, letter-spacing: 0.1em
.brut-tag-cyan      overrides background: #00FFFF

.section-label      inline-flex, gap: 8px, margin-bottom: 24px,
                    font: var(--font-press-start) 0.75rem,
                    text-transform: uppercase, letter-spacing: 0.08em,
                    color: #ff9d00
                    ::before { width: 20px; height: 2px; background: #ff9d00}

.section-heading    font: var(--font-space-grotesk) clamp(2.2rem,4vw,3.5rem),
                    font-weight: 800, color: #ffffff, text-transform: uppercase,
                    letter-spacing: 0.02em, margin-bottom: 40px

@keyframes float         translateY(0) rotate(-3deg) → translateY(-6px) → back
@keyframes float-reverse translateY(0) rotate(2deg) → translateY(-6px) → back
@keyframes ticker        translateX(0) → translateX(-50%)

.sticker-float         animation: float 3s ease-in-out infinite
.sticker-float-reverse animation: float-reverse 3.5s ease-in-out infinite
```

---

### `app/page.tsx` — DO NOT TOUCH

Assembly order:
```
Navbar / Hero / divider / About / divider / Experience / divider /
Skills / divider / Education / divider / Currently / divider / Hobbies / divider / Contact
```

---

### `tailwind.config.ts`

Present for IDE autocomplete only — NOT wired at runtime (no `@config` in globals.css). Current fontFamily tokens:

```ts
"press-start": ["var(--font-press-start)", "monospace"]
space:         ["var(--font-space-grotesk)", "sans-serif"]
inter:         ["var(--font-inter)", "sans-serif"]
// TODO: add bebas: ["var(--font-bebas)", "sans-serif"]
```

Colors: `orange: "#ff9d00"`, `cyan: "#00FFFF"`, `lime: "#CAFF00"`, `card: "#1c1c1c"`, `black: "#0f0f0f"`.

---

### `components/Navbar.tsx`

- `"use client"` ✓
- Fixed position, **height: 72px**, `background: rgba(15,15,15,0.95)`, `backdropFilter: blur(8px)`
- Three-column grid (`grid grid-cols-3 items-center`) inside `.container`
- **Left:** Lime `#CAFF00` badge `~/Mayank Mamgain`, Space Grotesk `0.7rem` weight 700, `padding: 10px 16px`, borderRadius 3
- **Centre (desktop):** 7 nav links. Space Grotesk `0.75rem`, font-weight 700, uppercase, `tracking-[0.1em]`, `px-[18px] py-[10px]`, `gap-[8px]`, rounded-[3px]. Default: `bg-[#1a1a1a] text-[#888] border-[#2a2a2a]`. Active: `bg-[#ff9d00] text-black border-[#ff9d00]`. Hover: `border-[#444] text-[#f0f0f0]`
- **Right (desktop):** Two **44×44** icon buttons. `border-[#2a2a2a] bg-[#1a1a1a] rounded-[3px]`. Hover: `border-[#ff9d00] text-[#ff9d00]`. GitHub + LinkedIn inlined SVGs (18×18).
- **IntersectionObserver:** `rootMargin: "-40% 0px -55% 0px"`, sections: `about, experience, skills, education, currently, hobbies, contact`
- **Mobile:** Hamburger `Menu`/`X` (lucide, 18px) in third column, 44×44. Dropdown at `top: 72px`.

---

### `components/Hero.tsx`

- `"use client"` ✓
- `flex min-h-screen items-center`, `paddingTop: "88px"`, `paddingBottom: "48px"`
- Inside `.container` (1200px) with `width: "100%"`

**Floating stickers** (inside `position: relative` wrapper):
- ENGINEER: `.brut-tag .sticker-float`, `position: absolute`, **`top: "-20px"` ← PENDING FIX: change to `"16px"`**, `left: "-4px"`, zIndex 10, fontSize 0.65rem, padding 8px 14px
- MBA: `.brut-tag .brut-tag-cyan .sticker-float-reverse`, `bottom: "-20px"`, `right: "-4px"`, same size

**Browser frame** (`motion.div`, initial `opacity:0 y:30`, animate `opacity:1 y:0`, duration 0.6):
- `border: 2px solid #2a2a2a`, `borderRadius: "0px"`, `boxShadow: "10px 10px 0px #000000"`, `overflow: hidden`, `background: #1a1a1a`

**Browser bar** (height 48px, background #141414, borderBottom 2px solid #2a2a2a, flex space-between):
- Left: URL text, monospace 0.85rem, color #666666 — `mayankmamgain.dev` `// TODO domain`
- Right: Three 20×20 buttons, borderRadius 3, no border, cursor default. Colors: `#ff5f56` (×), `#ffbd2e` (−), `#27c93f` (+). Bold black text symbols.

**Browser content grid:** `gridTemplateColumns: "1fr 280px"`, `gap: "0"`, `alignItems: "stretch"`, no minHeight

**Left column** (`padding: "40px 48px"`, flex-col, justify-center):
- Tag row: `display:flex gap:10px marginBottom:28px flexWrap:wrap`
  - `.brut-tag` "SOFTWARE ENGINEER" — fontSize 0.6rem, padding 8px 14px
  - `.brut-tag.brut-tag-cyan` "MBA STUDENT" — same size
- h1 "HEY, I'M": **`var(--font-press-start)`**, **`clamp(1.6rem, 3vw, 2.8rem)`**, weight 400, lineHeight 1.4, color #ffffff, textTransform uppercase, marginBottom 8px ← **PENDING FIX: Bebas Neue at clamp(4rem,7vw,7rem)**
- h1 "MAYANK MAMGAIN.": same but color #ff9d00, no marginBottom `// TODO name`
- Orange HR: `width:80px height:4px background:#ff9d00 marginBottom:28px`
- Bio: Inter, 1.0625rem, #aaaaaa, lineHeight 1.75, maxWidth 520px, marginBottom 36px `// TODO bio`
- CTA `<a href="#contact">`: Space Grotesk, 0.9rem, weight 800, uppercase, letterSpacing 0.08em, `padding:16px 32px`, border 2px solid #ff9d00, borderRadius 3, bg #ff9d00 color #000. Inline onMouseEnter/Leave for hover toggle.

**Right column** (orange panel):
- **`padding: "24px"`, `paddingBottom: "80px"`** ← **PENDING FIX: change to `padding: "20px"` all sides**
- `background: #ff9d00`, `display:flex flexDirection:column alignItems:start position:relative maxHeight:480px`
- Photo box: `width:100% height:280px`, `background:#1a1a1a`, `border:3px solid #000` `// TODO: replace with <Image />`
- Social buttons: `position:absolute bottom:20px left:24px right:24px`, flex, gap 10, justify-center
  - Two 48×48 links, `background:#000 border:2px solid #000 borderRadius:4px color:#ff9d00`
  - GitHub + LinkedIn inlined SVGs (20×20)

**Ticker bar** (inside `.container`, below browser frame):
- `marginTop:32px background:#ff9d00 overflow:hidden padding:12px 0`
- `display:inline-flex whiteSpace:nowrap animation:"ticker 22s linear infinite"`
- Two spans via `[1,2].map(i => ...)`, Press Start 2P 0.55rem, color #000, letterSpacing 0.12em
- Text: `★ SOFTWARE ENGINEER ★ MBA STUDENT ★ BASED IN BENGALURU ★ OPEN TO OPPORTUNITIES ★ BUILDING THINGS ★ HSBC ALUMNI`

---

### `components/About.tsx`

- `"use client"` ✓
- `section id="about" .portfolio-section`
- `<p className="section-label">about</p>`
- `motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}}`
- `.brut-card` with `padding: "48px 56px"` — **no h2 heading inside the card** (removed — section-label serves as title)
- Inner div: `fontFamily:var(--font-inter)`, `fontSize:1.125rem`, `color:#cccccc`, `lineHeight:1.9`
- Three `<p>` elements, `marginBottom:"20px"` on first two — all `// TODO replace with real bio`

---

### `components/Experience.tsx`

- `"use client"` ✓
- `section id="experience" .portfolio-section` — **no section-label above the panel** (removed; heading inside panel replaces it)
- Orange wrapper: `background:#ff9d00`, `border:2px solid #1a1a1a`, `borderRadius:4`, `boxShadow:8px 8px 0 #000`, `padding:"56px 48px"`, `position:relative`
- **EXPERIENCE JOURNEY heading:** `<h2 className="section-heading" style={{ color:"#000000", marginBottom:"48px", fontSize:"clamp(2rem,3.5vw,3rem)" }}>` ← **PENDING FIX: change to Bebas Neue (see top of doc)**
- Centre line: `absolute top-0 bottom-0 w-[2px] bg-black`, `left:50% transform:translateX(-50%)`
- `motion.div` stagger: containerVariants `staggerChildren:0.15`, itemVariants `y:24→0 duration:0.5`

**Four experience entries** (`experiences` array — data mostly placeholder):
1. Left, 2024 — Software Engineer, HSBC Pune
2. Right, 2022 — Open Source Fellow, MLH
3. Left, 2022 — Maintainer, The Algorithms
4. Right, 2021 — Intern, Adobe

**Card layout per entry:**
- Left side: `marginRight: "calc(50% + 24px)"` / Right side: `marginLeft: "calc(50% + 24px)"`
- `margin-bottom: 56px` between entries (0 on last)
- `.brut-card relative`, `padding:"36px 40px"`
- Year badge: `absolute top-3 right-3`, Bungee 0.7rem, bg #ff9d00, color #000, padding 6px 14px, borderRadius 2
- Date: uppercase tracking-wide, color #888, fontSize 0.9rem, marginBottom 12
- Role: Bungee 1.1rem, text-white uppercase, marginBottom 8
- Company: #ff9d00, 1rem, font-semibold, marginBottom 20
- Bullets: `borderLeft:3px solid #ff9d00`, paddingLeft 16, fontSize 0.9375rem, lineHeight 1.8, marginBottom 12
- Tech tags: font-mono, fontSize 0.8rem, padding 6px 14px, gap 10, marginTop 24, bg rgba(255,157,0,0.08), border rgba(255,157,0,0.25), borderRadius 3. Keys: `${t}-${ti}` to avoid duplicate-key warning.
- Centre dot: `absolute`, `left:50% top:50%`, 16×16, bg #ff9d00, border 3px solid #000, `transform:translateX(-50%) translateY(-50%)`

---

### `components/Skills.tsx`

- `"use client"` ✓
- `section id="skills" .portfolio-section`
- `<p className="section-label">skills</p>`
- `grid grid-cols-1 md:grid-cols-2 gap-6`
- `SkillColumn` component (title, skills array, variant "tech"|"mba")

**Each column card:**
- `.brut-card`, `padding:"44px 48px"`
- `<h3 className="section-heading" style={{ fontSize:"1.5rem", marginBottom:"24px" }}>`
  - Column 1: "TECHNICAL" / Column 2: "MBA"
- `motion.div` stagger (staggerChildren 0.05), flex-wrap, gap 12
- Chips: `motion.span`, bg #111, border #2a2a2a, color #888, fontSize 0.9375rem, padding 10px 20px, borderRadius 6
- Tech hover: `border-[#ff9d00] text-[#ff9d00]` / MBA hover: `border-[#00FFFF] text-[#00FFFF]`
- Skills: `techSkills` (Python, TypeScript, React, Next.js, Node.js, SQL, REST APIs, Git, Docker), `mbaSkills` (Business Strategy, Financial Analysis, Marketing Management, Operations, Data-Driven Decision Making) — all `// TODO`

---

### `components/Education.tsx`

- `"use client"` ✓
- `section id="education" .portfolio-section`
- `<p className="section-label">education</p>`
- `motion.div` stagger (staggerChildren 0.15): `flex flex-col md:flex-row gap-6 items-stretch`

**Three cards in order: MBA → B.Tech → Schooling**

| Card | Top border | Institution color | Title |
|---|---|---|---|
| MBA | `3px solid #00FFFF` | `#00FFFF` | MBA (Business Management) |
| B.Tech | `3px solid #ff9d00` | `#ff9d00` | B.Tech (Computer Science Engineering) |
| Schooling | `3px solid #CAFF00` | `#CAFF00` | [Class XII / High School] `// TODO` |

Each card: `.brut-card flex-1 flex flex-col`, `padding:"44px 40px"`, `motion.article`

Card content (inline styles, no `.section-heading`):
- Degree h3: Space Grotesk, `1.25rem`, weight 800, uppercase, `#ffffff`, marginBottom 12
- Institution: `1rem`, coloured (per table), marginBottom 8
- Years: `0.875rem`, `#555555`, marginBottom 20
- `<div style={{ borderTop:"2px solid #000", marginBottom:20 }}/>` — divider
- Caption: `0.9rem`, `#888888`, italic, lineHeight 1.7

Content:
- MBA: Xaviers Institute of Management, 2026–2028, "Where I'm learning to talk to people using frameworks."
- B.Tech: Graphic Era University, 2018–2022, "Where I learned to talk to computers instead of people."
- Schooling: `[School Name] // TODO`, `[2014]–[2016] // TODO`, "Where I learned that calculus and chemistry are optional life skills."

---

### `components/Currently.tsx`

- **Server Component** — no `"use client"`, no Framer Motion
- `section id="currently" .portfolio-section`
- `<p className="section-label">currently</p>`
- `.brut-card relative`, `padding:"48px 52px"`
- 5 rows via `rows.map()`, each: `grid items-center`, `gridTemplateColumns:"36px 140px 1fr"`, `padding:"20px 0"`, `borderBottom:1px solid #1e1e1e` (except last)

Row structure:
- Col 1: emoji, `fontSize:1.25rem opacity:0.7`
- Col 2: label, `font-mono fontSize:0.9375rem color:#666 minWidth:140`
- Col 3: value, `fontSize:1rem color:#e0e0e0`

Rows:
| Icon | Label | Value |
|---|---|---|
| 📍 | Based in | Delhi, India |
| 📖 | Reading | `[Book name]` `// TODO` |
| 📺 | Watching | `[Show name]` `// TODO` |
| 🛠️ | Building | This portfolio (meta, I know) |
| 🧠 | Learning | `[Skill or course]` `// TODO` |

- Last updated badge: `absolute bottom-4 right-5`, `0.75rem`, `#444` — "Last updated: June 2026" `// TODO update monthly`

---

### `components/Hobbies.tsx`

- **Server Component** — no `"use client"`, no Framer Motion
- Imports: `Music, Gamepad2, ChefHat, Mountain` from `lucide-react`
- `section id="hobbies" .portfolio-section`
- `<p className="section-label">hobbies</p>`
- `grid grid-cols-2 md:grid-cols-4 gap-5`

Hobbies array: Cooking (ChefHat), Hiking (Mountain), Gaming (Gamepad2), Music (Music)

Each card (`article`):
- `.brut-card group flex flex-col items-center text-center`
- Inline: `padding:"48px 32px"`, `minHeight:220`, `display:flex flexDirection:column alignItems:center justifyContent:center gap:16`
- Icon: `width:48 height:48 color:#ff9d00`, `.group-hover:text-[#00FFFF] transition-colors duration-200`
- Name h3: `fontFamily:var(--font-space-grotesk)`, `fontSize:1.25rem`, weight 800, `color:#ffffff`, uppercase
- Caption p: `fontSize:1rem`, `color:#888888`, `lineHeight:1.6`

---

### `components/Contact.tsx` — DO NOT TOUCH

Server Component. Cyan section (`background:#00FFFF color:#000`). Contains:
- Version badge + copyright box (Press Start 2P)
- "FIND ME ON" + GitHub/LinkedIn buttons (inlined SVGs)
- Footer nav links (ABOUT → HOBBIES)
- "Made with ☕ and mild existential dread."
- All URLs and name marked `// TODO`

---

## Design system — current exact values

### Colours
| Token | Hex | Usage |
|---|---|---|
| Page background | `#0f0f0f` | Body + radial gradients |
| Card background | `#1c1c1c` | `.brut-card` bg |
| Card border | `#000000` | `.brut-card` border (deep black) |
| Card border hover | `#ff9d00` | `.brut-card:hover` |
| Orange (primary) | `#ff9d00` | Accents, CTA, timeline, ticker, tags |
| Cyan (secondary) | `#00FFFF` | MBA card top, MBA skills hover, Contact bg |
| Lime (navbar only) | `#CAFF00` | Navbar name badge only |
| White body text | `#ffffff` | Card headings |
| Body text | `#cccccc` | About bio paragraphs |
| Body text mid | `#aaaaaa` | Hero bio, experience bullets |
| Body text muted | `#888888` | Nav default, hobby captions |
| Body text dim | `#666` | Currently labels |
| Body text faint | `#555555` | Education years |
| Body text very faint | `#444` | Last-updated badge |
| Internal divider | `#1e1e1e` | Row borders in Currently |

### Typography rules
| Element | Font | Size | Weight |
|---|---|---|---|
| Hero h1 (CURRENT) | Press Start 2P | `clamp(1.6rem,3vw,2.8rem)` | 400 |
| Hero h1 (AFTER FIX) | Bebas Neue | `clamp(4rem,7vw,7rem)` | 400 |
| Section headings (`.section-heading`) | Space Grotesk | `clamp(2.2rem,4vw,3.5rem)` | 800 |
| Skills column headings | Space Grotesk | `1.5rem` (override) | 800 |
| Education card titles | Space Grotesk | `1.25rem` | 800 |
| Hobbies card names | Space Grotesk | `1.25rem` | 800 |
| Experience JOURNEY heading | Space Grotesk (CURRENT) | `clamp(2rem,3.5vw,3rem)` (AFTER FIX: Bebas Neue) | — |
| Section labels (`.section-label`) | Press Start 2P | `0.75rem` | 400 |
| Brut tags (`.brut-tag`) | Press Start 2P | `0.55rem` | 400 |
| Navbar logo badge | Space Grotesk | `0.7rem` | 700 |
| Navbar nav links | Space Grotesk | `0.75rem` | 700 |
| Hero bio | Inter | `1.0625rem` | — |
| About bio | Inter | `1.125rem` | — |
| Currently labels | mono | `0.9375rem` | — |
| Experience bullets | Inter | `0.9375rem` | — |
| Tech tags | mono | `0.8rem` | — |
| Year badge | Bungee | `0.7rem` | — |
| Experience role | Bungee | `1.1rem` | — |
| Ticker | Press Start 2P | `0.55rem` | 400 |

### Font loading rules
- Press Start 2P: section labels, brut-tags, ticker, Contact (version/copyright/links)
- Space Grotesk: navbar badge, nav links, section headings, card titles, CTA button
- Bebas Neue: **NOT YET LOADED** — pending for hero h1 + EXPERIENCE JOURNEY heading
- Inter: all body text, bio paragraphs, bullets
- Bungee: experience role titles, year badges only (legacy from session 1 — not worth replacing)
- Monospace (system): currently labels, tech tags

---

## Pending TODOs (content, not code)

| File | What to fill in |
|---|---|
| Navbar.tsx | `~/Mayank Mamgain` — already updated |
| Hero.tsx | `mayankmamgain.dev` domain, bio paragraph |
| About.tsx | All three bio paragraphs |
| Experience.tsx | All bullet points (HSBC has placeholders; other 3 cards are fully placeholder) |
| Skills.tsx | Both skills arrays |
| Education.tsx | Schooling card: school name, years |
| Currently.tsx | Reading, Watching, Learning values; update date monthly |
| Contact.tsx | Portfolio version, name, all URLs |
| Hero.tsx | Replace `Your Photo` div with `<Image src=... />` from `next/image` |

---

## Key decisions and gotchas

### `"use client"` is required on Framer Motion files
Next.js 16 server components crash at prerender if `motion.*` is used without `"use client"`. Affected: Navbar, Hero, About, Experience, Skills, Education. Currently and Hobbies are Server Components (no motion, no hooks).

### Ticker uses inline `style.animation`
`@keyframes ticker` is in globals.css. Referenced via `style={{ animation: "ticker 22s linear infinite" }}`. Two content spans mapped via `[1,2].map()` for seamless loop.

### GitHub/LinkedIn icons must be inlined SVG
Lucide React v1.21.0 does not export `Github` or `Linkedin`. Both are inlined 20×20 SVG paths everywhere they appear (Navbar, Hero, Contact). Do not attempt to import them from lucide.

### Experience tech tag keys use `${value}-${index}`
Duplicate `[Tech]` strings in placeholder data would trigger React duplicate-key warnings. `${t}-${ti}` pattern suppresses this.

### tailwind.config.ts is IDE-only at runtime
Tailwind v4 reads tokens from `@theme inline` in globals.css. The JS config has no `@config` reference and does not affect the browser build.

### Browser frame has `borderRadius: 0`
Hard corners are intentional (brutalist). The `.brut-card` default of `4px` does not apply here — the frame uses `borderRadius: "0px"` inline.

### Social icon hover in Hero
Currently there is no hover state on the social buttons in the orange panel (they don't change color). If needed: add `onMouseEnter`/`onMouseLeave` inline handlers like the CTA button uses, toggling `color` to `#ffffff`.

---

## Build status

```
✓ next build — clean, 0 errors, 0 TS errors (last verified 2026-06-18)
✓ / renders as static (SSG)
```

---

## File tree

```
portfolio/
├── app/
│   ├── globals.css       ← editable (not keyframes)
│   ├── layout.tsx        ← DO NOT TOUCH (except add Bebas Neue)
│   └── page.tsx          ← DO NOT TOUCH
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx          ← PENDING FIXES (see top of doc)
│   ├── About.tsx
│   ├── Experience.tsx    ← PENDING FIX: EXPERIENCE JOURNEY heading font
│   ├── Skills.tsx
│   ├── Education.tsx
│   ├── Currently.tsx
│   ├── Hobbies.tsx
│   └── Contact.tsx       ← DO NOT TOUCH
├── tailwind.config.ts    ← IDE only, not runtime
├── package.json
├── AGENTS.md             ← project rule: read next/dist/docs before writing code
├── CLAUDE.md             ← references AGENTS.md
└── HANDOFF.md            ← this file
```
