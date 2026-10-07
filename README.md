# Design Questionnaire

A short, multi-step design preference questionnaire built with Next.js (App
Router). It's fully static — no server required — and set up to deploy to GitHub
Pages.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

Because `output: 'export'` is enabled, the production build is written to
`out/` as plain HTML/CSS/JS. There is no `next start` for a static export — to
preview the built site locally, serve the folder:

```bash
npx serve out
```

## Deployment (GitHub Pages)

The site is intended to be hosted at
`https://<user>.github.io/Design-Questionaire/`. To make that work,
`next.config.js` sets a matching `basePath` and `assetPrefix` in production.

One-time setup:

1. Push this repo to GitHub.
2. Go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually). The included
   `.github/workflows/deploy.yml` builds the project and publishes `out/`.

The `basePath` in `next.config.js` is derived from the `repo` constant. If you
rename the repository or deploy to a custom domain, update it (or set it to `""`
when hosting at the domain root).

## Project structure

```
app/
  layout.js        Root layout and global styles
  page.js          Home page that renders the questionnaire
  globals.css      Global base styles
components/
  Questionnaire.js  Step state, progress, navigation
  Question.js       A single question with its options
  Results.js        Summary of the chosen answers
  questions.js      Questionnaire content (edit this to change questions)
public/             Static assets
```

To change the questions, edit `components/questions.js` — the progress bar,
navigation, and results screen all derive from that data.
