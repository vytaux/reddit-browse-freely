# Reddit Browse Freely

![Build](https://github.com/vytaux/reddit-browse-freely/actions/workflows/build.yml/badge.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Manifest](https://img.shields.io/badge/manifest-v3-orange.svg)
![Platform](https://img.shields.io/badge/platform-Chrome-yellow.svg)

Browse Reddit without popup overlays interrupting your reading.

---

## What it does

Reddit displays a signup popup that blocks public content and locks page scroll. **Reddit Browse Freely** removes it automatically — no clicks, no setup, just browse.

- Removes the popup overlay instantly via CSS
- Restores page scrolling (removes Reddit's scroll lock)
- Runs only on `reddit.com` — no other permissions
- Zero data collected, no network requests, no background processes

## Installation

### Chrome Web Store *(pending review)*

> Link will be added once approved.

### Manual install (Developer Mode)

1. Clone the repo and build:
   ```bash
   git clone https://github.com/vytaux/reddit-browse-freely.git
   cd reddit-browse-freely
   pnpm install
   node build.js chrome
   ```
2. Open `chrome://extensions/`
3. Enable **Developer mode** (top right)
4. Click **Load unpacked** → select the `dist/chrome/` folder

## How it works

A CSS rule hides the modal before it paints. A `MutationObserver` watches for dynamically injected modal nodes (Reddit is a React SPA) and removes them, then restores the `rpl-scroll-lock` class Reddit adds to `<body>`.


## Development

```bash
pnpm install       # install dev dependencies
pnpm test          # run tests
node build.js chrome  # build to dist/chrome/
```

## License

MIT
