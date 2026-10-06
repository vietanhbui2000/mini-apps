---
name: Mini-Apps
type: template
size_target: minimal
stack:
  - HTML5
  - CSS (custom properties, no framework)
  - Vanilla JS (ES2022+)
  - Material Symbols Rounded (Google Fonts, subset)
  - Google Sans Flex (Google Fonts)
  - Material Color Utilities (lazy-loaded, only where users pick colors)
state_management: Local Mutable State
browser_baseline: Evergreen browsers from 2024 on (light-dark(), :has(), linear(), @starting-style, Popover API, <dialog>)
---

## Overview

Mini-Apps is a collection of single-page, zero-build web apps. Each app lives in its own folder and runs entirely in the browser, with no server, bundler or package install. The repository is deployed as one site (`vietanhbui2000.pages.dev/mini-apps/<app>/`), so **every app shares one origin and one `localStorage`**.

The design system is Material 3 Expressive (see `DESIGN.md`). Every app uses it.

## Philosophy & Standards

**Web-native and zero-build.** The platform covers what a framework used to: `<dialog>` for modals, the Popover API for menus, native form controls for input, CSS custom properties and `light-dark()` for theming, and view transitions for theme changes. Each page loads one HTML file plus two font stylesheets, so it opens instantly and anyone can fork it.

**Fast by default.**

- No runtime CSS compiler. The previous design loaded the Tailwind Play CDN, a JIT compiler its own docs say not to use in production.
- Fonts are subset: Google Sans Flex with only `wght` and `ROND` axes, and Material Symbols with `icon_names=` listing only the icons used.
- Heavy libraries load lazily, on the interaction that needs them (`import()`), never on page load.

## Tech Stack

- **HTML5:** semantic structure, native `<dialog>`, `popover`, form controls.
- **CSS:** M3 tokens as custom properties, component classes, `light-dark()` for color schemes, `linear()` spring easings, `@starting-style` for enter animations.
- **Vanilla JS:** global-scope state and functions, direct DOM updates.
- **Google Fonts:** Google Sans Flex (text), Google Sans Code (monospace, only when needed), Material Symbols Rounded (icons).
- **Material Color Utilities** `@material/material-color-utilities@0.4.0` from jsDelivr: only in apps where people choose a color, and loaded with `import()` on first use.
- **Platform APIs before libraries:** WebCrypto (`crypto.subtle`) for TOTP codes, `BarcodeDetector` for reading QR images (feature-detected), `TextDecoder` with streaming for large log files, the Clipboard API, and `field-sizing: content` for growing text areas.
- **Third-party scripts, only where the platform has no equivalent:** `qr-code-styling@1.9.2` (QR Code Generator, loaded at the end of `<body>`) and the YouTube IFrame API (YouTube Player, loaded on the first play).
- **On-device AI:** Transformers.js `@huggingface/transformers@4.3.0` from jsDelivr (`/+esm`), only in Background Remover. It runs in a Web Worker started from an inline script, and imports on the first image. The model (RMBG-1.4) downloads once from Hugging Face into the library's `transformers-cache` Cache Storage: the 16-bit file (88 MB) on WebGPU, the 8-bit file (44 MB) on the CPU.
- **Web APIs:** Open-Meteo for Widget Maker's weather and place search. It's free, needs no key, and allows cross-origin requests.

## System Map

```text
mini-apps/
├── AGENTS.md                  # Workspace instructions for AI agents (local, git-ignored)
├── DESIGN.md                  # Design system: tokens, components, rules
├── ARCHITECTURE.md            # This file
├── README.md                  # App list and links
├── index.html                 # Home page: the app list, with a live viewer on desktop
├── favicon.svg                # Home page icon
├── .claude/launch.json        # Local static server for previews
└── [app-name]/
    ├── index.html             # The whole app
    ├── favicon.svg            # App icon: the shared circle badge with the app's glyph,
    │                          # in its primary-container colors, light and dark
    ├── manifest.json          # PWA manifest (optional)
    ├── widget.html            # Other pages (optional), like Widget Maker's embeddable widget
    └── icons, assets…         # Other assets (optional)
```

