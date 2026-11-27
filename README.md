# james46007.github.io

Personal portfolio of Jimmy Yar, built with Astro and Tailwind CSS. English lives at `/` and Spanish at `/es/`.

## Develop

```bash
npm install
npm run dev
```

## Edit content

All text, for both languages and for the résumé, lives in [`src/i18n/content.ts`](src/i18n/content.ts). In `profile` you can set:

- `photo`: put a file in `public/` and set its path, e.g. `"/photo.jpg"`
- `pita.demo`: the live demo URL, once Pita is deployed again
- `pita.video`: a short demo video in `public/`, e.g. `"/pita-demo.mp4"`
- `email`

After changing anything the résumé uses, regenerate the PDFs (this needs Google Chrome):

```bash
npm run cv
```

This writes `public/cv/jimmy-yar-cv-{en,es}.pdf`. Commit them.

## Deploy

Every push to `master` builds and deploys through GitHub Actions (`.github/workflows/deploy.yml`). In the repo settings, Pages → Source must be set to **GitHub Actions**.
