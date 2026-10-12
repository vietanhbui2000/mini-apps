// The settings Startpage ships with. index.html loads this file before its main script, and uses
// these values for a first visit, for Reset to defaults, and to fill in any setting missing from
// saved or imported data. Editing this file changes nothing for people who already saved settings,
// except Reset.
// Every setting needs an entry here: sanitizePrefs() drops keys it doesn't find in this object,
// and checks saved values against the type of the default. Entries follow the Settings tabs, in
// the order their controls appear.
const DEFAULT_PREFS = {
  // Appearance
  theme: 'auto',
  seedColor: '#2563eb',
  schemeVariant: 'tonal',
  themedIcons: false,

  // Header
  headerStyle: 'clock',
  enableMessage: true,
  messageType: 'greeting',
  username: '',
  messageContent: '',
  timeFormat: '12',
  showAmPm: true,
  showSeconds: false,
  flashSeparators: false,
  dateFormat: 'short',
  showWeekday: true,
  showYear: false,
  showLeadingZero: false,

  // Engine
  // %s in the URL is replaced by the query. A shortcut picks the engine from the search box
  // ("gg cats"), so each one must be unique. An optional action replaces "Search with <name>".
  // engineDefaultSearch and engineDefaultAsk must match a name in this list.
  engines: [
    { name: 'Google', shortcut: 'gg', url: 'https://www.google.com/search?q=%s' },
    { name: 'Bing', shortcut: 'bg', url: 'https://www.bing.com/search?q=%s' },
    { name: 'DuckDuckGo', shortcut: 'ddg', url: 'https://duckduckgo.com/?q=%s' },
    { name: 'Perplexity', shortcut: 'pplx', url: 'https://www.perplexity.ai/search?q=%s' },
    { name: 'Google AI Mode', shortcut: 'ai', url: 'https://www.google.com/aimode?q=%s' },
    { name: 'ChatGPT', shortcut: 'gpt', url: 'https://chatgpt.com/?q=%s' },
    { name: 'Claude', shortcut: 'cla', url: 'https://claude.ai/new?q=%s' },
    { name: 'Gemini', shortcut: 'gem', url: 'https://gemini.google.com/app?q=%s' },
  ],
  engineDefaultSearch: 'Google',
  engineDefaultAsk: 'Google AI Mode',
  autofocusInput: false,
  actionHint: 'chip',
  engineTriggerKey: 'both',
  engineMatchMode: 'shortcut',
  openQueryNewTab: false,

  // Speed dial
  showSpeedDial: true,
  linkLayout: 'list',
  links: [],
  linkHotkeyMode: 'alt',
  linkMatchMode: 'shortcut',
  linkAutoOpen: 'disabled',
  openLinkNewTab: false,
};