Inside `index.html`:

```text
index.html
├── <head>
│   ├── Meta tags, Open Graph, manifest, theme-color (light + dark)
│   ├── Font stylesheets (preconnect, Google Sans Flex, Material Symbols subset)
│   ├── <style>
│   │   ├── Tokens        (:root color roles, shape, motion, elevation, font)
│   │   ├── Base          (reset, focus ring, .icon, kbd)
│   │   ├── Shared components (state layer, buttons, switch, seg, chips, rows, field, dialog, menu, snackbar)
│   │   └── App components
│   └── <script> Pre-paint: apply saved theme and cached color scheme (after <style>)
└── <body>
    ├── <main>               App content
    ├── <dialog>…            Dialogs (top layer)
    ├── .snackbar            Feedback with optional Undo
    └── <script>
        ├── // --- Constants & Config ---
        ├── // --- State Management ---
        ├── // --- DOM Elements ---     (els object)
        ├── // --- Initialization ---   (init())
        ├── // --- Event Listeners ---  (bindEvents() and handlers)
        ├── // --- Core Logic ---
        ├── // --- UI Updates ---
        ├── // --- Utilities ---
        └── init();
```

## Architecture Foundation

### State

- Application state lives in top-level `let` variables. Functions are top-level declarations, not nested in `DOMContentLoaded` (the script sits at the end of `<body>`), so everything can be inspected from the console.
- DOM nodes are queried once into an `els` object.
- UI updates are explicit `render…()` functions that read state and write the DOM. A change calls the renderers it affects. For preferences, `refreshAll()` re-renders everything, which is cheap at this size.

### Preferences and storage

Because all apps share one origin:

- **Namespace every key by app.** Store all of an app's preferences as **one JSON object under the app's folder name** (`localStorage['startpage']`). Derived caches use `<app>:<name>` (`startpage:scheme`).
- **Never call `localStorage.clear()`.** It would wipe other apps' data, including 2FA secrets. Reset by replacing your own key.
- **Sanitize on every read.** `sanitizePrefs()` merges defaults, type-checks each field, validates enums, and drops unknown keys. Storage and imported files both go through it.
- **No migrations by default.** When a storage layout changes, start from defaults. Add migration code only for data that can't simply be re-entered: read the old key once, write the new one, and remove the old key only after the write succeeds. Current migrations: 2FA secrets (`totpAccounts` → `2fa-auth`) and Blank Page text (`blank-page-single-v1` → `blank-page`).

| App                                                | Key                             | Holds                                                                                              |
| :------------------------------------------------- | :------------------------------ | :------------------------------------------------------------------------------------------------- |
| Home page                                          | `mini-apps`                     | Theme only. The viewer starts empty on every visit.                                                |
| Startpage                                          | `startpage`, `startpage:scheme` | Preferences, links, engines; cached color scheme                                                   |
| 2FA Authenticator                                  | `2fa-auth`                      | Theme and accounts (name, secret, optional digits/period/algorithm)                                |
| Blank Page                                         | `blank-page`                    | Theme, width, spell check, count mode, and the text                                                |
| DNS Profile Generator                              | `dns-profile-gen`               | Theme and the form draft                                                                           |
| YouTube Player                                     | `minimal-youtube-player`        | Theme and the last 8 videos played                                                                 |
| Battery Checker, Icon Generator, QR Code Generator | `<folder name>`                 | Theme only. Files never leave the page.                                                            |
| Background Remover                                 | `bg-remover`                    | Theme, fill, crop and format. Images never leave the page; the model lives in Cache Storage.       |
| Widget Maker                                       | `widget-maker`                  | Theme and the weather place and units. A widget's own settings live in its link, never in storage. |

- Wrap every storage call in `try/catch`. The app must still work, unsaved, when storage is blocked (private windows, `data:` URLs).

