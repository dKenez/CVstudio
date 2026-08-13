# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Rendering the PDF

```bash
npm run pdf                    # -> static/KKD_CV_<yyyymmmdd>.pdf
npm run pdf -- --out foo.pdf   # custom path
```

This boots a throwaway dev server and prints the standalone `/page_1` and `/page_2`
routes through headless Chrome, then merges them. After regenerating, point the
download button in `src/routes/+page.svelte` at the new filename.

Puppeteer's Chrome download is blocked by this repo's install-script policy, so after
a fresh `npm install` run `npm run pdf:setup` once to fetch it.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
