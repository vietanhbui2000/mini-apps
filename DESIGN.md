---
version: beta
name: Mini-Apps Design System
description: Material 3 Expressive for small, fast, single-file web apps. Minimal at rest, joyful on interaction.
basedOn: Material Design 3 (Expressive, 2025) with Material You dynamic color
colors:
  # Default scheme: SchemeTonalSpot from seed #2563eb. Values are light-dark(light, dark).
  seed: '#2563eb'
  primary: 'light-dark(#4b5c92, #b4c5ff)'
  on-primary: 'light-dark(#ffffff, #1a2d60)'
  primary-container: 'light-dark(#dbe1ff, #324478)'
  on-primary-container: 'light-dark(#324478, #dbe1ff)'
  secondary: 'light-dark(#595e72, #c1c5dd)'
  on-secondary: 'light-dark(#ffffff, #2b3042)'
  secondary-container: 'light-dark(#dde1f9, #414659)'
  on-secondary-container: 'light-dark(#414659, #dde1f9)'
  tertiary: 'light-dark(#745470, #e2bbdb)'
  on-tertiary: 'light-dark(#ffffff, #422741)'
  tertiary-container: 'light-dark(#ffd6f8, #5a3d58)'
  on-tertiary-container: 'light-dark(#5a3d58, #ffd6f8)'
  error: 'light-dark(#ba1a1a, #ffb4ab)'
  on-error: 'light-dark(#ffffff, #690005)'
  error-container: 'light-dark(#ffdad6, #93000a)'
  on-error-container: 'light-dark(#93000a, #ffdad6)'
  surface: 'light-dark(#faf8ff, #121318)'
  on-surface: 'light-dark(#1a1b21, #e3e2e9)'
  on-surface-variant: 'light-dark(#45464f, #c5c6d0)'
  surface-dim: 'light-dark(#dad9e0, #121318)'
  surface-bright: 'light-dark(#faf8ff, #38393f)'
  surface-container-lowest: 'light-dark(#ffffff, #0d0e13)'
  surface-container-low: 'light-dark(#f4f3fa, #1a1b21)'
  surface-container: 'light-dark(#eeedf4, #1e1f25)'
  surface-container-high: 'light-dark(#e8e7ef, #292a2f)'
  surface-container-highest: 'light-dark(#e3e2e9, #34343a)'
  outline: 'light-dark(#757680, #8f909a)'
  outline-variant: 'light-dark(#c5c6d0, #45464f)'
  inverse-surface: 'light-dark(#2f3036, #e3e2e9)'
  inverse-on-surface: 'light-dark(#f1f0f7, #2f3036)'
  inverse-primary: 'light-dark(#b4c5ff, #4b5c92)'
  scrim: '#000000'
typography:
  sans:
    fontFamily: Google Sans Flex
    axes: 'wght 100–1000, ROND 0–100'
  mono:
    fontFamily: Google Sans Code
  icons:
    fontFamily: Material Symbols Rounded
    axes: 'FILL 0–1 (opsz 24, wght 400, GRAD 0)'
  scale:
    display: 'clamp(72px, 17vw, 128px) / 1, wght 450, ROND 100'
    headline-small: '24px / 32px, 400, ROND 100'
    title-large: '22px / 28px, 400, ROND 100'
    title-medium: '16px / 24px, 500, +0.15px'
    title-small: '14px / 20px, 500, +0.1px'
    body-large: '16px / 24px, 400, +0.5px'
    body-medium: '14px / 20px, 400, +0.25px'
    body-small: '12px / 16px, 400, +0.4px'
    label-large: '14px / 20px, 500, +0.1px'
    label-medium: '12px / 16px, 500, +0.5px'
    label-small: '11px / 16px, 500, +0.5px'
rounded:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  lg-plus: 20px
  xl: 28px
  full: 999px
spacing:
  grid: 4px
  page-margin-compact: 16px
  page-margin-expanded: 24px
  section-gap: 24px
  item-gap: 12px
  group-gap: 2px
