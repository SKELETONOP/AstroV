## Stack

Vite + React Router (framework mode), statically generated via `ssr: false` + `prerender` in
`react-router.config.ts`. Not Astro — the site was migrated from Astro to this stack.

## Development

```
npm run dev
```

## Project layout

- `app/routes/` — one route module per page (React Router file-config style, wired up in `app/routes.ts`)
- `app/components/` — shared React components
- `app/content/` — markdown content for blog posts and service pages, loaded via `app/lib/content.ts`
- `app/data/` — JSON data (site info, cities, services)
- `app/root.tsx` — document shell (head, Header/Footer/StickyMobileCTA)

## Documentation

Full documentation: https://reactrouter.com

Consult these guides before working on related tasks:

- [Routing](https://reactrouter.com/start/framework/routing)
- [Route modules](https://reactrouter.com/start/framework/route-module)
- [Rendering strategies / SPA / pre-rendering](https://reactrouter.com/start/framework/rendering)
- [Styling with Tailwind](https://reactrouter.com/how-to/tailwind)
