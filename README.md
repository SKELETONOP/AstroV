# Astro Vikesh Kumar

A Vite + React Router (framework mode, static-generated) site.

## 🚀 Project Structure

```text
/
├── public/            # static assets, copied as-is
├── app/
│   ├── components/    # React components
│   ├── content/       # markdown content (blog, services)
│   ├── data/          # JSON data (site info, cities, services)
│   ├── lib/           # content loading, meta tags, services helper
│   ├── routes/        # route modules (one per page)
│   ├── styles/        # global.css (Tailwind v4)
│   ├── root.tsx        # document shell / layout
│   └── routes.ts       # route configuration
├── react-router.config.ts  # ssr:false + prerender (static site generation)
└── vite.config.ts
```

## 🧞 Commands

| Command              | Action                                                  |
| :-------------------- | :------------------------------------------------------ |
| `npm install`          | Installs dependencies                                    |
| `npm run dev`          | Starts local dev server                                  |
| `npm run build`        | Builds the static site to `./build/client/`               |
| `npm run preview`      | Preview the production build locally                     |
| `npm run typecheck`    | Generates route types and runs `tsc`                      |

## 👀 Want to learn more?

Check the [React Router documentation](https://reactrouter.com).