motion:
  spring-fast: 'damping 0.6, stiffness 800 → 320ms'
  spring: 'damping 0.8, stiffness 380 → 360ms'
  spring-slow: 'damping 0.8, stiffness 200 → 500ms'
  effects: 'damping 1, stiffness 1600 → 180ms'
  exit: 'cubic-bezier(0.3, 0, 0.8, 0.15), 200ms'
elevation:
  level-1: '0 1px 2px rgb(0 0 0 / .3), 0 1px 3px 1px rgb(0 0 0 / .15)'
  level-2: '0 1px 2px rgb(0 0 0 / .3), 0 2px 6px 2px rgb(0 0 0 / .15)'
  level-3: '0 1px 3px rgb(0 0 0 / .3), 0 4px 8px 3px rgb(0 0 0 / .15)'
components:
  button-filled:
    {
      background: '{colors.primary}',
      text: '{colors.on-primary}',
      height: 40px,
      shape: full,
      pressed-shape: sm,
    }
  button-tonal:
    {
      background: '{colors.secondary-container}',
      text: '{colors.on-secondary-container}',
      height: 40px,
      shape: full,
    }
  button-text: { text: '{colors.primary}', height: 40px, shape: full }
  icon-button:
    { size: 40px, icon: 24px, text: '{colors.on-surface-variant}', shape: full, pressed-shape: md }
  icon-button-selected:
    { background: '{colors.primary}', text: '{colors.on-primary}', shape: md, icon-fill: 1 }
  search-bar:
    { background: '{colors.surface-container-high}', height: 56px, shape: xl, inset-items: 40px }
  dialog: { background: '{colors.surface-container-high}', shape: xl, elevation: level-3 }
  list-row:
    {
      background: '{colors.surface-bright}',
      on: '{colors.surface-container}',
      shape: xs,
      group-outer-shape: lg-plus,
    }
  switch: { track: 52x32, thumb: '16 → 24 (selected) → 28 (pressed)', selected: '{colors.primary}' }
  snackbar:
    {
      background: '{colors.inverse-surface}',
      text: '{colors.inverse-on-surface}',
      action: '{colors.inverse-primary}',
    }
  app-bar:
    {
      background: '{colors.surface}',
      height: 64px,
      scrolled-edge: '1px {colors.outline-variant} + 0 4px 12px rgb(0 0 0 / .08)',
    }
  fab:
    {
      background: '{colors.primary-container}',
      text: '{colors.on-primary-container}',
      height: 56px,
      shape: lg,
      pressed-shape: md,
      elevation: level-3,
    }
  slider:
    {
      track: '16px, {colors.primary} / {colors.secondary-container}',
      handle: '4x44, {colors.primary}',
    }
---

## Overview

The mini-apps follow **Material 3 Expressive** with **Material You** dynamic color. The aim is _subtly beautiful_: each screen is calm and minimal until you touch it, and then shapes morph, springs settle, and color responds. Every app is a single file, so the system is defined as CSS custom properties and a small set of component classes that each app copies in. There is no framework.

Three rules carry most of the look:

1. **Color comes from one seed.** Every surface, accent and text color is a _role_ generated from one seed color by Google's Material Color Utilities (HCT color space). Never hand-pick a hex for a component.
2. **Shapes are concentric and they move.** Anything inset in a rounded container uses that container's radius minus the inset. Interactive shapes morph on press (pill → rounded square).
3. **Motion is a spring.** Spatial changes (position, size, shape) use spring curves with a small overshoot. Color and opacity changes use a critically damped curve with no overshoot.

Every app follows this system. The startpage is the reference for the full component set; 2FA Authenticator is the reference for list-style apps and macOS Icon Generator for preview-and-settings tools. When this file and an app disagree, fix whichever is wrong.

## Colors

### Roles, not values

Use role tokens (`var(--primary)`, `var(--surface-container-high)`, …) everywhere. Each token is a `light-dark()` pair, so light and dark mode need no extra selectors.

