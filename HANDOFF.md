# Portfolio Handoff — Session 3

> Updated: 2026-06-19. Supersedes Session 2. Do not delete — canonical context for the next session.

---

## ⚠️ PENDING FIXES — do these first next session

1. **Navbar button padding** — Nav link buttons currently use `padding: "8px 16px"`. Change to `padding: "10px 16px"` on `BASE_LINK_STYLE` and `ACTIVE_LINK_STYLE` in `components/Navbar.tsx`.

2. **Hero CTA button font** — The "CONTACT ME" `<a>` inside `Hero.tsx` still has `fontFamily: "var(--font-russo)"`. Change to `var(--font-bungee)` to match the rest of the heading system.

3. **Hero photo** — `Your Photo` placeholder div needs to be replaced with `<Image src=... />` from `next/image`.

4. **Content TODOs** — See the full list at the bottom of this document.

---

## What was completed in Session 3

- **Skills section removed entirely** — `components/Skills.tsx` deleted, `app/page.tsx` import + JSX removed, Skills entry removed from `Navbar.tsx` NAV_LINKS and from `Contact.tsx` footer links.
- **Navbar buttons restyled as 3D cards** — Replaced Tailwind class-based approach with typed inline style objects (`BASE_LINK_STYLE`, `ACTIVE_LINK_STYLE`). Font changed from Space Grotesk to **Bungee**. Box-shadow `3px 3px 0px #000`, hover lifts to `4px 4px`, `translateY(-1px)`. Hover handled via `onMouseEnter`/`onMouseLeave` (required for box-shadow + transform, which can't be done with Tailwind hover classes inline).
- **Russo One font installed but not used** — Imported as `--font-russo`, replaced immediately by Bungee for all headings. Russo One variable remains in layout.tsx and globals.css but nothing uses it except the Hero CTA button (a leftover — see pending fix 2).
- **Bungee applied to all section headings** — About h2, Currently h2, Experience Journey h2, Education degree h3s, Hobbies name h3s.
- **About and Currently got explicit h2 headings** — Added above their brut-cards (`ABOUT`, `CURRENTLY`) since those sections previously had no heading element.
- **Real HSBC bullet points added** — Experience.tsx first card now has non-placeholder bullets.

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

**Lucide React v1.21.0 does NOT export `Github` or `Linkedin`.** Social icons must be inlined SVG paths everywhere. Do not import those names — it has burned us twice.

---

## Font system — complete assignments

### Fonts loaded in `app/layout.tsx`

| Variable | Import name | Weight | Used |
|---|---|---|---|
| `--font-inter` | `Inter` | variable | Body text everywhere |
| `--font-space-grotesk` | `Space_Grotesk` | variable | Navbar name badge only |
| `--font-press-start` | `Press_Start_2P` | 400 only | Section labels, brut-tags, ticker, Contact footer |
| `--font-bungee` | `Bungee` | 400 only | ALL section headings, navbar nav links, hero h1s, experience roles/year badges |
| `--font-russo` | `Russo_One` | 400 only | **Installed but unused** — only leftover: Hero CTA button (pending fix) |

### Where each font is used (exact elements)

**Bungee (`var(--font-bungee)`):**
- Hero: both h1 elements ("HEY, I'M" and "MAYANK MAMGAIN.") — `clamp(2.8rem, 4.5vw, 4.2rem)`
- Navbar: all 6 nav link buttons — `0.75rem`
- About: h2 "ABOUT" — `clamp(2rem, 3.5vw, 3rem)`
- Experience: h2 "EXPERIENCE JOURNEY" — `clamp(1.8rem, 3vw, 2.8rem)`, `maxWidth: "45%"`
- Experience: role titles (e.g. "SOFTWARE ENGINEER") — `1.1rem`
- Experience: year badges — `0.7rem`
- Education: all three degree h3s — `1.25rem`
- Currently: h2 "CURRENTLY" — `clamp(2rem, 3.5vw, 3rem)`
- Hobbies: all four hobby name h3s — `1.25rem`

**Press Start 2P (`var(--font-press-start)`):**
- `.section-label` class — `0.75rem` — used in About, Experience (none — no label there), Education, Currently, Hobbies
- `.brut-tag` class — `0.55rem` — Hero stickers, Hero tag row
- Hero ticker bar spans — `0.5rem`
- Contact: version badge, copyright block, footer nav links — `0.5rem–0.55rem`

**Inter (`var(--font-inter)`):**
- Hero bio paragraph — `1rem`, `#aaaaaa`
- About bio paragraphs — `1.125rem`, `#cccccc`
- Experience bullet points — `0.9375rem`, `#aaaaaa`
- Hero photo placeholder text
- Currently row values — `1rem`, `#e0e0e0` (note: labels use monospace via Tailwind class)

**Space Grotesk (`var(--font-space-grotesk)`):**
- Navbar name badge ("~/Mayank Mamgain") — `0.7rem`, weight 700, `#CAFF00` background
- `.section-heading` CSS class still defines Space Grotesk — but this class is no longer used on any heading element (all overridden with inline Bungee). Safe to leave in CSS.

**Russo One (`var(--font-russo)`):**
- Hero CTA button "CONTACT ME" — `1rem` — **LEFTOVER, should be changed to Bungee** (pending fix 2)
- Nothing else

---

## Colour system

| Token | Hex | Usage |
|---|---|---|
| Page background | `#0f0f0f` | Body + radial gradients |
| Card background | `#1c1c1c` | `.brut-card` bg |
| Card border | `#000000` | `.brut-card` border |
| Card border hover | `#ff9d00` | `.brut-card:hover` |
| Orange (primary) | `#ff9d00` | CTA, accent, ticker, tags, Experience panel bg, hero right panel bg |
| Cyan (secondary) | `#00FFFF` | MBA education card top border, Contact section bg |
| Lime (navbar only) | `#CAFF00` | Navbar name badge bg only |
| Schooling accent | `#CAFF00` | Education schooling card top border + institution colour |
| White heading | `#ffffff` | Card h3/h2 text |
| Body text | `#cccccc` | About bio paragraphs |
| Body text mid | `#aaaaaa` | Hero bio, experience bullets |
| Body text muted | `#888888` | Navbar non-active, hobby captions, education captions |
| Body text dim | `#666666` | Currently labels, browser URL bar |
| Body text faint | `#555555` | Education years, hero photo placeholder |
| Body text very faint | `#444444` | Last-updated badge in Currently |
| Internal divider | `#1e1e1e` | Row borders in Currently |
| Nav button bg | `#1a1a1a` | Navbar button default bg |
| Nav button border | `#2a2a2a` | Navbar button default border |
| Nav hover border | `#444444` | Navbar button hover border |
| Browser bar bg | `#141414` | Hero browser top bar |
| Frame bg | `#1a1a1a` | Hero browser frame bg |
| Window ×  | `#ff5f56` | Hero window button |
| Window −  | `#ffbd2e` | Hero window button |
| Window +  | `#27c93f` | Hero window button |

---

## Files — complete current state

### `app/layout.tsx` — DO NOT TOUCH

Loads five Google Fonts as CSS variables on `<html>`:
- `--font-inter` (Inter)
- `--font-space-grotesk` (Space_Grotesk)
- `--font-press-start` (Press_Start_2P, weight 400)
- `--font-bungee` (Bungee, weight 400)
- `--font-russo` (Russo_One, weight 400) — installed, currently only used on Hero CTA button

All five variables in `<html>` className. Body default: `var(--font-inter)`.

---

### `app/globals.css` — editable (do NOT touch keyframes)

Tailwind v4 entry point. `@theme inline` contains:
```
--font-space, --font-inter, --font-bungee, --font-russo, --font-mono
```

Key utility classes (current values):
```
.portfolio-section    padding: 120px 0  (80px 0 at ≤640px)
.container            max-width: 1200px, margin: 0 auto, padding: 0 24px
.section-divider      border-top: 1px solid #1a1a1a

.brut-card            background: #1c1c1c, border: 2px solid #000,
                      border-radius: 4px, box-shadow: 6px 6px 0px #000
.brut-card:hover      border-color: #ff9d00, box-shadow: 8px 8px 0px #000,
                      transform: translateY(-3px) translateX(-1px)

.brut-tag             inline-block, bg: #ff9d00, color: #000,
                      font: var(--font-press-start) 0.55rem, padding: 4px 10px,
                      border-radius: 2px, letter-spacing: 0.1em
.brut-tag-cyan        overrides background: #00FFFF

.section-label        inline-flex, gap: 8px, margin-bottom: 24px,
                      font: var(--font-press-start) 0.75rem,
                      text-transform: uppercase, letter-spacing: 0.08em,
                      color: #ff9d00; ::before { width: 20px; height: 2px; bg: #ff9d00 }

.section-heading      font: var(--font-space-grotesk) clamp(2.2rem,4vw,3.5rem),
                      weight 800 — LEGACY, not applied to any heading element
                      (all headings now use inline Bungee). Safe to leave in CSS.

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
Education / divider / Currently / divider / Hobbies / divider / Contact
```
Skills was removed in Session 3. No divider before/after Skills remains.

---

### `tailwind.config.ts`

IDE autocomplete only — NOT wired at runtime. Current fontFamily tokens:
```ts
"press-start": ["var(--font-press-start)", "monospace"]
space:         ["var(--font-space-grotesk)", "sans-serif"]
inter:         ["var(--font-inter)", "sans-serif"]
russo:         ["var(--font-russo)", "sans-serif"]
```
Note: `bebas` token was added and then removed across sessions. Current state has `russo` but not `bebas`.

---

### `components/Navbar.tsx`

- `"use client"` ✓
- Fixed position, **height: 72px**, `background: rgba(15,15,15,0.95)`, `backdropFilter: blur(8px)`
- Three-column grid inside `.container`

**Left:** Lime `#CAFF00` badge `~/Mayank Mamgain`, Space Grotesk `0.7rem` weight 700, `padding: 10px 16px`, borderRadius 3

**Centre (desktop):** 6 nav links (Skills removed). Styled via two constant style objects:

```ts
BASE_LINK_STYLE: {
  display: "inline-flex", alignItems: "center",
  padding: "8px 16px",                   // ← PENDING FIX: change to "10px 16px"
  border: "2px solid #2a2a2a",
  borderRadius: "4px", background: "#1a1a1a", color: "#888888",
  fontFamily: "var(--font-bungee)", fontSize: "0.75rem",
  fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.05em",
  boxShadow: "3px 3px 0px #000000", transition: "all 0.15s ease",
}
ACTIVE_LINK_STYLE: same as BASE but background "#ff9d00", color "#000000", borderColor "#ff9d00"
```

Hover via `onMouseEnter`/`onMouseLeave`: `borderColor #444`, `color #f0f0f0`, `boxShadow 4px 4px 0px #000`, `translateY(-1px)`. Handlers no-op when link is active.

**Right (desktop):** Two 44×44 icon buttons. `border-[#2a2a2a] bg-[#1a1a1a] rounded-[3px]`. Hover: `border-[#ff9d00] text-[#ff9d00]`. GitHub + LinkedIn inlined SVGs (18×18).

**IntersectionObserver:** `rootMargin: "-40% 0px -55% 0px"`, sections: `about, experience, education, currently, hobbies, contact`

**Mobile:** Hamburger `Menu`/`X` (Lucide, 18px), 44×44. Dropdown at `top: 72px`. Uses same style objects.

---

### `components/Hero.tsx`

- `"use client"` ✓
- `minHeight: "100vh"`, `paddingTop: "80px"`, `paddingBottom: "40px"`, `background: transparent`

**Ticker bar** — ABOVE the browser frame, `marginBottom: "24px"`, `backgroundColor: "#ff9d00"`, `padding: "10px 0"`. Press Start 2P `0.5rem`, `letterSpacing: "0.1em"`. Two spans via `[1,2].map()` for seamless loop. Text: `★ SOFTWARE ENGINEER ★ MBA STUDENT ★ BASED IN BENGALURU ★ OPEN TO OPPORTUNITIES ★ BUILDING THINGS ★ HSBC ALUMNI`

**Floating stickers** (on outer wrapper, outside browser frame):
- ENGINEER: `.brut-tag .sticker-float`, `position: absolute`, `top: "-14px"`, `left: "20px"`, zIndex 20, `fontSize: "0.55rem"`, `padding: "6px 12px"`
- MBA: `.brut-tag .brut-tag-cyan .sticker-float-reverse`, `bottom: "-14px"`, `right: "20px"`, same size

**Browser frame** (`motion.div`, initial `opacity:0 y:20`, animate `opacity:1 y:0`, duration 0.5):
- `border: 2px solid #2a2a2a`, `borderRadius: "0px"`, `boxShadow: "8px 8px 0px #000000"`, `overflow: hidden`, `bg: #1a1a1a`

**Browser bar** (height 44px, `bg #141414`, `borderBottom: 2px solid #2a2a2a`, flex space-between):
- Left: URL monospace `0.875rem` `#666666` — `mayankmamgain.dev`
- Right: Three 16×16 **circles** (`borderRadius: "50%"`), no text. Colors: `#ff5f56`, `#ffbd2e`, `#27c93f`

**Content grid:** `gridTemplateColumns: "1fr 260px"`, `minHeight: "400px"`

**Left column** (`padding: "48px 48px"`, flex-col, justify-center):
- Tag row: `gap: 10px marginBottom: 24px flexWrap: wrap`
  - `.brut-tag` "SOFTWARE ENGINEER" — `0.55rem`, `6px 12px`
  - `.brut-tag.brut-tag-cyan` "MBA STUDENT" — same
- h1 "HEY, I'M": Bungee, `clamp(2.8rem, 4.5vw, 4.2rem)`, `lineHeight: 1.05`, `#ffffff`, `margin: "0 0 4px 0"`
- h1 "MAYANK MAMGAIN.": same but `#ff9d00`, `margin: "0"`
- Orange HR: `width: 64px height: 3px bg: #ff9d00 marginBottom: 24px`
- Bio: Inter, `1rem`, `#aaaaaa`, `lineHeight: 1.75`, `maxWidth: 500px`, `marginBottom: 32px`
- CTA `<a href="#contact">`: **`var(--font-russo)` ← PENDING FIX**, `1rem`, uppercase, `letterSpacing: 0.06em`, `padding: 14px 28px`, `border: 2px solid #ff9d00`, `borderRadius: 3px`, `bg: #ff9d00 color: #000`. onMouseEnter/Leave toggles hollow state.

**Right column** (orange panel, 260px wide):
- `backgroundColor: "#ff9d00"`, `padding: "16px"`, `paddingBottom: "72px"`, `position: relative`
- Photo box: `width: 100%`, `flex: 1`, `minHeight: 240px`, `bg: #1a1a1a`, `border: 3px solid #000` — placeholder text, needs `<Image />`
- Social buttons: `position: absolute`, `bottom: 16px left: 16px right: 16px`, flex, `gap: 8px`, centered. Two 44×44 black links, `borderRadius: 4px`, `color: #ff9d00`. Inline SVGs 18×18.

---

### `components/About.tsx`

- `"use client"` ✓
- `section id="about" .portfolio-section`
- `<p className="section-label">about</p>`
- `<h2 style={{ fontFamily: "var(--font-bungee)", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: "400", color: "#ffffff", textTransform: "uppercase", marginBottom: "32px" }}>ABOUT</h2>`
- `motion.div` animate-in, `.brut-card`, `padding: "48px 56px"`
- Inner div: Inter `1.125rem` `#cccccc` `lineHeight: 1.9`, three `<p>` elements, first two `marginBottom: "20px"`
- All three paragraphs have `// TODO replace with real bio`

---

### `components/Experience.tsx`

- `"use client"` ✓
- `section id="experience" .portfolio-section` — no section-label
- Orange wrapper: `background: #ff9d00`, `border: 2px solid #1a1a1a`, `borderRadius: 4`, `boxShadow: 8px 8px 0 #000`, `padding: "56px 48px"`, `position: relative`
- **EXPERIENCE JOURNEY heading:** Bungee, `clamp(1.8rem, 3vw, 2.8rem)`, `fontWeight: "400"`, `color: "#000000"`, `marginBottom: "48px"`, `letterSpacing: "0.04em"`, `maxWidth: "45%"`
- Centre line: `absolute top-0 bottom-0 w-[2px] bg-black`, `left: 50%`
- `motion.div` stagger: `staggerChildren: 0.15`, `itemVariants y:24→0 duration:0.5`

**Four experience entries:**

1. **Left, 2024** — Software Engineer, HSBC, Pune (`Jul 2022 – Dec 2024`)
   - Bullets: real content (payment gateways, CI/CD pipelines, cross-functional teams, performance optimisation)
   - Tech: Python, Jenkins, Bash, Splunk, AWS, Git

2. **Right, 2022** — Open Source Fellow, MLH (May 2022 – Aug 2022)
   - Bullets: Solana grants, open source contributions, pod teamwork — still placeholder-ish
   - Tech: Typescript, Rust, Ruby

3. **Left, 2022** — Maintainer, The Algorithms (Sep 2021 – Mar 2022)
   - Bullets: DSA repo contributions, JS/C++ maintainer work
   - Tech: Javascript, C++, Typescript

4. **Right, 2021** — Intern, Adobe (Jun 2021 – Aug 2021)
   - Bullets: Slack availability monitor tool, process improvement, developer experience
   - Tech: Java, Springboot, Typescript

**Card layout per entry:**
- Left: `marginRight: "calc(50% + 24px)"` / Right: `marginLeft: "calc(50% + 24px)"`
- `marginBottom: 56` between entries (0 on last)
- `.brut-card relative`, `padding: "36px 40px"`
- Year badge: `absolute top-3 right-3`, Bungee `0.7rem`, bg `#ff9d00`, `color #000`, `padding: 6px 14px`, `borderRadius: 2`
- Date: uppercase tracking-wide, `#888`, `0.9rem`, `marginBottom: 12`
- Role: Bungee `1.1rem`, `text-white uppercase`, `marginBottom: 8`
- Company: `#ff9d00`, `1rem`, `font-semibold`, `marginBottom: 20`
- Bullets: `borderLeft: 3px solid #ff9d00`, `paddingLeft: 16`, `0.9375rem`, `lineHeight: 1.8`, `marginBottom: 12`
- Tech tags: `font-mono`, `0.8rem`, `padding: 6px 14px`, `gap: 10`, `marginTop: 24`, `bg: rgba(255,157,0,0.08)`, `border: rgba(255,157,0,0.25)`, `borderRadius: 3`. Keys: `${t}-${ti}`
- Centre dot: `absolute`, `left: 50% top: 50%`, 16×16, `bg: #ff9d00`, `border: 3px solid #000`, `translateX(-50%) translateY(-50%)`

---

### `components/Education.tsx`

- `"use client"` ✓
- `section id="education" .portfolio-section`
- `<p className="section-label">education</p>`
- `motion.div` stagger (`staggerChildren: 0.15`): `flex flex-col md:flex-row gap-6 items-stretch`

**Three cards:**

| Card | Top border | Institution colour | Degree | Institution | Years |
|---|---|---|---|---|---|
| MBA | `3px solid #00FFFF` | `#00FFFF` | MBA (Business Management) | Xaviers Institute of Management | 2026–2028 |
| B.Tech | `3px solid #ff9d00` | `#ff9d00` | B.Tech (Computer Science Engineering) | Graphic Era University | 2018–2022 |
| Schooling | `3px solid #CAFF00` | `#CAFF00` | Sr. Secondary / Secondary | The Baptist Convent School | 2014–2018 |

Each card: `.brut-card flex-1 flex flex-col`, `padding: "44px 40px"`, `motion.article`

Card content (inline styles):
- Degree h3: Bungee, `1.25rem`, `fontWeight: 800`, uppercase, `#ffffff`, `marginBottom: 12`
- Institution: `1rem`, coloured (per table), `marginBottom: 8`
- Years: `0.875rem`, `#555555`, `marginBottom: 20`
- `<div style={{ borderTop: "2px solid #000", marginBottom: 20 }}/>` — divider
- Caption: `0.9rem`, `#888888`, italic, `lineHeight: 1.7`

Captions:
- MBA: "Where I'm learning to talk to people using frameworks."
- B.Tech: "Where I learned to talk to computers instead of people."
- Schooling: "Where I learned that calculus and chemistry are optional life skills."

---

### `components/Currently.tsx`

- **Server Component** — no `"use client"`, no Framer Motion
- `section id="currently" .portfolio-section`
- `<p className="section-label">currently</p>`
- `<h2 style={{ fontFamily: "var(--font-bungee)", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: "400", color: "#ffffff", textTransform: "uppercase", marginBottom: "32px" }}>CURRENTLY</h2>`
- `.brut-card relative`, `padding: "48px 52px"`
- 5 rows via `rows.map()`, each: `grid items-center`, `gridTemplateColumns: "36px 140px 1fr"`, `padding: "20px 0"`, `borderBottom: 1px solid #1e1e1e` (except last)

Rows:
| Icon | Label | Value |
|---|---|---|
| 📍 | Based in | Delhi, India |
| 📖 | Reading | `[Book name]` `// TODO` |
| 📺 | Watching | `[Show name]` `// TODO` |
| 🛠️ | Building | This portfolio (meta, I know) |
| 🧠 | Learning | `[Skill or course]` `// TODO` |

- Last updated badge: `absolute bottom-4 right-5`, `0.75rem`, `#444` — "Last updated: June 2026"

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
- `padding: "48px 32px"`, `minHeight: 220`, flex-col, center, `gap: 16`
- Icon: `width: 48 height: 48 color: #ff9d00`, `.group-hover:text-[#00FFFF] transition-colors duration-200`
- Name h3: Bungee, `1.25rem`, `fontWeight: 800`, `#ffffff`, uppercase
- Caption p: `1rem`, `#888888`, `lineHeight: 1.6`

---

### `components/Contact.tsx` — DO NOT TOUCH

- **Server Component**
- `section id="contact"`, `background: #00FFFF`, `color: #000`, `py-16`
- **Top row:** version badge ("PORTFOLIO V1.0") + copyright block ("COPYRIGHT 2026 Mayank Mamgain") on left; "FIND ME ON" + GitHub/LinkedIn 48×48 buttons on right. All Press Start 2P.
- **Bottom row:** 5 footer nav links (ABOUT, EXPERIENCE, EDUCATION, CURRENTLY, HOBBIES — Skills removed). Press Start 2P `0.45rem`. Hover: `bg-black text-[#00FFFF]`. Then "Made with ☕ and mild existential dread."
- All URLs `// TODO`

---

## Pending TODOs — content (not code)

| File | What to fill in |
|---|---|
| Hero.tsx | `mayankmamgain.dev` domain (line 108) |
| Hero.tsx | Bio paragraph (currently placeholder) |
| Hero.tsx | Replace `Your Photo` div with `<Image src=... />` |
| Hero.tsx | CTA button font: change `var(--font-russo)` → `var(--font-bungee)` (pending fix 2) |
| Hero.tsx | GitHub/LinkedIn URLs (real links already there, marked TODO) |
| About.tsx | All three bio paragraphs |
| Experience.tsx | MLH bullets (semi-placeholder), The Algorithms bullets (semi-placeholder), Adobe bullets (semi-placeholder) |
| Education.tsx | Schooling card still has `// TODO` markers — data is filled in but comments remain |
| Currently.tsx | Reading, Watching, Learning values; update "Last updated" date monthly |
| Contact.tsx | Portfolio version, all URLs |
| Navbar.tsx | `padding: "10px 16px"` on `BASE_LINK_STYLE` and `ACTIVE_LINK_STYLE` (pending fix 1) |

---

## Key decisions and gotchas

### Bungee is the heading font — everywhere
Space Grotesk's `.section-heading` CSS class still exists but is now a dead class — no element uses it without being overridden. All h1/h2/h3 heading elements now use `var(--font-bungee)` as inline style.

### Russo One is installed but dead
`--font-russo` loads in layout.tsx and is in globals.css `@theme inline`. Only surviving usage is the Hero CTA button `fontFamily: "var(--font-russo)"` — a leftover, marked as pending fix. Don't use Russo One for new elements.

### Ticker is ABOVE the browser frame
`marginBottom: "24px"` separates it from the frame. The stickers (`position: absolute`) live on the outer wrapper div, outside the `motion.div` browser frame, so they float over/under the frame edges correctly.

### GitHub/LinkedIn icons must be inlined SVG
Lucide React v1.21.0 does not export `Github` or `Linkedin`. Both are inlined 18–20px SVG paths everywhere they appear (Navbar right buttons, Hero right panel, Contact). Do not attempt to import them from lucide.

### Navbar hover uses onMouseEnter/onMouseLeave — not Tailwind hover classes
The hover spec requires `box-shadow` change + `transform: translateY(-1px)` simultaneously. Tailwind's `hover:` prefix can't apply both as inline style overrides. The handler checks `active === id` before applying hover styles so the active button is never clobbered.

### Skills section is gone
`components/Skills.tsx` was deleted. No import, no JSX, no nav link, no footer link. Do not reference it.

### Experience centre dot positioning
`top: "50%"` positions the dot relative to the card height, not the full timeline. This is intentional — dots align with the vertical midpoint of each card wrapper.

### tailwind.config.ts is IDE-only at runtime
Tailwind v4 reads tokens from `@theme inline` in globals.css only. The JS config has no `@config` reference and does not affect the browser build.

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
│   ├── layout.tsx        ← DO NOT TOUCH
│   └── page.tsx          ← DO NOT TOUCH
├── components/
│   ├── Navbar.tsx        ← PENDING FIX: padding 8px→10px on nav buttons
│   ├── Hero.tsx          ← PENDING FIX: CTA button font russo→bungee; photo placeholder
│   ├── About.tsx
│   ├── Experience.tsx
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
