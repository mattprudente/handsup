# HandsUp website (GitHub Pages)

Three pages: `index.html` (home), `support.html` (App Store "Support URL") and `privacy.html` (App Store "Privacy Policy URL").

## Details
Published by humancode · hello@humancode.uk. The "Get it on the App Store" button points to the support page until the app is live; then change `href="support.html"` on that button in `index.html` to the App Store link.

## Publish
1. On github.com, create a new **public** repository, e.g. `handsup`.
2. Choose **Add file → Upload files** and drag in everything in this folder, including `.nojekyll`. On a Mac, press ⌘⇧. in Finder to show hidden files.
3. Go to **Settings → Pages → Build and deployment**, set Source to *Deploy from a branch*, choose `main` and `/ (root)`, then Save.
4. After a minute the site is live at `https://mattprudente.github.io/handsup/`:
   - Support URL: `https://mattprudente.github.io/handsup/support.html`
   - Privacy Policy URL: `https://mattprudente.github.io/handsup/privacy.html`
   - Marketing URL (optional): `https://mattprudente.github.io/handsup/`