| Role                                             | Use for                                                                          |
| :----------------------------------------------- | :------------------------------------------------------------------------------- |
| `surface`                                        | Page background                                                                  |
| `surface-container-low` → `-highest`             | Cards, bars, fields, nested layers. Higher means more prominent.                 |
| `surface-bright`                                 | Rows in a grouped list, sitting on `surface-container`                           |
| `primary` / `on-primary`                         | The one main action, selected states, key accents (clock separators, active tab) |
| `primary-container` / `on-primary-container`     | Softer emphasis: themed icons, monograms, link actions                           |
| `secondary-container` / `on-secondary-container` | Tonal buttons, selected list items and chips, selects                            |
| `tertiary` / `tertiary-container`                | A contrasting accent for a distinct mode (Ask/AI, hotkey badges)                 |
| `on-surface-variant`                             | Secondary text, inactive icons                                                   |
| `outline` / `outline-variant`                    | Field borders / dividers                                                         |
| `inverse-surface` / `inverse-primary`            | Snackbars and their action                                                       |
| `error` / `error-container`                      | Validation and destructive text actions only                                     |

Pair every background role with its `on-` role. Don't put `on-surface` text on `primary`.

### Theme switching

- `:root { color-scheme: light dark; }` follows the system.
- `html[data-theme="light" | "dark"]` forces one scheme by setting `color-scheme`.
- Add `html.dark` only when a non-color property must differ (for example a CSS `filter`). Colors never need it.
- Update `<meta name="theme-color">` from the resolved `surface` color so the browser chrome matches.

### Generating a scheme

Default tokens are baked into each app's `<style>`. To generate tokens for a new seed, run this in a scratch folder (`bun add @material/material-color-utilities@0.4.0`):

```ts
import * as M from '@material/material-color-utilities';

const seed = '#2563eb';
const hct = M.Hct.fromInt(M.argbFromHex(seed));
const light = new M.SchemeTonalSpot(hct, false, 0);
const dark = new M.SchemeTonalSpot(hct, true, 0);
const roles = new M.MaterialDynamicColors();
const names = ['primary', 'onPrimary', 'primaryContainer' /* …every role in the frontmatter… */];
for (const n of names) {
  const kebab = n.replace(/[A-Z]/g, (c) => '-' + c.toLowerCase());
  const pair = [light, dark].map((s) => M.hexFromArgb(roles[n]().getArgb(s)));
  console.log(`--${kebab}: light-dark(${pair.join(', ')});`);
}
```

Apps that let people pick a color (the startpage) import the library lazily from `https://cdn.jsdelivr.net/npm/@material/material-color-utilities@0.4.0/+esm`, only when the person changes the color. They cache the generated CSS in localStorage and apply it from an inline `<head>` script before first paint.

Styles map to scheme classes: Tonal = `SchemeTonalSpot` (default), Vibrant = `SchemeVibrant`, Expressive = `SchemeExpressive`, Neutral = `SchemeNeutral`, Mono = `SchemeMonochrome`.

### App seeds

Each app picks one seed when it's redesigned, which gives it a quiet identity of its own while sharing the system. Record it here.

| App                   | Seed                        | Style | Hue                      |
| :-------------------- | :-------------------------- | :---- | :----------------------- |
| Home page             | `#2563eb` (system default)  | Tonal | Blue                     |
| Startpage             | `#2563eb` (user can change) | Tonal | Blue                     |
| 2FA Authenticator     | `#1f8a65`                   | Tonal | Green                    |
| Battery Checker       | `#e0a800`                   | Tonal | Amber                    |
| Blank Page            | `#6750a4`                   | Tonal | Purple (the M3 baseline) |
| DNS Profile Generator | `#00838f`                   | Tonal | Teal                     |
| macOS Icon Generator  | `#c2185b`                   | Tonal | Magenta                  |
| YouTube Player        | `#d93025`                   | Tonal | Red                      |
| QR Code Generator     | `#8bc34a`                   | Tonal | Lime                     |
| Widget Maker          | `#a63aa8`                   | Tonal | Orchid                   |
| Background Remover    | `#008cc6`                   | Tonal | Sky blue                 |

Pick a seed whose hue is clearly apart from the others: Tonal Spot lowers chroma, so seeds closer than about 30° of hue come out looking alike (orange and red both turn brown).