### Settings pattern

- Controls declare their key with `data-pref="key"`. One delegated `change`/`input` handler writes the value with `setPref(key, value)`, which saves and re-renders. One `syncSettings()` pushes state back into every control.
- Changes apply immediately, with no Save button. Destructive actions (delete, reset, import) take a `structuredClone` snapshot and show a snackbar whose **Undo** restores it.

### Dialogs and history

- `openDialog()` calls `showModal()`, pushes the dialog onto `dialogStack`, and pushes a history entry, so the browser Back button or Android back gesture closes it.
- Every close path (button, Esc, backdrop, close watcher) ends in `onDialogClosed()`, which pops the stack and rewinds history once.
- On load, a leftover `{ dialog }` history state from a reload is replaced.

### Theming at runtime

- An inline `<head>` script after the stylesheet sets `data-theme` and injects the cached scheme `<style id="scheme">` (selector `:root:root` to win over the defaults) before first paint. No flash of the wrong theme.
- Theme and color changes run inside `document.startViewTransition()` when available, so the page cross-fades or reveals instead of snapping.

### Embeddable pages

Widget Maker's `widget.html` runs inside other apps' frames (Notion, Obsidian), so it follows its own rules:

- **Everything comes from the URL.** Third-party frames often have no storage, so a widget never reads or writes `localStorage`. The builder previews it by `postMessage`, checked against its own origin.
- **No `color-scheme` on the page.** When a frame's color scheme differs from its host's, browsers paint the frame opaque, which would put a black or white box behind a transparent widget. Colors are resolved in script for light or dark, and the embed code sets `color-scheme: normal` on the `<iframe>`.
- **Settings in the link stay backward compatible.** Embedded links can't be updated once they're pasted, so add new parameters with defaults and never rename or repurpose one.

### Security

- Escape user-provided text (`esc()`) before any `innerHTML`. Imported files are untrusted.
- Normalize URLs to `http(s)://` before using them as `href`.

## Coding Guidelines

- **HTML comments** name sections plainly (`<!-- Settings Dialog -->`). No ASCII art.
- **Script sections** follow the eight headings above, in that order. Inside Core Logic, group related functions under short `// Name ---` sub-headings.
- **Comments** explain why something exists or how it's used, above the function. Skip comments that repeat the code.
- **Formatting:** Prettier settings in `.prettierrc` (2 spaces, single quotes, trailing commas, width 100).
- **No new dependencies** unless the platform truly can't do it. If one is needed, pin the version and load it lazily.

## Dev Environment Tips

Zero-build means nothing to install. Serve the repo root and open an app:

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

Then visit `http://127.0.0.1:4173/<app>/`. `.claude/launch.json` defines the same server for Claude's preview pane. Use a real origin rather than `file://`: some features (localStorage, module imports) behave differently on local files.

To generate color tokens for a seed, or spring `linear()` curves, use the scripts described in `DESIGN.md` (run with `bun` in a scratch folder, never in the repo).

## Testing Instructions

Testing is manual and visual. For each change, check:

- **Widths:** 360–375px (phone), around 600px (the full-screen dialog breakpoint), and 1280px (desktop).
- **Themes:** light, dark, and Auto following the system.
- **Input:** mouse, keyboard only (Tab, arrows, Esc, Enter), and touch (pane mobile emulation).
- **Storage:** works with storage blocked, and Reset leaves other apps' keys alone.
- **History:** Back closes the top dialog, and reloading with a dialog open doesn't trap Back.
- **Console:** no errors or unhandled rejections.
- **Reduced motion:** with `prefers-reduced-motion: reduce`, nothing animates beyond a fade.

## PR Instructions

- **Commit wording:** per-app versions, `[app-name]: r[version]`. See AGENTS.md for the full format.
- **Formatting:** separate bullet points with blank lines.
- **Scope:** keep each change inside one app folder, or make it a repo-wide `update`. Don't add abstractions or libraries to an app that the app doesn't need.
