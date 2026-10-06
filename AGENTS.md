# Mini-Apps Workspace Instructions

This workspace contains a collection of independent, client-side, zero-build mini web applications vibe-coded with AI, designed with Material 3 Expressive (Material You).

## Architecture & Layout
- **Standalone Folders:** Each app lives in its own top-level directory (e.g., `2fa-auth`, `blank-page`, `qr-code-gen`).
- **Single Files:** Each app is one `index.html` holding its HTML, CSS and JS.
- **Zero-Build Stack:** Vanilla HTML/CSS/JS with Material 3 tokens as CSS custom properties, Google Sans Flex, and Material Symbols Rounded. No bundlers, frameworks or build steps.
- **Shared Origin:** All apps deploy to one origin and share one `localStorage`. Store an app's data under its own key (`localStorage['<app-name>']`) and never call `localStorage.clear()`.
- **Migration Status:** Every app uses the Material 3 Expressive system. Don't bring back the legacy Tailwind/Lucide design. References: the startpage for the full component set, 2FA Authenticator for list apps, macOS Icon Generator for preview-and-settings tools.

## Coding Conventions
- **Global Scope Logic:** Keep state, constants and functions at the top level of the script, not nested inside `DOMContentLoaded`.
- **Script Sections:** Constants & Config, State Management, DOM Elements, Initialization, Event Listeners, Core Logic, UI Updates, Utilities.
- **DOM Queries:** Cache elements in an `els` object instead of querying the DOM repeatedly.
- **Styling:** Use the M3 role tokens (`var(--primary)`, `var(--surface-container-high)`) and shared component classes from `DESIGN.md`. Never hard-code hex colors in component CSS.
- **Native First:** Use `<dialog>`, the Popover API and native form controls before writing custom widgets.
- **Settings:** Apply changes immediately (`data-pref` + `setPref`) and offer Undo for destructive actions instead of Save/Cancel flows.
- **Safety:** Escape user text before `innerHTML`, and wrap every storage call in `try/catch`.

## Reference Documents
- **`DESIGN.md`**: Design tokens (color roles, type, shape, motion, elevation), component specs, and the rules that keep apps consistent.
- **`ARCHITECTURE.md`**: Zero-build philosophy, file blueprint, state/storage/dialog patterns, dev server and testing checklist.

## Git Workflow & Commits
This repository uses a specific version-tracking commit style rather than generic Conventional Commits.

- **Version Commits:** Use the format `app-name: r<version_number>`. Increment the number based on the `git log` history for that app. Example: `2fa-auth: r35`.
- **Commit Message**: Commit message should be descriptive, while still being short and concise.
  - **First Commit (r1):** Use a single description line.
    ```text
    app-name: r1
    
    One-line description of the app.
    ```
  - **Subsequent Commits:** List the changes as bullet points.
    ```text
    app-name: r<version_number>
    
    - description of change 1
    - description of change 2
    - description of change 3
    ```
  - **General/Repo-Wide Changes:** Use simple action titles (e.g., `update`) followed by the changes in bullet points.
    ```text
    update
    
    - description of change 1
    - description of change 2
    ```
- Always use the `commit` skill when available to draft a commit message.
- Always document and commit the changes folder by folder, or app by app — do not commit a mixture of changes from different folders/apps in one commit. If the changes happen to be repo-wide, make a single commit following the template above.

## Working Behaviors

- **NEVER** assume a task is finished until the user explicitly says so.
- **NEVER** try to commit, draft commits, or wrap up the work prematurely.
- **DO NOT** commit without user confirmation or approval.