## Typography

- **Google Sans Flex** for everything. Load only the axes in use: `wght,ROND@100..1000,0..100` (about 70 KB for Latin). Leave out `opsz`; it more than doubles the file.
- **Rounded terminals** (`font-variation-settings: 'ROND' 100`) for display, headline and title-large text. That is the Expressive voice. Body and label text stays at the default for crispness.
- **Google Sans Code** only where monospace matters (codes, keys, config). Badges and `<kbd>` use Google Sans Flex.
- **Numbers that change** (clocks, counters) use `font-variant-numeric: tabular-nums` so they don't jitter.
- **Sentence case** for every label, button and title ("Open links in a new tab", not "Open Links In New Tab").
- Use the type scale from the frontmatter. Don't invent in-between sizes.

### Icons

**Material Symbols Rounded**, loaded from Google Fonts with `icon_names=` listing only the icons the app uses (alphabetical, comma-separated) and `display=block`, so ligature text never flashes. Keep `opsz 24, wght 400, GRAD 0` fixed and request `FILL 0..1`. Selected states animate `font-variation-settings: 'FILL' 1`. Write icons as `<span class="icon" aria-hidden="true">name</span>`.

## Layout

- **Window classes:** compact `< 600px`, medium `600–839px`, expanded `≥ 840px`. Full-screen dialogs switch at 600px.
- **Page margins:** 16px compact, 24px from 640px up.
- **Rhythm:** a 4px grid. 8px inside a component, 12–16px between related items, 24px between sections, 40px between hero-level blocks.
- **Height:** use `min-height: 100dvh` in CSS. Don't measure the viewport in JS.
- **Outer shell:** center the page and app-bar contents in a `width: 100%; max-width: 1200px` container with `box-sizing: border-box`. The 1200px limit includes side padding and is shared by list, dashboard, form, studio and gallery apps.
- **Inner widths:** keep reading, form, search and media widths task-specific inside the shell. YouTube Player keeps its search and recent sections at 640px and its player at 960px; these do not change the outer shell.
- **Width exceptions:** Blank Page keeps its user-selectable width modes. The startpage keeps its own layout and is excluded from the 1200px shell standard. So is the home page, whose viewer needs the room.
- **Gutter:** use 16px side padding, increasing to 24px from 640px. Measure this inset from the centered container edges, which coincide with the viewport edges only while the shell fills the window. Content, app-bar contents and page-aligned floating controls (FAB, toolbar, status pill) follow these padded edges.
- **App bar:** every app with scrolling content pins a 64px app bar with its title on the left and actions on the right. The bar spans the window, but its contents follow the 1200px outer shell with the same side padding, subject to the width exceptions above. See Components.
- **Studio layout** (tools with a preview, like the icon and QR generators): from 900px, settings on the left and a pinned preview column on the right (380px), so each change reads left to right into its result. The column holds the preview card, an optional meta line (file name, size), then the main action: 56px tall, `lg` corners, the filled button stretching. Its top lines up with the first settings label. Below 900px the preview pins under the app bar and the main action moves to a bottom bar. DNS Profile Generator starts the studio layout at 1000px and splits the page evenly (`minmax(0, 1fr) minmax(0, 1fr)`) instead of using the 380px column: its preview is a profile with long lines of code, which a 380px card would make scroll sideways. Its preview is too tall to pin on phones, so the bottom bar's Preview button opens it full screen, built like a page: a 64px header matching the app bar, then the same bottom bar. Background Remover also splits the page evenly, from the usual 900px, because the image is the point of the app. Its preview grows to the window's height, and an Open larger button shows the output full screen, built the same way.
- **Gallery and editor** (Widget Maker): the home page is a gallery of live examples, grouped by kind in rows of equal height (a square tile, or a wide one spanning two plus the gap). Picking one opens it in an editor dialog that holds the studio layout: `width: min(1200px, calc(100% - 48px))` on wide screens, full screen below 900px, with the close button on the right of its header. The gallery shell and editor share the 1200px width limit.
- **Home page** (the repo root, `index.html`): the app list. Below 900px it's a grouped list of links, and each opens its app like any page. From 900px it's list-detail: the list becomes a 360px side pane and the viewer sits on the right, an outlined xl card. It starts empty (the cookie empty state) until you pick an app; then the app runs live in an `<iframe>` and takes keyboard focus, so its own shortcuts (`/`) work at once. Arrow keys browse the list without moving focus. Under the card, right-aligned icon buttons: Open (filled, the main action, first), Copy app link, View source code, then Close, which unloads the app and returns to the empty state.
- **Bottom spacing:** 24px below the last content, or enough to clear a FAB or bottom bar (about 112px).

## Elevation & Depth

M3 expresses depth mostly through **tonal surfaces**, not shadows. A higher surface-container role reads as closer.

- Shadows only for things that float over content: focused search bar (level 2), menus (level 2), dialogs and snackbars (level 3), a dragged row (level 3), FABs (level 3), and the compact-width toolbar pill (level 2).
- **App bar scroll edge:** once content scrolls under the pinned app bar, it gets a 1px `outline-variant` divider plus a soft shadow (`0 4px 12px rgb(0 0 0 / .08)`). M3's default is a `surface-container` tint, but these apps put content on `surface-container` cards and rows, so a tint alone would blend in. The divider keeps the edge visible in dark mode, where shadows disappear.
- Scrims: `rgb(0 0 0 / .32)` behind modal dialogs.

## Shapes

- **Scale:** xs 4, sm 8, md 12, lg 16, lg-plus 20, xl 28, full (pill).
- **Concentric rule:** inner radius = outer radius − inset. Inside a 56px pill search bar (radius 28), a 40px element at an 8px inset is a full pill or circle. Never put an 8px-radius chip inside a pill.
- **One slot, one shape:** when a slot shows different things in different states (a keyboard hint, then an action button), keep the size and shape fixed and change only color and content.
- **Press morph:** pills shrink their radius on `:active` (buttons → sm, icon buttons → md). Selected icon buttons rest at md.
- **Hover morph:** circular tiles square off (50% → lg-plus). Pill cards change only their color on hover and squish on press (xl → lg), like buttons.
- **Grouped lists:** rows have xs corners. The first and last _visible_ rows of a group get lg-plus outer corners, with 2px gaps between rows (Android 16 settings style). Rows that only show when another setting is on use `hidden`, so the corners follow what's on screen.

## Motion

| Token                    | Use                                                                                                                                                                 |
| :----------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--spring-fast` (320ms)  | Small, quick feedback: switch thumbs, chips, press morphs, icon swaps                                                                                               |
| `--spring` (360ms)       | Medium moves: tab indicator, list expand, card shape changes                                                                                                        |
| `--spring-slow` (500ms)  | Large or entering elements: dialogs, page entrance, clock digits                                                                                                    |
| `--ease-effects` (180ms) | Color, opacity and state layers. Never overshoots.                                                                                                                  |
| `--ease-exit` (200ms)    | Leaving: dialogs and menus closing. Exits are quicker than entrances and never bounce; every part of a closing layer (backdrop included) finishes within the 200ms. |

The springs are M3 Expressive spring tokens (damping ratio, stiffness, mass 1), sampled into CSS `linear()` curves. Regenerate them with the scratch script described in ARCHITECTURE.md if you need new ones.

Signature moments: give each app **one or two** at most. Everything else stays quiet. Examples:

- Startpage: clock digits that roll in when they change, and a search bar that docks open into its suggestions.
- 2FA Authenticator: a wavy countdown that folds from a pill into a ring when search opens, and codes that roll in each period.
- Battery Checker: the health gauge's wave sweeping up while the number counts.
- Background Remover: the cutout sweeping across the original, wiping the background away.
- YouTube Player: the video morphing into the audio card's thumbnail (a shared view-transition name).
- Every app: the circular reveal when the theme flips.

Always honor `prefers-reduced-motion`: the shared stylesheet collapses durations, and JS animations check `matchMedia('(prefers-reduced-motion: reduce)')`.

## Components

Copy these from an app that already uses them; class names are shared across apps. Copy only what the app uses.

- **State layer (`.state`):** every interactive surface. Overlays its own content color at 8% on hover and 10% on focus or press. A JS ripple (`addRipple`) runs on pointer-down.
- **Buttons:** `.btn` plus `.btn-filled` (the one primary action), `.btn-tonal` (secondary emphasis), `.btn-text` (dialog actions, low emphasis), `.btn-danger` (destructive text action). 40px tall, pill-shaped. Pill corners that spring on press use half the height (20px, or 24px for the 48px bottom-bar buttons), never `--shape-full`: the spring overshoots, and from 999px it dips below zero and flashes square corners.
- **Icon buttons (`.icon-btn`):** 40px, with a 24px icon. Toggles use `aria-pressed="true"`, which turns them filled and square-ish.
- **Switch (`.switch`):** native `<input type="checkbox" role="switch">`. Put it inside a `<label class="row">` so the whole row toggles it.
- **Connected button group (`.seg`):** single choice among two to four options, built on native radio inputs. The selected option becomes a filled `primary` pill.
- **Filter chips (`.chips`):** single choice among more options than fit a group. Radios again, and the selected chip gets a check.
- **Grouped list (`.group > .row`):** settings and lists. A row with its own actions is `.row.item`, with a `.row-main` button and trailing icon buttons. `.row-add` is the "Add …" row at the end of a group.
- **Outlined text field (`.field`):** floating label using `placeholder=" "` and `:placeholder-shown`. Errors use `.field.invalid` plus `.field-support.error`. Set `--field-bg` to the surface behind the field so the label cuts the border cleanly.
- **Select (`.select > select`):** a native select styled as a tonal pill. Use native controls for anything with more than about five options.
- **Dialogs (`<dialog class="dialog">`):** native `showModal()`, never a fixed-position div. Basic dialogs are centered, up to 560px wide, with xl corners. Large flows (settings) go full-screen below 600px. Each open dialog pushes a history entry so Back closes it.
- **Menus (`[popover].menu`):** the native Popover API, positioned under the invoking button, which is passed as the popover's `source` so a second click closes it.
- **More menu and About:** every app has a ⋮ menu ("More options") as its last action. It holds the app's own extra actions, then a divider, then **Theme** and **About**. Theme shows its current value as trailing text (`.menu-trail`), cycles Auto → Light → Dark with a circular reveal, and keeps the menu open. About is a bottom-sheet dialog with the app icon, name and one-line description, "Made by" and a link to the app's folder on GitHub. Leave the divider out when Theme and About are the only items.
- **Snackbar (`.snackbar`):** one at a time, bottom-center, with an optional single action (usually Undo), and a 5s timeout when it has an action or reports an error (`showError`), 3s otherwise. Append it to the top open dialog, because a modal dialog makes the rest of the page inert.
- **Tabs (`[role=tablist]`):** primary tabs with a 3px `primary` indicator, as wide as the label, that springs between tabs. Arrow keys move between tabs.
- **App bar (`header.appbar > .appbar-inner > .top`):** sticky, `surface` background, with `.appbar-inner` following the 1200px outer shell and gutters described under Layout (including its width exceptions). A 64px row with `.top-title` (22px, 24px from 840px, ROND 100) and 40px icon buttons. A scroll listener toggles `.scrolled` for the edge described under Elevation. Extra pinned controls (the 2FA timer and search) go in `.appbar-inner` under the title row, with 12px below them. Actions run left to right: the app's own frequent actions (Width, Edit link, Start over), then Help, then Settings or the ⋮ menu last. Theme isn't in the bar: Auto suits almost everyone, so it lives in the ⋮ menu (or Settings on startpage). The startpage toolbar follows the same order.
- **How many actions (a recommendation, not a rule):** in the bottom or floating area, where people reach most, one main action plus up to four other frequent ones, five in total. In the header, supporting actions only: aim for two or three, and four only when each one earns its place. Everything else goes in ⋮.
- **FAB (`.fab`):** extended FAB, 56px, `primary-container`, lg corners. It folds to an icon while scrolling down and opens again when scrolling up. Hide it when an empty state already shows the same action.
- **Wavy progress (`.wave` + `.track`):** M3 Expressive indicators drawn as SVG paths. The active part is a sine wave; after a gap comes a flat `secondary-container` track. Use the circular form for gauges and countdowns, and the linear form for progress bars. No stop dot on countdowns. Animate the wave's phase only while it changes, and keep it still under reduced motion.
- **Slider (`.slider`):** a native range input with a 16px pill track (`primary` up to the value, `secondary-container` after) and a 4px × 44px handle with gaps either side. Set `--p` to the percentage from JS.
- **Color swatch (`.swatch`):** a 40px circle in the color (`--c`). The selected swatch squares off to md corners and shows a check. The check sits on a small `surface-container-highest` circle so it shows on any color, and every swatch has a 1px `outline-variant` inner ring so white stays visible on light rows. A custom swatch wraps `<input type="color">` and shows a colorize icon on `surface-container-highest` until chosen.
- **Multi-select chips:** the same `.chips` markup with checkboxes instead of radios. Disabled chips drop to 38% opacity.
- **Empty state:** a 128–144px M3 "cookie" shape (9 soft scallops, `primary-container`, slowly turning) with a filled icon, a headline, one line of help, and at most one filled button.
- **Bottom bar (`.actionbar`):** phones and tablets only, on `surface-container`. The main action (filled) comes first, then an optional tonal one; they split the width 2:1 and line up with the page gutter. Snackbars move up to clear it.
- **Bottom sheet (phones):** below 600px, menus (`.menu` popovers) and reading dialogs (`.dialog.bottom-sheet`, used for help) open as M3 modal bottom sheets: anchored to the bottom, 28px top corners, `surface-container-low`, a 32 × 4 drag handle, and a 32% scrim. Drag the handle down, tap the scrim, press Esc or go Back to close. They slide with M3's emphasized decelerate curve, not a spring, so they never lift off the bottom edge. Wider screens keep the anchored menu and the centered dialog. Dialogs with text fields (edit, import, links) stay dialogs: on iPhone the keyboard covers anything anchored to the bottom.
- **Action order:** in bars and preview panels the main action comes first (left), so it's the first thing read. Dialogs keep M3's order: confirm last, on the right.
- **Header controls:** anything that switches the whole page (icon-gen's App/Folder toggle, battery's loaded file) lives in the pinned app bar, under the title row.
- **Focus mode:** a full-screen dark layer for media. Set `color-scheme: dark` on the body instead of hard-coding colors, so every token follows. Controls sit in a floating pill that grows from a slim handle on hover (always open on touch).

## Do's and Don'ts

- **Do** generate colors from a seed and use role tokens. **Don't** write a hex value in component CSS.
- **Do** apply settings the moment they change and offer **Undo** in a snackbar for destructive actions. **Don't** add Save/Cancel steps for preferences.
- **Do** keep inner shapes concentric with their container. **Don't** mix pill containers with small-radius children.
- **Do** use native elements (`<dialog>`, popover, radios, checkboxes, `<select>`), which give focus, keyboard and accessibility for free.
- **Do** make `/` focus the app's main input (search, link field), and let Esc step back out one layer per press, as a standard combobox does: close suggestions (and stop a pending auto-open), clear the text, then leave the field. Typing or an arrow key brings the suggestions back. Studio apps whose fields are settings, like the QR generator, don't need `/`. **Don't** blur on Backspace, and **don't** take over Space or Enter outside fields: a focused button must keep its native press.
- **Do** escape any user text before putting it in `innerHTML`.
- **Do** give every icon-only button an `aria-label` and a `title`.
- **Do** use `@media (hover: hover)` for hover-only styling, so touch devices never get sticky hover.
- **Don't** use more than one filled `primary` button in a view.
- **Don't** add decorative motion that isn't tied to an interaction or a state change.
- **Don't** bring back Tailwind, Lucide or Geist. They belonged to the legacy design.
